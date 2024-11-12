import React, {useRef, useState } from "react";
import { observer } from 'mobx-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './SolutionsBlock.module.css';

const SolutionsBlock = observer((props) => {
    return (
        <div className={`${classes.solutionsBlock} block-padding`} id="block2">
            <div className={`${classes.solutionsBlock__inner} block-width`}>
                <div className={classes.solutionsBlock__center}>
                    <div className={classes.solutionsBlock__top}>
                        <div className={classes.solutionsBlock__header}>
                            <div className={`${classes.solutionsBlock__title} block-title`}>{props.state.siteBlocks.siteBlocksList[1].title}</div>
                            <div className={classes.solutionsBlock__headerList}>
                                {
                                    props.state.siteBlocks.siteBlocksList[1].titleList.map((item,index) =>
                                        <div className={classes.listItem} key={index}>{item.title}</div>
                                    )
                                }
                            </div>
                        </div>
                        <div className={classes.solutionsBlock__list}>
                            {
                                props.state.siteBlocks.siteBlocksList[1].list.map((item,index) =>
                                    <div className={classes.solutionsBlock__item} key={index}>
                                        <div className={classes.solutionsBlock__itemImage}>
                                            <div className={classes.imageBtns}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <img src={item.image} alt={`image_${index}`} />
                                        </div>
                                        <div className={classes.solutionsBlock__itemRight}>
                                            <div className={classes.solutionsBlock__itemTitle}>
                                                <div className={classes.icon}>
                                                    <img src={item.icon} alt={`icon_${index}`} />
                                                </div>
                                                <div className={classes.title}>{item.title}</div>
                                            </div>
                                            <div className={classes.solutionsBlock__itemText}>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className={classes.solutionsBlock__bottom}>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={36}
                                slidesPerView={3}
                                className={classes.solutionsBlock__bottomList}
                                >
                                {
                                    props.state.siteBlocks.siteBlocksList[1].bottomList.map((item, index) =>
                                        <SwiperSlide  className={classes.solutionsBlock__bottomItem} key={index}>
                                            <div className={classes.solutionsBlock__botItemTitle}>{item.title}</div>
                                            <div className={classes.solutionsBlock__botItemText}>{item.text}</div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default SolutionsBlock;