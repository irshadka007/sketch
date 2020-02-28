import React from 'react'

export default function Modal() {
    return (

        <div  >



            <div id="modal-full" class=" uk-modal-full" uk-modal="true" style={{ backgroundColor: "white", height: "100vh" }} >
                <div class="uk-hidden@m uk-modal-dialog">
                    <button class="uk-modal-close-full uk-close-large" type="button" uk-close="true"></button>
                    <div uk-grid="true">
                        <div class="uk-width-1-3">

                            <div style={{ color: "black", width: "20", marginLeft: "10%", marginTop: "10px" }} class="uk-card uk-card-default">

                                <img style={{}} src="https://image.shutterstock.com/image-vector/orange-yellow-waves-background-banner-260nw-1417431590.jpg" uk-img="true" alt="" />



                            </div>
                        </div>
                        <div class="uk-width-2-3" style={{ color: "black", marginTop: "5%" }}>
                            <h1 style={{ color: "black" }}>Headline</h1>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "white", width: "100%", height: "35%", paddingLeft: "55px", marginTop: "30px" }}>
                        <p style={{ width: "90%" }}>  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>
                    <div style={{ backgroundColor: "white", paddingLeft: "55px" }}>
                        <div style={{ width: "100%", height: "20%" }}>
                            <h5 style={{ lineHeight: ".8", marginBottom: "5px" }}>Solutions</h5>
                            <ul style={{ listStyleType: "none", fontWeight: "lighter", padding: "0px" }}><li>Technical Assistance</li><li>Security</li><li>Software Development</li></ul>
                        </div>
                        <div style={{ width: "100%", height: "20%" }}>
                            <h5 style={{ lineHeight: ".8", marginBottom: "5px" }}>Technologies</h5>
                            <ul style={{ listStyleType: "none", fontWeight: "lighter", padding: "0px" }}><li>Technical Assistance</li><li>Security</li><li>Software Development</li></ul>
                        </div>
                        <div style={{ width: "100%", height: "20%" }}>
                            <h5 style={{ lineHeight: ".8", marginBottom: "5px" }}>Duration</h5>
                            <ul style={{ listStyleType: "none", fontWeight: "lighter", padding: "0px" }}><li>90 Days</li></ul>
                        </div>
                    </div>
                </div>
                <div class="uk-visible@m uk-modal-dialog" style={{ backgroundColor: "white", height: "100%" }}>
                    <button class="uk-modal-close-full uk-close-large" type="button" uk-close="true"></button>
                    <div uk-grid="true">
                        <div class="uk-width-1-3">

                            <div style={{ backgroundColor: "#C45515", color: "black", width: "55", marginTop: "16%", marginLeft: "10%" }} class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img style={{ width: "100%",height:"100%" }} src="https://image.shutterstock.com/image-vector/orange-yellow-waves-background-banner-260nw-1417431590.jpg" uk-img="true" alt="" />
                                </div>
                                <div style={{ height: "240px" }} class="uk-card-body">
                                    <h3 style={{ color: "white" }} class="uk-card-title">Media Top</h3>
                                    <p style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>

                            </div>
                        </div>
                        <div class="uk-width-2-3" style={{ color: "black", marginTop: "60px" }}>
                            <h1 style={{ color: "black" }}>Headline</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#DB7D1A", width: "100vw", height: "25%", marginTop: "-22%",display:"flex" }}>
                        <div class="uk-card" style={{ paddingLeft: "15px", height: "100%", width: "30%", backgroundColor: "#B84A14", marginLeft: "31.2%", overflowY: "auto", color: "white" }}>
                            <h4 style={{ marginLeft: "7%", marginTop: "7px", color: "white" }}>Solutions</h4>
                            <ul style={{ listStyleType: "none", marginTop: "-5px", fontWeight: "lighter" }}><li>Technical Assistance</li><li>Security</li><li>Software Development</li><li>Software Development</li></ul>
                        </div>
                   <div class="uk-flex uk-flex-middle" style={{marginLeft:"20%",width:"200px"}}> <a style={{marginLeft:"30%"}}class="uk-button uk-button-text">WEBSITE link</a></div>
                    </div>
                    <div style={{ width: "60%", height: "20%", backgroundColor: "white", marginLeft: "31.2%", display: "flex" }}>
                        <div style={{ paddingLeft: "15px", borderRight: "3px dotted gray", width: "50%", height: "100%" }}>
                            <h4 style={{ marginLeft: "7%", marginTop: "7px" }}>Technologies</h4>
                            <ul style={{ listStyleType: "none", marginTop: "-5px", fontWeight: "lighter" }}><li>Technical Assistance</li><li>Security</li><li>Software Development</li></ul>
                        </div>
                        <div style={{ paddingLeft: "15px", width: "50%", height: "100%" }}>
                            <h4 style={{ marginLeft: "7%", marginTop: "7px" }}>Duration</h4>
                            <ul style={{ listStyleType: "none", marginTop: "-5px", fontWeight: "lighter" }}><li>90 Days</li></ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>






    )
}
