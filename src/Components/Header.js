import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header>
            <NavLink to={'/'}>Heapy</NavLink>
            <div className='headerNav'>
                <div className='tokenValue'>TS &#36;0.1</div>
                <button class="connect">Connect</button>
            </div>
        </header>
    );
}

export default Header;