import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      contactNo: '',
      message: '',
    });
  };

  const handleSubmit = () => {
    console.log('Form data submitted:', formData);
  };

  return (
    <section className='contact'>
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT : +212 656 606 315</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="CONTACT NO"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="MESSAGE"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button" onClick={handleCancel}>CANCEL</button>
                  <button className="app-form-button" onClick={handleSubmit}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
};

export default Contact;
