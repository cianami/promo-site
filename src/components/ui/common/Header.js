import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import {Link, useLocation} from "react-router-dom";

export default function Header(){
    const location = useLocation()
    return(
        <Navbar className="nav-bar">
            <Container className="d-flex">
                <Nav className="mx-auto gap-4">
                    <Nav.Link>
                        <Link className={(location.pathname === "/" ? "active-page" : "") + " nav-item "} to="/">
                            ОБО МНЕ
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item">
                        <Link className={(location.pathname === "/contact" ? "active-page" : "") + " nav-item "} to="/contact">
                            КОНТАКТЫ
                        </Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}