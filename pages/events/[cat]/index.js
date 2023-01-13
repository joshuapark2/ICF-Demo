import CatEvent from '../../../src/components/events/catEvent';

/**
 *  - Link allows us to do client-side navigation in the browser
 *     - client-side navigation allows us to navigate smoother and quicker - don't have to load every single page
 *       since it's done at pre-render
 *     - Because anchor tags (a) should be associated with an href, passHref is need to keep key/href in Link
 *        - Starting with Next.js 13, the solution above doesn't work so we remove the anchor tag
 */
const EventsCatPage = ( { data, pageName }) => <CatEvent data={data} pageName={pageName}/>

export default EventsCatPage

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(ev=> {
        return {
            params: {
                cat: ev.id.toString(),
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false, // fallback is used when a user doesn't go somewhere which we didn't specify
    };
}

/**
 * Needed to use fallback above
 * @param {*} context  will have the params, categories, and what page we are in - console.log(context) for specifics
 */

export async function getStaticProps(context) {
    const { allEvents } = await import('/data/data.json');
    const id = context?.params.cat; // Destructure parameters

    const data = allEvents.filter(ev => ev.city === id)

    return {props: { data, pageName: id }};
}