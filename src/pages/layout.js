import { Outlet, NavLink } from "react-router-dom";

const styles = {
    logo: {
        padding: 0,
        margin: 0,

        fontFamily: "'Bangers', cursive",
        letterSpacing: "1px"
    },

    logo_small: {
        fontSize: '.5em !important'
    }
}

const Layout = () => {
    let activeStyle = {
        color: "rgba(255, 30, 0, 0.763)",
        textShadow: "4px 4px 4px rgb(118, 90, 90)",
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}><p style={styles.logo}>MIE<span style={styles.logo_small}>the</span>RED</p></NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" style={({ isActive }) => isActive ? activeStyle : undefined}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" style={({ isActive }) => isActive ? activeStyle : undefined}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;