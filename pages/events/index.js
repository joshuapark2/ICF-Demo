import AllEvents from '../../src/components/events/events-page'

/**
 * ! Events Index
 * Parameter of EventsPage is destructuring our data
*/

const EventsPage = ({ data }) => {
    return (
        <AllEvents data={data}/>
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