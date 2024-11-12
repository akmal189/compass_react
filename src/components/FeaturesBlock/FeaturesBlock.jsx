import React, {useRef, useState } from "react";
import { observer } from 'mobx-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './FeaturesBlock.module.css';

const FeaturesBlock = observer((props) => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleNavigation = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className={`${classes.featuresBlock}`} id="block3">
            <div className={`${classes.featuresBlock__inner}`}>
                <div className={classes.featuresBlock__image}>
                    <picture>
                        <source media="(min-width: 1101px)" srcSet={props.state.siteBlocks.siteBlocksList[2].image} />
                        <source media="(max-width: 1100px)" srcSet={props.state.siteBlocks.siteBlocksList[2].mob_image} />
                        <img src={props.state.siteBlocks.siteBlocksList[2].image} alt="features_image" />
                    </picture>
                </div>
                <div className={classes.featuresBlock__right}>
                    <div className={classes.featuresBlock__title}>
                        <div className={classes.bgTitle}>{props.state.siteBlocks.siteBlocksList[2].title}</div>
                        <div className={`${classes.title} block-title`}>{props.state.siteBlocks.siteBlocksList[2].title}</div>
                    </div>
                    <div className={classes.featuresBlock__list}>
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={handleNavigation}
                            onReachBeginning={() => setIsBeginning(true)}
                            onReachEnd={() => setIsEnd(true)}
                            modules={[Navigation, Pagination]}
                            spaceBetween={32}
                            slidesPerView={3.3}
                            className={classes.featuresBlock__slider}
                            >
                            {
                                props.state.siteBlocks.siteBlocksList[2].list.map((item, index) =>
                                    <SwiperSlide  className={classes.featuresBlock__item} key={index}>
                                        <div className={classes.featuresBlock__itemTitle}>
                                            <div className={classes.title} dangerouslySetInnerHTML={{ __html: item.title}}></div>
                                            {item.icon &&
                                                <div className={classes.icon}>
                                                    <img src={item.icon} alt={`icon_${index}`} />
                                                </div>
                                            }
                                            
                                        </div>
                                        <div className={classes.featuresBlock__itemList}>
                                            {
                                                item.list.map((itemInner, indexInner) =>
                                                    <div className={classes.item} key={indexInner}>
                                                        <div className={classes.title}>{itemInner.title}</div>
                                                        <div className={classes.text}>{itemInner.text}</div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                        <div className={classes.featuresBlock__sliderControls}>
                            <div className={`${classes.swiperButtonPrev} ${isBeginning ? classes.swiperButtonDisabled : ''}`} onClick={() => swiperRef.current.slidePrev()}></div>
                            <div className={`${classes.swiperButtonNext} ${isEnd ? classes.swiperButtonDisabled : ''}`} onClick={() => swiperRef.current.slideNext()}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default FeaturesBlock;