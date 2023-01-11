import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

/**
 * ! Events Index
 * Three different ways to return {title}
 *  1. (props) 2. const {title} = props; 3. props.title
 * 
 * Within main className={styles.main} we are dynamically loading using data.json in the data folder
 *    Meaning we have pages being generated from our database using Data Fetching
 *       Static Generation is the alternative which pregenerate all the pages during build time
 *       (check getStaticPaths on the Next.js documentation)
*/

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>ICF Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/"> 
            Home
          </Link>

          <Link href="/about-us"> 
            About Us
          </Link>

          <Link href="/events"> 
            Events
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map(
          ev => 
            <a 
              key={ev.id} href={`/events/${ev.id}`}> 
              <Image width={200} height={200} alt={ev.title} src={ev.image}/> 
              <h2>{ev.title}</h2> 
              <p> {ev.description}</p>
            </a>
          )
        }
      </main>

      <footer className={styles.footer}>
        <p> 2022 Time to Code - A Project</p>
      </footer>
    </>
  )
}

/**
 * !Server-Side Function
 * Rendering content on the server side - Must be exported as a stand-alone function never runs on the browser-side
 * and before our home function component 
 */
export async function getServerSideProps() {
  // destructuring data
  const { events_categories } = await import('data/data.json'); // async functions must have await
  // return objects that has props
  return {
      props:{
          data: events_categories
      }
  }
}
