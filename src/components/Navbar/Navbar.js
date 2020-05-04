import React from 'react'
import Styled from 'styled-components'

const Main = Styled.div`
    .Head{
        background-color: #303131;
        height: 60px;
        font-weight: 600;
    }
`


function Navbar({OnRouteChange}) {
    return (
        <Main>
            <div className='Head tl'>
                <div className='dib gray'>
                    <p onClick = {() => OnRouteChange('entry')} className='dib pl4 link dim f4 white'>Baqar Rizvi</p>
                </div>
                <div className='dib gray'>
                    <p onClick = {() => OnRouteChange('projects')} className='dib pl4 link dim f4 white'>Projects</p>
                </div>
                <div className='dib gray'>
                    <p onClick = {() => OnRouteChange('resume')} className='dib pl4 link dim f4 white'>Resume</p>
                </div>
            </div>
        </Main>
    )
}
export default Navbar;