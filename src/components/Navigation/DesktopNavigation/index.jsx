import {pagesLinks} from '../../../data/data'
import AnimalMenuItem from '../AnimalMenuItem'
import styles from '../navigation.module.css';
 
const DesktopNavigation  = ({displayMenu}) => {

  
    return(
            <nav className={`${styles.navContainerItems} ${displayMenu === "active" ? styles.isVisible : ""}`}>
            {pagesLinks.map((pageItem, index) => 
                <AnimalMenuItem key={index} pageItem={pageItem} />
            )}
        </nav>      
       
    )
}
export default DesktopNavigation