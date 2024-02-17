import React from "react";
import Logo from "../assets/images/logo.svg"
import Search from "../assets/images/search.svg"
import Store from "../assets/images/store.svg"

export default function Navbar() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={Logo} alt="apple" />
                    </li>
                    <li>
                        <a className="link-styled">Store</a>
                    </li>
                    <li>
                        <a className="link-styled">Mac</a>
                    </li>
                    <li>
                        <a className="link-styled">IPad</a>
                    </li>
                    <li>
                        <a className="link-styled">IPhone</a>
                    </li>
                    <li>
                        <a className="link-styled">Watch</a>
                    </li>
                    <li>
                        <a className="link-styled">AirPods</a>
                    </li>
                    <li>
                        <a className="link-styled">Tv & Home</a>
                    </li>
                    <li>
                        <a className="link-styled">Accessories</a>
                    </li>
                    <li>
                        <a className="link-styled">Support</a>
                    </li>
                    <li>
                       <img src={Search} alt="" />
                    </li>
                    <li>
                       <img src={Store} alt="" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}