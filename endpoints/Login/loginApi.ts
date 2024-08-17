import { APIRequestContext } from "@playwright/test";

class LoginApi {
    private apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async login(email: string, password: string) {

        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        if (!email.includes("@")) {
            throw new Error("Email is not valid");
        }

        return await this.apiContext.post("/auth/login", {
            data: {
                username: email,
                password: password
            }
        });
    }
}

export default LoginApi;