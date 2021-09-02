import React, { useState } from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogForm from "../modules/BlogForm"
import Elements from "../components/Elements"
import Question from "../components/Question"

import IzbornikOpen from "../components/IzbornikOpen"

const BlogPage= () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
    <HeaderFooterLayout setMenu={() => setShowMenu(!showMenu)}>
        <Elements/>
        <BlogForm />
        <Question />
        {showMenu && <IzbornikOpen click={() => setShowMenu(false)} />}
    </HeaderFooterLayout>
)
}
 
export default BlogPage