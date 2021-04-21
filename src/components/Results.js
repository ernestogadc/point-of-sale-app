import React from 'react'

const Results = ({ total, num }) => {
    return (
        <td>
            <p>Ventas del día:  ${total}.00</p>
            <p>Total de ordenes: {num - 1}</p>
        </td>
    )
}

export default Results
