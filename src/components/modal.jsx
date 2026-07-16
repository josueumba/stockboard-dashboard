function Modal() {
    return (
        <div className="modal fade" id="addProductModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ aspectRatio: '1 / 1', width: '450px', maxWidth: '100%' }}>
                    <div className="modal-header">
                        <h5 className="modal-title">Add a Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <form className="d-flex flex-column gap-3 pb-4 w-100">
                            <div className="d-flex flex-column">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Ex: Earphones" />
                            </div>

                            <div className="d-flex flex-column">
                                <label>Category</label>
                                <select className="form-select">
                                    <option>Electronics</option>
                                    <option>Fashion</option>
                                    <option>Home & Kitchen</option>
                                </select>
                            </div>

                            <div className="row">                                
                               <div className="col-6 d-flex flex-column">
                                    <label>Quantity</label>
                                    <input type="number" className="form-control" placeholder="Ex: 10" />
                                </div>

                                <div className="col-6 d-flex flex-column">
                                    <label>Threshold</label>
                                    <input type="number" className="form-control" placeholder="Ex: 5" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary">Save product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal