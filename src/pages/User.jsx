    import React, { useEffect, useState } from "react";
    import Navbar from '../components/navbar';
    import Sidebar from "../components/sidebar";
    import { NavLink } from "react-router-dom";
    import ModalUser from "../components/ModalUser";
    import SearchBar from "../components/buttons";
    import ConfirmDelete from "../components/confirmdelete";
    import UpDateUser from "../components/UpdateUser";
    import "bootstrap/dist/js/bootstrap.bundle.min";


    function User() {
        const [firstname, Setfirstname] = useState('');
        const [lastname, Setlastname] = useState('');
        const [email, Setemail] = useState('');
        const [password, Setpassword] = useState('');
        const [phone, Setphone] = useState('');
        const [city, Setcity] = useState('');
        const [zipcode, Setzipcode] = useState('');
        const [street, Setstreet] = useState('');
        const [geolocation, Setgeolocation] = useState('');
        const [stores, setStores] = useState([]);


        function onChangefirstname(e) {
            Setfirstname(e.target.value);
        }

        function onChangelastname(e) {
            Setlastname(e.target.value);
        }

        function onChangeemail(e) {
            Setemail(e.target.value);
        }

        function onChangePassword(e) {
            Setpassword(e.target.value);
        }


        function onChangephone(e) {
            Setphone(e.target.value);
        }

        function onChangecity(e) {
            Setcity(e.target.value);
        }

        function onChangestreet(e) {
            Setstreet(e.target.value);
        }

        function onChangezipcode(e) {
            Setzipcode(e.target.value);
        }

        function onChangegeolocation(e) {
            Setgeolocation(e.target.value);
        }

        function handleSubmit(e) {
            e.preventDefault();
            if (!firstname || !lastname || !email || !password || !phone || !city || !street || !zipcode || !geolocation) {
                return;
            }

            // left lat and long on purpose

            const newUser = {
                firstname,
                lastname,
                email,
                password,
                address: {
                    city, street, zipcode,
                    geolocation: {
                        lat: geolocation.split(',')[0]?.trim() || '0',
                        long: geolocation.split(',')[1]?.trim() || '0',
                    }
                },
                phone,
            };

            setStores(prevStores => {
                const updatedStores = [...prevStores, newUser];
                return updatedStores;
            });

            // Clear input fields
            Setfirstname('');
            Setlastname('');
            Setemail('');
            Setpassword('');
            Setphone('');
            Setcity('');
            Setstreet('');
            Setzipcode('');
            Setgeolocation('');
        }

        function handleDelete(index) {
            const UpdatedStores = stores.filter((_, i) => i !== index);
            setStores(UpdatedStores);
        }


      

        useEffect(() => {
            fetch('https://fakestoreapi.com/users', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(json => {
                    setStores(prevStores => [...json, ...prevStores])
                })
                .catch(err => console.error("Error fetching users:", err));
        }, []);

        const handleUserUpdate = (index, updatedUserData) => {
            const  updatedStores = stores.map((user,i) => {
                if (i === index) {
                    return {...user, ...updatedUserData}
                }
                return user;
            });
            setStores(updatedStores)
        }

        return (
            <>
            <div className="productPage">
                <Navbar />
                <div className="wholePage">
                <Sidebar />
                <div className="content">
                    <div className="d-flex justify-content-between mb-3">
                        <h2>Users</h2>
                        <button type="button" className="text-light border-0 btn valid newuser" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add New User
                        </button>
                        <ModalUser
                            firstname={firstname}
                            lastname={lastname}
                            email={email}
                            password={password}
                            phone={phone}
                            city={city}
                            street={street}
                            zipcode={zipcode}
                            geolocation={geolocation}
                            onChangezipcode={onChangezipcode}
                            onChangegeolocation={onChangegeolocation}
                            onChangestreet={onChangestreet}
                            onChangefirstname={onChangefirstname}
                            onChangelastname={onChangelastname}
                            onChangeemail={onChangeemail}
                            onChangePassword={onChangePassword}
                            onChangephone={onChangephone}
                            onChangecity={onChangecity}
                            handleSubmit={handleSubmit}
                        />
                    </div>

                    <div className="card bg-light fs-6">
                        <div className="card-body d-flex d-inline-flex justify-content-between align-items-center">
                            <h3 className="bold">Josh Bakery Ventures</h3>
                            <p className="fs-6">62, Bode Thomas, Surulere, Lagos</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between changerole  py-3">
                        <div className="d-flex flex-row w-75 changerole ">
                            <div className="gaps">
                                <select className="form-select d-inline-block w-auto" defaultValue="">
                                    <option defaultValue={''}>Change Role</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Staff</option>
                                    <option value="3">Manager</option>
                                </select>
                            </div>
                            <NavLink className="btn border-0 valid" to="">Change</NavLink>
                            <SearchBar className="w-100" />
                        </div>
                    </div>
                    {stores.length > 0 && <table className="table table-secondary table-hover bg-transparent w-100">
                        <thead>
                            <tr className="table-rw">
                                <th scope="col">#</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">City</th>
                                <th scope="col">Street</th>
                                <th scope="col">zipcode</th>
                                <th scope="col">Geo-</th>
                                <th scope="col">Location</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stores.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name?.firstname || user.firstname}</td>
                                    <td>{user.name?.lastname || user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address?.city}</td>
                                    <td>{user.address?.street}</td>
                                    <td>{user.address?.zipcode}</td>
                                    <td>{user.address.geolocation?.long}</td>
                                    <td>{user.address.geolocation?.lat}</td>

                                    <td className="d-flex ">
                                        <ConfirmDelete
                                            handleDelete={handleDelete}
                                            index={index}
                                        />
                                        <UpDateUser
                                            user={user}
                                            handleUserUpdate={handleUserUpdate}
                                            index={index}
                                            
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}
                </div>
                </div>
            </div>
                
            </>
        );
    }

    export default User;
