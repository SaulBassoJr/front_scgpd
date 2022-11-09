import styles from './Home.module.css'
import savings from '../../../Img/logoDM2.png'

function Home(){
    return(
        <div className={styles.home_container}>
            <h1>Despachante <span>Mainardes</span></h1>
            <p>Sistema de cadastro e gerenciamento SCGPD</p>
            <img src={savings} alt="front_scgpd"/>
           
        </div>
    )
}

export default Home