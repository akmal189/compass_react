import React from "react";
import { observer } from 'mobx-react';
import classes from './Footer.module.css';

const Footer = observer((props) => {
    return (
        <div className={classes.siteFooter}></div>
    )
})

export default Footer;