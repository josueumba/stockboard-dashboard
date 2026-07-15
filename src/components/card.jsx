function Card({title, quantity, color}) {
    return (
        <div className={`card text-white bg-${color} mb-3 me-3 w-25`}>
            <div className="card-header fs-5">{title}</div>
            <div className="card-body">
                <h5 className="card-title fs-3">{quantity}</h5>
            </div>
        </div>
    )
}

export default Card