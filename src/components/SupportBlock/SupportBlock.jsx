import React from "react";
import { observer } from 'mobx-react';
import classes from './SupportBlock.module.scss';

const SupportBlock = observer((props) => {
    return (
        <div className={`${classes.supportBlock} block-padding`} id="block8">
            <div className={`${classes.supportBlock__inner} block-width`}>
                <div className={`${classes.supportBlock__title} block-title`}>{props.state.siteBlocks.siteBlocksList[7].title}</div>
                <div className={classes.supportBlock__list}>
                    {
                        props.state.siteBlocks.siteBlocksList[7].list.map((item,index) =>
                            <div className={classes.supportBlock__item} data-item={`${item}-index`} key={index}>
                                <div className={classes.supportBlock__itemIcon}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><path d="M17.6247 8.56453C18.0152 8.174 18.0152 7.54084 17.6247 7.15032L11.2607 0.786354C10.8702 0.39583 10.2371 0.39583 9.84653 0.786354C9.45601 1.17688 9.45601 1.81004 9.84653 2.20057L15.5034 7.85742L9.84653 13.5143C9.45601 13.9048 9.45601 14.538 9.84653 14.9285C10.2371 15.319 10.8702 15.319 11.2607 14.9285L17.6247 8.56453ZM0.690552 8.85742H16.9176V6.85742H0.690552V8.85742Z" fill="white"/></svg>
                                    </span>
                                </div>
                                <div className={classes.supportBlock__itemTitle}>{item.title}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
})

export default SupportBlock;
