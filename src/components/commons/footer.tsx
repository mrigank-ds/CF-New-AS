import * as React from "react";
// import Footeraccordian from "./Footeraccordian";
// import Scroll from "./Scroll"

type props = {
    helpAndSupport : any,
    
}

export default function Footer(data : props) {
    let helpAndSupportTitle = data.helpAndSupport.headerLinksHeading;
    let helpAndSupportLinks = data.helpAndSupport.links;
    let helpAndSupportMenus = helpAndSupportLinks.map((submenus:any)=>{
        return(
            <>
                <li>
                    <a href={submenus.link}>
                        {submenus.label}
                    </a>
                </li>
            </>
        )
    })
    // console.log(data.helpAndSupport.headerLinksHeading,"Menus");
    
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);
    React.useEffect(() => {
       const mediaQuery = window.matchMedia("(max-width:1023px)");
       mediaQuery.addListener(handleMediaQueryChange);
       handleMediaQueryChange(mediaQuery);
   
       return () => {
         mediaQuery.removeListener(handleMediaQueryChange);
       };
     }, []);
     
   const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
    return (
      <>
      <hr></hr>
      <div className="header-main">
                <div className="centered-container logo-hdr">
                    <footer>
                        <div>
                            <a href="#" rel="noopener noreferrer" >
                                <img
                                    src="https://communityfibre.co.uk/_next/static/images/logoDesktop-9bf97008bd5975f83100ccfb417dfa14.svg"
                                    width="full" alt="logo"
                                    height="50" ></img></a>
                        </div>
                        <div className="text-2xl font-bold">
                            {helpAndSupportTitle}
                        </div>
                        <ul className="gap-x-10 font-normal">
                            {helpAndSupportMenus}
                        </ul>
                    </footer>
                </div>
            </div>
      </>
    )

}