import React from "react";
import { observer } from 'mobx-react';
import classes from './ServicesBlock.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useMediaQuery } from 'react-responsive';

const ServicesBlock = observer((props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
        <div className={`${classes.servicesBlock} block-padding`}>
            <div className={`${classes.servicesBlock__inner} block-width`}>
                <div className={classes.servicesBlock__header}>
                    <div className={`${classes.servicesBlock__title} block-title`}>{props.state.siteBlocks.siteBlocksList[5].title}</div>
                    <div className={classes.servicesBlock__desc}>{props.state.siteBlocks.siteBlocksList[5].desc}</div>
                </div>
                <div className={classes.servicesBlock__bottom}>
                    {isMobile ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={3}
                            className={classes.servicesBlock__list}
                            >
                            {
                                props.state.siteBlocks.siteBlocksList[5].list.map((item, index) =>
                                    <SwiperSlide  className={classes.servicesBlock__item} key={index}>
                                        <div className={classes.servicesBlock__itemHeader}>
                                            <div className={classes.servicesBlock__itemIcon}>
                                                <span>
                                                    <img src={item.icon} alt={`icon_${index+1}`} />
                                                </span>
                                            </div>
                                            <div className={classes.servicesBlock__itemTitle}>{item.title}</div>
                                        </div>
                                        <div className={classes.servicesBlock__itemList}>
                                            {
                                                item.list.map((itemInner, indexInner) =>
                                                    <div className={classes.listItem} key={indexInner}>
                                                        <div className={classes.listItem__title}>{itemInner.title}</div>
                                                        <div className={classes.listItem__desc}>{itemInner.desc}</div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    ) : (
                        <div className={classes.servicesBlock__list}>
                            <div className={classes.swiperWrapper}>
                                {
                                    props.state.siteBlocks.siteBlocksList[5].list.map((item, index) =>
                                        <div className={classes.servicesBlock__item} key={index}>
                                            <div className={classes.servicesBlock__itemHeader}>
                                                <div className={classes.servicesBlock__itemIcon}>
                                                    <span>
                                                        <img src={item.icon} alt={`icon_${index+1}`} />
                                                    </span>
                                                </div>
                                                <div className={classes.servicesBlock__itemTitle}>{item.title}</div>
                                            </div>
                                            <div className={classes.servicesBlock__itemList}>
                                                {
                                                    item.list.map((itemInner, indexInner) =>
                                                        <div className={classes.listItem} key={indexInner}>
                                                            <div className={classes.listItem__title}>{itemInner.title}</div>
                                                            <div className={classes.listItem__desc}>{itemInner.desc}</div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})

export default ServicesBlock;