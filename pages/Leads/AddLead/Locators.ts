import { Locator, Page } from "@playwright/test";
import BasePage from "../../BasePage";

class Locators extends BasePage {
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly tableBody: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        super(page);
        this.firstName = page.locator('input[name="person.firstName"]');
        this.lastName = page.locator('input[name="person.lastName"]');
        this.email = page.locator('input[name="person.email"]');
        this.phone = page.locator('input[name="person.phone"]');
        this.tableBody = page.locator("#table-container tbody")
        this.saveButton = page.getByRole("button", { name: "Save" });
        }
    }

    export default Locators;