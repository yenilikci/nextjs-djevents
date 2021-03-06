import React from 'react';
import Head from "next/head";
import {useRouter} from "next/router";
import Header from "./Header";
import styles from '@/styles/Layout.module.css';
import Footer from "./Footer";
import Showcase from "@/components/Showcase";

const Layout = ({title, keywords, description, children}) => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords}/>
                <meta name="description" content={description}/>
            </Head>
            <Header/>
            {router.pathname === '/' && <Showcase/>}
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

Layout.defaultProps = {
    title: 'DJ Events | Find the best events in your area',
    keywords: 'music, dj, edm, events',
    description: 'Find the latest events, concerts, festivals, and more'
};


export default Layout;
