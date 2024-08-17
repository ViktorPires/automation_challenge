import { Locator, Page } from "@playwright/test";
import BasePage from "../../../BasePage";

class Locators extends BasePage {
    readonly dismissConfirmation: Locator;

    constructor(page: Page) {
        super(page);
        this.dismissConfirmation = page.locator("button", { hasText: "Dismiss" });
    }
}

export default Locators;