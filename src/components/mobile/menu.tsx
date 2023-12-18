import desktopLogo from '@/assets/img/logo/desktop-logo.png'
import { useEffect, useState } from 'react';



const MobileMenu = () => {
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

    const [isOpen, setIsOpen] = useState(false);

    const style = {
        overflow: "hidden",
        height: isOpen ? 200 : 0,
        // display: isOpen ? 'block' : 'none',
        transition: "1s"
    }
    return (
        <>
            <div className="arlo_tm_mobile_header_wrap">
                <div className="main_wrap">
                    <div className="logo">
                        <a href="#"><img
                            src={desktopLogo}
                            alt="mobile_logo"
                            style={{ height: 50 }}
                        /></a>
                    </div>
                    <div className="arlo_tm_trigger">
                        <div className={isOpen ? "hamburger hamburger--collapse-r is-active"
                            : "hamburger hamburger--collapse-r"}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"
                                    onClick={() => {
                                        setIsOpen(prev => !prev)
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_mobile_menu_wrap"
                    style={style}>
                    <div className="mob_menu">
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
                </div>
            </div>
        </>
    )
}

export default MobileMenu;