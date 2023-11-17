import React from 'react';
import Image from 'next/image';

import styles from './featured.module.css';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><b>Hey eRa here!</b> Discover my stories and creative ideas.</h1>
            <div className={styles.post}>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit, amet alim consectetur adipisicing elit.</h1>
                    <p className={styles.postDescription}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut animi aliquid itaque
                        laborum tempora ratione maiores culpa, eius explicabo eligendi saepe, reiciendis
                        facere delectus qui vitae beatae illum unde velit.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;