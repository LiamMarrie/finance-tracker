import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '@/lib/store/auth-context';
import { FcGoogle } from 'react-icons/fc';
import NavBar from '@/components/Nav';

function SignUp() {
  const { googleLoginHandler } = useContext(authContext);
  return (
    <div>
      <NavBar isNavVisible={true} /> {/* Set isNavVisible to false */}
      <main
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1440" height="960" fill="none" viewBox="0 0 1440 960"%3E%3Ccircle cx="-50.5" cy="75.5" r="416.5" stroke="%232D3949" stroke-width="144"%3E%3C/circle%3E%3Ccircle cx="1388.5" cy="840.5" r="416.5" stroke="%232D3949" stroke-width="144"%3E%3C/circle%3E%3C/svg%3E')`,
          backgroundColor: '#313E51',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          overflow: 'hidden',
        }}
      >
        {/* Signup Title */}
        <div
          className='contentContainer'
          style={{
            display: 'fixed',
            wordWrap: 'break-word',
            width: '350px',
            marginRight: '150px',
            color: 'white',
          }}
        >
          <h1
            className='title'
            style={{
              fontSize: '35px',
              fontWeight: 'bold',
            }}
          >
            Financial <strong>Clarity </strong> at Your Fingertips
          </h1>
          <p
            style={{
              color: '#ABC1E1',
            }}
          >
            <strong style={{}}>Clarity </strong> is a valuable tool that can
            help you achieve financial well-being. It provides insights, tips,
            and guidance that enable you to make informed decisions, grow your
            wealth, and secure your financial future with confidence.
          </p>
        </div>
        {/* Signup Container */}
        <div
          className='signup-container'
          style={{
            backgroundColor: '#3B4D66',
            border: '2px solid black',
            boxShadow: '8px 8px 0 0 black',
            width: '450px',
            height: '550px',
            padding: '20px',
            borderRadius: '20px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '75%',
              margin: '0 auto',
              paddingBottom: '1rem',
            }}
          >
            <img
              className='signup-hero'
              src='https://via.placeholder.com/400x225'
              alt='Signup Hero'
              style={{
                width: '100%',
                height: '100%',
                boxShadow: '8px 8px 0 0 black',
                borderRadius: '20px',
                border: '2px solid black',
              }}
            />
          </div>
          <div
            className='content'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2>
              <strong
                style={{
                  color: 'white',
                }}
              >
                - Please Sign Up to Get Started! -
              </strong>
            </h2>
            <button
              onClick={googleLoginHandler}
              className='signup-btn'
              style={{
                backgroundColor: '#13e16c',
                boxShadow: '8px 8px 0 0 black',
                border: '2px solid black',
                width: '40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                color: 'white',
                padding: '1rem',
                display: 'flex',
                marginTop: '1rem',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#26D782';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#13e16c';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <FcGoogle
                style={{
                  marginRight: '1rem',
                }}
              />{' '}
              Google
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
