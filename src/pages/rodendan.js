import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import RodendanForm from "../modules/RodendanForm"
import Elements from "../components/Elements"
import Question from "../components/Question"
import InfoMark from "../components/InfoMark"
import Information from "../components/Information"

const RodendanPage = () => (
    <HeaderFooterLayout activeTab="Izbornik">
        <Elements/>
        <RodendanForm />
        <InfoMark />
        <Information />
        <Question />
    </HeaderFooterLayout>
)
 
export default RodendanPage