import SingleEvent from '../../../src/components/events/single-event';

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage

/**
 * Parent of [cat] must be included
 * param of id must match [id]
 * Afterwards, getStaticPath needs getStaticProps because next.js goes through getStaticPaths goes through entire data and fetch
 *    X paths and create them -> ! What is the specific context of each page - found via getStaticProps using context !
 */
export async function getStaticPaths() {
    const data = await import('/data/data.json');
    const allEvents = data.allEvents;

    const allPaths = allEvents.map((path)=> {
        return {
            params: {
                cat: path.city,
                id: path.id,
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const {allEvents} = await import('/data/data.json');
    const eventData = allEvents.find(ev => id === ev.id);

    return {
        props: { data: eventData},
    }
}