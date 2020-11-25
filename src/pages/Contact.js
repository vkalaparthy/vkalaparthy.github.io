import React from "react";
import "../styles/common.css";
import "../styles/contact.css";


const Contact = () => (
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
      <button type="submit" className="btn custom-button">Submit</button>
  </>
);

export default Contact;