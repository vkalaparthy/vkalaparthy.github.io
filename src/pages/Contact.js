import React from "react";
import ReactNotifications, { store } from 'react-notifications-component';
// import { store } from 'react-notifications-component';
import 'animate.css';

import "../styles/common.css";
import "../styles/contact.css";


// const Contact = () => (
function Contact() {

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submit button clicked");
    store.addNotification({     
      title: "Hello!", 
      message: `This page is still under construction!`,
      type: 'mynotif',                        
      container: 'bottom-right',                
      animationIn: ["animated", "fadeIn"],     
      animationOut: ["animated", "fadeOut"],   
      dismiss: {duration: 3000}
    })
  }

  return ( 
  <>
    <h1 className="block-header">Contact</h1>
      <p> EMAIL: kalaparthy.vani@gmail.com </p>
      <p> Mobile: 919-579-4862</p>
      <hr className="custom-hr"></hr>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Doe"></input>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Email</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com"></input>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
      </form>
      <div className="main-view">
        <ReactNotifications types={[{
          htmlClasses: ['notification__item--mynotif'],
          name: 'mynotif'
        }]}/>
      </div>
      <button type="submit" className="btn custom-button" onClick={handleFormSubmit}>Submit</button>
  </>
  )
}

export default Contact;