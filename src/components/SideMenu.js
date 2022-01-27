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
            {/* <a href="http://bit.ly/3yKhLss" className="menu-item" >
                <span className="menu-item-icon" >
                    < img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                WORLD
            </a> */}
            {/* <a href="https://distrokid.com/hyperfollow/wilter2/not-looking-out-the-window-anymore" className="menu-item" >
                <span className="menu-item-icon" >
                    <img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                PRESAVE
            </a> */}
            <a href="https://open.spotify.com/artist/2Dhzt5rI1go7tAIIlTAz7R?si=EuRX7ixfRpaHc5D3xp1CBQ" className="menu-item" >
                <span className="menu-item-icon" >
                    <img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                SPOTIFY
            </a>
            <a href="https://music.apple.com/us/artist/wilter/1562948458" className="menu-item" >
                <span className="menu-item-icon" >
                    <img src="plus.png"
                        alt=""
                        height="14"
                        width="14" />
                </span>
                APPLE MUSIC
            </a>
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