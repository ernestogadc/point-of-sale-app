const Daytrack = ({ ticket }) => {
    let sum = 0
    for (let t of ticket) {
        sum += t.total
    }

    return (
        <div className="dtlistContainer">
            {ticket.map(tickete => (
                <div className="dayTrackList">
                    <div >{tickete.map(tick => (
                        <h3>{tick.amount} x {tick.type}</h3>
                    ))}</div>
                    <h3>$   {tickete.total} .00</h3>
                </div>
            ))}
            <h1 style={{ color: "white" }}>${sum}.00</h1>
        </div>
    )

}

export default Daytrack
