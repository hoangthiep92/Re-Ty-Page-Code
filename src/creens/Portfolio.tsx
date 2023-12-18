import { useEffect, useState } from "react";
import PreLoader from "../components/Preloader";
import LeftPart from "../components/leftpart";
import MobileMenu from "../components/mobile/menu";
import RightPart from "../components/rightpart";
import { FloatButton } from 'antd';
import { isMobile } from 'react-device-detect';


const Portfolio = () => {

    const [showLeftPart, setShowLeftPart] = useState<boolean>(false)

    useEffect(() => {
        if (isMobile) {
            setShowLeftPart(true)
        }
    }, [])

    return (
        <div className="arlo_tm_wrapper_all">

            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close"><a href="#"></a></span>
            </div>

            {/* <!-- PRELOADER --> */}
            <PreLoader />
            {/* <!-- /PRELOADER --> */}

            {/* <!-- MOBILE MENU --> */}
            {isMobile &&
                <MobileMenu />
            }
            {/* <!-- /MOBILE MENU --> */}

            {/* <!-- CONTENT --> */}
            <div className="arlo_tm_content">

                {/* <!-- LEFTPART --> */}
                <LeftPart
                    showLeftPart={showLeftPart}
                    setShowLeftPart={setShowLeftPart}
                />
                {/* <!-- /LEFTPART --> */}

                {/* <!-- RIGHTPART --> */}
                <RightPart
                    showLeftPart={showLeftPart}
                    setShowLeftPart={setShowLeftPart}
                />
                {/* <!-- /RIGHTPART --> */}

                {/* <a className="arlo_tm_totop" href="#"></a> */}
                <FloatButton.BackTop
                    tooltip={<div>Scroll to bottom</div>}
                />

            </div>
            {/* <!-- CONTENT --> */}
        </div>
    )
}

export default Portfolio;