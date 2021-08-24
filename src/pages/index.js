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

import React, { useState } from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'

import PageContent from "../modules/PageContent"
import IzbornikOpen from "../components/IzbornikOpen"


const IndexPage = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <HeaderFooterLayout setMenu={() => setShowMenu(!showMenu)} activeTab="Home">
      <TitlePage />
      <PageContent />
      {showMenu && <IzbornikOpen />}
    </HeaderFooterLayout>
  )
}

export default IndexPage