const Pay = ({ total, confirm, ticket }) => {
    return (
        <div>
            <button onClick={() => confirm(ticket, total)} >Confirmar pago</button>
            <h1>Total: {total}</h1>
        </div>
    )
}

export default Pay
