import React from 'react'
import NavigationHeader from '../modules/NavigationHeader'
import Footer from '../modules/Footer'

import Elements from '../components/Elements'
const HeaderFooterLayout = ({children, setMenu}) => (
  <>
    <NavigationHeader setMenu={setMenu} />
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout

