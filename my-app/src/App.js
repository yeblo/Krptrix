import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import './App.css';
import krptrix_logo from './krptrix_logo.png';
import krptrix_logo_footer from './krptrix_logo_footer.svg';
import right_arrow from './right_arrow.svg';
import MailchimpFormContainer from './mailchimp';
function App(){
  return (
    <React.Fragment>
      <header className='header' style={{ height: '100%' }}>
        <div className='p-5 text-center bg-image'>
          <div className='App-logo text-center'>
            <img src={krptrix_logo} alt='' />
          </div>
          <div className='mask'>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='hero container'>
                <h1 className='mb-3 hero-heading'>The ultimate platform for resources <br/>in web3 design and development</h1>
                <p className='mb-3 hero-subheading pt-2'>Become a certified, badass web3 designer/developer. Make the most of <br/>opportunities in the web3 space and stay up to date with the latest news and trends</p>
                <MDBBtn tag="a" className="hero-button mt-5" href="#waitlist">Join the waitlist <span className='px-2'><img src={right_arrow} alt="right arrow"/> </span></MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='form-section py-5' id='waitlist'>

        <MDBContainer className='py-5'>
          <h3 className="text-center form-title mb-3">Get Notified when we launch!</h3>
          <MailchimpFormContainer/>
        </MDBContainer>
      </section>

      <footer className='p-5'>
        <MDBContainer className='text-center'>
          <div className='App-logo text-center'>
            <img
              src={krptrix_logo_footer}
              alt=''
            />
          </div>

          <p className='mt-3'>The ultimate platform for resources in web3 design and development</p>
          <div className='mt-3'>
            <a className='sm-icon' href="#"><MDBIcon className="mx-3" fab icon="facebook-f" /></a>
            <a className='sm-icon' href="https://www.instagram.com/krptrix/"><MDBIcon className="mx-3" fab icon="instagram" /></a>
            <a className='sm-icon' href="https://twitter.com/krptrix"><MDBIcon className="mx-3" fab icon="twitter" /></a>
            <ay className='sm-icon' tag="a" href="#" ><MDBIcon className="mx-3" fab icon="linkedin-in" /></ay>
          </div>
          <hr className="footer-hr" />
          <p className='for-copywrite'>Copyright © 2022, Krptrix | All rights reserved.</p>
        </MDBContainer>
      </footer>
    </React.Fragment>
  );
}

export default App;
