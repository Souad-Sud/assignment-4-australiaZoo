import { useState } from "react";
import { getImageUrl } from "../../utils/function.js";
import styles from './animalPageDescription.module.css'

const AnimalPageDescription = ({animal}) => {
    const [displayList, setDisplayList] = useState(false)
        const toggleList = () => {
            setDisplayList(prev => !prev)
            }
            
    return(
        <div className={styles.animalGroupDisplay}>
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <div className={styles.animalImage}>
            <img src={getImageUrl(animal.image)} alt="" />
            </div>
             <button onClick={toggleList} className={`${styles.btn} ${displayList ? styles.bgcl : ""}`}>Show details</button>
                <div className={styles.group}>
                    <ul className={`${styles.groupDescription} ${displayList ? styles.show : styles.hidden}`}>
                        <li className={styles.child}>Lifespan: {animal.lifespan}</li>
                        <li className={styles.child}>Group: {animal.group}</li>
                        <li className={styles.child}>Food: {animal.food} </li>
                        <li className={styles.child}>Length: {animal.length }</li>
                        <li className={styles.child}>Weight: {animal.weigh }</li>
                        <li className={styles.child}>Food: {animal.found }</li>
                    </ul>          
                </div>
        </div>  
    )
}

export default AnimalPageDescription