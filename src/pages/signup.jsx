import { Link } from "react-router-dom"

function Signup() {
    return (
        <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="bg-light d-flex flex-column align-items-center justify-content-center border rounded-3 shadow-sm px-4" style={{ aspectRatio: '1 / 1', width: '450px', maxWidth: '100%' }}>
                <div className="d-flex gap-3 align-items-center pt-4">
                    <i className="bi-box-seam text-primary fs-2 me-1"></i>
                    <h2>StockBoard</h2>
                </div>
                <p className="pb-4">Create an account</p>

                <form action="" className="d-flex flex-column gap-3 pb-4 w-100">
                    <div className="d-flex flex-column">
                        <label htmlFor="fullname">FullName</label>
                        <input type="text" id="fullname" className="form-control bg-light" placeholder="Bob Alice" />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control bg-light" placeholder="xyz@example.com" />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control bg-light" placeholder="********" />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="confirmpassword">Confirm password</label>
                        <input type="password" id="confirmpassword" className="form-control bg-light" placeholder="********" />
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Create an account</button>

                    <p className="text-center">Already have an account ? <Link to="/login" className="text-primary text-decoration-none">Login</Link></p>
                </form>
            </div>
            
        </div>
    )
}
export default Signup