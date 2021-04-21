const Button = ({ burgerInfo, onAddBurger }) => {
    return (
        <>
            <button
                className={burgerInfo.id > 14 ? "btn-discount" : "btn"}
                onClick={() => onAddBurger(burgerInfo)}>{burgerInfo.type}</button>
        </>
    )
}

export default Button
