

const Ticket = ({ product, onRestItem }) => {
    return (
        <div className='ticketElement'>
            <div className='ticketelTxt'>
                <p>{product.amount} - {product.type} </p>
                <p>x  ${product.price}</p>
            </div>
            <div className='-ticketButtons'>

                <button
                    className='ticket-btn'
                    onClick={() => onRestItem(product)}>{product.amount > 1 ? `-` : `x`}</button>
            </div>
        </div>
    )
}

export default Ticket
