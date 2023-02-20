import React, { useState, useEffect } from 'react';
import Modal from './ui/modal';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from './ui/InputField';
const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [showModal, setShowModal] = useState(false);

    const toggleModal = ()=> {
        setShowModal(!showModal);
      }
        

    useEffect(() => {
        if(status === "success"){
            clearFields();
        } 
      }, [status])
    
      const clearFields = () => {
        setFullName('');
        setEmail('');
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            fullName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: fullName
            });
    }

    return (
        <>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            {/* <h3 className="mc__title"> {status === "success"
                ? "Success!"
                : ""
            }</h3> */}

            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    sending...
                </div>
            )}
            {/* {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )} */}
            {/* {status === "success" && (
                // <div
                //     className="mc__alert mc__alert--success"
                //     dangerouslySetInnerHTML={{ __html: message }}
                // />
                
            )} 
            */}
            {status !== "success" ? (
                <div className="mc__field-container"> </div>
            ) : null}

            
             {/* implement modal here
            {
                status === 'success' ? toggleModal()
            
                // <button
                //     // onClick={() => setModalOpen(false)}
                //     className="g__justify-self-center">Close</button> 
                    : " "
            } */}

            <div className='form-group mb-4'>
                <InputField
                    label="Email"
                    onChangeHandler={setEmail}
                    type="email"
                    value={email}
                    placeholder="Enter Email Address"
                    html
                    isRequired
                />
            </div>
            <div className='form-group mt-2' >
                <InputField
                    label="Full Name"
                    onChangeHandler={setFullName}
                    type="text"
                    value={fullName}
                    placeholder="Enter Full Name"
                    isRequired
                />
            </div>

            <InputField
                label="Join the waitlist &#x2192;"
                type="submit"
                formValues={[email, fullName]}
                onClick = {toggleModal}
                status
            />
        </form>  
        <Modal show={showModal} onClose = {setShowModal} modalText = {message} status = {status} hide= {toggleModal}/>
         </> 
    );
};

const MailchimpFormContainer = props => {
    const action_url = "https://gmail.us21.list-manage.com/subscribe/post?u=d4c1ce45bff8c42d896599840&amp;id=e326a49a5f&amp;f_id=0078c4e1f0";
    // const postUrl = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    // const u = "";
    // const id = "";
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={action_url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;