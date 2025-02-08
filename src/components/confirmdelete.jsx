import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";


function ConfirmDelete({handleDelete, index}) {
    
    return (
        <>

            <button type="button" className="btn btn-danger me-3 border-0" data-bs-toggle="modal" data-bs-target={`#DeleteUserModal-${index}`}>
            <RiDeleteBinFill />
            </button>

            <div className="modal fade" id={`DeleteUserModal-${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Confirm Deletion</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1 className="text-dark fs-4">are you sure you want to delete?</h1>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="delete" onClick={() => handleDelete(index)}  data-bs-dismiss="modal" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmDelete;