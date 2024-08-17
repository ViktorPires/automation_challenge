import {APIRequestContext, expect, test} from "@playwright/test";
import createApiContext from "../../../endpoints/apiContext";
import LoginApi from "../../../endpoints/Login/loginApi";
import FacilitiesApi from "../../../endpoints/Facilities/facilitiesApi";
import user from "../../../fixtures/userLogin.json";
import Lead from "../../../interfaces/lead";
import LeadsApi from "../../../endpoints/Leads/leadsApi";
import generateRandomString from "../../../utils/random/generateRandomString";
import generateRandomEmail from "../../../utils/random/generateRandomEmail";
import generateRandomNumberString from "../../../utils/random/generateRandomNumberString";

test.describe("Leads - API", () => {
    let apiContext: APIRequestContext;
    let loginApi: LoginApi;
    let facilitiesApi: FacilitiesApi;
    let leadsApi: LeadsApi;
    let lead: Lead;
    let token: string;
    lead = {
        person: {
            firstName: generateRandomString(8),
            lastName: generateRandomString(6),
            email: generateRandomEmail(),
            phone: generateRandomNumberString(10),
        },
        facilityUuid: "",
    }

    test.beforeEach(async () => {
        apiContext = await createApiContext();
        loginApi = new LoginApi(apiContext);
        const response = await loginApi.login(user.email, user.password);
        const data = await response.json();
        token = data.tokens.AccessToken;
    })

    test.afterEach(async () => {
        await apiContext.dispose();
    })

    test("It should be possible to create and delete a lead", async () => {
        facilitiesApi = new FacilitiesApi(apiContext);

        const facilitiesResponse = await facilitiesApi.getFacilities(token, { onlyAvailable: true });
        const facilitiesData = await facilitiesResponse.json();

        const items = facilitiesData.items;
        lead.facilityUuid = items[0].id;

        leadsApi = new LeadsApi(apiContext);
        const leadResponse = await leadsApi.createLead(token, lead);
        const leadData = await leadResponse.json();

        expect(leadResponse.status()).toBe(201);

        const dismissalReasonsResponse = await leadsApi.getDismissalReasons(token);
        const dismissalReasonsData = await dismissalReasonsResponse.json();

        expect(dismissalReasonsResponse.status()).toBe(200);

        const dismissLeadResponse = await leadsApi.dismissLead(token, leadData.leadUuid, dismissalReasonsData[1].leadDismissalReasonUuid);

        expect(dismissLeadResponse.status()).toBe(200);
    })
});