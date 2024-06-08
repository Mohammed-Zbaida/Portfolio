import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import projet1 from './packages/images/projet1.jpg';
import projet2 from './packages/images/projet2.png';
import projet3 from './packages/images/projet3.PNG';
import './Projects.css';


const Projects = () => {
  return (
    <section className='projects'>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent works</span>
        <div className="portfolio__container container swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className="swiper-wrapper"
          >


            <SwiperSlide className="portfolio__content grid swiper-slide">
              <img src={projet2} alt="" className="portfolio__img" />
              <div className="portfolio_">
                <h3 className="portfolio__title">Modern Dashboard</h3>
                <p className="portfolio__description">
                Le Lorem Ipsum est du texte latin utilisé pour la composition et la mise en page avant impression. Il provient d'un traité de Cicéron et peut être généré aléatoirement avec un dictionnaire de 200 mots
                </p>
                <a href="#" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide className="portfolio__content grid swiper-slide">
              <img src={projet2} alt="" className="portfolio__img" />
              <div className="portfolio_">
                <h3 className="portfolio__title">E-Commerce website</h3>
                <p className="portfolio__description">
                  Above Amazon clone is adaptable to all device.
                </p>
                <a href="#" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide className="portfolio__content grid swiper-slide">
              <img src={projet2} alt="" className="portfolio__img" />
              <div className="portfolio_">
                <h3 className="portfolio__title">Brand Design</h3>
                <p className="portfolio__description">
                  Tesla Clone is adaptable to all devices, with UI components and animated interactions.
                </p>
                <a href="#" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </SwiperSlide>



          </Swiper>
          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </section>
  );
};

export default Projects;