import React from "react";
import { observer } from 'mobx-react';
import classes from './Footer.module.scss';

const Footer = observer((props) => {
    return (
        <footer className={`${classes.siteFooter} block-padding`}>
            <div className={`${classes.siteFooter__inner} block-width`}>
                <div className={classes.siteFooter__left}>
                    <div className={classes.siteFooter__logo}>
                        <div className={classes.siteFooter__logoInner}>
                            <img src={props.state.siteInfo.white_logo} alt="compass_logo"/>
                        </div>
                        <div className={`${classes.siteFooter__socials} ${classes.mobileSocials}`}>
                            <div className={classes.siteFooter__socialsItem}>
                                <a href="#">
                                    <img src="src/images/fb_icon.svg" alt="fb_icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.siteFooter__copyright}>Copyright © 2023 compass. All Rights Reserved.</div>
                </div>
                <div className={classes.siteFooter__right}>
                    <div className={classes.siteFooter__address}>
                        <div className={classes.siteFooter__addressIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><g clipPath="url(#clip0_106_1289)"><path d="M10.797 3.55664C8.49906 3.55664 6.63037 5.42584 6.63037 7.72331C6.63037 10.0208 8.49906 11.89 10.797 11.89C13.095 11.89 14.9637 10.0208 14.9637 7.72331C14.9637 5.42584 13.095 3.55664 10.797 3.55664ZM10.797 10.8483C9.07381 10.8483 7.67204 9.44653 7.67204 7.72331C7.67204 6.00008 9.07381 4.59831 10.797 4.59831C12.5203 4.59831 13.922 6.00008 13.922 7.72331C13.922 9.44653 12.5203 10.8483 10.797 10.8483Z" fill="white"/><path d="M10.8076 0.992621C10.7993 0.992246 10.7926 0.992246 10.7843 0.992621C10.7753 0.992246 10.7685 0.99187 10.761 0.992621C6.89607 1.01178 3.7583 4.15856 3.7583 8.02349C3.7583 9.8583 4.55683 11.3735 5.23141 12.3256C5.23516 12.332 5.23967 12.3384 5.24493 12.3448L10.3073 19.2194C10.4155 19.367 10.6138 19.4542 10.7971 19.4542C10.9804 19.4542 11.1531 19.367 11.2613 19.2194L16.3237 12.3448C16.3289 12.3384 16.3334 12.332 16.3372 12.3256C17.0118 11.3735 17.8103 9.8583 17.8103 8.02349C17.8103 4.15856 14.6725 1.01178 10.8076 0.992621ZM15.3877 11.6702C15.3877 11.6706 15.3877 11.6706 15.3877 11.6706L10.7843 17.9217L6.18093 11.6706C6.18093 11.6706 6.18093 11.6706 6.18093 11.6702C5.60175 10.8559 4.91215 9.56233 4.91215 8.02349C4.91215 4.78694 7.54511 2.15323 10.7843 2.14647C14.0235 2.15323 16.6564 4.78694 16.6564 8.02349C16.6564 9.56233 15.9668 10.8559 15.3877 11.6702Z" fill="white"/></g><defs><clipPath id="clip0_106_1289"><rect width="20" height="20" fill="white" transform="translate(0.797119 0.223633)"/></clipPath></defs></svg>
                        </div>
                        <div className={classes.siteFooter__addressText} dangerouslySetInnerHTML={{__html:props.state.footerInfo.address}}></div>
                        <div className={classes.siteFooter__socials}>
                            {
                                props.state.footerInfo.socials.map((item, index) => 
                                    <div className={classes.siteFooter__socialsItem} key={index}>
                                        <a href={item.link}>
                                            <img src={item.icon} alt={item.title}/>
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={classes.siteFooter__contacts}>
                        <div className={classes.siteFooter__phones}>
                            
                                    <div className={classes.siteFooter__phoneItem}>
                                        <div className={classes.siteFooter__phonesIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><g clipPath="url(#clip0_106_1308)"><path d="M4.06076 11.1181C5.51285 12.8473 7.26085 14.2088 9.25595 15.1722C10.0156 15.5308 11.0314 15.9563 12.1632 16.0292C12.2334 16.0323 12.3005 16.0353 12.3706 16.0353C13.1302 16.0353 13.7404 15.774 14.2376 15.236C14.2407 15.233 14.2468 15.2269 14.2498 15.2208C14.4267 15.0081 14.6281 14.8166 14.8386 14.613C14.982 14.4763 15.1284 14.3334 15.2687 14.1875C15.9185 13.5129 15.9185 12.6558 15.2626 12.0024L13.4292 10.1759C13.118 9.8538 12.7459 9.68361 12.3554 9.68361C11.9649 9.68361 11.5897 9.8538 11.2694 10.1729L10.1772 11.2609C10.0766 11.2032 9.97285 11.1515 9.87523 11.1029C9.7532 11.0421 9.64033 10.9843 9.53966 10.9205C8.54516 10.2914 7.64218 9.47088 6.77885 8.41631C6.34262 7.86623 6.04976 7.40429 5.84537 6.93323C6.13212 6.67491 6.40058 6.40443 6.65988 6.14003C6.7514 6.04582 6.84597 5.95161 6.94054 5.85739C7.27 5.52917 7.44694 5.14928 7.44694 4.76332C7.44694 4.37736 7.27305 3.99747 6.94054 3.66925L6.03145 2.7636C5.92468 2.65723 5.82401 2.5539 5.72029 2.44753C5.51895 2.24087 5.30846 2.02814 5.10102 1.83667C4.7868 1.52972 4.41768 1.36865 4.0272 1.36865C3.63977 1.36865 3.2676 1.52972 2.94118 1.83971L1.80025 2.97633C1.38537 3.38965 1.15047 3.8911 1.10166 4.47157C1.0437 5.19791 1.17793 5.96984 1.5257 6.90284C2.05955 8.34641 2.86492 9.68665 4.06076 11.1181ZM1.84601 4.53539C1.88262 4.13119 2.0382 3.79385 2.33106 3.5021L3.46589 2.37155C3.64282 2.20136 3.83806 2.11323 4.0272 2.11323C4.21329 2.11323 4.40243 2.20136 4.57631 2.37763C4.7807 2.56606 4.97289 2.7636 5.18033 2.97329C5.28405 3.07966 5.39082 3.18603 5.4976 3.29544L6.40668 4.20109C6.59582 4.38951 6.69344 4.58097 6.69344 4.7694C6.69344 4.95782 6.59582 5.14929 6.40668 5.33771C6.31211 5.43192 6.21754 5.52917 6.12297 5.62338C5.83927 5.90906 5.57386 6.17954 5.281 6.43786C5.2749 6.44394 5.27185 6.44698 5.26575 6.45306C5.01255 6.7053 5.05221 6.94539 5.11322 7.12773C5.11627 7.13685 5.11932 7.14293 5.12237 7.15205C5.35727 7.71428 5.68368 8.24916 6.19314 8.88737C7.10832 10.0118 8.07231 10.8841 9.13393 11.5557C9.26511 11.6408 9.40543 11.7076 9.53661 11.7745C9.65863 11.8353 9.77151 11.893 9.87218 11.9569C9.88438 11.9629 9.89353 11.969 9.90573 11.9751C10.0064 12.0268 10.104 12.0511 10.2016 12.0511C10.4457 12.0511 10.6043 11.8961 10.6562 11.8444L11.7971 10.7078C11.9741 10.5315 12.1662 10.4373 12.3554 10.4373C12.5872 10.4373 12.7764 10.5801 12.8953 10.7078L14.7349 12.5373C15.1009 12.902 15.0979 13.2971 14.7257 13.6831C14.5976 13.8198 14.4634 13.9505 14.32 14.0873C14.1064 14.2939 13.8837 14.5067 13.6824 14.7467C13.3316 15.1236 12.9136 15.2999 12.3737 15.2999C12.3218 15.2999 12.2669 15.2968 12.215 15.2938C11.2144 15.23 10.284 14.841 9.58542 14.5097C7.68794 13.5949 6.0223 12.2972 4.64037 10.65C3.50249 9.28549 2.73679 8.01515 2.23039 6.65364C1.91618 5.81789 1.7972 5.14625 1.84601 4.53539Z" fill="white"/></g><defs><clipPath id="clip0_106_1308"><rect width="16" height="16" fill="white" transform="translate(0.421875 0.702148)"/></clipPath></defs></svg>
                                        </div>
                                        {
                                            props.state.footerInfo.phones.map((item, index) =>
                                                <a href={`tel:${item.title}`} key={index}>{item.title}</a>
                                            )
                                        }
                                    </div>
                                
                            
                            <div className={classes.messengers}>
                                {
                                    props.state.footerInfo.messengers.map((item, index) =>
                                        <a href={item.link} key={index}>
                                            <img src={item.icon} alt={item.title}/>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                        <div className={classes.siteFooter__mails}>
                            <div className={classes.siteFooter__mailsIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M11.9351 6.12451L8.97291 8.5332C8.41325 8.97721 7.62583 8.97721 7.06617 8.5332L4.07898 6.12451" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clipRule="evenodd" d="M11.2726 14.2236C13.3002 14.2292 14.6667 12.5633 14.6667 10.5159V5.93697C14.6667 3.88952 13.3002 2.22363 11.2726 2.22363H4.72747C2.6999 2.22363 1.33337 3.88952 1.33337 5.93697V10.5159C1.33337 12.5633 2.6999 14.2292 4.72747 14.2236H11.2726Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            {
                                props.state.footerInfo.mails.map((item,index) =>
                                    <div className={classes.siteFooter__mailItem} key={index}>
                                        <a href={`mailto:${item.title}`}>{item.title}</a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={classes.siteFooter__btn}>
                        <a href="#">
                            <span>Сonsultation</span>
                            <span className={classes.icon}>
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.2071 8.70711C21.5976 8.31658 21.5976 7.68342 21.2071 7.29289L14.8431 0.928932C14.4526 0.538408 13.8195 0.538408 13.4289 0.928932C13.0384 1.31946 13.0384 1.95262 13.4289 2.34315L19.0858 8L13.4289 13.6569C13.0384 14.0474 13.0384 14.6805 13.4289 15.0711C13.8195 15.4616 14.4526 15.4616 14.8431 15.0711L21.2071 8.70711ZM0.5 9H20.5V7H0.5V9Z" fill="white" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className={`${classes.siteFooter__copyright} ${classes.mobileCopyright}`}>{props.state.footerInfo.copyright}</div>
            </div>
        </footer>
    )
})

export default Footer;