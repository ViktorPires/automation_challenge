import Locators from "./Locators";

class LoginPage extends Locators {

    loginWith = async (email: string, password: string) => {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    navigate = async () => {
        await this.page.goto("/login");
    }

    fillEmail = async (email: string) => {
        await this.emailInput.fill(email);
    }

    fillPassword = async (password: string) => {
        await this.passwordInput.fill(password);
    }

    clickLogin = async () => {
        await this.loginButton.click();
    }
}

export default LoginPage