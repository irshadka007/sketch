import React from 'react'
import Time from './timeline'
import logo from '../assets/logo_vertical.png'


export default function About() {
    return (<div>
        <div class="uk-hidden@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "#0A1623" }}>
            <img id="lo" style={{ marginTop: "5px", height: "50px", width: "50px", opacity: "1" }} src={logo}></img>

            <h3 class="uk-animation-fade" style={{ marginTop: "5px", color: 'white', fontWeight: "lighter" }}>ABOUT</h3>
            <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
            <div style={{ color: "white", marginBottom: "30px" }} class="  uk-animation-slide-right" >Our  Journey  started  in  early  2013  when  SketchMonk  was  a
             one  person  company  building  branding  and  graphic  design
collaterals for clients all across the globe. Ever since then we
were able to support companies in all sizes to provide them
services from  UI UX to building and entire ecosystem.</div>

            <Time></Time>



        </div>
        <div class="uk-visible@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "transparent" }}>
            <h3 class="uk-animation-fade" style={{ marginTop: "40px", color: 'white', fontWeight: "lighter" }}>ABOUT</h3>
            <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
            <div class="para  uk-animation-slide-right" >Our  Journey  started  in  early  2013  when  SketchMonk  was  a
one  person  company  building  branding  and  graphic  design
collaterals for clients all across the globe. Ever since then we
were able to support companies in all sizes to provide them
services from  UI UX to building and entire ecosystem.</div>

            <Time></Time>



        </div>
    </div>
    )
}