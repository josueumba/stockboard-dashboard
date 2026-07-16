function EmptyState({ title, description, icon, children}) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-1 py-4">
            <i className={icon}></i>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
        </div>
    )
}

export default EmptyState