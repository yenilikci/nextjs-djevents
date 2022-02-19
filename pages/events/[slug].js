import {useRouter} from "next/router";
import React from 'react';

const EventPage = () => {
    const router = useRouter();
    console.log(router);
    return (
        <Layout>
            <h1>My Event</h1>
            <h3>{router.query.slug}</h3>
            <button onClick={() => router.push('/')}>Click</button>
        </Layout>
    );
};

export default EventPage;
