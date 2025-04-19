import  styles from './header.module.css'
import Logo from  '../Logo'
import DesktopNavigation from '../Navigation/DesktopNavigation'

const Header = () => {
    return(
        <header className={styles.header}>
            <Logo/>
            <DesktopNavigation />
        </header>
        

    )
}

export default Header