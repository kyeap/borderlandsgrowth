import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {Helmet} from "react-helmet";

import '../styles/main.css';

export default function Layout ({children}) {
    return (
        <>
            <Helmet defer={false}>
                <title>Borderlands Site</title>
                <meta id="MetaDescription" name="DESCRIPTION" content="We would like you to let us know your views on the Borderlands Growth Deal by emailing info@borderlandsgrowth.com " />
                <meta id="MetaKeywords" name="KEYWORDS" content="contact , involved,surveys,email,telephone, Borderlands, Borderlands Inclusive Growth Deal contact us, Borderlands Growth Deal contact us.,Northumberland County Council,NCC" />
                <meta id="MetaGenerator" name="GENERATOR" content="Northumberland County Council"/>
                <meta id="MetaRobots" name="ROBOTS" content="INDEX, FOLLOW" />
                <link rel="icon" href="https://www.borderlandsgrowth.com/favicon.ico"/>
                <html lang="en" amp />
                <script src="https://cc.cdn.civiccomputing.com/9/cookieControl-9.x.min.js" type="text/javascript"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117663104-1"></script>
                <script>
                   {`
                    const cookieconfig = {
                        apiKey: '448535b139888ffd0a1e5fb4b61f6bde653a2124',
                        product: 'PRO_MULTISITE',
                        position: "RIGHT",
                        theme: "DARK",
                        layout: "slideout",
                        statement: {
                            description: 'For more information vist our',
                            name: 'Privacy Statement',
                            url: '/Privacy',
                            updated: '24/05/2018'
                        },
                        text: {
                            thirdPartyTitle: 'This site uses cookies.',
                            thirdPartyDescription: 'Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used.'
                        },
                        optionalCookies: [
                            {
                                name: 'analytics',
                                label: 'Analytical Cookies',
                                description: 'Analytical cookies help us to improve our website by collecting and reporting information on its usage.',
                                cookies: ['_ga', '_gid', '_gat', '__utma', '__utmt', '__utmb', '__utmc', '__utmz', '__utmv'],
                                onAccept: function () {
                                    // Add Google Analytics
                                    (function (i, s, o, g, r, a, m) {
                                        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                                            (i[r].q = i[r].q || []).push(arguments)
                                        }, i[r].l = 1 * new Date(); a = s.createElement(o),
                                            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
                                    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
                                    ga('create', 'UA-117663104-1', 'auto');
                                    ga('send', 'pageview');
                                    // End Google Analytics
                                },
                                onRevoke: function () {
                                    // Disable Google Analytics
                                    window['ga-disable-UA-117663104-1'] = true;
                                    // End Google Analytics
                                }
                            }/**,
                                {
                                    name: 'socialsharing',
                                    label: 'Social Sharing Cookies',
                                    description: 'We use some social sharing plugins, to allow you to share certain pages of our website on social media',
                                    cookies: ['__atuvc', '__atuvs'],
                                    onAccept: function () {
                                        // Add addThis
                                        var script = document.createElement("script");
                                        script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-581b3669203a9a52";
                                        document.body.appendChild(script);
                                        // End addThis
                                    },
                                    onRevoke: function () {
                                    },
                                    thirdPartyCookies: [{ "name": "AddThis", "optOutLink": "http://www.addthis.com/privacy/opt-out" }]
                                }**/
                        ]}
                    `
                    }
                </script>
                <script>
                    {`  
                        console.log('script tag working');
                        setTimeout(function () {
                            console.log('ready to collect cookies');
                            CookieControl.load(cookieconfig);
                        })
                    `}
                </script>
            </Helmet>
            <div className="page-wrapper">
                <Header/>
                <main id="main">
                    {children}  
                </main>
                <Footer />
            </div>
        </>
    )
}