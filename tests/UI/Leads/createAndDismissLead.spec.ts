import {test, expect, Page, BrowserContext} from '@playwright/test';
import LoginPage  from '../../../pages/Login';
import SideMenu from "../../../pages/SideMenu";
import Leads from "../../../pages/Leads";
import AddLead from "../../../pages/Leads/AddLead";
import Toastify from "../../../pages/Notifications/Toastify";
import LeadDetails from "../../../pages/Leads/LeadDetails";
import DismissPopUp from "../../../pages/Leads/LeadDetails/DismissPopUp";
import userLogin from '../../../fixtures/userLogin.json';
import Person from "../../../interfaces/person";
import generateRandomString from "../../../utils/random/generateRandomString";
import generateRandomEmail from "../../../utils/random/generateRandomEmail";
import generateRandomNumberString from "../../../utils/random/generateRandomNumberString";

test.describe("Lead - Creation and Dismissal", () => {
    let context: BrowserContext;
    let page: Page;
    let loginPage: LoginPage;
    let sideMenu: SideMenu;
    let person: Person;
    let toastify: Toastify;
    let leadDetails: LeadDetails;
    let dismissPopUp: DismissPopUp;
    person = {
        firstName: generateRandomString(8),
        lastName: generateRandomString(6),
        email: generateRandomEmail(),
        phone: generateRandomNumberString(10),
    }

    test.beforeEach(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        sideMenu = new SideMenu(page);
        toastify = new Toastify(page);
        leadDetails = new LeadDetails(page);
        dismissPopUp = new DismissPopUp(page);

        await loginPage.navigate();
        await loginPage.loginWith(userLogin.email, userLogin.password);
    })

    test.afterEach(async () => {
        await context.close();
    })

    test("It should be possible to create a lead and dismiss it", async () => {
        await sideMenu.navigateToLeads();
        const leads = new Leads(page);
        await leads.addLead()
        const addLead = new AddLead(page);
        await addLead.createLead(person.firstName, person.lastName, person.email, person.phone);

        let message = await toastify.getToastMessageText()
        expect(message).toBe("Lead created!");

        await leadDetails.deleteLead();
        await dismissPopUp.confirmDismissLead();

        message = await toastify.getToastMessageText()
        expect(message).toBe("Lead dismissed!");

        await leads.searchLead(person.firstName, person.lastName);
        await expect(page.getByText("No results found")).toBeVisible();
    })
})
