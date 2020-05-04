import React from 'react'
import Styled from 'styled-components'
import robo from './robo.PNG'
import face from './face.PNG'
import check from './Check.PNG'
import ann from './download.jpg'
import learn from './29.png'

const SubDiv = Styled.div`
    .pointer{
        cursor: pointer;
    }

    .article {
        width: 500px;
        height: 450px;
        margin-top: 100px;
    }
`

function Projects() {
    return (
        <SubDiv>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <div className='subdiv'>
        <article className="article tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <div className="tc">
                <img src={robo} className="dib" alt='Project'/>
                <h1 className="f4">Robofriends App</h1>
                <p>React js Project</p> 
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>

                <p className="lh-copy measure center f6 black-70 ">
                This project was made for the vital understanding of React Framework. You can see the code and preview!
                </p>

            <div className="pv4 ph3 ph5-ns tc">
                <a className="pointer ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray" href='https://baqarali7.github.io/RobofriendsApp.github.io/' target="_newtab">Preview</a>
                <a className="pointer ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray" href='https://github.com/baqarali7/RobofriendsApp.github.io' target="_newtab">Source Code</a>
            </div>
        </article>

        <article className="article tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <div className="tc">
                <img src={face} className="dib" alt='Project'/>
                <h1 className="f4">Face-Recognition App</h1>
                <p>React js Project</p> 
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>

                <p className="lh-copy measure center f6 black-70">
                This project was made for the understanding of Api and how they works I have used a face recognition api. You can see the code and preview!
                </p>

            <div className="pv3 ph3 ph5-ns tc">
            <a className="pointer ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray" href='https://face-recognition-react-app-v1.herokuapp.com/' target="_newtab">Preview</a>
                <a className="pointer ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray" href='https://github.com/baqarali7/FacerecognitionReactApp' target="_newtab">Source Code</a>
            </div>
        </article>

        <article className="article tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <div className="tc">
                <img src={check} className="dib" alt='Project'/>
                <h1 className="f4">MICR Number Cheque</h1>
                <p>Python Project</p> 
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>

                <p className="lh-copy measure center f6 black-70">
                This project was made on python open-cv to detect cheque MICR number. You can see the code preview!
                </p>

            <div className="pv4 ph3 ph5-ns tc">
                <a className="pointer ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray" href='https://github.com/baqarali7/MICR-Number-Detector' target="_newtab">Source Code</a>
            </div>
        </article>

        <article className="article tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <div className="tc">
                <img src={ann} className="dib" alt='Project'/>
                <h1 className="f4">Cheque Verification API</h1>
                <p>Python Project</p> 
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>

                <p className="lh-copy measure center f6 black-70">
                This project was made on python machine learning for the Verification of Bank Cheques. You can see the code and preview!
                </p>

            <div className="pv4 ph3 ph5-ns tc">
            <a className="pointer ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray" href='https://evening-forest-16327.herokuapp.com/' target="_newtab">Preview</a>
                <a className="pointer ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray" href='https://github.com/baqarali7/ChequeApi' target="_newtab">Source Code</a>
            </div>
        </article>

        <article className="article tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <div className="tc">
                <img src={learn} className="dib" alt='Project'/>
                <h1 className="f4">Learning Management Solution</h1>
                <p>React js Project</p> 
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>

                <p className="lh-copy measure center f6 black-70">
                This was the learing management web templete made with react. You can see the code and preview!
                </p>

            <div className="pv4 ph3 ph5-ns tc">
                <a className="pointer ma2 f6 link dim ba br3 ph3 pv2 mb2 dib gray" href='https://github.com/baqarali7/LearningManagment' target="_newtab">Source Code</a>
            </div>
        </article>

        </div>
        </div>
        </SubDiv>
    )
}
export default Projects;