import Locators from "./Locators";

class DismissPopUp extends Locators {

    confirmDismissLead = async () => {
        await this.dismissConfirmation.click();
    }
}

export default DismissPopUp;