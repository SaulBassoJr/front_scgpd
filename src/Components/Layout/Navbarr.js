import styles from './Navbarr.module.css'
import logo from'../../Img/logoDM2.png'
import {FaHome, FaUsers, FaUserFriends, FaTruck, FaTools, FaFileAlt, FaDollarSign, FaCaretDown, FaFileSignature} from 'react-icons/fa'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Navbarr(){
    return(
        <Navbar className={styles.navbar} collapseOnSelect bg="dark" variant="dark" fixed="top" expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt='front_scgpd'/></Navbar.Brand >
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav 
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >

                    <Nav.Link href='/'><FaHome/> Home</Nav.Link>
                    <NavDropdown title="Cadastrar" id="collasible-nav-dropdown">
                        <NavDropdown.Item href ='/clientes/novocliente'><FaUsers/> Cadastrar Clientes</NavDropdown.Item>
                        <NavDropdown.Item href ='/veiculos/novoveiculo'><FaTruck/> Cadastrar Veiculos</NavDropdown.Item>
                        <NavDropdown.Item href ='/servicos/novoservico'><FaTools/> Cadastrar Serviço</NavDropdown.Item>
                        <NavDropdown.Item href ='/os/novaos'><FaFileAlt/> Registrar Os's</NavDropdown.Item>
                        <NavDropdown.Item href ='/pagamentos/registropagamento'><FaDollarSign/> Registrar Pagamentos</NavDropdown.Item>
                        <NavDropdown.Item href ='/usuarios/novousuario'><FaUserFriends/> Cadastrar Usuários</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href ='/clientes'><FaUsers/> Clientes</Nav.Link>
                    <Nav.Link href ='/veiculos'><FaTruck/> Veiculos</Nav.Link>
                    <Nav.Link href ='/servicos'><FaTools/> Serviços</Nav.Link>
                    <Nav.Link href ='/os'><FaFileAlt/> OS's</Nav.Link>
                    <Nav.Link href ='/pagamentos'><FaDollarSign/> Pagamentos</Nav.Link>
                    <Nav.Link href ='/usuarios'><FaUserFriends/> Usuários</Nav.Link>         
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navbarr