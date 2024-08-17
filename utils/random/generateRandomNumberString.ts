/**
 * Returns a random number string with the specified length.
 * @param {number} length - The length of the desired string.
 * @returns {string} - Random number string with specified length.
 */

const generateRandomNumberString = (length: number): string => {
    const digits = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
};

export default generateRandomNumberString;