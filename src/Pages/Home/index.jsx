import styles from "./home.module.css";
import SideBar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import { useState } from "react";


const Home = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null)
    return(
        <div className={styles.grid}>
        <MainContent 
        animal={selectedAnimal}
        title={selectedAnimal?.group} />
        {/* if selected animal is not null or undefined it will retrieve value of selectedAnimal.groupand assign it to title prop */}
        <SideBar setSelectedAnimal = {setSelectedAnimal} />      
        </div>
    )
}

export default Home