import { useState } from "react";
import styles from './sidebar.module.css'
// import SideBarItem from '../Sidebar'
// import { NavLink } from 'react-router-dom';
import {AllAnimals} from '../../data/data'
import SideBarItem from '../SideBarItem';

const Sidebar = () => {
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

export default Sidebar;