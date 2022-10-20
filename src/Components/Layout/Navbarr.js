import {Link} from 'react-router-dom'
import styles from './Navbarr.module.css'
import logo from'../../Img/logoDM2.png'
import {FaHome, FaUsers, FaUserFriends, FaTruck, FaTools, FaFileAlt, FaDollarSign, FaCaretDown, FaFileSignature} from 'react-icons/fa'



function Navbarr(){
    return(
        <nav className={styles.navbar}>
            <Link to="/"><img src={logo} alt='front_scgpd'/></Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to ='/'><FaHome/> Home</Link>
                </li>
                <li className={styles.item}>
                    <Link><FaFileSignature/> Cadastrar <FaCaretDown/></Link>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link to ='/clientes/novocliente'><FaUsers/> Cadastrar Clientes</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to ='/veiculos/novoveiculo'><FaTruck/> Cadastrar Veiculos</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to ='/servicos/novoservico'><FaTools/> Cadastrar Serviço</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to ='/os/novaos'><FaFileAlt/> Registrar Os's</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to ='/pagamentos/registropagamento'><FaDollarSign/> Registrar Pagamentos</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to ='/usuarios/novousuario'><FaUserFriends/> Cadastrar Usuários</Link>
                            </li>
                        </ul>
                </li>
                <li className={styles.item}>
                    <Link to ='/clientes'><FaUsers/> Clientes</Link>
                </li>
                <li className={styles.item}>
                    <Link to ='/veiculos'><FaTruck/> Veiculos</Link>
                        
                </li>
                <li className={styles.item}>
                    <Link to ='/servicos'><FaTools/> Serviços</Link>
                </li>
                <li className={styles.item}>
                    <Link to ='/os'><FaFileAlt/> OS's</Link>
                </li>
                <li className={styles.item}>
                    <Link to ='/pagamentos'><FaDollarSign/> Pagamentos</Link>
                        
                </li>
                <li className={styles.item} >
                    <Link to ='/usuarios'><FaUserFriends/> Usuários</Link>
                        
                </li>
            </ul>
        </nav>
    )
}

export default Navbarr