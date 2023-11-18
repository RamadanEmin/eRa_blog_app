'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

import styles from './themeToggle.module.css';

const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div
            className={styles.container}
            onClick={toggle}
            style={
                theme === 'dark'
                    ? { backgroundColor: 'white' }
                    : { backgroundColor: '#0f172a' }}>
            <Image src="/moon.png" alt='moon' width={20} height={20} />
            <div
                className={styles.ball}
                style={
                    theme === 'dark'
                        ? { left: 1, background: '#0f172a' }
                        : { right: 1, background: 'white' }}
            ></div>
            <Image src="/sun.png" alt='moon' width={20} height={20} />
        </div>
    );
};

export default ThemeToggle;