const Button = ({ burgerInfo, onAddBurger }) => {
    return (
        <div>
            <button
                className='btn'
                onClick={() => onAddBurger(burgerInfo)}>{burgerInfo.type}</button>
        </div>
    )
}

export default Button
