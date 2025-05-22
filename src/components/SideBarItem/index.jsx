import { getImageUrl } from "../../utils/function.js";
import styles from './sideBarItem.module.css'

const SideBarItem = ({animal, isBigger, isActive, onClick}) => { 
    return(
        <>
            <li className={`${styles.itemList} ${isActive ? styles.active : ''}`}
            onClick={onClick}>
                <img
                    src={getImageUrl(animal.image)}
                    alt={animal.name}
                    className={`${styles.asideIcon} ${isBigger ? styles.biggerIcon : ''} `}
                />  
                {console.log(animal.name)}
            </li> 
        </>
    )
}

export default SideBarItem