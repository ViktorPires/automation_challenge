import Locators from "./Locators";

class SideMenu extends Locators {
    private async clickMenuItem(itemText: string) {
        const menuItem = this.sideMenu.getByText(itemText);
        await menuItem.click();
    }

    navigateToLeads = async () => {
        await this.clickMenuItem("Leads");
    }
}

export default SideMenu;