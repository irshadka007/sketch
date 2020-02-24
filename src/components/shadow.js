import React from 'react'
import Modal from '../components/modal'


export default function Shadow({ title, para }) {
    return (
        <div style={{}}>
            <div class="card1 uk-animation-slide-bottom " style={{ paddingBottom: "2%" }}>
                <div style={{ padding: "10px", backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "180px", color: "white" }} class=" uk-card   ">

                </div>
            </div>


            <div class="card2" style={{ paddingBottom: "2%", marginTop: "-200px" }}>
                <div style={{ padding: "10px", backgroundColor: "transparent", borderRadius: "10px", height: "180px", color: "white" }} class=" uk-card   ">
                    <h3 style={{ marginTop: "15px", color: "#B19011" }} class="uk-card-title"> {title}</h3>
                    <p>{para}</p>
                    <a class="uk-button uk-button-text" href="#modal-full" uk-toggle="target:#modal-full" style={{ color: "white", fontWeight: "lighter" }}>More</a>


                    < Modal></Modal>
                </div>
            </div>
        </div>
    )
}
