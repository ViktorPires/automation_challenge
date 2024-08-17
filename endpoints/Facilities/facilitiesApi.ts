import { APIRequestContext } from "@playwright/test";

class FacilitiesApi  {
    private apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getFacilities(auth: string, filters?: { facilitySearchString?: string; state?: string[]; onlyAvailable?: boolean }) {
        const queryParams = new URLSearchParams();

        if (filters?.facilitySearchString) {
            queryParams.append('facilitySearchString', filters.facilitySearchString);
        }

        if (filters?.state && filters?.state.length > 0) {
            queryParams.append('state', filters.state.join(','));
        }

        if (filters?.onlyAvailable) {
            queryParams.append('onlyAvailable', filters.onlyAvailable.toString());
        }

        return await this.apiContext.get(`/facilities/paginated-user-facilities?${queryParams.toString()}`, {
            headers: {
                Authorization: `Bearer ${auth}`,
                Accept: 'application/json'
            }
        });
    }
}


export default FacilitiesApi;