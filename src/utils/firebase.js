import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: 'blog-2526c.firebaseapp.com',
    projectId: 'blog-2526c',
    storageBucket: 'blog-2526c.appspot.com',
    messagingSenderId: '244702391712',
    appId: '1:244702391712:web:372a112c9110a4dead88c5'
};

export const app = initializeApp(firebaseConfig);