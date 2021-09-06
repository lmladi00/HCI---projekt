import React from "react"
import Logo from '../components/Logo'
const NotFoundPage = () => (
  <div style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center", margin: "auto", width:"50%", padding:"10px"}}>
       <Logo/>
        <h1 style={{color:"rgb(255, 151, 176)"}}>ayy... nothing here!</h1>
        <p>You just hit a route that doesn&#39;t exist...
        the sadness.</p>

  </div>
)

export default NotFoundPage
