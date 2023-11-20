import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

import styles from './singlePage.module.css';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>13.11.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore,
                            eos explicabo quam perspiciatis provident iusto dignissimos, rerum
                            aliquid, reiciendis consequatur nobis ea esse. Sapiente perspiciatis
                            atque voluptate eligendi quis.
                        </p>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore,
                            eos explicabo quam perspiciatis provident iusto dignissimos, rerum
                            aliquid, reiciendis consequatur nobis ea esse. Sapiente perspiciatis
                            atque voluptate eligendi quis.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore,
                            eos explicabo quam perspiciatis provident iusto dignissimos, rerum
                            aliquid, reiciendis consequatur nobis ea esse. Sapiente perspiciatis
                            atque voluptate eligendi quis.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;