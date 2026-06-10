import React from 'react'
import {Link} from 'react-router'

function Work() {
  return (
    <div class="container pt-5">
      <h1>Works</h1>
    <div class="articles pt-4 pb-5 mb-4">
                
                <div class="work">
                    <div class="row">
                        <div class="col-md-3">
                            <Link to="/blogSingle"><img src="https://front3.edukacija.online/tsuk/img/work1.png" alt="work1" /></Link>
                        </div>
                        <div class="col-md-9">
                            <h2><Link to="/blogSingle">Designing Dashboards</Link></h2>
                            <p class="meta">
                                <span class="year">2020</span>
                                <span class="categories">Design, Pattern</span>
                            </p>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>

                <div class="work">
                    <div class="row">
                        <div class="col-md-3">
                            <Link to="/blogSingle"><img src="https://front3.edukacija.online/tsuk/img/work2.png" alt="work2" /></Link>
                        </div>
                        <div class="col-md-9">
                            <h2><Link to="/blogSingle">Designing Dashboards</Link></h2>
                            <p class="meta">
                                <span class="year">2020</span>
                                <span class="categories">Design, Pattern</span>
                            </p>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>

                <div class="work">
                    <div class="row">
                        <div class="col-md-3">
                            <Link to="/blogSingle"><img src="https://front3.edukacija.online/tsuk/img/work3.png" alt="work3" /></Link>
                        </div>
                        <div class="col-md-9">
                            <h2><Link to="/blogSingle">Designing Dashboards</Link></h2>
                            <p class="meta">
                                <span class="year">2020</span>
                                <span class="categories">Design, Pattern</span>
                            </p>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
    </div>
  )
}

export default Work