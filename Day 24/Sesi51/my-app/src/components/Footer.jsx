import React from "react";

function Footer() {
    return(
        <>
            {/* <div className="footer">
                <p>&copy; Myself - 2022</p>
            </div> */}
            <footer className="text-muted py-5 border-top">
                <div className="container">
                    <p className="mb-1">
                        This is my first React app in Bootstrap
                    </p>
                    <p className="mb-0">
                        New to React?
                        <a href="https://reactjs.org">
                            Visit the homepage
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer