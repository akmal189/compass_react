import React from "react";
import { observer } from 'mobx-react';
import classes from './FirstBlock.module.scss';

const FirstBlock = observer((props) => {
    if(document.querySelector(`.${classes.firstBlock__btn}`)) {
        setTimeout(() => {
            document.querySelector(`.${classes.firstBlock__btn}`).classList.add(`${classes.active}`)
        }, 1000);
    }
    if(document.querySelector(`.${classes.firstBlock__video}`)) {
        setTimeout(() => {
            document.querySelector(`.${classes.firstBlock__video}`).classList.add(`${classes.active}`)
        }, 1300);
    }
    return (
        <div className={`${classes.firstBlock} block-padding`}>
            <div className={`${classes.firstBlock__inner} block-width`}>
                <div className={classes.firstBlock__left}>
                    <h1 className={classes.firstBlock__title}>{props.state.siteFirstBlock.title}</h1>
                    <div className={classes.firstBlock__desc}>{props.state.siteFirstBlock.subTitle}</div>
                    <div className={classes.firstBlock__text}>{props.state.siteFirstBlock.desc}</div>
                    <div className={classes.firstBlock__btn}>
                        <a href="#"><span>Request Demo</span></a>
                    </div>
                </div>
                <div className={classes.firstBlock__right}>
                    <div className={classes.firstBlock__video}>
                        <iframe width="560" height="400" src={props.state.siteFirstBlock.videoLink} title='Google I/O 2011: YouTube&#39;s iframe Player: The Future of Embedding' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default FirstBlock;