import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import classes from './Header.module.css';


const Header = observer((props) => {
    useEffect(() => {
        let IsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const headerElement = document.querySelector(`.${classes.siteHeader}`);
        if (headerElement) {
            
            const HEADER_WR = document.querySelector(`#siteHeader`);
            const BURGER_BTN = document.querySelector(`.${classes.siteHeader__burgerBtn}`);

            if (window.scrollY > 0) {
                HEADER_WR.classList.add(`${classes.fixed}`)
            } else {
                HEADER_WR.classList.remove(`${classes.fixed}`)
            }

            document.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    HEADER_WR.classList.add(`${classes.fixed}`)
                } else {
                    HEADER_WR.classList.remove(`${classes.fixed}`)
                }
            })
            let scrollHeight = IsMobile ? 500 : 800;
            /*window.addEventListener('scroll', () => {
                if (document.scrollingElement.scrollTop > scrollHeight) {
                    document.querySelector('.to-top-btn a').classList.add('active')
                } else {
                    document.querySelector('.to-top-btn a').classList.remove('active')
                }
            });
            document.querySelector('.to-top-btn a').addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });*/

            document.querySelector(`#siteLogo`).addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            BURGER_BTN.addEventListener('click', (e) => {
                BURGER_BTN.classList.toggle(classes.active)
                document.querySelector(`.${classes.siteHeader__right}`).classList.toggle(`${classes.opened}`)
                document.querySelector('html').classList.toggle(`${classes.overflow_hidden}`)
            });

            const anchorMenu = document.querySelector(`.${classes.siteHeader__menu}`);

            let blockId;
            anchorMenu.querySelectorAll('a').forEach((item) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    blockId = item.getAttribute('href');
                    scrollToElement(blockId, 100);
                    document.querySelector(`.${classes.siteHeader__burgerBtn}`).classList.remove(classes.active)
                    document.querySelector(`.${classes.siteHeader__right}`).classList.remove(classes.opened)
                    document.querySelector('html').classList.remove(classes.overflow_hidden)
                })
            })

            function scrollToElement(blockId, offset) {
                let element = document.getElementById(blockId);
                let elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                let offsetPosition = elementPosition - offset;
            
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [classes.siteHeader]); // Зависимость на classes.siteHeader
    return (
        <div className={`${classes.siteHeader} block-padding`} id="siteHeader">
            <div className={`${classes.siteHeader__inner} block-width`}>
                <div className={classes.siteHeader__left}>
                    <div className={classes.siteHeader__logo} id="siteLogo">
                        <img src={props.state.siteInfo.logo} alt="site_logo" className={classes.black_logo}/>
                        <img src={props.state.siteInfo.white_logo} alt="site_logo" className={classes.white_logo}/>
                    </div>
                    <div className={classes.siteHeader__button}>
                        <a href="#">
                            <span>Request demo</span>
                            <i>
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9835 8.60261C21.374 8.21209 21.374 7.57893 20.9835 7.1884L14.6195 0.82444C14.229 0.433916 13.5958 0.433916 13.2053 0.82444C12.8148 1.21496 12.8148 1.84813 13.2053 2.23865L18.8622 7.89551L13.2053 13.5524C12.8148 13.9429 12.8148 14.5761 13.2053 14.9666C13.5958 15.3571 14.229 15.3571 14.6195 14.9666L20.9835 8.60261ZM0.276367 8.89551H20.2764V6.89551H0.276367V8.89551Z" fill="white" />
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className={classes.siteHeader__right}>
                    <div className={classes.siteHeader__menu}>
                        <nav>
                            <ul>
                                {
                                    props.state.siteBlocks.siteBlocksList.map((item, index) => 
                                        <li key={index}>
                                            <a href={`block${item.id}`}>{item.title}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className={classes.siteHeader__langs}></div>
                </div>
                <div className={classes.siteHeader__burgerBtn}></div>
            </div>
        </div>
    )
})

export default Header;