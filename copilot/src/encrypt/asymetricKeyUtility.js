import nacl from 'tweetnacl';
import util from 'tweetnacl-util';

// POC USING nacl.cr.yp.to
const frontend = nacl.box.keyPair();
const api = nacl.box.keyPair();

/**
 * 
 * @param {*} plain_text 
 * @returns 
 */
export const encryptWithPublicKey = (plain_text) => {
    const one_time_code = nacl.randomBytes(24);
    //Getting the cipher text
    const cipher_text = nacl.box.after(
        util.decodeUTF8(plain_text),
        one_time_code,
        frontend.publicKey,
    );
    //message to be transited.
    const message_in_transit = { cipher_text, one_time_code };
    return message_in_transit;
};

/**
 * 
 * @param {*} message 
 * @returns 
 */
export const decryptWithSecretKey = (message) => {
    //Get the decoded message
    let decoded_message = nacl.box.open(message.cipher_text, message.one_time_code, frontend.publicKey, frontend.secretKey);
    //Get the human readable message
    let plain_text = util.encodeUTF8(decoded_message)
    console.log("plain_text", plain_text)
    //return the message
    return plain_text;
};

// Option 2: Public + Private Key
//Generate the keys
const frontends = nacl.box.keyPair();
const apis = nacl.box.keyPair();

/**
 * 
 * @param {*} plain_text 
 * @returns 
 */
export const encryptingWithPublicSecretKey = (plain_text) => {
    //frontend computes a one time shared key
    const frontend_shared_key = nacl.box.before(apis.publicKey, frontends.secretKey);
    //frontend also computes a one time code.
    const one_time_code = nacl.randomBytes(24);
    //Getting the cipher text
    const cipher_text = nacl.box.after(
        util.decodeUTF8(plain_text),
        one_time_code,
        frontend_shared_key
    );

    //message to be transited.
    const message_in_transit = { cipher_text, one_time_code };
    return message_in_transit;
};

/**
 * 
 * @param {*} message 
 * @returns 
 */
export const decryptingWithPublicSecretKey = (message) => {
    //Getting api's shared key
    const api_shared_key = nacl.box.before(frontends.publicKey, apis.secretKey);
    //Get the decoded message
    let decoded_message = nacl.box.open.after(message.cipher_text, message.one_time_code, api_shared_key);
    //Get the human readable message
    let plain_text = util.encodeUTF8(decoded_message)
    console.log(" plain_text", plain_text)
    //return the message
    return plain_text;
};