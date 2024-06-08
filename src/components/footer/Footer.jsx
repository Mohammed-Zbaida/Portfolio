import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'relative',
    top: '35px'
  };

  const containerStyle = {
    marginTop: '2rem',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '40px',
    margin: '0.5rem',
    transition: 'background-color 0.2s',
    color: 'white',
    border: '1px solid white',
  };

  const buttonHoverStyle = {
    backgroundColor: 'white',
    color: '#343a40',
  };

  const copyrightStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '0.75rem 0',
  };

  return (
    <div style={containerStyle}>
      <footer style={footerStyle}>
        <div style={{ padding: '1rem', paddingBottom: '0' }}>
          <section style={{ marginBottom: '1rem' }}>
            <a style={buttonStyle} href="#!" role="button">
              <FaFacebookF />
            </a>
            <a style={buttonStyle} href="#!" role="button">
              <FaTwitter />
            </a>
            <a style={buttonStyle} href="#!" role="button">
              <FaGoogle />
            </a>
            <a style={buttonStyle} href="#!" role="button">
              <FaInstagram />
            </a>
            <a style={buttonStyle} href="#!" role="button">
              <FaLinkedinIn />
            </a>
            <a style={buttonStyle} href="#!" role="button">
              <FaGithub />
            </a>
          </section>
        </div>
        <div style={copyrightStyle}>
          © 2024 Copyright:
          <a style={{ color: 'white', textDecoration: 'none' }} href="">Mohammed Zbaida</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
