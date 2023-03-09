import * as React from "react";
import { useState } from "react";
import { svgIcons } from "./iconheader";


type props = {
    headerLinks: any,
}
/**
* Component for Header
* @param headerItem 
* @returns HTML element
*/
export default function Header(data: props) {
    let headerLinks = data.headerLinks;
  
    let headerLabels = headerLinks ? headerLinks.map((res: any) => {
        // console.log(res.label,"headerLinks");
        return (
            <>
                <li className="hover:text-[#9c9090]">
                    <a href={res.link} className="course-accordion" rel="noopener noreferrer">
                        {res.label}
                    </a>
                </li>
            </>
        )
    }) : "Site data not found";

    React.useEffect(() => {
        document.body.setAttribute("id", "body");
    });
    const toggle = () => {
        (document.getElementById("body") as HTMLInputElement).classList.toggle("menu-opened");
    };

    return (
        <>
            <div className="header-main">
                <div className="centered-container logo-hdr">
                    <nav>
                        <div>
                            <a href="#" rel="noopener noreferrer" >
                                <img
                                    src="https://communityfibre.co.uk/_next/static/images/logoDesktop-9bf97008bd5975f83100ccfb417dfa14.svg"
                                    width="full" alt="logo"
                                    height="50" ></img></a>
                        </div>
                        <ul className="flex  gap-x-10 text-2xl font-normal">
                            {headerLabels}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* <div className="header-main" >


                <div className="centered-container logo-hdr" >
                    <nav className=" ">
                        <div>
                            <a href="#" rel="noopener noreferrer" >
                                <img
                                    src="https://communityfibre.co.uk/_next/static/images/logoDesktop-9bf97008bd5975f83100ccfb417dfa14.svg"
                                    width="full" alt="logo"
                                    height="50" ></img></a>
                        </div>
                        <div>
                            <button type="button" className="menu-toggle w-8 h-6 flex flex-col justify-between  hello" onClick={toggle}>
                                <span></span>
                            </button>
                        </div>
                        <ul className="submenu flex  gap-x-10 text-2xl font-normal ">

                            <li className="nav-dropdown-main hover:text-[#9c9090]">
                                {headerLabels}
                            </li>
                        </ul>


                    </nav>

                </div>
            </div> */}
        </>
    );
};
