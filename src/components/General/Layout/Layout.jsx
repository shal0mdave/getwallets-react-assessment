import React, { Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router';

const Layout = (props) => {
    
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
   
    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="author" content="Shalom Effiom" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                <meta name="theme-color" content={props.themeColour || '#121212'} />
                <meta name="description" content={props.description || "Building virtual wallets for your applications just got easier!"} />

                <meta property="og:title" content={props.title || 'Welcome to GetWallets!'} />
                <meta property="og:description" content={props.description || "Building virtual wallets for your applications just got easier!"} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={props.url || 'https://getwallets.vercel.app/'} />
                <meta property="og:image" content={props.image || `https://getwallets.vercel.app/logo.png`} />

                <title>{props.title || "Welcome to GetWallets!"}</title>

                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <Fragment>
                {props.children}
            </Fragment>
        </Fragment>
    )
}

export default Layout;