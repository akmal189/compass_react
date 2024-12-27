import React from "react";
import { observer } from 'mobx-react';
import gsap from 'gsap';
import classes from './BenefitsBlock.module.css';

const BenefitsBlock = observer((props) => {
    // Функция для добавления стилей
    let addStylesBenefits = (element) => {
        gsap.to(element, {
        padding: "12.5px 53.5px", 
        fontSize: "16px", 
        width: 'auto',
        duration: 0.3, 
        overwrite: "auto"
        });
    };
    
    // Функция для удаления стилей
    let removeStylesBenefits = (element) => {
        gsap.to(element, {
        padding: "", // Установите обратно на исходное значение
        fontSize: "", // Установите обратно на исходное значение
        duration: 0.3, 
        width: 0,
        overwrite: "auto"
        });
    };
    
    // Создаем экземпляр Intersection Observer
    let observerBenefits = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                addStylesBenefits(entry.target);
            }, 300);
        } else {
            removeStylesBenefits(entry.target);
        }
        });
    });
    
    // Находим все кнопки
    let benefitsButtons = document.querySelectorAll(`.${classes.benefitsBlock__btn} a`);
    
    // Наблюдаем за каждой кнопкой
    benefitsButtons.forEach(button => {
        observerBenefits.observe(button);
    });
    return (
        <div className={`${classes.benefitsBlock} block-padding`} id="block4">
            <div className={`${classes.benefitsBlock__inner} block-width`}>
                <div className={classes.benefitsBlock__center}>
                    <div className={`${classes.benefitsBlock__title} block-title`}>{props.state.siteBlocks.siteBlocksList[3].title}</div>
                    <div className={classes.benefitsBlock__body}>
                        <div className={classes.benefitsBlock__left}>
                            <div className={classes.benefitsBlock__text}>{props.state.siteBlocks.siteBlocksList[3].text}</div>
                            <div className={classes.benefitsBlock__btn}>
                                <a href={props.state.siteBlocks.siteBlocksList[3].link}>
                                    <span>{props.state.siteBlocks.siteBlocksList[3].btnText}</span>
                                    <ins>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M20.9835 8.60261C21.374 8.21209 21.374 7.57893 20.9835 7.1884L14.6195 0.82444C14.229 0.433916 13.5958 0.433916 13.2053 0.82444C12.8148 1.21496 12.8148 1.84813 13.2053 2.23865L18.8622 7.89551L13.2053 13.5524C12.8148 13.9429 12.8148 14.5761 13.2053 14.9666C13.5958 15.3571 14.229 15.3571 14.6195 14.9666L20.9835 8.60261ZM0.276367 8.89551H20.2764V6.89551H0.276367V8.89551Z" fill="white"/></svg>
                                    </ins>
                                </a>
                            </div>
                        </div>
                        <div className={classes.benefitsBlock__list}>
                            {
                                props.state.siteBlocks.siteBlocksList[3].list.map((item, index) =>
                                    <div className={classes.benefitsBlock__item} key={index}>
                                        <div className={classes.benefitsBlock__itemIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none"><path d="M12.8769 24.4809L26.5562 10.7268L24.6654 8.84634L12.872 20.7046L7.22009 15.0527L5.33447 16.9385L12.8769 24.4809Z" fill="#0BB9EE"/></svg>
                                        </div>
                                        <div className={classes.benefitsBlock__itemTitle}>{item.title}</div>
                                        <div className={classes.benefitsBlock__itemText}>{item.text}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default BenefitsBlock;