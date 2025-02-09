import React from "react";

function cartModal({
    userId,
    date,
    quantity,
    productId,
    onchangequantity,
    onchangeuserId,
    onchangedate,
    onchangeProductid,
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
                                    <label htmlFor="UserIdInput" className="form-label">User Id</label>
                                    <input type="text" onChange={onchangeuserId} value={userId} className="form-control" placeholder="User Identity" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateInput" className="form-label">Date</label>
                                    <input type="datetime-local" onChange={onchangedate} value={date} className="form-control" placeholder="date" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Quantity</label>
                                    <input type="number" onChange={onchangequantity} value={quantity} className="form-control" placeholder="Quantity" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Products</label>
                                    <input type="number" onChange={onchangeProductid} value={productId} className="form-control" placeholder="ProductId" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default cartModal;