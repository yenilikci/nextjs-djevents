import React from 'react';
import Head from "next/head";
import styles from '../styles/Layout.module.css';

const Layout = ({title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords}/>
                <meta name="description" content={description}/>
            </Head>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};

Layout.defaultProps = {
    title: 'DJ Events | Find the best events in your area',
    keywords: 'music, dj, edm, events',
    description: 'Find the latest events, concerts, festivals, and more'
};


export default Layout;
