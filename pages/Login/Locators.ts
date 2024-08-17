import { Locator, Page } from "@playwright/test";
import BasePage from "../BasePage";

class Locators extends BasePage {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByTestId("email-input");
        this.passwordInput = page.getByTestId("password-input")
        this.loginButton = page.locator("button", { hasText: "Sign In" });
    }
}

export default Locators;