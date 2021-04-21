import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header'>
            <div className='img'></div>
            <h1 className='title'> Punto de venta</h1>
            <div className='links'>
                <Link className='link' to='/'>Cuenta nueva</Link>
                <Link className='link' to='/track'> Registro del día</Link>
            </div>
        </div>
    )
}

export default Header
