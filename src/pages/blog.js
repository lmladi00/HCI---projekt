import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogForm from "../modules/BlogForm"
import Elements from "../components/Elements"
import Question from "../components/Question"

import IzbornikOpen from "../components/IzbornikOpen"

const blogPage= () => (
    <HeaderFooterLayout activeTab="Izbornik">
        <Elements/>
        <BlogForm />
        <Question />
    </HeaderFooterLayout>
)
 
export default blogPage