import React, { useRef, useEffect } from 'react';
import Logo from './../assets/icons/logo-papri.png';
import Image1 from './../assets/images/header-image.png';
import Button from '../components/Button';
import { buttonReadArticle } from '../utils/config';
import ImageAbout from '../assets/images/about-image-1.png'
import SectionTitle from '../components/SectionTitle';
import Instagram from '../assets/icons/icon-instagram.svg';
import Twitter from '../assets/icons/icon-twitter.svg';
import Facebook from '../assets/icons/icon-facebook.svg';
import Youtube from '../assets/icons/icon-youtube.svg';
import Icon from '../components/Icon';

import ImageSchedule1 from '../assets/images/schedule-image-1.png';
import ImageSchedule2 from '../assets/images/schedule-image-2.png';
import ImageSchedule3 from '../assets/images/schedule-image-3.png';
import ImageVideo from '../assets/images/image-video.png';

import SponsorYoutube from '../assets/images/sponsor-adobe.png';
import SponsorSlack from '../assets/images/sponsor-slack.png';
import SponsorBitbucket from '../assets/images/sponsor-bitbucket.png';
import SponsorAdobe from '../assets/images/sponsor-adobe.png';

// import gsap from 'gsap';

import { TimelineLite, Power3 } from 'gsap';
import { useIntersection } from 'react-use';

const Home = ({state}) => {
  return (
    <>
      <SectionHeader/> 
      <SectionAbout/>
      <SectionSchedule/>
      <SectionFacilities/>
      <SectionLocation/>
      <SectionSponsor/>
      <SectionFooter/>
    </>
  )
}

