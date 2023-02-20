import React from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader
} from 'mdb-react-ui-kit';
import greencheckmark from '../greencheckmark.png';

function Modal(props) {
    return (
        <>
            <MDBModal show={props.show} setShow= {props.onClose} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBBtn className='btn-close' color='none' onClick={props.hide}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody className='text-center for-confetti'>
                        {props.status === "Success" ?  <div><img src={greencheckmark} alt='' height={70} /> </div>: ""}
                        {props.status === "success" && (<div><img src={greencheckmark} alt='' height={70} /> </div>)}
                        <div>{props.status}</div>
                        <>{props.modalText}</>    
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={props.hide}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}
export default Modal;

// {props.modalText = "Success" ?    
// <div className='text-center for-confetti'>
    
//     <div>Success</div>
//     <div>{props.modalText}</div>
// </div>:
// <div>{props.modalText}</div>}