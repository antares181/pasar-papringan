import React, { useRef, useEffect, useState } from 'react';
import Icon from '../components/Icon';
import gsap from 'gsap';

import Instagram from '../assets/icons/icon-instagram.svg'
import Twitter from '../assets/icons/icon-twitter.svg'
import Facebook from '../assets/icons/icon-facebook.svg'
import Youtube from '../assets/icons/icon-youtube.svg'

const BigMenu = ({props}) => {

  const [state, setState] = useState({
    type: 'about',
  })

  // reference
  let bigMenu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let info = useRef(null);
  // let infoFooter = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);

  useEffect(() => {
    if (props.clicked === false) {
      // close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.08
        }
      })
      gsap.to(bigMenu, {
        duration: 1,
        css: {
          display: 'none'
        }
      })
    } else if (props.clicked === true) {
      //open menu
      gsap.to(bigMenu, {
        duration: 0,
        css: {
          display: 'block',
        }
      })
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: '100%'
      })
      staggerReveal(revealMenuBackground, revealMenu)
      staggerText(line1,line2,line3, line4)
      // fadeInUpFooter(infoFooter)
      fadeInUp(info)
    }
  }, [props])

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration : 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 4,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.15
      }  
    })
  }

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: .2,
      opacity: 0,
      ease: 'power3.inOut'
    })
  }

  const staggerText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 0.8,
      y: 100,
      delay: .2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.5
      }
    })
  }


  const handleHover = (e, type) => {
    setState({type})
  }

  const subMenu = () => {
    if (state.type === 'about') {
      return 'Tentang'
    } else if (state.type === 'facilities') {
      return 'Fasilitas Pasar Papringan'
    } else if (state.type === 'tambu-jatra') {
      return 'Tambu Jatra Pasar Papringan'
    } else {
      return 'Cara berkolaborasi'
    }  
  }

  const ContentMenu = () => {
    if (state.type === 'about') {
      return (
        <>
          <div className="item">01. Sejarah</div>
          <div className="item">02. Pagelaran</div>
          <div className="item">03. Peta Lokasi</div>
          <div className="item">04. Tim dan Komunitas</div>
          <div className="item">05. Galeri dan Dokumentasi</div>
        </>
      )
    } else if (state.type === 'facilities') {
      return (
        <>
          <div className="item">01. Fasilitas Umum</div>
          <div className="item">02. Homestay</div>
          <div className="item">03. Venue</div>
        </>
      )
    } else if (state.type === 'tambu-jatra') {
      return (
        <>
          <div className="item">01. Jelajah Tambu Jatra</div>
          <div className="item">02. Workshop</div>
          <div className="item">03. Kerajinan Tangan</div>
        </>
      )
    } else if (state.type === 'collaboration') {
      return (
        <>
          <div className="item">01. Cara Terlibat</div>
          <div className="item">02. Kegiatan Komunitas</div>
          <div className="item">03. Publikasi</div>
          <div className="item">04. Kontak Kami</div>
        </>
      )
    }
  }

  return (
    <div ref={el => (bigMenu = el)} className="big-menu">
      <div ref={el => (revealMenuBackground = el)} className="big-menu-secondary"></div>
      <div ref={el => (revealMenu = el)} className="menu-layer">
        <div className="menu-left">
          <div className="menu-wrapper">
            <div 
              ref={el => (line1 = el)} 
              className="item"
              onMouseEnter={e => handleHover(e, 'about')}
            >
              <span>Tentang Kami</span>
              <span className="sub-item"></span>
            </div>
          </div>
          <div className="menu-wrapper">
            <div 
              ref={el => (line2 = el)}
              onMouseEnter={e => handleHover(e, 'facilities')}
              className="item">
                <span>Fasilitas</span>
                <span className="sub-item"></span>
            </div>
          </div>
          <div className="menu-wrapper">
            <div 
              ref={el => (line3 = el)}
              onMouseEnter={e => handleHover(e, 'tambu-jatra')}
              className="item">
                <span>Tambu jatra</span>
              <span className="sub-item"></span>
            </div>
          </div>
          <div className="menu-wrapper">
            <div 
              ref={el => (line4 = el)}
              onMouseEnter={e => handleHover(e, 'collaboration')}
              className="item">
                <span>Kolaborasi</span>
                <span className="sub-item"></span>
            </div>
          </div>
          <div className="footer-menu">
            <div className="address">
              <Icon icon="calendar"></Icon>
              <div className="detailAddress">Desa Ngadiprono, Temanggung, Jawa Tengah Indonesia</div>
            </div>
          </div>
        </div>
        <div className="menu-right">
          <div ref={el => (info = el)} className="menu-wrapper">
            <div className="sub-menu">Menu {subMenu()}</div>
            <ContentMenu/>
          </div>
          <div className="footer-menu">
            <div className="social-media">
              <div className="our-social-media">Our Social Media</div>
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
    </div>
  )
}

export default BigMenu;