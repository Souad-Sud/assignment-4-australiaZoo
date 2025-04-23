import  styles from './header.module.css'
import HeaderItem from  '../HeaderItem'


const Header = () => {

    return(
        <header className={styles.header}>         
            <HeaderItem />        
        </header>
    )
}

export default Header