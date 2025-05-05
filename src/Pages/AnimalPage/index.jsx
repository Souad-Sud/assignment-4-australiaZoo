import { useState, useEffect } from 'react';
import styles from './animalPage.module.css'
import { getImageUrl } from "../../utils/function.js";
import{Link, useParams } from 'react-router-dom'
import { AllAnimals } from '../../data/data';
import { birdsImg, reptilesImg, mammalsImg } from '../../data/data';
import AnimalPageDescription from '../../components/AnimalPageDescription';
// import { useParams } from 'react-router-dom';

const AnimalPage = ({ title }) => {
  const {name} = useParams();
  const [activeClass, setIsActiveClass] = useState(false)
    
// const [selectedGroupAnimal, setSelectedGroupAnimal] = useState(null);
useEffect(() => {
  setIsActiveClass(name || null);
  }, [name]);
  // Filter animals based on the title
  const animals = AllAnimals.filter(animal => animal.group.toLowerCase() === title.toLowerCase());

  const selectedGroupAnimal = AllAnimals.find(
    (animal) => animal.name.toLowerCase() === (name?.toLowerCase() || '')
  );

  const imgGroup = {
    birds : birdsImg,
    reptiles: reptilesImg,
    mammals : mammalsImg

  }

  const imageArray = imgGroup[title.toLowerCase()] || []
  // const {name} = useParams();

  // const specificAnimal = AllAnimals.find((animal) => animal.name.toLowerCase() === name?.toLowerCase());

  return (
    <div className={styles.animalGroup}>
        <div className={styles.animalGroupSideBar}>
            <h1>{title}</h1>
        <ul className={styles.animalroupList}>
            {animals.map((animal) => {
              const isActive = animal.name === activeClass;
              return(

                <li key={animal.name}>
                    <Link
                  to={`/${title}/${animal.name}`}
                  className={`${styles.animaGroupBtn} ${isActive ? styles.bakgroundColor : ''}`}
                >
                  {animal.name}
                </Link>
                </li>
              );
            })}
        </ul>
        </div>
            {selectedGroupAnimal ? (<AnimalPageDescription animal={selectedGroupAnimal}/>
            ): (
        <main className={styles.animalGroupMainMsg}>
            <h1>Welcome to {title} Page</h1>
                <ul className={styles.mainAnimalGroupImg}>
                {imageArray.map((src, index) => (
                    <li key={index} className={styles.mainGroupListImg}>
                        <img 
                        src={getImageUrl(src)} 
                        alt="" 
                        className={styles.mainAnimalItemImg}/>
                        
                    </li>
            ))}
                </ul>
        </main>
            )}
    </div>
  );
};

export default AnimalPage;