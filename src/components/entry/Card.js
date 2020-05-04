import React from 'react'
import Styled from 'styled-components'
import ProPic from './pro.jpg'

const SubDiv = Styled.div`
    .article {
        width: 1000px;
        height: 540px;
        margin-top: 100px;
    }
`

const Card = ({OnRouteChange}) => {
    return (
        <SubDiv>
        <article className="article mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <img src={ProPic} className="br-100 h3 w3 dib" title="front" alt='front'/>
                <h1 className="f4">BAQAR RIZVI</h1>
                <p>Student</p> 
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>

                <p className="lh-copy measure center f6 black-70">
                I am studying for a B.S. in Computer Science in the Department of Information and Computer Sciences at the Indus University Karachi. I expect to graduate in Spring, 2020
                </p>

            <div className='tc'>
                <p>Intrest</p>
                <hr className="mw3 bb bw1 b--black-10"/>
                <p className="lh-copy measure center f6 black-70">Full Stack Developer (MERN) | Machine Learning | ML Web Freamworks (Flask, Django) | Game Developer</p>
            </div>

            <div className="pv2 ph3 ph5-ns tc">
                <a className="link dim gray dib h2 w2 br-100 mr3 " href="https://www.facebook.com/baqarali.ali/" title="Facebook" target="_newtab">
                    <svg data-icon="facebook" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                    <title>facebook icon</title>
                    <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
                    </svg>
                </a>

                <a className="link dim gray dib h2 w2 br-100 mr3 " href="https://twitter.com/BaqarRizvi19" title="Twitter" target="_newtab">
                    <svg data-icon="twitter" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                    <title>twitter icon</title>
                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
                    </svg>
                </a>

                <a className="link dim gray dib br-100 h2 w2 mr3 " href="https://github.com/baqarali7" title="Github" target="_newtab">
                    <svg data-icon="github" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                    <title>github icon</title>
                    <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
                    </svg>
                </a>

                <a className="link dim gray hover-silver dib h2 w2 mr3"  href="mailto:baqarali789@gmail.com" title="Gmail" target="_newtab">
                    <svg style={{fill:'currentcolor'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/></svg>
                </a>

            </div>

            <div>
                <p onClick = {() => OnRouteChange('entry')} className="ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray">Profile</p>
                <p onClick = {() => OnRouteChange('projects')} className="ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray">Projects</p>
                <p onClick = {() => OnRouteChange('resume')} className="ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray">Resume</p>
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>
            <div className='measure center f6 black-70'>
                &copy; Baqar Rizvi | Made with ❤
            </div>
        </article>
        </SubDiv>
    )
}

export default Card;