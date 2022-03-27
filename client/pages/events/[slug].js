import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FaPencilAlt, FaTimes} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";
import styles from "@/styles/Event.module.css";
import {useRouter} from "next/router";

export default function EventPage({evt}) {
  const router = useRouter();
  const {attributes} = evt;

  return (
      <Layout>
        <div className={styles.event}>
          <span>
          {new Date(attributes.date).toLocaleDateString("en-US")} at{" "}
            {attributes.time}
        </span>
          <ToastContainer/>
          <h1>{attributes.name}</h1>
          {attributes.image && (
              <div className={styles.image}>
                <Image
                    src={attributes.image.data?.attributes.formats.large.url ? attributes.image.data.attributes.formats.large.url : '/images/event-default.png'}
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
  const res = await fetch(`${API_URL}/api/events?populate=*`);
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
  const res = await fetch(`${API_URL}/api/events?slug='${slug}'&populate=*`);
  const json = await res.json();
  const events = json.data;

  // Pass event data to the page via props
  return {props: {evt: events.find(el => el.attributes.slug == slug)}, revalidate: 1};
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();

//   return { props: { evt: events[0] } };
// }
