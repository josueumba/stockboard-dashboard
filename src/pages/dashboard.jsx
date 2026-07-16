import Card from "../components/card"
import Header from "../components/header"
import Modal from "../components/modal"
import Table from "../components/table"

function Dashboard() {
    return (
        <div className="container min-vh-100 py-5">
            <Header />

            <div className="d-flex flex-wrap gap-4">
                <Card title="All products" quantity={20} color="success" />
                <Card title="Low stock" quantity={6} color="danger" />
                <Card title="Categories" quantity={4} color="warning" />
            </div>

            <div className="d-flex gap-3 align-items-center my-4">
                <input type="text" placeholder="Search a product..." className="form-control w-25 p-2"/>

                <select className="form-select w-25 p-2">
                    <option>All categories</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>

                <select className="form-select w-25 p-2">
                    <option>All statuses</option>
                    <option>Low Stock</option>
                    <option>Ok</option>
                </select>

                <button className="btn btn-primary d-flex align-items-center gap-2 py-2 px-3" data-bs-toggle="modal" data-bs-target="#addProductModal">
                    <i className="bi bi-plus text-white"></i> Add a product
                </button>
            </div>

            <Table />

            <Modal />
        </div>
    )
}

export default Dashboard