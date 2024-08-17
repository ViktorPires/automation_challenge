import { Locator, Page } from "@playwright/test";
import BasePage from "../BasePage";

class Locators extends BasePage {
    readonly sideMenu: Locator;
    constructor(page: Page) {
        super(page);
        this.sideMenu = page.getByTestId("component-lib-navigation-sidebar-menu-wrapper");
    }
}

export default Locators;