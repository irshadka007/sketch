import React from 'react'
import logo from '../assets/logo_vertical.png'
import Modal from '../components/modal'
import Shadow from '../components/shadow'
import Projectcardmobile from './projectcardmobile'

export default function Projects() {
    return (<div>

        <div class="uk-hidden@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "#0A1623" }}>
            <img id="lo" style={{ marginTop: "5px", height: "50px", width: "50px", opacity: "1" }} src={logo}></img>

            <h3 class="uk-animation-fade" style={{ marginTop: "5px", color: 'white', fontWeight: "lighter" }}>PROJECTS</h3>
            <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
            <div style={{ color: "white", marginBottom: "30px" }} class="  uk-animation-slide-right">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>

            <div style={{ marginTop: "", padding: "0% 15% 0% 15%" }} class="uk-child-width-1-2@s uk-grid-match" uk-grid="true">
            <Projectcardmobile title="Battlex - Esports Platform" para="BattleX  is  an  online  Esports  platform  allowing  gamers  to  compete  against  each  other  for rewards...."></Projectcardmobile>
                <Projectcardmobile title="Poshan Abhiyan" para="DATA VISUALISATION:-In  Association  with  UNESCO  ,  Government  of  India  &  Swasti  health  catalyst  group,  we...."></Projectcardmobile>
                <Projectcardmobile title="Proxime - IOT  App" para="Proxime is a location based tracking device for travellers to primarily track their baggages. We..."></Projectcardmobile>
                <Projectcardmobile title="Adya - UI UX" para="Adya is a system which enhances data security for enterprises. Adya, helps to build for large and..."></Projectcardmobile>
                <Projectcardmobile title="Finly - Branding , UI UX" para="finly  builds  powerful  tools  for  expense  management  for  business,  Finly  solves  few  of  the ..."></Projectcardmobile>
                <Projectcardmobile title="Ninja Popcorn - Game Dev" para="Ninja popcorn is a simple casual game created specifically for android..."></Projectcardmobile>
                <Projectcardmobile title="Finly - Branding , UI UX" para="finly  builds  powerful  tools  for  expense  management  for  business,  Finly  solves  few  of  the ..."></Projectcardmobile>
                <Projectcardmobile title="Ninja Popcorn - Game Dev" para="Ninja popcorn is a simple casual game created specifically for android..."></Projectcardmobile>
                <Projectcardmobile title=" Skillsanta - Branding-UI UX.." para="Skillsanta is an educational platform for jobseekers and a skill based recruitment ..."></Projectcardmobile>
                <Projectcardmobile title="Animation project: Netgear" para="Netgear,  one  of  the  World's  leading  Networking  accessories  manufacturers ..."></Projectcardmobile>
                <Projectcardmobile title="Animation project: Wishberry" para="Wishberry  is  a  crowd  funding  platform  for  artists  all  across  the  country.  The   ..."></Projectcardmobile>

               
            </div>


            <div style={{ backgroundColor: "transparent", height: "100px", zIndex: "-1" }}></div>

        </div>






        <div class="uk-visible@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "transparent" }}>
            <h3 class="uk-animation-fade" style={{ marginTop: "40px", color: 'white', fontWeight: "lighter" }}>PROJECTS</h3>
            <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
            <div class="para  uk-animation-slide-right">project ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>


            <div style={{ padding: "0% 15% 0% 15%" }} class="uk-child-width-1-2@s uk-grid-match" uk-grid="true">

                <Shadow title="Battlex - Esports Platform" para="BattleX  is  an  online  Esports  platform  allowing  gamers  to  compete  against  each  other  for rewards...."></Shadow>
                <Shadow title="Poshan Abhiyan" para="DATA VISUALISATION:-In  Association  with  UNESCO  ,  Government  of  India  &  Swasti  health  catalyst  group,  we...."></Shadow>

            </div>
            <div style={{ padding: "0% 15% 0% 15%" }} class="uk-child-width-1-2@s uk-grid-match" uk-grid="true">

                <Shadow title="Proxime - IOT  App" para="Proxime is a location based tracking device for travellers to primarily track their baggages. We..."></Shadow>
                <Shadow title="Adya - UI UX" para="Adya is a system which enhances data security for enterprises. Adya, helps to build for large and..."></Shadow>

            </div>  <div style={{ padding: "0% 15% 0% 15%" }} class="uk-child-width-1-2@s uk-grid-match" uk-grid="true">

                <Shadow title=" Lear Corporation - UI UX" para="In  association  with  Dcg-  US  we  were  succesfully  able  to  provide  solution  in  a  major  UX... "></Shadow>
                <Shadow title="NextOrbit - UI UX, Frontend" para="NextOrbit helps to predict and respond to demand peaks and throughs with its AI and ...."></Shadow>

            </div>  <div style={{ padding: "0% 15% 0% 15%" }} class="uk-child-width-1-2@s uk-grid-match" uk-grid="true">

                <Shadow title="Finly - Branding , UI UX" para="finly  builds  powerful  tools  for  expense  management  for  business,  Finly  solves  few  of  the ..."></Shadow>
                <Shadow title="Ninja Popcorn - Game Dev" para="Ninja popcorn is a simple casual game created specifically for android..."></Shadow>


            </div>  <div style={{ padding: "0% 15% 0% 15%" }} class="uk-child-width-1-2@s uk-grid-match" uk-grid="true">
            <Shadow title=" Skillsanta - Branding-UI UX.." para="Skillsanta is an educational platform for jobseekers and a skill based recruitment ..."></Shadow>
                <Shadow title="Animation project: Netgear" para="Netgear,  one  of  the  World's  leading  Networking  accessories  manufacturers  and  distributors ..."></Shadow>

            </div>  <div style={{ padding: "0% 15% 0% 15%" }} class="uk-child-width-1-2@s uk-grid-match" uk-grid="true">

                <Shadow title="Animation project: Wishberry" para="Wishberry  is  a  crowd  funding  platform  for  artists  all  across  the  country.  The  objective  was  to  ..."></Shadow>

            </div>
          

            <div style={{ backgroundColor: "transparent", height: "20px", zIndex: "-1" }}></div>

        </div>
    </div>

    )
}

