import React, { useState } from "react";
import { observer } from 'mobx-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './PricingBlock.module.scss';

const PricingBlock = observer((props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOverlayOpened, setIsOverlayOpened] = useState(false); // Для контроля класса `opened`
    const [modalData, setModalData] = useState(null);

    const handleOpenModal = (title, text) => {
        setModalData({ title, text });
        setIsModalOpen(true);
        // Устанавливаем задержку перед добавлением класса `opened`
        setTimeout(() => {
            setIsOverlayOpened(true);
        }, 300);
    };

    const handleCloseModal = () => {
        setIsOverlayOpened(false);
        setTimeout(() => {
            setIsModalOpen(false);
            setModalData(null);
        }, 300);
    };
    return (
        <div className={`${classes.pricingBlock} block-padding`} id="block9">
            <div className={`${classes.pricingBlock__inner} block-width`}>
                <div className={classes.pricingBlock__header}>
                    <div className={`${classes.pricingBlock__title} block-title`}>{props.state.siteBlocks.siteBlocksList[8].title}</div>
                    <div className={classes.pricingBlock__desc}>{props.state.siteBlocks.siteBlocksList[8].desc}</div>
                </div>
                <div className={classes.pricingBlock__body}>
                    <div className={classes.pricingBlock__itemsTitles}>
                        <div className={classes.pricingBlock__itemsTitle}>Monthly Price</div>
                        <div className={classes.pricingBlock__itemsTitle}>Annual Price (10% discount)</div>
                        <div className={classes.pricingBlock__itemsTitle}>Included Active Users</div>
                        <div className={classes.pricingBlock__itemsTitle}>Per Additional User Fee</div>
                    </div>
                    <div className={classes.pricingBlock__slider}>
                        <Swiper modules={[Pagination]} spaceBetween={14.5} slidesPerView={3} className={classes.pricingBlock__sliderInner}>
                            {
                                props.state.siteBlocks.siteBlocksList[8].list.map((item, index) =>
                                    <SwiperSlide className={classes.pricingBlock__item} key={index}>
                                        <div className={classes.pricingBlock__itemTitle}>{item.title}</div>
                                        <div className={classes.pricingBlock__itemBody}>
                                            {
                                                item.priceList.map((priceItem, priceIndex) =>
                                                    <div className={classes.pricingBlock__itemPrice} key={priceIndex}>
                                                        <div className={classes.mobileTitle}>{priceItem.title}</div>
                                                        <div className={classes.title}><b>{priceItem.price}</b></div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className={classes.pricingBlock__itemBtn}>
                                            <a href="#" onClick={(e) => {e.preventDefault();handleOpenModal(item.popupTitle, item.popupText);}} data-item={`item-${index}`}><span>more detalis</span></a>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            {isModalOpen && modalData && (
                <div className={`${classes.popupBlock} ${isOverlayOpened ? classes.opened : ''}`} onClick={handleCloseModal}>
                    <div className={classes.popupBlock__inner} onClick={(e) => e.stopPropagation()}>
                        <div className={classes.popupBlock__closer} onClick={handleCloseModal}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="25.3536" y1="1.30802" x2="1.36895" y2="25.2926" stroke="black"></line>
                                <line x1="24.6464" y1="25.2931" x2="0.661841" y2="1.30852" stroke="black"></line>
                            </svg>
                        </div>
                        <div className={classes.popupBlock__title}>{modalData.title}</div>
                        <div className={classes.popupBlock__body} dangerouslySetInnerHTML={{ __html: modalData.text}}></div>
                    </div>
                </div>
            )}
        </div>
    )
})

export default PricingBlock;