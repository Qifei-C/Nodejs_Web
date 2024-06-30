import React, { useState, useEffect } from "react";
import "./sidebar.css";
import AnimatedLogo from "../../assets/logo/AnimatedLogo.jsx";

const Sidebar = ({ mainRef }) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!mainRef.current) {
            return;
        }


        const onScroll = () => {
            if (mainRef.current.scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Highlight active section on scroll
            const sections = document.querySelectorAll("section");
            let scrollPos = mainRef.current.scrollTop + 200;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const id = section.getAttribute("id");
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    setActiveLink(id);
                }
            });
        };

        if (mainRef.current) {
            mainRef.current.addEventListener("scroll", onScroll);
        }

        return () => {
            if (mainRef.current) {
                mainRef.current.removeEventListener("scroll", onScroll);
            }
        };
    }, [mainRef]);

    const handleLinkClick = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: "smooth" });
        setActiveLink(id);
    };

    return (
        <aside className="aside">
            <div className="nav__logo" onClick={() => handleLinkClick('home')}>
                <AnimatedLogo />
            </div>

            <nav className={scrolled ? "scrolled nav" : "nav"}>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <div 
                                className={`nav__link ${activeLink === 'home' ? 'active' : ''}`} 
                                onClick={() => handleLinkClick('home')}
                            >
                                <i className="icon-home"></i>
                            </div>
                        </li>

                        <li className="nav__item">
                            <div 
                                className={`nav__link ${activeLink === 'about' ? 'active' : ''}`} 
                                onClick={() => handleLinkClick('about')}
                            >
                                <i className="icon-book-open"></i>
                            </div>
                        </li>

                        <li className="nav__item">
                            <div 
                                className={`nav__link ${activeLink === 'certificates' ? 'active' : ''}`} 
                                onClick={() => handleLinkClick('certificates')}
                            >
                                <i className="icon-badge"></i>
                            </div>
                        </li>

                        <li className="nav__item">
                            <div 
                                className={`nav__link ${activeLink === 'resume' ? 'active' : ''}`} 
                                onClick={() => handleLinkClick('resume')}
                            >
                                <i className="icon-graduation"></i>
                            </div>
                        </li>

                        <li className="nav__item">
                            <div 
                                className={`nav__link ${activeLink === 'testimonials' ? 'active' : ''}`} 
                                onClick={() => handleLinkClick('testimonials')}
                            >
                                <i className="icon-speech"></i>
                            </div>
                        </li>

                        <li className="nav__item">
                            <div 
                                className={`nav__link ${activeLink === 'contact' ? 'active' : ''}`} 
                                onClick={() => handleLinkClick('contact')}
                            >
                                <i className="icon-bubbles"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2024 - 2025.</span>
            </div>
        </aside>
    );
};

export default Sidebar;