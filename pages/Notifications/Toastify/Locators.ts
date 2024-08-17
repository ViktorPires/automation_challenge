import { Locator, Page } from "@playwright/test";
import BasePage from "../../BasePage";

class Locators extends BasePage {
    readonly toastBody: Locator;
    readonly toastMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.toastBody = page.locator(".Toastify__toast-body");
        this.toastMessage = this.toastBody.locator("span");
    }
}

export default Locators;