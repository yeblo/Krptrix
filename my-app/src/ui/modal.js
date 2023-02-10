import React, {useState} from 'react';

function Modal() {
    const [modal, setModal] = useState(false)

    const toggleModal= ()=>{
        setModal(!modal)
    }
  return (
   <>
        <button onClick={toggleModal} className="btn-modal">
            Open
        </button>
        <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content'>
                <h2>Yaay, you're on the Waitlist!</h2>
                <p>
                    congratulations! we have added your email to our waitlist
                    this means you are one of the first people in the world who will 
                    get access to Krptrix once we launch on Beta
                </p>

                <button className='' onClick={toggleModal}>CLOSE</button>
            </div>
        </div>
   </>

  )
}

export default Modal