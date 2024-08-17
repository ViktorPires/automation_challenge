import Locators from "./Locators";

class AddLead extends Locators {

    createLead = async (firstName: string, lastName: string, email: string, phone: string) => {
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillEmail(email);
        await this.fillPhone(phone);
        await this.selectRandomFacility();
        await this.saveLead();
    }

    saveLead = async () => {
        await this.saveButton.click();
    }

    fillFirstName = async (firstName: string) => {
        await this.firstName.fill(firstName);
    }

    fillLastName = async (lastName: string) => {
        await this.lastName.fill(lastName);
    }

    fillEmail = async (email: string) => {
        await this.email.fill(email);
    }

    fillPhone = async (phone: string) => {
        await this.phone.fill(phone);
    }

    selectRandomFacility = async () => {
        const rows = this.tableBody.locator("tr");
        const rowCount = await rows.count();

        const randomIndex = Math.floor(Math.random() * rowCount);
        const selectedRow = rows.nth(randomIndex);

        await selectedRow.locator("button").click();
    }
}

export default AddLead;