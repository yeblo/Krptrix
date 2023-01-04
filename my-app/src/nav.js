import React from 'react';
import krptrix_logo from './krptrix_logo.svg';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Nav() {
  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <div className='App-logo text-center'>
              <img
              src= {krptrix_logo}
              alt=''
            />
            </div>
            
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}