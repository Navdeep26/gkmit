import React from 'react';
import {Link} from 'react-router-dom';

export default function AddUser(props) {
  return (
    <div className="container">
      <form onSubmit={(event) => props.submitUserInfo(event)} >
        {props.stepper ? 
        <React.Fragment>
          <div className="form-group" >
          <label for="name">Name</label>
            <input 
              type="text" 
              name="name" 
              value={props.formData.name}
              onChange={event => props.handleAddUserForm(event)} className="form-control" 
              id="name" 
              required
              placeholder="Enter name">
            </input>
          </div>
          <div className="form-group" >
          <label for="email">Email address</label>
            <input 
              type="email" 
              name="email"
              value={props.formData.email}
              onChange={event => props.handleAddUserForm(event)}className="form-control" 
              id="email"
              required 
              placeholder="Enter email">
            </input>
          </div>
          <div className="form-group" >
          <label for="phone">phone</label>
            <input 
            type="phone" 
            className="form-control" 
            id="phone" 
            name="phone"
            required
            value={props.formData.phone}
            onChange={event => props.handleAddUserForm(event)}
            placeholder="Enter phone"></input>
          </div>
          <h5>Adddress</h5>
          <div className="row" >
            <div className="col" >
              <div className="form-group" >
                <label for="street">Street</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="street" 
                  name="street"
                  required
                  value={props.formData.street}
                  onChange={event => props.handleAddUserForm(event)}
                  placeholder="Enter street"
                  >
                </input>
              </div>
            </div>
            <div className="col" >
              <div className="form-group" >
                <label for="suite">Suite</label>
                <input type="text" 
                className="form-control" 
                id="suite" 
                name="suite"
                required
                value={props.formData.suite}
                onChange={event => props.handleAddUserForm(event)}
                placeholder="Enter suite">
                </input>
              </div>
            </div>
          </div>

          <div className="row" >
            <div className="col" >
              <div className="form-group" >
              <label for="city">City</label>
                <input 
                type="text" 
                className="form-control" 
                id="city" 
                name="city"
                required
                value={props.formData.city}
                onChange={event => props.handleAddUserForm(event)}
                placeholder="Enter city"></input>
              </div>
            </div>
            <div className="col" >
              <div className="form-group" >
                <label for="zipcode">Zipcode</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="zipcode"
                  name="zipcode"
                  required
                  value={props.formData.zipcode}
                  onChange={event => props.handleAddUserForm(event)} 
                  placeholder="Enter zipcode"></input>
              </div>
            </div>
          </div>
          <Link className="float-right" onClick={props.toggleStepperForm} >Go next</Link>
          {/* <button type="button" onClick={props.toggleStepperForm} className="btn btn-primary float-right">Go next</button> */}
        </React.Fragment>
        : 
        <React.Fragment>
        <div className="form-group" >
        <label for="website">website</label>
          <input 
          type="phone" 
          className="form-control" 
          id="website" 
          name="website"
          required
          value={props.formData.website}
          onChange={event => props.handleAddUserForm(event)}
          placeholder="Enter website"></input>
        </div>
        <div className="form-group" >
        <label for="name">User Name</label>
          <input 
            type="text" 
            name="username" 
            value={props.formData.username}
            onChange={event => props.handleAddUserForm(event)} className="form-control" 
            id="username" 
            required
            placeholder="Enter username">
          </input>
        </div>
        <h5>Company</h5>
        <div className="form-group" >
        <label for="companyName">name</label>
          <input 
          type="text" 
          className="form-control" 
          id="companyName" 
          name="companyName"
          required
          value={props.formData.companyName}
          onChange={event => props.handleAddUserForm(event)}
          placeholder="Enter name"></input>
        </div>
        <div className="form-group" >
        <label for="catchPhrase">catchPhrase</label>
          <input 
          type="text" 
          className="form-control" 
          name="catchPhrase"
          required
          value={props.formData.catchPhrase}
          onChange={event => props.handleAddUserForm(event)}
          id="catchPhrase" placeholder="Enter catchPhrase"></input>
        </div>
        <div className="form-group" >
        <label for="bs">bs</label>
          <input type="text" className="form-control"
          id="bs" 
          name="bs"
          value={props.formData.bs}
          required
          onChange={event => props.handleAddUserForm(event)}
          placeholder="Enter bs"></input>
        </div>
        <button type="submit" className="btn btn-primary float-right">{props.formData.id ? "Update User" : "Add User"}</button>
        <Link className="float-left" onClick={props.toggleStepperForm} >Go back</Link></React.Fragment>
        }
      </form>
    </div>
  )
}
