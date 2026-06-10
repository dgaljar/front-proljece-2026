import React from 'react'
import KatalogSingle from './KatalogSingle'

function Product() {



  return (
    <section className="single-product">
        <div class="container py-5">
            <div class="row g-5 align-items-start">
                <div class="col-lg-6">
                <div class="position-relative">
                    <img
                    src="https://placehold.co/800x800"
                    class="img-fluid"
                    alt="White Printed Shirt"
                    />
                </div>

                <div class="row row-cols-4 g-3 mt-1">
                    <div class="col">
                    <img
                        src="https://placehold.co/160x160"
                        class="img-fluid"
                        alt="Product thumbnail 1"
                    />
                    </div>
                    <div class="col">
                    <img
                        src="https://placehold.co/160x160"
                        class="img-fluid"
                        alt="Product thumbnail 2"
                    />
                    </div>
                    <div class="col">
                    <img
                        src="https://placehold.co/160x160"
                        class="img-fluid"
                        alt="Product thumbnail 3"
                    />
                    </div>
                    <div class="col">
                    <img
                        src="https://placehold.co/160x160"
                        class="img-fluid"
                        alt="Product thumbnail 4"
                    />
                    </div>
                </div>
                </div>

                <div class="col-lg-6">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <h1 class="h3 mb-0">White Printed Shirt</h1>
                    <span class="badge rounded-pill text-bg-danger px-3 py-2">SALE</span>
                </div>

                <div class="d-flex align-items-center gap-2 mb-3">
                    <span class="display-6 fw-semibold mb-0 lh-1">$68.00</span>
                    <del class="text-muted">$95.00</del>
                </div>

                <div class="d-flex align-items-center gap-2 mb-4">
                    <span class="text-warning small">★★★★☆</span>
                    <small class="text-muted">(2 reviews)</small>
                </div>

                <p class="text-muted mb-4">
                    Company that's grown from 270 to 480 employees in the last 12 months, we're
                    always passionate about bringing tech talent to NYC. That's why we're especially
                    excited to kick off the new commit.
                </p>

                <div class="row g-3 mb-3">
                    <div class="col-sm-5">
                    <select class="form-select">
                        <option selected>Blue</option>
                        <option>White</option>
                        <option>Black</option>
                    </select>
                    </div>
                </div>

                <div class="d-flex gap-2 align-items-stretch mb-4">
                    <div class="input-group">
                    <button class="btn btn-outline-secondary" type="button">-</button>
                    <input type="text" class="form-control text-center" value="2" />
                    <button class="btn btn-outline-secondary" type="button">+</button>
                    </div>

                    <button class="btn btn-dark px-4 text-uppercase">Add to cart</button>
                </div>

                <hr class="my-4" />

                <div class="d-flex gap-4 small mb-4">
                    <a href="#" class="text-decoration-none text-dark">❤ Add to wishlist</a>
                    <a href="#" class="text-decoration-none text-dark">↗ Share</a>
                </div>

                <hr class="my-4" />

                <div class="small">
                    <p class="mb-3">
                    <span class="fw-semibold d-block mb-1">Category</span>
                    <span class="text-muted">Summer collection, Shirt</span>
                    </p>

                    <p class="mb-0">
                    <span class="fw-semibold d-block mb-1">Tags</span>
                    <span class="text-muted">Company Name</span>
                    </p>
                </div>
                </div>
            </div>

            <div class="mt-5">
                <ul class="nav nav-tabs" id="productTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button
                    class="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
                    type="button"
                    role="tab"
                    >
                    Description
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                    class="nav-link"
                    id="additional-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#additional"
                    type="button"
                    role="tab"
                    >
                    Additional Information
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                    class="nav-link"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#reviews"
                    type="button"
                    role="tab"
                    >
                    Reviews (2)
                    </button>
                </li>
                </ul>

                <div class="tab-content border border-top-0 p-4" id="productTabsContent">
                <div
                    class="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                >
                    <p class="text-muted mb-0 small">
                    When, while the lovely valley teems with vapour around me, and the meridian sun
                    strikes the upper surface of the impenetrable foliage of my trees, and but a few
                    stray gleams steal into the inner sanctuary, I throw myself down among the tall
                    grass by the trickling stream; and, as I lie close to the earth, a thousand
                    unknown plants are noticed by me: when I hear the buzz of the little world among
                    the stalks, and grow familiar with the countless indescribable forms of the
                    insects and flies, then I feel the presence of the Almighty, who formed us in his
                    own image, and the breath of that universal love which bears and sustains us, as
                    it floats around us in an eternity of bliss and then, my friend, when darkness
                    overspreads my eyes.
                    </p>
                </div>

                <div
                    class="tab-pane fade"
                    id="additional"
                    role="tabpanel"
                    aria-labelledby="additional-tab"
                >
                    <p class="text-muted mb-0 small">
                    Material: Cotton. Fit: Regular. Collection: Summer collection. Available sizes:
                    S, M, L, XL.
                    </p>
                </div>

                <div
                    class="tab-pane fade"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                >
                    <p class="text-muted mb-0 small">
                    2 customer reviews available for this product.
                    </p>
                </div>
                </div>
            </div>

            <div class="mt-5">
                <h2 class="h4 mb-4">Related Products</h2>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                    <KatalogSingle />
                    <KatalogSingle />
                    <KatalogSingle />
                    <KatalogSingle />
                </div>
            </div>
            </div>
    </section>
  )

}

export default Product