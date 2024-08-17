import Locators from "./Locators";

class Toastify extends Locators {

    async waitForToastAppear() {
        await this.toastMessage.waitFor({ state: 'visible', timeout: 5000 });
    }

    async waitForToastDisappear() {
        await this.toastMessage.waitFor({ state: 'hidden', timeout: 5000 });
    }

    async getToastMessageText() {
        await this.waitForToastAppear();
        const message = await this.toastMessage.innerText();
        await this.waitForToastDisappear();
        return message
    }
}

export default Toastify;