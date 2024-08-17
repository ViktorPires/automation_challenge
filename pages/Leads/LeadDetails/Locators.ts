import { Locator, Page } from "@playwright/test";
import BasePage from "../../BasePage";

class Locators extends BasePage {
    readonly cancelButton: Locator;
    readonly threeDotMenu: Locator;
    readonly dismissLead: Locator;

    constructor(page: Page) {
        super(page);
        this.cancelButton = page.getByTestId("component-leads-manage-cancel-edit-button");
        this.threeDotMenu = page.getByTestId("component-lib-menus-moreMenuItem-moreButton");
        this.dismissLead =  page.getByText("Dismiss Lead");
    }

}

export default Locators;