import React from "react";

function ModalUser({
  firstname,
  lastname,
  email,
  password,
  phone,
  city,
  street,
  zipcode,
  geolocation,
  onChangegeolocation,
  onChangezipcode,
  onChangestreet,
  onChangecity,
  onChangefirstname,
  onChangelastname,
  onChangeemail,
  onChangePassword,
  onChangephone,
  handleSubmit,
}) {

  
  return (
    <>

      <div className="modal fade text-dark" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog">
          <div className="modal-content text-start">
            <div className="modal-body">
              <h1 className="modal-title fs-4 fw-semibold text-dark" id="exampleModalLabel">ADD USER</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="firstnameInput" className="form-label">FirstName</label>
                  <input type="text" onChange={onChangefirstname} value={firstname} className="form-control" id="firstnameInput" placeholder="FirstName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastnameInput" className="form-label">LastName</label>
                  <input type="text" onChange={onChangelastname} value={lastname} className="form-control" id="lastnameInput" placeholder="LastName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">E-mail</label>
                  <input type="text" onChange={onChangeemail} value={email} className="form-control" id="emailInput" placeholder="user@gmail.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <input type="password" onChange={onChangePassword} value={password} className="form-control" id="passwordInput" placeholder="password must be longer than 8 characters" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneInput" className="form-label">Phone Number</label>
                  <input type="phone" onChange={onChangephone} value={phone} className="form-control" id="phoneInput" placeholder="phone no" />
                </div>
                <div className="mb-3">
                  <label htmlFor="cityInput" className="form-label">City</label>
                  <input type="text" onChange={onChangecity} value={city} className="form-control" id="cityInput" placeholder="city" />
                </div>
                <div className="mb-3">
                  <label htmlFor="streetInput" className="form-label">Street</label>
                  <input type="text" onChange={onChangestreet} value={street} className="form-control" id="streetInput" placeholder="street" />
                </div>
                <div className="mb-3">
                  <label htmlFor="zipInput" className="form-label">zip no</label>
                  <input type="text" onChange={onChangezipcode} value={zipcode} className="form-control" id="streetInput" placeholder="zipcode" />
                </div>
                <div className="mb-3">
                  <label htmlFor="geoInput" className="form-label">Geo locat.</label>
                  <input type=" text" onChange={onChangegeolocation} value={geolocation} className="form-control" id="streetInput" placeholder="lat/long" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUser;
