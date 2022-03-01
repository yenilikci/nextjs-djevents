import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import {API_URL} from "@/config/index";
import Link from "next/link";

const PER_PAGE = 5;

export default function EventsPage({events, page, total}) {
    const lastPage = Math.ceil(total / PER_PAGE);


    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 &&
            <h3>No events to show</h3>}
            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt.attributes}/>
            ))}

            {page > 1 && (
                <Link href={`/events/?page=${page - 1}`}>
                    <a className="btn-secondary">Prev</a>
                </Link>
            )}
            {page < lastPage && (
                <Link href={`/events/?page=${page + 1}`}>
                    <a className="btn-secondary">Next</a>
                </Link>
            )}
        </Layout>
    )
}

//getServerSideProps
export async function getServerSideProps({query: {page = 1}}) {
    const qs = require('qs');
    const query = qs.stringify({
        pagination: {
            page: page,
            pageSize: PER_PAGE,
        },
    }, {
        encodeValuesOnly: true,
    });

    const res = await fetch(`${API_URL}/api/events?populate=*&${query}`);
    const json = await res.json();
    const events = json.data;


    //const total
    const totalRes = await fetch(`${API_URL}/api/events`);
    const totalJson = await totalRes.json();
    const total = totalJson.data.length;


    // console.log(events);
    // console.log(JSON.stringify(events[0].attributes.image.data.attributes.formats.thumbnail.url));

    // Pass event data to the page via props
    return {props: {events: events, page: +page, total}};
}
