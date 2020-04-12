import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from 'react-router-dom';
import BigMenu from '../components/BigMenu';
import Icon from './Icon';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const Header = ({history}) => {

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu'
  })

  // state disabled button
  const [disabled,setDisabled] = useState(false)

  // use effect for page changes
  useEffect(() => {
    // listen page changes
    history.listen(() => {
      setState({
        clicked: false,
        menuName: 'Menu'
      })
    })
  })

  const handleMenu = () => {
    disabledMenu();
    if(state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close'
      })
    } else if (state.clicked) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu'
      })
    } else if (!state.clicked) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close'
      })
    }
  }

  // determine if our menu button should ne disabled
  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  let sectionNav = useRef(null);
  const intersection = useIntersection(sectionNav, {
    root: null,
    rootMargin: '-60px',
    threshold: 1
  })

  const opacityTrue = (el) => {
    gsap.to(el, .5, {
      css: {
        backgroundColor: 'rgba(255,255,255,1)',
        borderBottom: '1px solid rgb(244, 244, 244)'
      },
      ease: 'power4.out'
    })
  }

  const opacityFalse = (el) => {
    gsap.to(el, .5, {
      css: {
        backgroundColor: 'rgba(255,255,255,0)',
        borderBottom: 'none'
      },
      ease: 'power4.out'
    })
  }

  intersection && intersection.intersectionRatio < 1
  ? opacityTrue('.visibility')
  : opacityFalse('.visibility')
  
  return (
    <header>
      <div ref={sectionNav} className="container">
        <div className="navigation visibility">
          <div className="inner-navigation">
            <div className="logo">
              <Link to="/">Pasar Papringan</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                <span>{state.menuName}</span>
                <Icon icon={state.clicked ? 'close' : 'menu'}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BigMenu props={state} />
    </header>
  );
};

export default withRouter(Header);
