import {useState, useRef} from 'react'

import {VscSearch} from 'react-icons/vsc'
import {BsFillCaretRightFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import header_art from './assets/svg/header_art.svg'
import section_art from './assets/svg/section_art.svg'
import footer_art from './assets/svg/footer_art.svg'
import header_wave from './assets/svg/header_wave.svg'
import footer_wave from './assets/svg/footer_wave.svg'
export default function App() {

  const [menuBgColor, setMenuBgColor] = useState("white")
  const [menuColor, setMenuColor] = useState("black")
  const [menuTop, setTop] = useState("-100vh")
  const [clicked, setClicked] = useState(false)

  const inputSel = useRef()

  const handleMenuClick = e => {
    setClicked(!clicked)
    if(clicked) {
      setMenuBgColor("white")
      setMenuColor("black")
      setTop("0")
    }
    else {
      setMenuBgColor("white")
      setMenuColor("black")
      setTop("-100vh")
    }
  }

  const setFocus = e => {
    inputSel.current.focus()
  }

  return (
    <div className="body-div">
    <div className="header-wave bg">
      <img src={header_wave} alt=""  />
    </div>

    <div className="burger-nav" style={{backgroundColor:`${menuBgColor}`, color:`${menuColor}`}}>
      <GiHamburgerMenu onClick={handleMenuClick}/>
    </div>
   
    <nav style={{top:`${menuTop}`}}>
      <div className="nav-link-wrapper">
        <div className="nav-link">About</div>
        <div className="nav-link">Team</div>
        <div className="nav-link">Pricing</div>
        <div className="nav-link">Issues</div>
        <div className="nav-link">Sign In</div>
      </div>
      <div className="search-bar-wrapper" onClick={setFocus}>
          <input type="text" className="search-input"  ref={inputSel}/>
          <VscSearch className="search-icon"/>
      </div>
    </nav>
    <section className="section-1">
      <div className="left-container">
        <h1>Digital Marketing</h1>
        <h3>Targeted and Interactive marketing of goods and services</h3>
        <p>Sign Up and get a discount</p>
        <button>Sign Up &nbsp;&nbsp; <BsFillCaretRightFill /></button>
      </div>
      <div className="right-container">
        <img src={header_art} alt="" />
      </div>
    </section>
    <section className="section-2">
      <div className="left-container">
        <img src={section_art} alt="" />
      </div>
      <div className="right-container">
        <h2>Design and strategy</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deserunt similique laboriosam provident aspernatur tempore sapiente incidunt minima veritatis recusandae animi sint, enim blanditiis aliquam minus labore tempora, repellendus mollitia!</p>
        <h2>Digital Marketing Channels</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus minima tenetur pariatur perspiciatis! Ducimus dicta similique earum cum, cupiditate quod reiciendis possimus blanditiis temporibus deleniti facilis illum, facere sed asperiores.</p>
      </div>
    </section>
    <footer>
      <img src={footer_art} alt="" className="footer-art"/>
      <div className="footer-wave bg">
        <img src={footer_wave} alt=""  />
      </div>
    </footer>
    </div>
  );
}

