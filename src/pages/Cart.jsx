import React from "react";
import Navbar from '../components/navbar'
import Sidebar from "../components/sidebar";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/buttons";
import { useState, useEffect } from "react";
import CartModal from "../components/CartModal"
import ConfirmDelete from "../components/confirmdelete";
import UpdateCart from "../components/UpdateCart";

function Cart(params) {

  const [id, setid] = useState('');
  const [userId, setuserId] = useState('');
  const [date, setdate] = useState('')
  const [quantity, setquantity] = useState('');
  const [ProductId, setproductId] = useState('');
  const [stores, setStores] = useState([]);


  function onchangeid(e) {
    setid(e.target.value);
  }


  function onchangeuserId(e) {
    setuserId(e.target.value);
  }


  function onchangequantity(e) {
    const value = e.target.value
    setquantity(value === '' ? '' :parseInt(value, 10) || '');
  }

  function onchangedate(e) {
    setdate(e.target.value);
  }

  function onchangeproductId(e) {
    setproductId(e.target.value);
  }

  function handlesubmit(e) {
    console.log('clicked')
    e.preventDefault();
    if ( !userId || !date || !quantity || !ProductId) {
      return;
    }

    const newCart = {
      id: stores.length + 1,
      userId,
      date,
      products : [{
        quantity : quantity,
        ProductId : ProductId
    }]
    }

    setuserId('');
    setquantity('');
    setdate('');
    setproductId('');

    setStores(prevStores => {
      const updatedStores = [...prevStores, newCart];
      return updatedStores;
    });
  }


  function handleDelete(index) {
    const UpdatedStores = stores.filter((_, i) => i !== index);
    setStores(UpdatedStores);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {

        console.log("Fetched carts data:", json);

        const formattedStores = json.map(cart =>({
          id: cart.id,
          userid: cart.userId,
          date: cart.date,
          products: Array.isArray(cart.products) ? cart.products.map(product => ({
            productId: product.productId,
            quantity: product.quantity,
          })) : [],
        }));
        setStores(formattedStores)
      })
      .catch(err => console.error("Error fetching users:", err));

  }, []);

  const handleCartUpdate = (index, updatedCartData) => {
    setStores(prevStores => {
        return prevStores.map((cart, i) => {
            if (i === index) {
                return { ...cart, ...updatedCartData };
            } else {
                return cart;
            }
        });
    });
};


  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="content">
        <div className="d-flex justify-content-between stubborn">
          <h2>Cart</h2>
          <CartModal
            id={id}
            UserId={userId}
            date={date}
            quantity={quantity}
            productId={ProductId}
            onchangeProductid={onchangeproductId}
            onchangeid={onchangeid}
            onchangequantity={onchangequantity}
            onchangeuserid={onchangeuserId}
            onchangedate={onchangedate}
            handlesubmit={handlesubmit}
          />
          <button type="button" className="mb-2 text-light border-0 btn valid newuser fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add to Cart
          </button>
        </div>
        <div className="card bg-light">
          <div className="card-body d-flex d-inline-flex justify-content-between align-items-center">
            <h3 className="bold"> Josh Bakery Ventures</h3>
            <p className="fs-6">62, Bode Thomas, Surulere, Lagos</p>
          </div>
        </div>
        <div className=" align-items-center justify-content-between changerole  py-3">
          <div className="d-flex w-75 py-3 changerole">
            <div className=" gaps">
              <select className="form-select d-inline-block w-auto" defaultValue="" >
                <option defaultValue={''}>Change Role</option>
                <option value="1">Admin</option>
                <option value="2">Staff</option>
                <option value="3">Manager</option>
              </select>
            </div>
            <NavLink className="btn border-0 valid me-3 ms-3" to="">Change</NavLink>
            <SearchBar className="w-100" />
          </div>

          {stores.length > 0 && <table className="table table-secondary table-hover bg-transparent w-100">
            <thead>
              <tr className="table-rw">
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">User Id</th>
                <th scope="col">Product Date</th>
                <th scope="col">Product </th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((Cart, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Cart.id}</td>
                  <td>{Cart.userid}</td>
                  <td>{Cart.date}</td>
                  <td> {Cart.products.map((product, i) => (
                        <div key={i}>ID: {product.productId}</div>
                      ))}
                      </td>
                      <td> {Cart.products.map((product, i) => (
                    <div key={i}>Qty: {product.quantity}</div>
                  ))}
                  </td>
                  <td>
                    <ConfirmDelete
                      handleDelete={handleDelete}
                      index={index}
                    />
                    <UpdateCart 
                      cart={Cart}
                      handleCartUpdate={handleCartUpdate}
                      index={index} 
                    />
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          }

        </div>
      </div>
    </>
  )
};

export default Cart;