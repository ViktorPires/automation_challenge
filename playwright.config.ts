import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

import getEnvBaseUrl from "./utils/getEnvBaseUrl";

// ENVIRONMENT SETUP
dotenv.config({ path: ".env" });
let baseUrl = getEnvBaseUrl('frontend');

export default defineConfig({
  testDir: './tests',
  timeout: 2 * 60 * 1000,
  expect: {
    timeout: 30 * 1000,
  },
  fullyParallel: true,
  retries: 1,
  workers: 1,
  reporter: [
      ["list"],
      [
          "junit",
          {
              embedAnnotationsAsProperties: true,
              outputFile: "results.xml",
          },
      ]
  ],
  use: {
    headless: false,
    actionTimeout: 0,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    baseURL: baseUrl,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});
