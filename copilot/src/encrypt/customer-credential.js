import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { encryptWithPublicKey, decryptWithSecretKey } from './asymetricKeyUtility'

const Field = React.forwardRef(({ label, type }, ref) => {
    return (
        //   <div>
        //     <label style={labelStyle} >{label}</label>
        //     <input ref={ref} type={type} style={inputStyle} />
        //   </div>
        <div>
            <label  >{label}</label>
            <input ref={ref} type={type} />
        </div>
    );
});

export const CustomerCredentials = () => {
    const customerID = React.useRef();
    const customerPassword = React.useRef();
    const [encrypt, setEncrypt] = React.useState();
    const [decrypt, setDecrypt] = React.useState();
    const navigate = useNavigate();

    //customer id validation
    const validateCustomerID = (customerID) => {
        if (customerID.length === 0) {
            alert("Customer ID is required");
            return false;
        }
        return true;
    };
    //customer password validation
    const validateCustomerPassword = (customerPassword) => {
        if (customerPassword.length === 0) {
            alert("Customer Password is required");
            return false;
        }
        return true;
    };

    const handleEncryption = e => {
        e.preventDefault();
        const password = customerPassword.current.value;
        const id = customerID.current.value;
        if (validateCustomerID(id) && validateCustomerPassword(password)) {
            const data = {
                customerID: id,
                customerPassword: password
            };
           
            setEncrypt(encryptWithPublicKey(password));
       
            // navigate('/welcome', {state: {data}});
        } else {
            alert('Invalid customer credentials');
        }

    };

    const handleDecryption = e => {
        e.preventDefault();
        if (validateCustomerID(customerID.current.value) && validateCustomerPassword(customerPassword.current.value)) {
            const data = {
                customerID: customerID.current.value,
                customerPassword: customerPassword.current.value
            };
            console.log("encrypt" + encrypt);
            
            alert(decryptWithSecretKey(encrypt))
            // navigate('/welcome', {state: {data}});
        } else {
            alert('Invalid customer credentials');
        }

    };

    return (
        <form >
            <Field ref={customerID} label="Customer ID:" type="text" />
            <Field ref={customerPassword} label="Customer Password:" type="password" />
            <div>
                <button type="submit" onClick={handleEncryption}>Encrypt</button>
                <button type="submit" onClick={handleDecryption}>Decrypt</button>
            </div>
            <div>
                Encryted Message: {encrypt?.cipher_text}
            </div>
            <div>
                Decrypted Message: {decrypt?.cipher_text} 
            </div>
        </form>
    );
};