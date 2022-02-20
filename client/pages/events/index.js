import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import {API_URL} from "@/config/index";

export default function EventsPage({events}) {
    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 &&
            <h3>No events to show</h3>}
                {events.map((evt) => (
                    <EventItem key={evt.id} evt={evt.attributes} />
                ))}
        </Layout>
    )
}

//getServerSideProps
export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/events?populate=*`);
    const json = await res.json();
    const events = json.data;
    console.log(events);
    console.log(JSON.stringify(events[0].attributes.image.data.attributes.formats.thumbnail.url));
   
    // Pass event data to the page via props
    return { props: { events: events }, revalidate: 1 };
}
