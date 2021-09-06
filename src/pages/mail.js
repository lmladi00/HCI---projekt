import React, {useState} from "react"
import HeaderFooterLayout from "../layouts/headerFooter"

import Elements from "../components/Elements"

import MailForm from "../modules/MailForm"
import IzbornikOpen from "../components/IzbornikOpen"

const MailPage  = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
    <HeaderFooterLayout setMenu={() => setShowMenu(!showMenu)}>
        <Elements/>
        <MailForm />
        {showMenu && <IzbornikOpen click={() => setShowMenu(false)} />}
    </HeaderFooterLayout>
    )
}
 
export default MailPage