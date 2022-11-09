import { FaMapMarkerAlt, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaMapMarkerAlt/><p> RUA PAULO ABRÃO, 270</p>
                </li>
                <li>
                    <FaWhatsapp/> <p> (42)9 9871-0639</p>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>SCGPD</span> &copy;2022
            </p>
        </footer>
    )

}

export default Footer