import React, { Fragment } from 'react'

const ParsedText = ({text, className}) => {
    return (
        <Fragment>
            <div className={`parsedHTML ${className ? className : ''}`} dangerouslySetInnerHTML={{__html: text || '' }}/>
            <style global jsx>{`
                .parsedHTML div {
                    display: block;
                }
                .parsedHTML p {
                    display: block;
                    margin-top: 1em;
                    margin-bottom: 1em;
                    font-size: 18px;
                    line-height: 22px;
                }
                .parsedHTML strong, .parsedHTML b {
                    font-weight: 700;
                }
                .parsedHTML i, .parsedHTML em {
                    font-style: italic;
                }
                .parsedHTML li {
                    display: list-item;
                    margin-top: 0.5em;
                    margin-bottom: 0.5em;
                    font-size: 17px;
                }
                .parsedHTML ol {
                    display: block;
                    list-style-type: decimal;
                    margin-top: 1em;
                    margin-bottom: 1em;
                    margin-left: 0;
                    margin-right: 0;
                    padding-left: 40px;
                }
                .parsedHTML ul {
                    display: block;
                    list-style-type: disc;
                    margin-top: 1em;
                    margin-bottom: 1 em;
                    margin-left: 0;
                    margin-right: 0;
                    padding-left: 40px;
                }
                .parsedHTML a {
                    color: #7C4DFF;
                    text-decoration: underline;
                }
            `}</style>
        </Fragment>
    )
}
export default ParsedText