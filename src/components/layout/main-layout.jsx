import React from 'react'
import { Footer } from '../footer/footer';
import { Header } from '../header/header';


/**
 * destructure children in order to have header, footer, and then the children which is our components
 * Wrapping children under main allows us to style all of the children at once
 */
const MainLayout = ({children}) => {
  return (
    <>
    <Header />
    <main> {children} </main>
    <Footer />
    </>
  )
}

export default MainLayout