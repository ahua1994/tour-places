import "./Navbar.scss";

function Navbar() {
    return (
        <div className="Navbar">
            <a className="Navbar-item" href="#aboutus">
                About Us
            </a>
            <a className="Navbar-item" href="#foryou">
                For You
            </a>
            <a className="Navbar-item" href="#services">
                Services
            </a>
            <a className="Navbar-item" href="#blog">
                Blog
            </a>
            <a className="Navbar-item" href="#vlog">
                Vlog
            </a>
            <a className="Navbar-item" href="#contact">
                Contact
            </a>
        </div>
    );
}

export default Navbar;
