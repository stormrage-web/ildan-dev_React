import React, {useEffect, useState, setState} from 'react'
import Case from './components/case/Case'
import Contacts from './components/contacts/Contacts'
import Footer from './components/Footer'
import Header from './components/Header'
import './styles/main.sass';

function App() {
  const [contactsActive, setContactsActive] = useState(true);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowY = (mobileMenuActive) ?  "hidden" : "unset";
  }, [mobileMenuActive]);

  var cases = [
    {
      id: 0,
      background: "./img/iproffi.jpg",
      number: "01",
      title: "Iproffi",
      description: [
        "React app (demo)",
        "Course platform like Geekbrains and Skillbox"
      ],
      button: "Case Study",
      href: "https://i-proffi.com/"
    },
    {
      id: 1,
      background: "./img/bird.jpg",
      number: "02",
      title: "Hotel 'Bird'",
      description: [
        "Self-made template for Wordpress site",
      ],
      button: "Case Study",
      href: "https://birdhotel.ru/"
    },
    {
      id: 2,
      background: "./img/delivery.png",
      number: "03",
      title: "Delivery food",
      description: [
        "Simple template (HTML5/CSS3/Vue.js)",
        "Google PageSpeed Insights score: 95-100"
      ],
      button: "Case Study",
      href: "https://delivery-food.ildan-dev.ru"
    },
  ];

  function printCases() {
    return (
      cases.map((item) => {
      return <Case key={item.id} info={item}/>
    })
  )
  }
  return (
    <div className="App">
      <section id="top">
        <Header active={mobileMenuActive} setActive={setMobileMenuActive} setContactsActive={setContactsActive}/>

        <div className="big-logo"/>
        <div className="name">
          <div className="text-loading-mask">
            <h1>Ildan Sharifullin</h1>
            <div id="h1-mask" className="h-loading"></div>
          </div>
          <div className="text-loading-mask">
            <h2>Front-end developer</h2>
            <div id="h2-mask" className="h-loading h2-loading"></div>
          </div>
            <div onClick={() => setContactsActive(false)} className="button-mask" >
            <input id="about" type="button" value="About me" />
            <span className="button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
                <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"/>
              </svg>
            </span>
            <div id="btn-mask" className="h-loading btn-loading"></div>
          </div>
        </div>
        <div></div>
        <div></div>
        <ul className="social-vertical-stripe">
          <li><a href="https://t.me/d1sinterested" target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane" style={{color: "#4c4f65"}}></i></a></li>
          <li><a href="https://vk.com/dis1nterested" target="_blank"  rel="noreferrer"><i className="fab fa-vk" style={{color: "#4c4f65"}}></i></a></li>
          <li><a href="mailto:sharfull33@gmail.ru" target="_blank"  rel="noreferrer"><i className="far fa-envelope" style={{color: "#4c4f65"}}></i></a></li>
        </ul>
      </section>

      <div>
        <section id="works" className="works-section">
          <div className="section-mask"></div>
          <div className="content">
            <div className="section-text-mask">
              <h4 className="h5 section-subtitle">Case Studies</h4>
            </div>
            <div className="section-text-mask">
              <h2 className="h3 section-title">Latest Works</h2>
            </div>
            <ul className="works-list">

            {printCases()}

            </ul>
          </div>


        </section>
        </div>

        <Contacts active={contactsActive} setActive={setContactsActive}/>

        <Footer/>
    </div>
  );
}

export default App;
