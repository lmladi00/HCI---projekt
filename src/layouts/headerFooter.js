import React from 'react'
import NavigationHeader from '../modules/NavigationHeader'
import Footer from '../modules/Footer'

const HeaderFooterLayout = ({children, setMenu}) => (
  <>
    <NavigationHeader setMenu={setMenu} />
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout

