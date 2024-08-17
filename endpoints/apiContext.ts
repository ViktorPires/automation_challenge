import {APIRequestContext, request} from "@playwright/test";
import getEnvBaseUrl from "../utils/getEnvBaseUrl";

export default async function createApiContext(): Promise<APIRequestContext> {
    return await request.newContext({
        baseURL: getEnvBaseUrl('api'),
    });
}
