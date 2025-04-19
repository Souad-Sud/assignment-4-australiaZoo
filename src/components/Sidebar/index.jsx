import { useState } from "react";
import styles from './sideBar.module.css'
import {AllAnimals} from '../../data/data'
import SideBarItem from '../SideBarItem';

const SideBar = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null)

  return (
    <aside className={styles.Sidebar}>
        <h2>hello</h2>
        {AllAnimals.map((item, index) => 
        <SideBarItem   
        key={index}
        animal = {item}
        onClick={() => setSelectedAnimal(item)}
        
        />
)}
 
    </aside>
  );
};

export default SideBar;