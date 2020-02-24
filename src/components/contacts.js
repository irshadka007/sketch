import React from 'react'
import logo from '../assets/logo_vertical.png'
import Shadow from '../components/shadow'

export default function Contacts() {
    return (
        <div>
            <div class="uk-hidden@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "#0A1623" }}>
                <img id="lo" style={{ marginTop: "5px", height: "50px", width: "50px", opacity: "1" }} src={logo}></img>

                <h3 class="uk-animation-fade" style={{ marginTop: "5px", color: 'white', fontWeight: "lighter" }}>CONTACTS</h3>
                <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
                <div style={{ color: "white", marginBottom: "30px" }} class=" uk-animation-slide-right" >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>

                <div style={{ padding: "0% 15% 0% 15%" }} class="uk-padding uk-child-width-1-1@s uk-grid-match  uk-animation-slide-bottom" uk-grid="true">

                    <div>
                        <div style={{ marginBottom: "3%", backgroundColor: "#1D2834", color: "white", borderRadius: "10px", height: "200px" }} class="uk-card uk-card-default uk-card-hover uk-card-body">
                            <h3 style={{ color: "#B19011" }} class="uk-card-title">Default</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>

                </div>


                <div style={{ backgroundColor: "transparent", height: "100px", zIndex: "-1" }}></div>

            </div>


            <div class="uk-visible@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "transparent" }}>
                <h3 class="uk-animation-fade" style={{ marginTop: "40px", color: 'white', fontWeight: "lighter" }}>CONTACTS</h3>
                <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
                <div class="para  uk-animation-slide-right" >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>
                <div style={{ padding: "0% 15% 0% 15%" }} class=" uk-padding uk-child-width-1-1@s uk-grid-match " uk-grid="true">

                    {/* <div>
                        <div style={{ marginBottom: "3%", backgroundColor: "rgba(30,41,53,.7)", color: "white", borderRadius: "10px", height: "200px" }} class="card1 uk-card  uk-card-hover uk-card-body  uk-animation-slide-bottom">

                        </div>
                    </div>

                </div>
                <div style={{ marginTop: "-230px", padding: "0% 15% 0% 15%" }} class="uk-padding uk-child-width-1-1@s uk-grid-match " uk-grid="true">

                    <div>
                        <div style={{ marginBottom: "3%", backgroundColor: "transparent", color: "white",opacity:1, borderRadius: "10px", height: "200px" }} class="card2 uk-card  uk-card-hover uk-card-body">
                            <h3 style={{ color: "#B19011" }} class="uk-card-title">Default</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
                    <Shadow title="Default" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></Shadow>

                </div>


                <div style={{ backgroundColor: "transparent", height: "100px", zIndex: "-1" }}></div>

            </div>
        </div>

    )
}