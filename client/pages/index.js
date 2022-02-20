import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import {API_URL} from "@/config/index";
import Link from "next/link";

export default function Home({events}) {
    return (
        <Layout>
            <h1>Upcoming Events</h1>
            {events.length === 0 &&
            <h3>No events to show</h3>}

            {events.map((evt) => (
                    <EventItem key={evt.id} evt={evt.attributes} />
                ))}


            {events.length > 0 && (
                <Link href='/events'>
                    <a className='btn-secondary'>
                        View All Events
                    </a>
                </Link>
            )}
        </Layout>
    )
}

//getServerSideProps
export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/events?&populate=*`);
    const json = await res.json();
    const events = json.data;
    // console.log(JSON.stringify(events[0].attributes.image.data.attributes.formats.thumbnail.url));
   
    // Pass event data to the page via props
    return { props: { events: events.slice(0,2) }, revalidate: 1 };
}
