import React, { useEffect, useState } from "react";

function UpdateCart({ cart, handleCartUpdate, index }) {

    const [updatedCartData, setUpdatedCartData] = useState({
        id: '',
        userId: cart.userid,
        date: '',
        products: [{
            ProductId:'',
            quantity:''
        }]
    });

    useEffect(() => {
        if (cart) {

            // console.log("Cart Data:", cart)

            setUpdatedCartData({
                id: cart.id || '',
                userid: cart.userId,
                date: cart.date || '',
                products: cart.products && cart.products.length > 0 ?
                    cart.products.map(product => ({
                        productId: product.ProductId || '',
                        quantity: product.quantity || ''
                    }))
                    : [{ productId: '', quantity: '' }]
            })
        }
    }, [cart]);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        // console.log("input changed:", name, value)


        if (name.startsWith('productId') || name.startsWith('quantity')) {

            setUpdatedCartData((prev) => {
                const updatedProducts = [...prev.products];
                updatedProducts[0] = {
                    ...updatedProducts[0],
                    [name]: value,
                };
                return { ...prev, products: updatedProducts };
            });
        } else {
            setUpdatedCartData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }



    const handleSave = async (e) => {
        e.preventDefault();

        handleCartUpdate(index, updatedCartData)
    }

    return (
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#updateCartModal-${index}`}>
                Update  Cart
            </button>
            <div className="modal fade text-dark" id={`updateCartModal-${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content text-start">
                        <div className="modal-body">
                            <h1 className="modal-title fs-4 fw-semibold text-dark" id="exampleModalLabel">Update Cart</h1>
                        </div>
                        <form onSubmit={handleSave}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="firstnameInput" className="form-label">Id</label>
                                    <input
                                        name="id"
                                        type="text"
                                        value={updatedCartData.id}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstnameInput" className="form-label">User Id</label>
                                    <input
                                        name="userId"
                                        type="text"
                                        value={updatedCartData.userId}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstnameInput" className="form-label">Date</label>
                                    <input
                                        name="date"
                                        type="date, time"
                                        value={updatedCartData.date}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstnameInput" className="form-label">Product ID</label>
                                    <input
                                        name="productId"
                                        type="date, time"
                                        value={updatedCartData.products[0].ProductId}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstnameInput" className="form-label">Quantity</label>
                                    <input
                                        name="quantity"
                                        type="text"
                                        value={updatedCartData.products[0].quantity}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdateCart;