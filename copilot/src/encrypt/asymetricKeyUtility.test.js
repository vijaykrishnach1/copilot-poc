const asymetricKeyUtility = require("./asymetricKeyUtility");

const plain_text = "Customer Credentials";

test.skip("Checking Encryption returns some value", () => {
    expect(asymetricKeyUtility.encryptWithPublicKey(plain_text).cipher_text).toEqual(expect.anything());
});

test("Checking Decryption with text matching", () => {
    const message = asymetricKeyUtility.encryptWithPublicKey(plain_text);
    expect(asymetricKeyUtility.decryptWithSecretKey(message)).toEqual(plain_text);
});


test.skip("Checking Encryption returns some value", () => {
    expect(asymetricKeyUtility.encryptingWithPublicSecretKey(plain_text)).toEqual(expect.anything());
});

test.skip("Checking Decryption with text matching", () => {
    const message = asymetricKeyUtility.encryptingWithPublicSecretKey(plain_text);
    expect(asymetricKeyUtility.decryptingWithPublicSecretKey(message)).toEqual(plain_text);
});