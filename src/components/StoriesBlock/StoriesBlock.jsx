import React from "react";
import { observer } from 'mobx-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './StoriesBlock.module.scss';

const StoriesBlock = observer((props) => {
    return (
        <div className={`${classes.storiesBlock} block-padding`} id="block7">
            <div className={`${classes.storiesBlock__inner} block-width`}>
                <div className={classes.storiesBlock__header}>
                    <div className={`${classes.storiesBlock__title} block-title`}>{props.state.siteBlocks.siteBlocksList[6].title}</div>
                    <div className={classes.storiesBlock__desc}>{props.state.siteBlocks.siteBlocksList[6].desc}</div>
                </div>
                <div className={classes.storiesBlock__body}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    className={classes.storiesBlock__slider}
                    >
                    {
                        props.state.siteBlocks.siteBlocksList[6].list.map((item, index) =>
                            <SwiperSlide  className={classes.storiesBlock__item} key={index}>
                                <div className={classes.storiesBlock__left}>
                                    <div className={classes.storiesBlock__caseStudy}>{item.case}</div>
                                    <div className={classes.storiesBlock__itemTitle}>{item.title}</div>
                                    <div className={classes.storiesBlock__challenge}>Challenge:</div>
                                    <div className={classes.storiesBlock__challengeText}>{item.challenge}</div>
                                    <div className={classes.storiesBlock__solution}>Solution:</div>
                                    <div className={classes.storiesBlock__solutionText}>{item.solution}</div>
                                </div>
                                <div className={classes.storiesBlock__right}>
                                    <div className={classes.storiesBlock__results}>
                                        <div className={classes.storiesBlock__resultsIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><path d="M40.8027 20.6426C40.8027 24.5903 39.6074 28.4295 37.3462 31.7452C37.039 32.1959 36.5341 32.4395 36.0199 32.4395C35.7155 32.4395 35.4076 32.3543 35.1355 32.1758C34.4037 31.6964 34.2073 30.7259 34.6963 30.0084C36.606 27.2084 37.6152 23.9699 37.6152 20.6426C37.6152 19.2128 37.4328 17.7929 37.0729 16.4226C36.8535 15.587 37.3668 14.735 38.2191 14.5198C39.072 14.305 39.9405 14.8079 40.1599 15.6435C40.5864 17.2683 40.8027 18.9501 40.8027 20.6426ZM29.3065 35.0875C26.6295 36.6771 23.5507 37.5176 20.4027 37.5176C10.9118 37.5176 3.19019 29.9474 3.19019 20.6426C3.19019 11.3378 10.9118 3.76758 20.4027 3.76758C23.9167 3.76758 27.2957 4.79846 30.1747 6.74884C30.8987 7.23926 31.8914 7.06134 32.3919 6.3515C32.8922 5.64166 32.711 4.66846 31.9866 4.17774C28.5725 1.86511 24.567 0.642578 20.4027 0.642578C14.9537 0.642578 9.83071 2.72296 5.97769 6.50043C2.12468 10.2779 0.00268555 15.3005 0.00268555 20.6426C0.00268555 25.9847 2.12468 31.0073 5.97769 34.7847C9.83071 38.5622 14.9537 40.6426 20.4027 40.6426C24.1331 40.6426 27.7831 39.6459 30.9582 37.7602C31.7112 37.3131 31.9518 36.3524 31.4958 35.6142C31.0394 34.876 30.0595 34.6404 29.3065 35.0875ZM20.5565 25.1732C20.304 25.183 20.0684 25.0951 19.8853 24.9242L11.5384 17.1651C10.8996 16.5712 9.89079 16.5975 9.28535 17.2237C8.6796 17.8499 8.70637 18.839 9.34511 19.4326L17.6905 27.1904C18.4612 27.9088 19.4583 28.2988 20.5148 28.2988C20.5714 28.2988 20.6281 28.2976 20.6847 28.2955C21.8038 28.2512 22.8316 27.7764 23.5787 26.9582C23.5977 26.9378 23.6157 26.9167 23.6335 26.895L40.451 6.38721C41.0025 5.7146 40.8936 4.73102 40.2075 4.19055C39.5218 3.64978 38.5182 3.75659 37.9666 4.4292L21.1821 24.897C21.0172 25.0658 20.7961 25.1638 20.5565 25.1732Z" fill="#0BB9EE"/></svg>
                                        </div>
                                        <div className={classes.storiesBlock__resultsTitle}>Results:</div>
                                        <div className={classes.storiesBlock__resultsList}>
                                            {
                                                item.list.map((itemInner, itemIndex) =>
                                                    <div className={classes.storiesBlock__resultItem} key={itemIndex} dangerouslySetInnerHTML={{ __html: itemInner.title}}></div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                </div>
            </div>
        </div>
    )
})

export default StoriesBlock;