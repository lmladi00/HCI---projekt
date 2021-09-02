import React, { useState } from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import RodendanForm from "../modules/RodendanForm"
import Elements from "../components/Elements"
import Question from "../components/Question"
import InfoMark from "../components/InfoMark"
import Information from "../components/Information"
 
import IzbornikOpen from "../components/IzbornikOpen"
const RodendanPage = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <HeaderFooterLayout setMenu={() => setShowMenu(!showMenu)}>
            <Elements />
            <RodendanForm />
            <InfoMark />
            <Information />
            <Question />
            {showMenu && <IzbornikOpen click={() => setShowMenu(false)} />}
        </HeaderFooterLayout>
    )
}
export default RodendanPage
 