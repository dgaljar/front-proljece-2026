import React from 'react'
import {Link} from 'react-router'

function Blog() {



  return (
   <div class="container blog pt-5">
            <h1>Blog</h1>
            <div class="articles pt-4 pb-5 mb-4">
                <div class="box">
                    <h2><Link to="/blogSingle">Making a design system from scratch</Link></h2>
                    <p class="meta">
                        <span class="date">12 Feb 2020</span>
                        <span class="categories">Design, Pattern</span>
                    </p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div class="box">
                    <h2><Link to="/blogSingle">Making a design system from scratch</Link></h2>
                    <p class="meta">
                        <span class="date">12 Feb 2020</span>
                        <span class="categories">Design, Pattern</span>
                    </p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div class="box">
                    <h2><Link to="/blogSingle">Making a design system from scratch</Link></h2>
                    <p class="meta">
                        <span class="date">12 Feb 2020</span>
                        <span class="categories">Design, Pattern</span>
                    </p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div class="box">
                    <h2><Link to="/blogSingle">Making a design system from scratch</Link></h2>
                    <p class="meta">
                        <span class="date">12 Feb 2020</span>
                        <span class="categories">Design, Pattern</span>
                    </p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                
            </div>
        </div>
  )

}

export default Blog