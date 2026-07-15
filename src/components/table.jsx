function Table() {
    return (
        <div>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Screen 24 inches</td>
                        <td>10</td>
                        <td>Electronics</td>
                        <td className="text-success">OK</td>
                        <td className="d-flex gap-2">
                            <button className="bg-success border-0"><i className="bi-eye-fill text-white"></i></button>
                            <button className="bg-warning border-0"><i className="bi-pencil-fill text-white"></i></button>
                            <button className="bg-danger border-0"><i className="bi-trash-fill text-white"></i></button>
                        </td>
                    </tr>

                    <tr>
                        <td>Screen 28 inches</td>
                        <td>10</td>
                        <td>Electronics</td>
                        <td className="text-success">OK</td>
                        <td className="d-flex gap-2">
                            <button className="bg-success border-0"><i className="bi-eye-fill text-white"></i></button>
                            <button className="bg-warning border-0"><i className="bi-pencil-fill text-white"></i></button>
                            <button className="bg-danger border-0"><i className="bi-trash-fill text-white"></i></button>
                        </td>
                    </tr>

                     <tr>
                        <td>Office chair</td>
                        <td>14</td>
                        <td>Furniture</td>
                        <td className="text-success">OK</td>
                        <td className="d-flex gap-2">
                            <button className="bg-success border-0"><i className="bi-eye-fill text-white"></i></button>
                            <button className="bg-warning border-0"><i className="bi-pencil-fill text-white"></i></button>
                            <button className="bg-danger border-0"><i className="bi-trash-fill text-white"></i></button>
                        </td>
                    </tr>

                    <tr>
                        <td>Headphone</td>
                        <td>4</td>
                        <td>Electronics</td>
                        <td className="text-danger">Low Stock</td>
                        <td className="d-flex gap-2">
                            <button className="bg-success border-0"><i className="bi-eye-fill text-white"></i></button>
                            <button className="bg-warning border-0"><i className="bi-pencil-fill text-white"></i></button>
                            <button className="bg-danger border-0"><i className="bi-trash-fill text-white"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table