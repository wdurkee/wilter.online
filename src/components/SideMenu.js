import React from 'react'
import './SideMenu.css'
import {
    Image
} from 'react-bootstrap';

class SideMenu extends React.Component {
    state = {}
    render() {
        return (<div className="side-menu" >
            <Image src="wilter-text.png" className="logo-image" />
            {/* <a href="https://dice.fm/partner/dice/event/pknrk-makeoutmusic-presents-wilter-12th-may-baader-house-los-angeles-tickets" className="menu-item" >
                <span className="menu-item-icon" >
                    < img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                EP RELEASE SHOW TICKETS
            </a> */}
            {/* <a href="https://wilter.ffm.to/allthisleaving.OIS" className="menu-item" >
                <span className="menu-item-icon" >
                    <img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                PRESAVE
            </a> */}
            <a href="https://wilter.ffm.to/music" className="menu-item" >
                <span className="menu-item-icon" >
                    <img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                LISTEN
            </a>
            {/* <a href="https://music.apple.com/us/artist/wilter/1562948458" className="menu-item" >
                <span className="menu-item-icon" >
                    <img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                APPLE MUSIC
            </a> */}
            <a href="https://www.youtube.com/channel/UCPfgqlNC3FMaN1JsmsMAJPQ" className="menu-item">
                <span className="menu-item-icon"><img src="plus.png" alt="" height="14" width="14" /></span>
                YOUTUBE
            </a>
            <a href="https://www.tiktok.com/@_wilter" className="menu-item" >
                <span className="menu-item-icon" >
                    <img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                TIK TOK
            </a>
            <a href="https://www.instagram.com/wilt.er/"
                className="menu-item" >
                <span className="menu-item-icon" >
                    <img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                INSTAGRAM
            </a>
            <a href="https://linktr.ee/wilt.er" className="menu-item" >
                <span className="menu-item-icon" >
                    < img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                PRESS
            </a>
            {
                /* <a href="https://www.tiktok.com/@_wilter" className="menu-item">
                                <span className="menu-item-icon"><img src="plus.png" alt="" height="14" width="14"/></span>
                                    TIK TOK
                                </a>
                                <a href="https://www.youtube.com/channel/UCPfgqlNC3FMaN1JsmsMAJPQ" className="menu-item">
                                <span className="menu-item-icon"><img src="plus.png" alt="" height="14" width="14"/></span>
                                    YOUTUBE
                                </a> */
            }
            <p className="bottom-text" >
                none of this was ever supposed to happen anyways.
            </ p>
            <p className="contact" >
                mgmt@wilter.online
            </ p>
        </div>
        );
    }
}

export default SideMenu;