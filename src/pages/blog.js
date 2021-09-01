import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogForm from "../modules/BlogForm"
import Elements from "../components/Elements"

const RodendanPage = () => (
    <HeaderFooterLayout activeTab="Izbornik">
        <Elements/>
        <BlogForm />
    </HeaderFooterLayout>
)
 
export default RodendanPage