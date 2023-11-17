import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';

import styles from './homepage.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Featured />
            <CategoryList />
        </div>
    );
}
