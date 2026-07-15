function Header() {
    return (
        <div className="d-flex flex-column align-items-start justify-content-center">
            <div className="d-flex align-items-center gap-3">
                <i className="bi-box-seam text-primary fs-3 me-1"></i>
                <h2>StockBoard</h2>
            </div>
            <p className="pb-4">Inventory management – overview</p>
        </div>
    )
}

export default Header