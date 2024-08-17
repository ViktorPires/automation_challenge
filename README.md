# Automation Challenge

This project contains automated tests for the challenge, covering both frontend and API.

## Environment Setup

To set up the testing environment, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies.

### Environment Variables

Create a `.env` file in the root of the project with the following variables:

ENVIRONMENT=0
ENVIRONMENT_API=0

Where:
- `0` represents the Staging environment

You can add more environments as needed by updating the `getEnvBaseUrl.ts` file accordingly.
