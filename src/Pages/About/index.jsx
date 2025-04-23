import image from '../../assets/ai-generated-7699874_640.png'
import styles from './about.module.css'

const About = ({title}) => {
    return(
        <div className={styles.aboutContainer}>
            <div className={styles.aboutSubtitle}>
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eligendi, itaque culpa tempora officiis nostrum dignissimos architecto nisi natus repellendus quo fuga illum ullam iure cupiditate suscipit iste tempore voluptates!</p>
             <button>Contact us</button>
            </div>
            <div className={styles.aboutImg}>
                <img src={image} alt="" />
            </div>

        </div>
       
    )

}

export default About