import React, { useState } from "react";
import { observer } from 'mobx-react';
import classes from './DemobookBlock.module.scss';

const DemobookBlock = observer((props) => {
    const [selectedOption, setSelectedOption] = useState('When is the best time to reach you?');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div className={`${classes.demobookBlock} block-padding`}>
            <div className={`${classes.demobookBlock__inner} block-width`}>
                <div className={classes.demobookBlock__form}>
                    <form>
                        <div className={`${classes.demobookBlock__title} block-title`}>Book a demo</div>
                        <div className={classes.demobookBlock__formInner}>
                            <div className={classes.demobookBlock__formField}>
                                <input type="text" placeholder="First Name, Last Name" />
                            </div>
                            <div className={classes.demobookBlock__formField}>
                                <input type="text" placeholder="Practice name" />
                            </div>
                            <div className={classes.demobookBlock__formField}>
                                <input type="text" placeholder="Practice Size" />
                            </div>
                            <div className={classes.demobookBlock__formField}>
                                <input type="phone" placeholder="Phone" />
                            </div>
                            <div className={classes.demobookBlock__formField}>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className={classes.demobookBlock__formField}>
                                <select value={selectedOption} onChange={handleChange}>
                                    <option value="When is the best time to reach you?">When is the best time
                                        to reach you?</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className={classes.delim}></div>
                            <div className={`${classes.demobookBlock__formField} ${classes.halfWidth}`}>
                                <select>
                                    <option value="What best describes your role?" selected>What best describes your
                                        role?</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className={`${classes.demobookBlock__formField}  ${classes.halfWidth}`}>
                                <select>
                                    <option value="Is there any other information we should know?" selected>Is there any
                                        other information we should know?</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className={`${classes.demobookBlock__formField}  ${classes.halfWidth}`}>
                                <select>
                                    <option value="How many dental office locations are in your practice?*" selected>How
                                        many dental office locations are in your practice?*</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className={`${classes.demobookBlock__formField}  ${classes.halfWidth}`}>
                                <select>
                                    <option value="What is your current practice management software?" selected>What is
                                        your current practice management software?</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className={`${classes.demobookBlock__formField} ${classes.formButton}`}>
                                <button type="submit">
                                    <span>Send</span>
                                    <span className={classes.icon}>
                                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.2071 8.70711C21.5976 8.31658 21.5976 7.68342 21.2071 7.29289L14.8431 0.928932C14.4526 0.538408 13.8195 0.538408 13.4289 0.928932C13.0384 1.31946 13.0384 1.95262 13.4289 2.34315L19.0858 8L13.4289 13.6569C13.0384 14.0474 13.0384 14.6805 13.4289 15.0711C13.8195 15.4616 14.4526 15.4616 14.8431 15.0711L21.2071 8.70711ZM0.5 9H20.5V7H0.5V9Z"
                                                fill="white" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className={classes.form_success} style={{display: 'none'}}>Form submited!</div>
                    </form>
                </div>
            </div>
        </div>
    )
})

export default DemobookBlock;