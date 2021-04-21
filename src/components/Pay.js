const Pay = ({ total, confirm, ticket }) => {
    ticket.total = total
    return (
        <div className='payTicket'>
            <button
                onClick={() => confirm(ticket)} >Confirmar pago</button>
            <h1>Total: {total}</h1>
        </div>
    )
}

export default Pay
