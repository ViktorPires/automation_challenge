import Locators from "./Locators";

class LeadDetails extends Locators {

    deleteLead = async () => {
        await this.clickCancelButton();
        await this.openThreeDotMenu();
        await this.removeLead();
    }

    clickCancelButton = async () => {
        await this.cancelButton.click();
    }

    openThreeDotMenu = async () => {
        await this.threeDotMenu.click();
    }

    removeLead = async () => {
        await this.dismissLead.click();
    }
}

export default LeadDetails;