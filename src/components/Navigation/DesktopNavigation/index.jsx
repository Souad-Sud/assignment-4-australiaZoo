import {pagesLinks} from '../../../data/data'
import AnimalMenuItem from '../AnimalMenuItem'
import styles from '../navigation.module.css';

 
const DesktopNavigation  = () => {
    return(
        <nav className={styles.navContainerItems}>
            {pagesLinks.map((pageItem, index) => 
                <AnimalMenuItem key={index} pageItem={pageItem} />
            )}
        </nav>      
    )
}
export default DesktopNavigation