import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
 
export default function EventPage({ evt }) {
  const { attributes } = evt;
  const deleteEvent = (e) => {
    console.log(e);
  };
 
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes />
            Delete Event
          </a>
        </div>
        <span>
          {new Date(attributes.date).toLocaleDateString("en-US")} at{" "}
          {attributes.time}
        </span>
        <h1>{attributes.name}</h1>
        {attributes.image && (
          <div className={styles.image}>
            <Image
              src={attributes.image.data.attributes.formats.large.url}
              alt="Event Image"
              width={960}
              height={600}
            />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{attributes.performers}</p>
        <h3>Description:</h3>
        <p>{attributes.description}</p>
        <h3>Venue: {attributes.venue}</h3>
        <p>{attributes.address}</p>
        <Link href="/events">
          <a> {"<"}Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}
 
// Looks at your data, creates paths from slugs/ids
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get events
  const res = await fetch(`${API_URL}/api/events?populate=*&_sort=date:ASC`);
  const json = await res.json();
  const events = json.data;
 
  // Get the paths we want to pre-render based on events
  const paths = events.map((evt) => {
    return {
      params: { slug: evt.attributes.slug },
    };
  });
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: true,
  };
}
 
// From the slug that you have provided, pulls event information
export async function getStaticProps({ params: { slug } }) {
  // params contains the event `slug`.
  // If the route is like /events/he, then params.slug is he
  const res = await fetch(`${API_URL}/api/events?slug=${slug}&populate=*`);
  const json = await res.json();
  const events = json.data;
 
  // Pass event data to the page via props
  return { props: { evt: events[0] }, revalidate: 1 };
}
 
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();
 
//   return { props: { evt: events[0] } };
// }
 