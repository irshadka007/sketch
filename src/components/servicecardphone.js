import React from 'react'

export default function Servicecardphone({service,image}) {
    return (
        <div>
             <div class=" uk-animation-fade-up" style={{ paddingBottom: "2%" }} >
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px",opacity:"1" }} class=" uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src={image} width="70" height="70" alt="Border circle" />
    <p class=" " style={{ marginTop: '20px', color: "white" }}>{service}</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div>
        </div>
    )
}
