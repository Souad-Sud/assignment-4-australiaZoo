import mainImg from "../../assets/ai-generated-7700031_640.png"
import styles from './MainContent.module.css'
import { getImageUrl } from "../../utils/function"
import { useNavigate } from 'react-router-dom';

const MainContent = ({animal, title}) => {

    const navigate = useNavigate();

    if(!animal) {
        return(
            <main className={styles.main}>
            <h1>The Australian animals Exhibition</h1>
            <h2>Explore the fascinating wildlife of Australia!</h2>
            <div className={styles.imageContainer}>
                <img  src={mainImg}   alt="Overlay Image" />
                <img src={mainImg} alt="Base Image" className={styles.overlayImage}/>
                </div>
            </main>

        )
    }
    return(
        <main className={styles.main}>
            <div className={styles.mainAnimal}>
                <h1>{animal.name}</h1>
                <p>{animal.description}</p>
            </div>
            <div className={styles.animalImg}>
                <img src={getImageUrl(animal.image)} alt={getImageUrl(animal.image)} height={300} width={300} />
            </div>
            <div>
                <button 
                 onClick={() => {
                    if (title) {
                      navigate(`/${title.toLowerCase()}`);
                    }
                  }}
                className={styles.btn}>Group :{animal.group}</button>
            </div>
        </main>
        
    )
}

export default MainContent