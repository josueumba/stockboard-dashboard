function Login() {
    return (
        <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="bg-light d-flex flex-column align-items-center justify-content-center border rounded-3 shadow-sm px-4">
                <div className="d-flex gap-3 align-items-center pt-4">
                    <i className="bi-box-seam text-primary fs-2 me-1"></i>
                    <h2>StockBoard</h2>
                </div>
                <p className="pb-4">Connectez-vous pour accéder au dashboard</p>

                <form action="" className="d-flex flex-column gap-3 pb-4 w-100">
                    <div className="d-flex flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control bg-light" placeholder="xyz@example.com" />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control bg-light" placeholder="********" />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            
        </div>
    )
}
export default Login