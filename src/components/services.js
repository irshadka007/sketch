import React, { useState, useEffect, Component } from 'react';
import logo from '../assets/logo_vertical.png'
import TweenMax from 'gsap'
import $ from 'jquery'
import { Power2 } from "gsap";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Servicecard from './servicecard'
import Servicecardphone from './servicecardphone'




export default function Services() {





    return (
        <div>
            <div class=" uk-hidden@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "#0A1623" }}>
                <img id="lo" style={{ marginTop: "5px", height: "50px", width: "50px", opacity: "1" }} src={logo}></img>

                <h3 class="uk-animation-fade" style={{ marginTop: "5px", color: 'white', fontWeight: "lighter" }}>SERVICES</h3>
                <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
                <div style={{ color: "white", marginBottom: "30px" }} class="  uk-animation-slide-right ">services ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>




                <div style={{ padding: "0% 10% 0% 10%", marginTop: "" }} class="uk-child-width-1-4@s uk-grid-match" uk-grid="true">

                <Servicecardphone service="UI UX For Mobile & Web" image="https://public-media.interaction-design.org/images/courses/course_42--square_thumbnail.jpg"></Servicecardphone>
                  <Servicecardphone service="Graphic Designing" image="https://graffica.info/tienda/wp-content/uploads/2017/04/phaidon500portada.jpg"></Servicecardphone>
                  <Servicecardphone  service="Enterprise App Development" image="https://previews.123rf.com/images/artinspiring/artinspiring1904/artinspiring190400928/122878378-mobile-app-development-concept-modern-technology-and-internet-connection-smartphone-interface-coding.jpg"></Servicecardphone>
                  <Servicecardphone service="Video Production" image="https://www.fotonium.com/static2/preview2/stock-vector-video-player-royalty-free-logo--vector-download-9248.jpg"></Servicecardphone>
                  <Servicecardphone service="Website Development" image="https://kifaruafrica.co.ke/assets/img/web-design-and-development-in-kenya.jpg"></Servicecardphone>
                  <Servicecardphone service="Digital Marketing & Strategy" image="https://i2.wp.com/icontrainingcentre.qa/wp-content/uploads/2019/09/digital-marketing-stratergy.jpg?fit=542%2C542&ssl=1"></Servicecardphone>


                </div>
                






                <div style={{ backgroundColor: "transparent", height: "100px", zIndex: "-1" }}></div>

            </div>

            <div class=" uk-visible@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "transparent" }}>
                <h3 class="uk-animation-fade" style={{ marginTop: "40px", color: 'white', fontWeight: "lighter" }}>SERVICES</h3>
                <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>

                <div class="para uk-animation-slide-right">services ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>

                <div style={{ padding: "0% 10% 0% 10%" }} class="uk-child-width-1-4@s uk-grid-match" uk-grid="true">

                   
                <Servicecard service="UI UX For Mobile & Web" image="https://public-media.interaction-design.org/images/courses/course_42--square_thumbnail.jpg"></Servicecard>
                  <Servicecard service="Graphic Designing" image="https://graffica.info/tienda/wp-content/uploads/2017/04/phaidon500portada.jpg"></Servicecard>
                  <Servicecard  service="Enterprise App Development" image="https://previews.123rf.com/images/artinspiring/artinspiring1904/artinspiring190400928/122878378-mobile-app-development-concept-modern-technology-and-internet-connection-smartphone-interface-coding.jpg"></Servicecard>
                  <Servicecard service="Video Production" image="https://www.fotonium.com/static2/preview2/stock-vector-video-player-royalty-free-logo--vector-download-9248.jpg"></Servicecard>
                  <Servicecard service="Website Development" image="https://kifaruafrica.co.ke/assets/img/web-design-and-development-in-kenya.jpg"></Servicecard>
                  <Servicecard service="Digital Marketing & Strategy" image="https://i2.wp.com/icontrainingcentre.qa/wp-content/uploads/2019/09/digital-marketing-stratergy.jpg?fit=542%2C542&ssl=1"></Servicecard>


                </div>

                <div style={{ backgroundColor: "transparent", height: "100px", zIndex: "-1" }}></div>

            </div>
        </div>

    )
}

