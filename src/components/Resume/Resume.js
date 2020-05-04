import React from 'react'
import ProPic from './pro.jpg'
import Styled from 'styled-components'

const Main= Styled.div`
    .text{
        font-weight: 500;
    }
    .text2{
        font-weight: 600;        
    }
    .about {
        max-width: 1500px;
        height: 1250px;
    }
`

function Resume() {
    return (
        <Main>
        <div>
            <img src={ProPic} className="br-100 h4 w4 mt3" title="front" alt='front'/>
            <p className='text tc f3 black-70'>Baqar Rizvi</p>
            <p className='text black-70'>Full Stack Developer (MERN) | Machine Learning | ML Web Freamworks (Flask, Django) | Game Developer</p>
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

                <a class="link dim gray hover-silver dib h2 w2 mr3"  href="mailto:baqarali789@gmail.com" title="Gmail" target="_newtab">
                    <svg style={{fill:'currentcolor'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/></svg>
                </a>
            </div>
            <div className='about center bg-white br3 shadow-5'>
                <p className='text black-70 f3 pt3 pl3 pr3 tl'> About </p>
                <p className='text black-70 f6 pl3 pr3 pb3 tl'> I have started my Bachelor&#39;s studies of Computer Science in 2 0 1 6 form Indus University (Karachi) and after that I
                    learned about Software Development life cycle. I found myself more interested at the side of Machine Learning and Game Development  so I decided to learn more about how to
                    develop games with some popular engines like Unity3D in the process of learning I have learned C# and Python programming languages to
                    solve some complex and valuable problems related to machine learing and game development. I have also worked with some other OOP languages like Java,
                    JS and currently working on AI with Python frameworks like flask and django. I have also experience of writing web application using react js I have developed several applications using react js.
                    I have also experience of making web API's and deploing them on server.</p>

                <hr className="mw7 bb bw1 b--black-10"/>

                <p className='text black-70 f3 pl3 pr3 tl'> Skills </p>

                <div className='tl'>
                    <div className = 'dib'>
                        <p className='text2 black-70 f6 pl3 pr3'> Web Development (MERN) </p>
                        <p className='text2 black-70 f6 pl3 pr3'> Django (Python Frameeork) </p>
                        <p className='text2 black-70 f6 pl3 pr3'> Flask (Python Frameeork) </p>
                        <p className='text2 black-70 f6 pl3 pr3'> Machine learning </p>
                        <p className='text2 black-70 f6 pl3 pr3'> Data Science </p>
                        <p className='text2 black-70 f6 pl3 pr3'> Game Development </p>
                    </div>
                    <div className = 'dib'>
                        <p className='text black-70 f6 pl3 pr3'> I have worked on several projects related to full stack web development using react js you can check out projects in my portfolio. </p>
                        <p className='text black-70 f6 pl3 pr3'> Worked on several projects of Django you can check out my git account repos for reference. </p>
                        <p className='text black-70 f6 pl3 pr3'> Flask is a great framework adn I have made several ML apis and microframeworks with it. You can check out my protfolio for reference. </p>
                        <p className='text black-70 f6 pl3 pr3'> I have worked on many projects related to machine learing in which I have trained CNN and ANN (neural net) for the regression and classification problems. </p>
                        <p className='text black-70 f6 pl3 pr3'> Data Science is my major skill I have worked on data cleaning and data genration process for machine learning neural nets. I have also worked on data scraping from webs. </p>
                        <p className='text black-70 f6 pl3 pr3'> Game development is also my major skill. I have developed several games with unity 3d in which I have worked on complete pipeline of game development including animations and sound design. </p>
                    </div>
                </div>

                <p className='text black-70 f3 pl3 pr3 tl'> Eduction </p>

                <div className='tl'>
                    <div className = 'dib'>
                        <p className='text2 black-70 f6 pl3 pr3'> Matriculation </p>
                        <p className='text2 black-70 f6 pl3 pr3'> Intermediate </p>
                        <p className='text2 black-70 f6 pl3 pr3'> Higher Education </p>
                        <p className='text2 black-70 f6 pl3 pr3'> Certification </p>
                    </div>
                    <div className = 'dib'>
                        <p className='text black-70 f6 pl3 pr3'> St Laurent’s School | Karachi | Computer Science 2011 - 2013 </p>
                        <p className='text black-70 f6 pl3 pr3'> Gulzar e Hijri College | Karachi | Pre-Engineering 2013 - 2015 </p>
                        <p className='text black-70 f6 pl3 pr3'> Indus University | Karachi | Bachelor's of Science in Computer Science 2016 - 2020 </p>
                        <p className='text black-70 f6 pl3 pr3'> PIAIC (President Initiative for Artificial Intelligence and Computing) | Karachi | Artifical Intelligence Certification(2019-2020)</p>
                    </div>
                </div>

                <p className='text black-70 f3 pl3 pr3 tl'> Work Experience </p>

                <div className='tl'>

                    <div className = ''>
                        <p className='text black-70 f4 pl3 pr3'> Machine learning and Full Stack Web Developer (MERN) (Present)<br></br> Tecknoloje Software Solution </p>
                    </div>
                    <div className = ''>
                        <p className='text black-70 f6 pl3 pr3'>I have worked on many machine learing problems and worked on the training of complex CNN(Convolutional Neural Network) and ANN(Artifical Neural Network) 
                                                                also worked on data geathering and data cleaning processes.
                                                                I made saveral projects of ML listed in my portfolio. 
                                                                I have also made several machine learning API's.</p>
                    </div>

                    <div className = ''>
                        <p className='text black-70 f4 pl3 pr3'> 3D MODELER <br></br> Paragon Production (2018 – 8 | 2018 – 10) </p>
                    </div>
                    <div className = ''>
                        <p className='text black-70 f6 pl3 pr3'>Worked on several projects of 3d modeling in which I have did
                                                                complete Modeling and animation related to the project. Worked in a team and get the experience about how to work
                                                                with in a professional environment.</p>
                    </div>
                    <div className = ''>
                        <p className='text black-70 f4 pl3 pr3'> Game Developer <br></br>Shopee TV (2019 - 6 | 2019 – 8)</p>
                    </div>
                    <div className = ''>
                        <p className='text black-70 f6 pl3 pr3'>Worked on 2d game project where I have completely
                                                                developed whole game. I have developed animations sound
                                                                and script game with team. I have learned to code professionally in C sharp and learned
                                                                multiple software models to complete projects.</p>
                    </div>

                    <div className = ''>
                        <p className='text black-70 f4 pl3 pr3'> Indie Projects <br></br> Freelance indie Projects (2016 – 2020 Presents) </p>
                    </div>
                    <div className = ''>
                        <p className='text black-70 f6 pl3 pr3'>I have worked on many indie projects and have done many freelance
                                                                jobs including Game Development and Web Development. I have done
                                                                several projects on react.js with a backend of django python framework.
                                                                I have also worked on indie game projects for mobile platforms. I am
                                                                working on Unity3d and on C-Sharp(C#) since 2016 and have indie
                                                                game portfolio.</p>
                    </div>
                </div>
                <hr className="mw7 mt4 bb bw1 b--black-10"/>

                <div className='measure center f6 black-70'>
                &copy; Baqar Rizvi | Made with ❤
                </div>
            </div>
        </div>
        </Main>
    )
}
export default Resume;


