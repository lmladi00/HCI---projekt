import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"

import Elements from "../components/Elements"

import MailForm from "../modules/MailForm"

const MailPage  = () => (
    <HeaderFooterLayout activeTab="Izbornik">
        <Elements/>
        <MailForm />
    </HeaderFooterLayout>
)
 
export default MailPage