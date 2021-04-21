import React from 'react'

const TrakListInfo = ({ tickete }) => {
    return (
        <ul>
            {tickete.map(tick => (
                <li key={tick.id}>{tick.amount} - {tick.type}</li>
            ))}
        </ul>
    )
}

export default TrakListInfo
