import React from 'react'
import Modal from './modal'

export default function Projectcardmobile({title, para}) {
    return (
        <div >
            <div style={{ paddingBottom: "2%" }} >
                <div style={{ padding: "10px", backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px", color: "white" }} class=" uk-card   ">
                    <h3 style={{ marginTop: "7px",marginBottom: "0px", color: "#B19011",fontSize:"16px" }} class="uk-card-title"> {title} </h3>
                    <p>{para}</p>
                    <a class="uk-button uk-button-text" href="#modal-full" uk-toggle="target:#modal-full" style={{ color: "white", fontWeight: "lighter" }}>More</a>


                    < Modal></Modal>
                </div>
            </div>
        </div>
    )
}
