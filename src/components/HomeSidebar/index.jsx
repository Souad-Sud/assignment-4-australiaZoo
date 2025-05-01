import { useState } from "react";
import styles from './sideBar.module.css'
import {AllAnimals} from '../../data/data'
import SideBarItem from '../SideBarItem';
import {List}  from "@phosphor-icons/react";

const HomeSideBar = ({setSelectedAnimal}) => {
    const [isStretched, setIsStretched] = useState(false);
    const [isBigger, setIsBigger] = useState(false);
    const [activeAnimalName, setActiveAnimalName] = useState(null);


    const toggleBtn = () => {
      setIsStretched(prev => !prev);
      setIsBigger(prev => !prev)
    }

    const handleAnimalActive = (animal) => {
      setSelectedAnimal(animal)
      setActiveAnimalName(animal.name)
    }

  return (
    <aside className={`${styles.listContainer} ${isStretched ? styles.stretched : ''}`}>
      <button onClick={toggleBtn} className={styles.listBtn} >
      <List size={40} className={styles.openList} />
      </button>
      <ul className={styles.list}>
        {AllAnimals.map((item, index) => 
        <SideBarItem   
        key={index}
        animal = {item}
        onClick={() => handleAnimalActive(item)} 
        isBigger={isBigger}
        isActive ={activeAnimalName === item.name}
             
        />       
      )}
      </ul>
    </aside>
  );
};

export default HomeSideBar;