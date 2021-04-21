

const Ticket = ({ product, onAddItem, onRestItem }) => {
    return (
        <div className='ticketElement'>
            <div className='ticketelTxt'>
                <p>{product.amount} - {product.type} </p>
                <p>x  ${product.price}</p>
            </div>
            <div className='-ticketButtons'>
                <button
                    className='ticket-btn'
                    onClick={() => onAddItem(product)}>+</button>
                <button
                    className='ticket-btn'
                    onClick={() => onRestItem(product)}>-</button>
            </div>
        </div>
    )
}

export default Ticket
