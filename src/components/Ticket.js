

const Ticket = ({ product, onAddItem, onRestItem }) => {
    return (
        <div className='ticketElement'>
            <h3>{product.amount} {product.type} X {product.price}</h3>
            <button
                onClick={() => onAddItem(product)}>more</button>
            <button
                onClick={() => onRestItem(product)}>less</button>
        </div>
    )
}

export default Ticket
