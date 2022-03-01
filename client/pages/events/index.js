import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import {API_URL, PER_PAGE} from "@/config/index";
import Pagination from "@/components/Pagination";

export default function EventsPage({events, page, total}) {

    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 &&
            <h3>No events to show</h3>}
            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt.attributes}/>
            ))}
            <Pagination page={page} total={total}/>
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
