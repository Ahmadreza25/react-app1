import React from "react";
import logo from "../../image/imgs1/logo.png"
import icon1 from "../../image/icons/icon1.png"
import icon2 from "../../image/icons/icon2.png"
import icon3 from "../../image/icons/icon3.png"
import icon4 from "../../image/icons/icon4.png"
import icon5 from "../../image/icons/icon5.png"
import icon6 from "../../image/icons/icon6.png"

import "./Header.css"


const Header = () => {
    return(
        <div>
            <div className="main-div-header">
                <div className="div-main-header2">
                            <div className="div-header-2">
                                <div>
                                    <button className="button-icon">
                                        <img src={icon5} className="btn-icon-2"/>
                                    </button>
                                </div>
                                <div>
                                    <img src={logo} className="logo2"/>
                                </div>
                                <div>
                                    <button className="button-icon">
                                        <img src={icon2} className="btn-icon-2"/> 
                                    </button>
                                </div>
                            </div>
                </div>
                <header className="header">
                    <div className="div-logo">
                        <img src={logo} className="logo"/>
                    </div>
                    <div className="list-div-btn">
                        <div className="div-btn">
                            <button className="btn1">
                                CAFE FINDER
                            </button>
                        </div>
                        <div className="div-btn">
                            <button className="btn1">
                                OUR STORY
                                <img src={icon6} className="icon-1"/>
                            </button>
                        </div>
                        <div className="div-btn">
                            <button className="btn1">
                                SHOP
                                <img src={icon6} className="icon-1"/>
                            </button>
                        </div>
                        <div className="div-btn">
                            <button className="btn1">
                                SUP SCRIPTONS
                                <img src={icon6} className="icon-1"/>
                            </button>
                        </div>
                        <div className="div-btn">
                            <button className="btn5">
                                BREW GUIDES
                            </button>
                        </div>
                        <div className="div-btn">
                            <button className="btn6">    
                                NEWS
                            </button>
                        </div>
                        <div className="div-btn">
                            <button className="btn7">
                                WHOLESALE
                            </button>
                        </div>
                    </div>
                    <div className="icon-btn">
                        <button className="btn-icon">
                            <img src={icon1} className="icon"/>
                        </button>
                        <button className="btn-icon">
                            <img src={icon2} className="icon"/>
                        </button>
                        <button className="btn-icon">
                            <img src={icon3} className="icon"/>
                        </button>
                        <button className="btn-icon">
                            <img src={icon4} className="icon"/>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    )
}


export default Header