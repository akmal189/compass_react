import React from "react";
import { observer } from 'mobx-react';
import classes from './StepsBlock.module.css';

const StepsBlock = observer((props) => {
    return (
        <div className={`${classes.stepsBlock} block-padding`}>
            <div className={`${classes.stepsBlock__inner} block-width`}>
                <div className={classes.stepsBlock__header}>
                    <div className={`${classes.stepsBlock__title} block-title`}>{props.state.siteBlocks.siteBlocksList[4].title}</div>
                    <div className={classes.stepsBlock__desc}>{props.state.siteBlocks.siteBlocksList[4].text}</div>
                </div>
                <div className={classes.stepsBlock__list}>
                    {
                        props.state.siteBlocks.siteBlocksList[4].list.map((item, index) =>
                            <div className={classes.stepsBlock__item} key={index}>
                                <div className={classes.stepsBlock__itemHeader}>
                                    <div className={classes.stepsBlock__itemNumber}>
                                        {index+1 < 10 ? (
                                            `0${index+1}`
                                        ) : (
                                            index
                                        )}
                                    </div>
                                    <div className={classes.stepsBlock__itemTitle}>
                                        <ins>
                                            {index === 2 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="89" height="2" viewBox="0 0 89 2" fill="none"><line opacity="0.3" x1="0.0993661" y1="0.991211" x2="88.991" y2="0.991364" stroke="black"/></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="8" viewBox="0 0 90 8" fill="none"><path opacity="0.3" d="M89.2361 4.34492C89.4314 4.14966 89.4314 3.83307 89.2361 3.63781L86.0541 0.455825C85.8589 0.260562 85.5423 0.260562 85.347 0.455824C85.1518 0.651085 85.1518 0.967668 85.347 1.16293L88.1755 3.99136L85.347 6.81978C85.1518 7.01505 85.1518 7.33163 85.347 7.52689C85.5423 7.72215 85.8589 7.72215 86.0541 7.52689L89.2361 4.34492ZM-0.00903406 4.49121L88.8826 4.49136L88.8826 3.49136L-0.00903234 3.49121L-0.00903406 4.49121Z" fill="black"/></svg>
                                            )}
                                        </ins>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                                <div className={classes.stepsBlock__itemList}>
                                    {
                                        item.list.map((itemInner, indexInner) =>
                                            <div className={classes.listItem} key={indexInner}>
                                                <div className={classes.listItem__title}>{itemInner.title}</div>
                                                <div className={classes.listItem__desc}>{itemInner.text}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
})

export default StepsBlock;