function SectionHeader() {

  let tl = new TimelineLite({delay: .8});
  
  const button = buttonReadArticle;
  let revealBackground = useRef(null)
  let revealImage = useRef(null)
  let articleRef = useRef(null)
  let titleRef = useRef(null)
  let descriptionRef = useRef(null)
  let buttonRef = useRef(null)
  let logoRef = useRef(null)

  useEffect(() => {
    staggerReveal(revealBackground)
    fadeInUp(logoRef)
    contentReveal(articleRef, titleRef, descriptionRef, buttonRef)
    tl.from(revealImage, 1.2, { x: 1500, ease: Power3.easeOut }, .7)
      .from(revealImage.firstElementChild, 2, { scale: 4, ease: Power3.easeOut }, .1)
  }, [tl])

  const staggerReveal = (node1) => {
    tl.from(node1, {
      duration: 1,
      x: -1200,
      ease: [.25,.1,.25,1],
    })
  }

  const fadeInUp = (node) => {
    tl.from(node, {
      y: 60,
      duration: 1,
      delay: .2,
      opacity: 0,
      ease: 'power3.inOut'
    }, '-=.5')
  }

  const contentReveal = (node1, node2, node3, node4) => {
    tl.from([node1, node2, node3, node4], {
      duration: 0.8,
      y: 100,
      // delay: .2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.5
      }
    }, '-=.5')
  }

  return (
    <div>
      <div ref={el => revealBackground = el} className='bg-top'></div>
      <div className="container">
        <div className='home'>
          <div className='carousel'>
            <div className="content–wrapper">
              <img ref={el => logoRef = el} src={Logo} className="logo-papri" alt="logo-papringan"></img>
              <div className="inner-content">
                <div className="category">
                  <div className="item" ref={el => articleRef = el}>Artikel Papringan</div>
                </div>
                <div className="title">
                  <div className="item" ref={el => titleRef = el}>Kenapa harus ke Pasar Papringan di minggu wage?</div>
                </div>
                <div className="body">
                  <div className="item" ref={el => descriptionRef = el}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century.</div>
                </div>
                <div className="header-social">
                  <div className="item" ref={el => buttonRef = el}>
                    <Button props={button}></Button>
                    <div className="social-list">
                      <img src={Instagram} alt="instagram"/>
                      <img src={Twitter} alt="twitter"/>
                      <img src={Facebook} alt="facebook"/>
                      <img src={Youtube} alt="youtube"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-wrapper">
              <div ref={el => revealImage = el} className="image-container">
                <img src={Image1} alt="artikel"></img>
              </div>
              <div className="carousel-pointer">
                <div className="item-active"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const stories = [
  {
    title: 'Perjalanan Pasar Papringan pada masa awal dibentuk',
    description: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless.',
    to: ''
  },
  {
    title: 'Kenapa memilih pring sebagai daya tarik utama',
    description: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy.',
    to: ''
  },
  {
    title: 'Sejarah terbentuknya Pasar Papringan',
    description: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful',
    to: ''
  }
]

function SectionAbout() {

  const sectionTitle = {
    action: true,
    sub_title: 'Perjalanan Pasar Papringan',
    title: 'Cerita Tentang Pasar Papringan'
  }

  return (
    <div className="container">
      <div className="section-about">
        <SectionTitle props={sectionTitle}/>
        <div className='inner-section'>
          {stories.map((el,index) => {
            return (
              <div key={index} className={index === 0 ? 'card-first' : index + 1 === stories.length ? 'card-last' : 'card-main'}>
                <div className="index">{index < 10 ?`0${index + 1}` : index}</div>
                <div className="image" style={{ backgroundImage: 'url(' + ImageAbout + ')' }}></div>
                <div className="title">{el.title}</div>
                <div className="description">{el.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function SectionSchedule() {

  const sectionTitle = {
    action: true,
    sub_title: 'Informasi pagelaran Pasar Papringan',
    title: 'Jadwal Pagelaran Pasar Papringan Bulan April 2020'
  }

  const schedules = [
    {
      date: '05 April 2020',
      detail: 'Pagelaran Pasar Papringan pertama dibulan April 2020'
    },
    {
      date: '23 April 2020',
      detail: 'Pagelaran Pasar Papringan kedua dibulan April 2020'
    },
  ]

  return (
    <div className="container">
      <div className="bg-schedule"></div>
      <div className="section-schedule">
        <SectionTitle props={sectionTitle}/>
        <div className='inner-section'>
          <div className="left-section">
            {schedules.map((el, index) => {
              return (
                <div key={index} className="schedule">
                  <Icon icon="calendar"/>
                  <div>
                    <div className="date">{el.date}</div>
                    <div className="detail">{el.detail}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="right-section">
            <div className="left">
              <img src={ImageSchedule1} alt="image1" />
            </div>
            <div className="right">
              <img src={ImageSchedule2} alt="image2" />
              <img src={ImageSchedule3} alt="image3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionFacilities() {

  const sectionTitle = {
    sub_title: 'Fasilitas pasar papringan',
    title: 'Ada apa saja di Pasar Papringan Ngadiprono?'
  }

  const facilities = {
    left: [
      {
        icon: 'calendar',
        title: '130+',
        detail: 'Jajanan Tradisional Pasar'
      },
      {
        icon: 'calendar',
        title: 'Ruang Sosial',
        detail: 'Interaksi sosial dengan konsep menarik'
      },
      {
        icon: 'calendar',
        title: 'Hasil Tani',
        detail: 'Beragam hasil tani dari Ngadiprono'
      },
    ],
    right: [
      {
        icon: 'calendar',
        title: 'Workshop',
        detail: 'Ada ruang workshop & pameran'
      },
      {
        icon: 'calendar',
        title: 'Kesenian',
        detail: 'Kesenian dari seluruh kebudayaan Indonesia'
      },
      {
        icon: 'calendar',
        title: 'Fasilitas Umum',
        detail: 'Fasilitas umum untuk kemudahan akses orang-orang tertentu'
      },
    ]
  }

  return (
    <div className="container separator">
      <div className="side">
        <Icon icon="ornament-2"/>
      </div>
      <div className="section-facility">
        <SectionTitle props={sectionTitle}/>
        <Icon icon="ornament-1"/>
        <div className='inner-section'>
          <div className="content">
            <div className="video-container">
              <img src={ImageVideo} alt="image-video-papringan"/>
              <div className="play-square">
                <Icon icon="calendar"/>
                <div>Lihat Video Pasar Papringan</div>
              </div>
              <div className="play-circle"></div>
            </div>
            <div className="lists">
              <div className="left">
                {facilities.left.map((el, index) => {
                  return (
                    <div key={index} className="item-wrapper">
                      <Icon icon={el.icon}/>
                      <div className="item">
                        <div className="item-title">{el.title}</div>
                        <div className="detail">{el.detail}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="right">
                {facilities.right.map((el, index) => {
                  return (
                    <div key={index} className="item-wrapper">
                      <Icon icon={el.icon}/>
                      <div className="item">
                        <div className="item-title">{el.title}</div>
                        <div className="detail">{el.detail}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionLocation() {

  const sectionTitle = {
    action: true,
    sub_title: 'Lokasi pagelaran',
    title: 'Lokasi pagelaran Pasar Papringan'
  }

  const Location = () => {
    return (
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8149027385925!2d110.16173811477493!3d-7.261895194758202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7079c7ff2c937f%3A0x6523e3fe607dde54!2sPasar%20Papringan%20Ngadiprono!5e0!3m2!1sen!2sid!4v1586691911921!5m2!1sen!2sid" style={{ border:0, width: '100%', height: '450px' }}></iframe>
    )
  }

  return (
    <div className="container">
      <div className="section-location">
        <SectionTitle props={sectionTitle}/>
        <div className='inner-section'>
          <div className="location">
            <div className="icon-wrapper">
              <Icon icon="pin"/>
            </div>
            <div className="address">Dusun Ngadiprono, Temanggung, Jawa Tengah Indonesia</div>
          </div>
          <Location/>
        </div>
      </div>
    </div>
  )
}

function SectionSponsor() {

  const sectionTitle = {
    action: true,
    sub_title: 'Lokasi pagelaran',
    title: 'Lokasi pagelaran Pasar Papringan'
  }

  return (
    <div className="container">
      <div className="sponsors-area">
        <div className="inner-section-sponsors">
          <img src={SponsorYoutube} alt="sponsor-youtube"/>
          <img src={SponsorSlack} alt="sponsor-slack"/>
          <img src={SponsorBitbucket} alt="sponsor-bitbucket"/>
          <img src={SponsorAdobe} alt="sponsor-adobe"/>
        </div>
      </div>
    </div>
  )
}

function SectionFooter() {

  const metaNav = [
    {
      title: 'Tentang Kami',
      menu: [
        { text: 'Sejarah',to: ''},
        { text: 'Pagelaran',to: ''},
        { text: 'Peta Lokasi',to: ''},
        { text: 'Tim dan Komunitas',to: ''},
        { text: 'Dokumentasi dan Galeri',to: ''},
      ]
    },
    {
      title: 'Fasilitas',
      menu: [
        { text: 'Fasilitas Umum',to: ''},
        { text: 'Homestay',to: ''},
        { text: 'Venue',to: ''},
      ]
    },
    {
      title: 'Tambu Jatra',
      menu: [
        { text: 'Jelajah Tambu Jatra',to: ''},
        { text: 'Workshop',to: ''},
        { text: 'Kerajinan Tangan',to: ''},
      ]
    },
    {
      title: 'Kolaborasi',
      menu: [
        { text: 'Cara Terlibat',to: ''},
        { text: 'Kegiatan Komunitas',to: ''},
        { text: 'Publikasi',to: ''},
        { text: 'Kontak Kami',to: ''},
      ]
    },
  ]

  const MetaNav = () => {
    return (
      <>
      {metaNav.map((el, index) => {
        return (
          <div key={index} className="item-meta">
            <div className="title-meta">{el.title}</div>
            {el.menu.map((el,idx) => {
              return (
                <div key={idx} className="data-meta">{el.text}</div>
              )
            })}
          </div>
        )
      })}
      </>
    )
  }

  return (
    <div className="container separator-top footer-bg">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="description-meta">
            <img src={Logo} className="logo-papri-footer" alt="logo-papringan"></img>
            <div className="trade-title">Pasar Papringan</div>
            <div className="trade-desc">Penjelasan singkat tentang pasar papringan itu sebenarnya apa, disini cukup menjelaskan secara singkat saja</div>
          </div>
          <div className="meta–navigation">
            <MetaNav/>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-meta">
            <img src={Instagram} alt="instagram"/>
            <img src={Twitter} alt="twitter"/>
            <img src={Facebook} alt="facebook"/>
            <img src={Youtube} alt="youtube"/>
          </div>
          <div className="trademark">
            Pasar Papringan @2020 - All Right Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;