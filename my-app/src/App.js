import React from 'react';
// import NavBar from './nav';
import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import './App.css';
import krptrix_logo from './krptrix_logo.svg';
import krptrix_logo_footer from './krptrix_logo_footer.svg';
import right_arrow from './right_arrow.svg';
function App() {
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
                <h1 className='mb-3 hero-heading'>The ultimate web3 platform for <br /> resources in design and development</h1>
                <p className='mb-3 hero-subheading'>Curious on how to begin your Web3 journey? Krptrix will help you create an easy roadmap to start and grow your career in web3</p>
                <MDBBtn tag="a" className="hero-button mt-5" href="#waitlist">Join the waitlist <MDBIcon className="px-1" fas icon="long-arrow-alt-right" /></MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='form-section py-5' id='waitlist'>

        <MDBContainer className='py-5'>
          <h3 className="text-center form-title mb-3">Get Notified when we launch!</h3>
          <form className='form' action='https://gmail.us21.list-manage.com/subscribe/post?u=d4c1ce45bff8c42d896599840&amp;id=e326a49a5f&amp;f_id=0078c4e1f0' method='post'>

            <div className='form-group mb-4'>
              <label for="email" className='mb-1' name="EMAIL" id="mce-EMAIL">Email Address</label>
              <input type="text" placeholder='Email Address' required />
            </div>

            <div className='form-group mt-2'>
              <label for="name" className='mb-1'>Full Name</label>
              <input type="text" placeholder='Full Name' name="FNAME" id="mce-FNAME" required />
            </div>

            <div id="mce-responses" class="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
              </div> {/*  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
              <input type="text" name="b_d4c1ce45bff8c42d896599840_e326a49a5f" tabindex="-1" value=""/>
              </div>

            <div className='text-center'>
              <MDBBtn tag="a" className="hero-button mt-5"  name="subscribe" id="mc-embedded-subscribe">Join the waitlist <img src={right_arrow} alt="right arrow" />
                {/* <MDBIcon className="px-1" fas icon="long-arrow-alt-right" /> */}
              </MDBBtn>
            </div>


          </form>


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

          <p className='mt-3'>The ultimate web3 platform for resources in design and development</p>
          <div className='mt-3'>
            <a className='sm-icon' href="#"><MDBIcon className="mx-3" fab icon="facebook-f" /></a>
            <a className='sm-icon' href="https://www.instagram.com/krptrix/"><MDBIcon className="mx-3" fab icon="instagram" /></a>
            <a className='sm-icon' href="https://twitter.com/krptrix"><MDBIcon className="mx-3" fab icon="twitter" /></a>
            <a className='sm-icon' tag="a" href="#" ><MDBIcon className="mx-3" fab icon="linkedin-in" /></a>
          </div>
          <hr />
          <p>Copyright © 2022, Krptrix | All rights reserved.</p>
        </MDBContainer>
      </footer>
    </React.Fragment>
  );
}

export default App;
