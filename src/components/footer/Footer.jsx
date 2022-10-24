import React from 'react'
import Copyright from './copyright/Copyright';
import classes from './Footer.module.css'
import FooterLinks from './links/FooterLinks';
import Options from './options/Options';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.options}><Options /></div>
            <div className={classes.links}><FooterLinks/></div>
            <div className={classes.copyright}><Copyright/></div>
        </footer>
    );
};

export default Footer