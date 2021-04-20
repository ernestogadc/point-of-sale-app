import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/track'>Day Track</Link>
            <h1>BT A LA CHICKEN BURGER</h1>
        </div>
    )
}

export default Header
