import Locators from "./Locators";

class Leads extends Locators {

    addLead = async () => {
        await this.addLeadButton.click();
    }

    searchLead = async (firstName: string, lastName: string) => {
        await this.search.fill(`${firstName} ${lastName}`);
    }
}

export default Leads;