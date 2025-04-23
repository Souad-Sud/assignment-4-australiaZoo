import { getImageUrl } from "../../utils/function.js";
import styles from './sideBarItem.module.css'


const SideBarItem = ({animal, onClick, isBigger, isActive}) => {
 
 
    return(
        <>
            <li className={`${styles.itemList} ${isActive ? styles.active : ''}`}
            onClick={onClick}>
                <img
                    src={getImageUrl(animal.image)}
                    alt={animal.name}
                    onClick={onClick}
                    className={`${styles.asideIcon} ${isBigger ? styles.biggerIcon : ''} `}
                    />  
            </li> 
        </>
    )
}

export default SideBarItem