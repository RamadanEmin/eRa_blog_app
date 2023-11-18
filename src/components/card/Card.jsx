import Image from 'next/image';
import Link from 'next/link';

import styles from './card.module.css';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.11.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <h1>Lorem ipsum dolor sit, amet alim consectetur adipisicing elit.</h1>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut animi aliquid itaque
                    laborum tempora ratione maiores culpa, eius explicabo eligendi saepe, reiciendis
                    facere delectus qui vitae beatae illum unde velit.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    );
};

export default Card;