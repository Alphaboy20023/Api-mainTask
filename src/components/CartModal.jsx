import React from "react";

function cartModal({
    id,
    userId,
    date,
    quantity,
    productId,
    onchangeid,
    onchangequantity,
    onchangeuserId,
    onchangedate,
    onchangeProductId,
    handlesubmit
}



) {

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add to cart</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handlesubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="idInput" className="form-label">Id</label>
                                    <input type="text" onChange={onchangeid} value={id} className="form-control" id="idInput" placeholder="Product Identity" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="UserIdInput" className="form-label">User Id</label>
                                    <input type="text" onChange={onchangeuserId} value={userId} className="form-control" id="UseridInput" placeholder="User Identity" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="UserIdInput" className="form-label">Date</label>
                                    <input type="date time" onChange={onchangedate} value={date} className="form-control" id="UseridInput" placeholder="Productdate" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="UserIdInput" className="form-label">Quantity</label>
                                    <input type="text" onChange={onchangequantity} value={quantity} className="form-control" id="UseridInput" placeholder="Quantity" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="UserIdInput" className="form-label">Products</label>
                                    <input type="text" onChange={onchangeProductId} value={productId} className="form-control" id="UseridInput" placeholder="ProductId" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default cartModal;