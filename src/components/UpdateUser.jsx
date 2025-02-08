import React, { useEffect, useState } from "react";
import {Modal} from "bootstrap"

function UpDateUser({ user, handleUserUpdate, index }) {

    const [updatedUserData, setUpdatedUserData] = useState({
        name: {
            firstname: user.name?.firstname || '',
            lastname: user.name?.lastname || '',
        },
        email: user.email,
        password: user.password,
        phone: user.phone,
        address: {
            street: user.address?.street,
            city: user.address?.city,
            zipcode: user.address?.zipcode,
            geolocation: { lat: user?.address?.geolocation?.lat, long: user?.address?.geolocation?.long },
        },
    });

    // Update the state when the user prop changes
    useEffect(() => {
        if (user) {
            setUpdatedUserData({
                name: {
                    firstname: user.name?.firstname || '',
                    lastname: user.name?.lastname || '',
                },
                email: user.email || '',
                password: user.password || '',
                phone: user.phone || '',
                address: {
                    street: user.address?.street || '',
                    city: user.address?.city || '',
                    zipcode: user.address?.zipcode || '',
                    geolocation: user.address?.geolocation || { lat: '', long: '' },
                },
            });
        }
    }, [user]);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        // console.log("input changed:", name, value)

         
    if (name.includes('name.') || name.includes('address.')) {
        const [parentKey, childKey] = name.split('.');
        setUpdatedUserData((prev) => ({
            ...prev,
            [parentKey]: {
                ...prev[parentKey],
                [childKey]: value,
            },
        }));
    } else setUpdatedUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    const handleSave = async (e) => {
        e.preventDefault();
        
        handleUserUpdate(index, updatedUserData);


        const modalElement = document.getElementById(`updateUserModal-${index}`);
        const modalInstance = Modal.getInstance(modalElement); // Bootstrap v5 method
        if (modalInstance) {
            modalInstance.hide();
        }
    };


    return (
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#updateUserModal-${index}`}>
                Update User
            </button>

            <div className="modal fade text-dark" id={`updateUserModal-${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content text-start">
                        <div className="modal-body">
                            <h1 className="modal-title fs-4 fw-semibold text-dark" id="exampleModalLabel">UPDATE USER DATA</h1>
                        </div>
                        <form onSubmit={handleSave}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="firstnameInput" className="form-label">FirstName</label>
                                    <input
                                        name="name.firstname" // It references the nested "name.firstname"
                                        type="text"
                                        value={updatedUserData.name.firstname}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="firstnameInput"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastnameInput" className="form-label">LastName</label>
                                    <input
                                        name="name.lastname"
                                        type="text"
                                        value={updatedUserData.name.lastname}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="lastnameInput"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailInput" className="form-label">E-mail</label>
                                    <input
                                        name="email"
                                        type="text"
                                        value={updatedUserData.email}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="emailInput"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordInput" className="form-label">Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        value={updatedUserData.password}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="passwordInput"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneInput" className="form-label">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="text"
                                        value={updatedUserData.phone}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="phoneInput"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cityInput" className="form-label">City</label>
                                    <input
                                        name="address.city"
                                        type="text"
                                        value={updatedUserData.address.city}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="cityInput"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="streetInput" className="form-label">Street</label>
                                    <input
                                        name="address.street"
                                        type="text"
                                        value={updatedUserData.address.street}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="streetInput"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="zipInput" className="form-label">Zip Code</label>
                                    <input
                                        name="address.zipcode"
                                        type="text"
                                        value={updatedUserData.address.zipcode}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="zipInput"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary"  data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpDateUser;
