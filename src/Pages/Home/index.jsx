import styles from "./home.module.css";
import Sidebar from '../../components/Sidebar.jsx';
import mainImg from "../../assets/ai-generated-7700031_640.png"

const Home = () => {
    return(
        <main className={styles.main}>
            <div className={styles.sideBar}> 
             <Sidebar/>          
            </div>
            <div>

        <h1>The Australian Animals Exhibition</h1>
        <h2>Explore the fascinating wildlife of Australia!</h2>
        <div className={styles.imageContainer}>
            <img  src={mainImg}   alt="Overlay Image" />
            <img src={mainImg} alt="Base Image" className={styles.overlayImage}/>
            </div>
          </div>
        </main>
    )
}

export default Home