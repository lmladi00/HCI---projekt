//import; dodavanje komponenti za prikaz na stranici
/*
import React from "react"

import NavigationHeader from '../components/NavigationHeader'

import Footer from '../components/Footer'
*/
//NavigationHeader tag (moduralan) se mijenja sa kodom iz foldera u komponentama
/*
const IndexPage = () => (
  <main>
    <NavigationHeader />
    <Footer />
  </main>
)

export default IndexPage
*/

/* NOVI PRISTUP JER SMO DODALI HEADERFOOTER*/

import React from "react"
 
import HeaderFooterLayout from "../layouts/headerFooter"
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    {/* Body components here! */}
    </HeaderFooterLayout>
    )
     
    export default IndexPage
    