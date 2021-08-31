import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import RodendanForm from "../modules/RodendanForm"

import Elements from "../components/Elements"
const RodendanPage = () => (
    <HeaderFooterLayout activeTab="Izbornik">
        <Elements/>
        <RodendanForm />
    </HeaderFooterLayout>
)
 
export default RodendanPage