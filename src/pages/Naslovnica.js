import Article from "../componenets/Article";

function Naslovnica() {
  return (
    <>
      <div className="container py-5">
        <div className="header__bottom">
          <div className="header__row">
            <div className="popular">
              <div className="popular__label">Središnje teme</div>
              <div className="popular__items js-hotTopics">
                <div className="popular__item">
                  <a href="https://www.vecernji.hr/tag/drnis-6229">#DRNIŠ</a>
                </div>

                <div className="popular__item">
                  <a href="/tag/vatreni-1296">#Vatreni</a>
                </div>

                <div className="popular__item">
                  <a
                    href="https://www.vecernji.hr/tag/hantavirus-110760"
                    tentacle-id="110760-76"
                  >
                    #HANTAVIRUS
                  </a>
                </div>

                <div className="popular__item">
                  <a href="https://www.vecernji.hr/tag/vedran-pavlek-15597">
                    #VEDRAN PAVLEK
                  </a>
                </div>

                <div className="popular__item">
                  <a
                    href="https://www.vecernji.hr/tag/rat-na-bliskom-istoku-421340"
                    tentacle-id="421340-78"
                  >
                    #RAT NA BLISKOM ISTOKU
                  </a>
                </div>

                <div className="popular__item">
                  <a
                    href="https://www.vecernji.hr/tag/donald-trump-347052"
                    tentacle-id="347052-79"
                  >
                    #DONALD TRUMP
                  </a>
                </div>

                <div className="popular__item">
                  <a href="https://www.vecernji.hr/tag/cijene-460">#CIJENE</a>
                </div>

                <div className="popular__item">
                  <a href="/barkod">#Barkod</a>
                </div>

                <div className="popular__item">
                  <a
                    href="https://www.vecernji.hr/tag/rat-u-ukrajini-213159"
                    tentacle-id="213159-7c"
                  >
                    #RAT U UKRAJINI
                  </a>
                </div>

                <div className="popular__item">
                  <a href="https://www.vecernji.hr/tag/dinamo-80595">#DINAMO</a>
                </div>

                <div className="popular__item">
                  <a href="https://www.vecernji.hr/tag/liga-prvaka-221">
                    #LIGA PRVAKA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="istaknuto container py-5">
        <div className="row">
          <div className="col-md-6 layout-1">
            <a href="#" className="photo">
              <img src="https://www.vecernji.hr/media/img/37/4b/67744882e3e65a34a651.jpeg" />
            </a>
            <p>NATO STVORIO ZID</p>
            <h2>
              <a href="#" className="title">
                Ublažili sankcije Rusiji pa blokirali pomoć Ukrajini: Zaokret u
                moćnoj europskoj državi
              </a>
            </h2>
          </div>
          <div className="col-md-6">
            <a href="#" className="photo">
              <img src="https://www.vecernji.hr/media/img/c1/3f/7ea49f7ce2c3ced534c1.png" />
            </a>
            <p>'BAŠ NEUGODAN OSJEĆAJ'</p>
            <h2>
              <a href="#" className="title">
                {" "}
                Jak potres zatresao Dalmaciju{" "}
              </a>
            </h2>
          </div>
        </div>
      </section>

      <section className="istaknuto-2 container pb-5">
        <div className="row">
          <div className="col-md-3 stil-1">
            {/* <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
            </div> */}
            <Article
              src="https://www.vecernji.hr/media/img/94/fa/bd037a1c8f1f554ccdaf.jpeg"
              subtitle="Novi subtitle u article-u"
              title="Novi Title u artiKLU"
            />
            <Article
              src="https://www.vecernji.hr/media/img/ae/57/0bbb53e3aa4630bcbc1c.jpeg"
              subtitle="2 novi subtitle"
              title="2 novi title"
            />
          </div>
          <div className="col-md-5">
            <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
            </div>
            <div className="row stil-2">
              <div className="col-md-6">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 stil-3">
            <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
            </div>
            <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
            </div>
            <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
            </div>
            <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
            </div>
            <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-4 stil-5">
            <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
              <p>
                Arman je u veljači ove godine napunio 18. godina i tom prilikom
                je Lejla raznježila svoje pratitelje na Instagramu i otkrila je
                značenje imena svog mlađeg sina
              </p>
            </div>
          </div>
          <div className="col-md-4 stil-5">
            <div className="article">
              <a href="#" className="image">
                <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
              </a>
              <p className="subtitle">Ne može vjerovati</p>
              <h2>
                <a href="#">
                  Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku pa
                  ostala bez teksta, evo i zašto
                </a>
              </h2>
              <p>
                Arman je u veljači ove godine napunio 18. godina i tom prilikom
                je Lejla raznježila svoje pratitelje na Instagramu i otkrila je
                značenje imena svog mlađeg sina
              </p>
            </div>
          </div>
          <div className="col-md-4 stil-4">
            <div className="recent">
              <h3>Najnovije</h3>
              <div className="article">
                <a href="#" className="image">
                  <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                </a>
                <p className="subtitle">Ne može vjerovati</p>
                <h2>
                  <a href="#">
                    Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                    pa ostala bez teksta, evo i zašto
                  </a>
                </h2>
              </div>
              <div className="article">
                <a href="#" className="image">
                  <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                </a>
                <p className="subtitle">Ne može vjerovati</p>
                <h2>
                  <a href="#">
                    Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                    pa ostala bez teksta, evo i zašto
                  </a>
                </h2>
              </div>
              <div className="article">
                <a href="#" className="image">
                  <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                </a>
                <p className="subtitle">Ne može vjerovati</p>
                <h2>
                  <a href="#">
                    Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                    pa ostala bez teksta, evo i zašto
                  </a>
                </h2>
              </div>
              <div className="article">
                <a href="#" className="image">
                  <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                </a>
                <p className="subtitle">Ne može vjerovati</p>
                <h2>
                  <a href="#">
                    Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                    pa ostala bez teksta, evo i zašto
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 stil-5">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                  <p>
                    Arman je u veljači ove godine napunio 18. godina i tom
                    prilikom je Lejla raznježila svoje pratitelje na Instagramu
                    i otkrila je značenje imena svog mlađeg sina
                  </p>
                </div>
              </div>
              <div className="col-md-6 stil-5">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                  <p>
                    Arman je u veljači ove godine napunio 18. godina i tom
                    prilikom je Lejla raznježila svoje pratitelje na Instagramu
                    i otkrila je značenje imena svog mlađeg sina
                  </p>
                </div>
              </div>
              <div className="col-md-4 stil-5">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                  <p>
                    Arman je u veljači ove godine napunio 18. godina i tom
                    prilikom je Lejla raznježila svoje pratitelje na Instagramu
                    i otkrila je značenje imena svog mlađeg sina
                  </p>
                </div>
              </div>
              <div className="col-md-4 stil-5">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                  <p>
                    Arman je u veljači ove godine napunio 18. godina i tom
                    prilikom je Lejla raznježila svoje pratitelje na Instagramu
                    i otkrila je značenje imena svog mlađeg sina
                  </p>
                </div>
              </div>
              <div className="col-md-4 stil-5">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                  <p>
                    Arman je u veljači ove godine napunio 18. godina i tom
                    prilikom je Lejla raznježila svoje pratitelje na Instagramu
                    i otkrila je značenje imena svog mlađeg sina
                  </p>
                </div>
              </div>
              <div className="col-md-4 stil-5">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                  <p>
                    Arman je u veljači ove godine napunio 18. godina i tom
                    prilikom je Lejla raznježila svoje pratitelje na Instagramu
                    i otkrila je značenje imena svog mlađeg sina
                  </p>
                </div>
              </div>
              <div className="col-md-4 stil-5">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                  <p>
                    Arman je u veljači ove godine napunio 18. godina i tom
                    prilikom je Lejla raznježila svoje pratitelje na Instagramu
                    i otkrila je značenje imena svog mlađeg sina
                  </p>
                </div>
              </div>
              <div className="col-md-4 stil-5">
                <div className="article">
                  <a href="#" className="image">
                    <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                  </a>
                  <p className="subtitle">Ne može vjerovati</p>
                  <h2>
                    <a href="#">
                      Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                      pa ostala bez teksta, evo i zašto
                    </a>
                  </h2>
                  <p>
                    Arman je u veljači ove godine napunio 18. godina i tom
                    prilikom je Lejla raznježila svoje pratitelje na Instagramu
                    i otkrila je značenje imena svog mlađeg sina
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 stil-4">
            <div className="recent">
              <h3>Najčitanije</h3>
              <div className="article">
                <a href="#" className="image">
                  <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                </a>
                <p className="subtitle">Ne može vjerovati</p>
                <h2>
                  <a href="#">
                    Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                    pa ostala bez teksta, evo i zašto
                  </a>
                </h2>
              </div>
              <div className="article">
                <a href="#" className="image">
                  <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                </a>
                <p className="subtitle">Ne može vjerovati</p>
                <h2>
                  <a href="#">
                    Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                    pa ostala bez teksta, evo i zašto
                  </a>
                </h2>
              </div>
              <div className="article">
                <a href="#" className="image">
                  <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                </a>
                <p className="subtitle">Ne može vjerovati</p>
                <h2>
                  <a href="#">
                    Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                    pa ostala bez teksta, evo i zašto
                  </a>
                </h2>
              </div>
              <div className="article">
                <a href="#" className="image">
                  <img src="https://www.vecernji.hr/media/img/93/5d/dc3919367f4108c3557f.png" />
                </a>
                <p className="subtitle">Ne može vjerovati</p>
                <h2>
                  <a href="#">
                    Zanosna voditeljica za kojom svi luduju posjetila Hrvatsku
                    pa ostala bez teksta, evo i zašto
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premium mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>PREMIUM</h2>
            </div>
            <div className="col-md-4">
              <h2>Arhiva starih brojekva</h2>
              <img src="https://arhiva.vecernji.hr/PromoImage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Naslovnica;
