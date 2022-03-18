import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header>
            <NavLink to={'/'} className='NavLink'>
                <h1>HEAPY</h1>
            </NavLink>
            <div className='headerNav'>
                <div className='button-63'>TS &#36;0.1</div>
                <button class="button-63">Connect</button>
            </div>
        </header>
    );
}

export default Header;