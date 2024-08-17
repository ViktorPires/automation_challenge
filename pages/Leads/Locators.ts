import { Locator, Page } from "@playwright/test";
import BasePage from "../BasePage";

class Locators extends BasePage {
    readonly addLeadButton: Locator;
    readonly tableFilters: Locator;
    readonly search: Locator;

    constructor(page: Page) {
        super(page);
        this.addLeadButton = page.getByText("Add Lead");
        this.tableFilters = page.getByTestId("data-table-filters")
        this.search = this.tableFilters.locator("input")
    }
}

export default Locators;