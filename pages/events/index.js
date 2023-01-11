import Image from 'next/image';
import Link from 'next/link';

/**
 * ! Events Index
 * Parameter of EventsPage is destructuring our data
*/

const EventsPage = ({ data }) => {
    return (
        <div>
        <h1> Event page </h1>
        {
            data.map(ev => (
                <Link key={ev.id} href={`/events/${ev.id}`}>
                    <Image src={ev.image} alt={ev.title} width={300} height={300}/> 
                    <h2> {ev.title} </h2>
                </Link>
            ))
        }
        </div>
    )
};

export default EventsPage;

export async function getStaticProps() {
    const {events_categories} = await import('/data/data.json');

    return {
        props:{
            data: events_categories,
        },
    };
}