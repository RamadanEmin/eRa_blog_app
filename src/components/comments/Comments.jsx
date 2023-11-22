'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';

import styles from './comments.module.css';

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Comments = ({ postSlug }) => {
    const { status } = useSession();

    const [des, setDesc] = useState('');

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);

    const handleSubmit = async () => {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ des, postSlug })
        });

        mutate();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    >
                    </textarea>
                    <button className={styles.button} onClick={handleSubmit}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading ? 'Loading...' : data?.map(item => (
                    <div className={styles.comment} key={item._id}>
                        <div className={styles.user}>
                            {item?.user?.image && <Image src={item.user.image} alt="" width={50} height={50} className={styles.image} />}
                            <div className={styles.userInfo}>
                                <span className={styles.username}>{item.user.name}</span>
                                <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
                            </div>
                        </div>
                        <p className={styles.desc}>{item.des}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Comments;