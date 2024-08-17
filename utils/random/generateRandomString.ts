/**
 * Returns a random string
 * @param {number} length - Number of required characters.
 * @param {string} characters - Characters to be used.
 */

const generateRandomString = (
    length: number,
    characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
) => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default generateRandomString;