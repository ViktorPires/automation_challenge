import generateRandomString from "./generateRandomString";

/**
 * Returns a random email
 * @param {string} prefix - Prefix of the email.
 * @param {string} mail - Mail service name.
 * @param {string} domain - Domain.
 */

const generateRandomEmail = (
    prefix: string = "automation-",
    mail: string = "monument",
    domain: string = "com",
) : string => {
    const randomString = generateRandomString(10);
    return `${prefix}${randomString}@${mail}.${domain}`;
};

export default generateRandomEmail;