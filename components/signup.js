import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '@/lib/store/auth-context';
import { FcGoogle } from 'react-icons/fc';
import NavBar from '@/components/Nav';

function SignUp() {
  const { googleLoginHandler } = useContext(authContext);
  return (
    <div>
      {/* Set isNavVisible to false */}
      <NavBar isNavVisible={true} />
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
          userSelect: 'none',
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
            Financial <strong>Clarity </strong> at Your Fingertips!
          </h1>
          <p
            style={{
              color: '#ABC1E1',
            }}
          >
            <strong style={{color: ''}}>Clarity </strong> is a valuable tool that can
            help you achieve financial well-being. Secure your financial future with confidence.
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
              src='https://i.pinimg.com/564x/6c/69/d3/6c69d3b79a4365f1afba18a75cf31d6d.jpg'
              alt='Signup Hero'
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '5px',
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
                - Sign Up to Get Started -
              </strong>
            </h2>
            <button
              onClick={googleLoginHandler}
              className='signup-btn'
              style={{
                backgroundColor: '#0f4c81',
                border: '2px solid black',
                width: '40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px',
                color: 'white',
                padding: '1rem',
                display: 'flex',
                marginTop: '1rem',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1f375f';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow= '8px 8px 0 0 black';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#0f4c81';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow= 'none';
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
