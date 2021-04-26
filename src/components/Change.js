import React, { useState } from 'react';
const Change = ({ total }) => {
    const [number, setNumber] = useState('')


    return (
        <div className='change'>
            <input
                type='text'
                placeholder='Con cuanto $'
                value={total > 0 ? number : ''}
                onChange={e => setNumber(e.target.value)}
            />
            <p>Su cambio: {total > 0 && number > total ? number - total : 0}</p>
        </div>
    )
}

export default Change
