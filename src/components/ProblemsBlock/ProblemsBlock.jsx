import React, {useRef, useState } from "react";
import { observer } from 'mobx-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './ProblemsBlock.module.css';

const ProblemsBlock = observer((props) => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleNavigation = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className={`${classes.problemsBlock} block-padding`} id="block1">
            <div className={`${classes.problemsBlock__inner} block-width`}>
                <div className={classes.problemsBlock__top}>
                    <div className={`${classes.problemsBlock__title} block-title`}>{props.state.siteBlocks.siteBlocksList[0].title}</div>
                    <div className={classes.problemsBlock__desc} dangerouslySetInnerHTML={{ __html: props.state.siteBlocks.siteBlocksList[0].desc }}></div>
                </div>
                <div className={classes.problemsBlock__list}>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={handleNavigation}
                        onReachBeginning={() => setIsBeginning(true)}
                        onReachEnd={() => setIsEnd(true)}
                        modules={[Navigation, Pagination]}
                        spaceBetween={26}
                        slidesPerView={4}
                        className={classes.problemsBlock__listSlider}
                        >
                        {
                            props.state.siteBlocks.siteBlocksList[0].list.map((item, index) =>
                                <SwiperSlide  className={classes.problemsBlock__item} key={index}>
                                    <div className={classes.problemsBlock__itemTitle}>{item.title}</div>
                                    <div className={classes.problemsBlock__itemIcon}>
                                        <span><img src={item.icon} alt="icon" /></span>
                                    </div>
                                    <div className={classes.problemsBlock__itemProblem}>
                                        <div className={classes.problemsBlock__itemProblemTitle}>Problem:</div>
                                        <div className={classes.problemsBlock__itemProblemText}>{item.problem}</div>
                                    </div>
                                    <div className={classes.problemsBlock__itemImpact}>
                                        <div className={classes.problemsBlock__itemImpactTitle}>Impact:</div>
                                        <div className={classes.problemsBlock__itemImpactText}>{item.impact}</div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                    <div className={classes.problemsBlock__sliderControls}>
                        <div className={`${classes.swiperButtonPrev} ${isBeginning ? classes.swiperButtonDisabled : ''}`} onClick={() => swiperRef.current.slidePrev()}></div>
                        <div className={`${classes.swiperButtonNext} ${isEnd ? classes.swiperButtonDisabled : ''}`} onClick={() => swiperRef.current.slideNext()}></div>
                    </div>
                </div>
                <div className={classes.problemsBlock__checkText}>
                    <div className={classes.icon}>
                        <img src={props.state.siteBlocks.siteBlocksList[0].checkIcon} alt="checkIcon" />
                    </div>
                    <div className={classes.text}>{props.state.siteBlocks.siteBlocksList[0].text}</div>
                </div>
            </div>
        </div>
    )
})

export default ProblemsBlock;