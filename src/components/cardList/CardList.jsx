import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

import styles from './cardList.module.css';

const getDate = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed');
    }

    return res.json();
};

const CardList = async () => {
    const { posts, count } = await getDate(page);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts?.map(item => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default CardList;