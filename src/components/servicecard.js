import React from 'react'

export default function Servicecard({service,image}) {
    return (
        <div style={{marginBottom:"30px"}}>
              <div class="card1 uk-animation-slide-bottom" style={{ paddingBottom: "2%" }} >
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class=" uk-card  ">


                        </div>
                    </div>
                    <div class=" uk-animation-fade-up" style={{ paddingBottom: "2%", marginTop: "-220px" }} >
                        <div style={{ backgroundColor: "transparent", borderRadius: "10px", height: "210px",opacity:"1" }} class="card2 uk-card ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src={image} width="80" height="80" alt="Border circle" />
    <p class=" " style={{ marginTop: '20px', color: "white" }}>{service}</p>

                            <div class="uk-visible@l" style={{ width: "100%", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div>
        </div>
    )
}
