import {APIRequestContext } from "@playwright/test";
import Lead from "../../interfaces/lead";

class LeadsApi {
    private apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext;
    }

    async createLead(auth: string, lead: Lead) {
        return await this.apiContext.post("/leads", {
            headers: {
                Authorization: `Bearer ${auth}`
            },
            data: {
                person: {
                    firstName: lead.person.firstName,
                    lastName: lead.person.lastName,
                    email: lead.person.email,
                },
                facilityUuid: lead.facilityUuid,
            }
        });
    }

    async getDismissalReasons(auth: string) {
        return await this.apiContext.get("/leads/dismissalReasons", {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        });
    }

    async dismissLead(auth: string, leadId: string, leadDismissalReasonUuid: string) {
        return await this.apiContext.put(`/leads/${leadId}/dismiss`, {
            headers: {
                Authorization: `Bearer ${auth}`
            },
            data: {
              leadDismissalReasonUuid: leadDismissalReasonUuid,
            }
        });
    }
}

export default LeadsApi;



