import LogoImg from '../../assets/logo.png'
import {List}  from "@phosphor-icons/react";
import styles from './headerItem.module.css'
import DesktopNavigation from '../Navigation/DesktopNavigation';
import { useState } from 'react';


const HeaderItem = () => {
        
    const [displayMenu, setDisplayMenu] = useState("inactive")
    const handleClickMenu = () => {  
        setDisplayMenu(displayMenu === "inactive" ? "active" : "inactive") // showMenu =  not true

    }

    return(
        <div className={styles.headerItemContainer}>
            <div className={styles.menuResponsive}>
                <div className={styles.list}>            
                    <List size={40} className={styles.openList} onClick={handleClickMenu} />
                </div>
                <div className={styles.logo}>
                    <img src={LogoImg} alt="logo" height={80} width={100}/>        
                </div>
            </div>
            <div>
                <DesktopNavigation displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
            </div>
        </div>
   
)
}

export default HeaderItem