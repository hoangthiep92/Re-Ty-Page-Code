import desktopLogo from '@/assets/img/logo/desktop-logo.png'
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';


export interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<string>("home");

    useEffect(() => {
        const { hash } = window.location;

        if (hash) {
            const tab = hash.replace('#', "")
            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

    }, [])

    const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const section = document.querySelector(`#${tab}`);
        setActiveTab(tab)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.location.hash = tab;
            }, 1000)
        }
    }

    return (
        <>
            <div className={props.showLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img
                            src={desktopLogo}
                            alt="desktop-logo"
                            style={{ height: 100 }}
                        /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li><a href="#home"
                                className={activeTab === 'home' ? 'active' : ""}
                                onClick={(event) => handleClickTab('home', event)}
                            >Home</a></li>
                            <li><a href="#about"
                                className={activeTab === 'about' ? 'active' : ""}
                                onClick={(event) => handleClickTab('about', event)}
                            >About</a></li>
                            <li><a href="#skills"
                                className={activeTab === 'skills' ? 'active' : ""}
                                onClick={(event) => handleClickTab('skills', event)}
                            >Skills</a></li>
                            <li><a href="#project"
                                className={activeTab === 'project' ? 'active' : ""}
                                onClick={(event) => handleClickTab('project', event)}
                            >Projects</a></li>
                            <li><a href="#contact"
                                className={activeTab === 'contact' ? 'active' : ""}
                                onClick={(event) => handleClickTab('contact', event)}
                            >Contact</a></li>
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li><a href="#"><i className="xcon-facebook"></i></a></li>
                                <li><a href="#"><i className="xcon-twitter"></i></a></li>
                                <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                                <li><a href="#"><i className="xcon-instagram"></i></a></li>
                                <li><a href="#"><i className="xcon-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {!isMobile &&
                        <a
                            className={props.showLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                            href='#'
                            onClick={(e) => {
                                e.preventDefault()
                                props.setShowLeftPart(!props.showLeftPart)
                            }} //toggle
                        >
                            <i className={props.showLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i>
                        </a>
                    }

                </div>
            </div>
        </>
    )
}

export default LeftPart;