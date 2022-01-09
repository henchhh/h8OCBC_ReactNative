import React from "react";
import { Link } from "react-router-dom";

function Content() {
    return(
        <>
            {/* <div className='"content"'>
                <hr />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <hr />
            </div> */}
            <div className="p-5 mb-4 bg-light rounded-3 border">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">
                        Why do we need test ?
                    </h1>
                    <p className="col-md fs-4">
                        To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself
                    </p>
                    {/* <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Example button</button> */}
                    <Link to="/users">
                        <button className="btn btn-info btn-lg">User List</button>
                    </Link>
                </div>
            </div>

            {/* Modal */}
            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal Title
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            This is my first modal box
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Content