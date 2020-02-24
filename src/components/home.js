import React, { useState, useEffect } from 'react'
import './home.css'
import logo from '../assets/logo_vertical.png'
import logotxt from '../assets/logo_text.png'
import TweenMax from 'gsap'

import { Power2 } from "gsap";
function handle() {
    TweenMax.from(".card", 4, { y: -500, x: 210, ease: Power2.easeOut });
    console.log("moveed");
}
export default function Home() {


    return (
        <div >
            <div class="uk-hidden@m" style={{ height:"100vh",width: "100vw", backgroundColor: "#0A1623" }}>
                <div class="uk-text-center" style={{ marginTop: "0", width: "100%", height: "45%", backgroundColor: "#0A1623", borderBottom: "2px solid #323C47" }}>
                    <img width="120px" height="120px" style={{ marginTop: "30%" }} src={logo} uk-img="true"></img><br></br>
                    <img style={{ width: "140px", height: "30px", marginLeft: "-5px", marginBottom: "30px" }} src={logotxt} uk-image="true"></img>

                </div>
                <div class="uk-text-center" style={{ width: "100%", height: "45%", backgroundColor: "#0A1623" }}>
                    <h3 style={{ marginTop: "30px", color: "white", fontWeight: "bolder" }}>Designs that<br></br>makes a difference<br></br></h3>
                    <button class="showreel" style={{ marginTop: "0px", borderRadius: "100px", color: "white", fontSize: "12px", fontWeight: "lighter", opacity: ".7", cursor: "pointer", border: "2px solid #323C47", padding: "8px 16px 8px 16px", backgroundColor: "transparent" }} ><a style={{ color: "#F1A002", marginRight: "7px", marginTop: "-5px" }} uk-icon="play-circle"></a>Play Showreel</button>
                </div>

            </div>

            <div class="  uk-visible@m  uk-child-width-1-2@s" style={{ height: "100vh", width: "100vw", display: "flex", backgroundColor: "transparent" }}>
                <div class="uk-animation-scale-up uk-transform-origin-top-right" style={{ zIndex: "5", height: "250px", backgroundColor: "transparent", marginTop: '180px', paddingLeft: "0%", borderRight: "2px solid #323C47" }}>
                    {/* <img  style={{ width: "170px", height: "170px", marginTop: "25px" }} src={logo} uk-image="true"></img><br></br> */}


                </div>
                <div style={{ height: "250px", backgroundColor: "transparent", marginTop: '180px ' }}>
                    <h2 id="title" class=" uk-animation-slide-bottom-medium  uk-animation-fade " style={{ marginTop: "50px", color: "white", marginLeft: "100px", fontWeight: "bolder" }}>Designs that<br></br>makes a difference<br></br></h2>

                    <button id="btn" class="showreel" style={{ marginLeft: "100px", marginTop: "10px", borderRadius: "100px", color: "white", fontSize: "14px", fontWeight: "lighter", opacity: ".7", cursor: "pointer", border: "2px solid #323C47", padding: "10px 20px 10px 20px", backgroundColor: "transparent" }} ><a style={{ color: "#F1A002", marginRight: "7px", marginTop: "-5px" }} uk-icon="play-circle"></a>Play Showreel</button>


                </div>


            </div>

        </div>
    )
}

