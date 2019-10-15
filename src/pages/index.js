import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/01.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/01.jpg'),
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/02.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/02.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/images/gallery/fulls/03.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/03.jpg'),
    title: 'Any time ',
    desc: 'Be one with the time',
  },
  {
    src: require('../assets/images/gallery/fulls/04.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/05.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/05.jpg'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/06.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/gallery/fulls/07.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/07.jpg'),
    title: 'Be in present',
    desc: 'Be one with the present',
  },
];

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>Was ist Mediation?</h2>
        </header>
        <div className="content">
          <p>
            <strong>Mediation ist</strong> ein strukturiertes Verfahren zur Vermittlung 
            und Regelung von Konflikten. Mediation versachlicht den Konflikt und bietet 
            jedem den Raum, seine Wünsche und Interessen darzulegen. Ziel der Mediation 
            ist eine gemeinsame und einvernehmliche Regelung der Konflikte durch die 
            Konfliktparteien. Streitigkeiten haben ihre eigene Dynamik und viele 
            Faktoren spielen eine Rolle. Aus diesem Grund ist die Lösung von Konflikten 
            und deren Vermeidung nicht einfach. Bei diesem Prozess werden Sie von mir als 
            neutrale Dritte unterstützt. Als Mediatorin biete ich Ihnen den Rahmen für 
            Schutz, Respekt und Wertschätzung. Die im Mediationsverfahren getroffene 
            Vereinbarung ist rechtsverbindlich, sofern das Gesetz nicht die notarielle
             Beurkundung vorschreibt. In diesem Fall ist die Mediationsvereinbarung noch
              von Ihrem Notar zu beurkunden. 
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Das biete ich an</h2>
        </header>
        <div className="content">
          <p>
            <strong>Eine Mediation verläuft</strong> in der Regel über 5–7 Sitzungen, 
            wobei eine Sitzung 90 Minuten dauert. Ein halbstündiges Informationsgespräch
             über das Mediationsverfahren ist kostenlos. Einige Rechtsschutzversicherungen 
             übernehmen die Kosten eines Mediationsverfahrens. Bitte erkundigen Sie sich 
             bei Ihrer Versicherung. 
          </p>
          <ul className="feature-icons">
            <li className="icon fa-link">Trennungsmediation</li>
            <li className="icon fa-bolt">Scheidungsmediation</li>
            <li className="icon fa-users">Familienmediation</li>
            <li className="icon fa-balance-scale">Mediation zwischen Erben</li>
            <li className="icon fa-map-signs">XYZ</li>



          </ul>
          <p>
            Vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
                        <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
        </div>
      </section>

      <section>
        <header>
          <h2>Über mich</h2>
        </header>
        <div className="content">
          <p>
            Streitende sollen wissen, dass nie einer ganz recht hat
          </p>  
          <p>
            und der andere ganz unrecht. <strong>Kurt Tucholsky</strong>
          </p>
          <section>
            <section>
            <header>
              <h3>2014</h3>
              <p>
               Fortbildung Verfahrensbeistand BAG 
              </p>
              <h3>2011-2013</h3>
              <p>
              Ausbildung zur Mediatorin
              </p>
              <h3>2009-2011</h3>
              <p>
             Selbständige Berufsbetreuerin
              </p>
              <h3>2009-2010</h3>
              <p>
             Fortbildung zur Gruppenleiterin
              </p>
              <h3>2003 - heute </h3>
              <p>
             Telefonseelsorgin in Hamm
              </p>
              <h3>1998 - 2009</h3>
              <p>
             Berufsbetreuerin in Beckum
              </p>
              <h3>1984</h3>
              <p>
             Diplomstudiengang Soziale Arbeit an der KFH Aachen
              </p>
            </header>
            
          </section>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

         

          
        </div>
      </section>


      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
