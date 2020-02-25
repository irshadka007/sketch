import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/home';
import Services from './components/services'
import Projects from './components/projects'
import About from './components/about'
import Contacts from './components/contacts'
import { Preloader, Placeholder } from 'react-preloading-screen'
import logo from './assets/logo_vertical.png'
import logotxt from './assets/logo_text.png'

import { Power2 } from "gsap";
// import ReactCSSTransitionGroup from 'react-addons-transition-group';




import $ from 'jquery'
import TweenMax from 'gsap'
import TimelineLite from 'gsap'



function App() {
  var slideIndex = 1;

  function scroll() {
    window.scrollTo(0, 0);
  }


  function animate(t1, t3) {

    t1.play();
    t3.play();

  }
  function rev(t2, t4) {

    t2.play();
    t4.play();


  }

  useEffect(() => {
    showSlides(slideIndex);//initial display
  });


  function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
  window.onscroll = function () { myFunction() };

  function myFunction() {
    var logo = document.getElementById("lo");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      logo.style.opacity = "0";
    }
    else {
      logo.style.opacity = "1";

    }
  }
  function animontab(n, m) {
    var i;
    var para = document.getElementsByClassName("para");
    var card1 = document.getElementsByClassName("card1");
    var card2 = document.getElementsByClassName("card2");

    var title = document.getElementById("title");
    var pic = document.getElementById('lo');
    var pictxt = document.getElementById('lotxt');
    const t2 = TweenMax.to(pic, 1, { x: 0, y: 0, scale: 1, ease: Power2.easeOut }).reverse();
    const t4 = TweenMax.to(pictxt, 1, { x: 0, y: 0, scale: 1, opacity: 0, ease: Power2.easeOut }).reverse();
    rev(t2, t4);



    title.className = title.className.replace(" uk-animation-slide-bottom-medium", "");
    title.className = title.className.replace(" uk-animation-fade", "");
    TweenMax.to(title, .5, { y: 30, opacity: "0" });


    for (i = 0; i < card2.length; i++) {

      TweenMax.to(card2[i], .5, { opacity: ".2" });
    }

    for (i = 0; i < card1.length; i++) {
      card1[i].className = card1[i].className.replace(" uk-animation-slide-bottom", "");
      TweenMax.to(card1[i], .5, { y: 500 });
    }
    for (i = 0; i < 4; i++) {
      para[i].className = para[i].className.replace(" uk-animation-slide-right", "");
      TweenMax.to(para[i], .5, { x:500, opacity: ".1" });

    }
    setTimeout(() => {
      title.className += " uk-animation-slide-bottom-medium";
      title.className += " uk-animation-fade";
      TweenMax.to(title, .1, { y: 0, opacity: "1" });

      for (i = 0; i <  card2.length; i++) {

        TweenMax.to(card2[i], .1, { opacity: "1" });
      }

      for (i = 0; i < card1.length; i++) {
        card1[i].className += " uk-animation-slide-bottom";
        TweenMax.to(card1[i], .1, { y: 0 });

      }
      for (i = 0; i < 4; i++) {
        para[i].className += " uk-animation-slide-right";
        TweenMax.to(para[i], .1, { x: 0, opacity: "1" });
      }

      currentSlide(m)
    }, 500);



  }


  function animonarrow(n, m) {
    var i;
    var para = document.getElementsByClassName("para");
    var card1 = document.getElementsByClassName("card1");
    var card2 = document.getElementsByClassName("card2");

    var title = document.getElementById("title");
    var pic = document.getElementById('lo');
    var pictxt = document.getElementById('lotxt');

    const t2 = TweenMax.to(pic, 1, { x: 0, y: 0, scale: 1, ease: Power2.easeOut }).reverse();
    const t4 = TweenMax.to(pictxt, 1, { x: 0, y: 0, scale: 1, opacity: 0, ease: Power2.easeOut }).reverse();
    rev(t2, t4);

    title.className = title.className.replace(" uk-animation-slide-bottom-medium", "");
    title.className = title.className.replace(" uk-animation-fade", "");
    TweenMax.to(title, .5, { y: 30, opacity: "0" });
    for (i = 0; i < card2.length; i++) {

      TweenMax.to(card2[i], .5, { opacity: ".2" });
    }

    for (i = 0; i < card1.length; i++) {
      card1[i].className = card1[i].className.replace(" uk-animation-slide-bottom", "");
      TweenMax.to(card1[i], .5, { y: 500 });
    }
    para[n].className = para[n].className.replace(" uk-animation-slide-right", "");



    TweenMax.to(para[n], .5, { x:500, opacity: ".1" });


    setTimeout(() => {
      title.className += " uk-animation-slide-bottom-medium";
      title.className += " uk-animation-fade";
      TweenMax.to(title, .1, { y: 0, opacity: "1" });
      for (i = 0; i < card2.length; i++) {

        TweenMax.to(card2[i], .1, { opacity: "1" });
      }
      for (i = 0; i < card1.length; i++) {
        card1[i].className += " uk-animation-slide-bottom";
        TweenMax.to(card1[i], .1, { y: 0 });

      }
      para[n].className += " uk-animation-slide-right";
      TweenMax.to(para[n], .1, { x: 0, opacity: "1" });


      plusSlides(m)
    }, 500);



  }

  function plusSlides(n) {

    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }


  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var pic = document.getElementById('lo');
    var pictxt = document.getElementById('lotxt');
    const t1 = TweenMax.to(pic, 1, { x: -240, y:250, scale: 3.5, ease: Power2.easeOut }).reverse();
    const t2 = TweenMax.to(pic, 1, { x: 0, y: 0, scale: 1, ease: Power2.easeOut }).reverse();
    const t3 = TweenMax.to(pictxt, 1, { x: -243, y: 310, scale: 2, opacity: 1, ease: Power2.easeOut }).reverse();
    const t4 = TweenMax.to(pictxt, 1, { x: 0, y: 0, scale: 1, opacity: 0, ease: Power2.easeOut }).reverse();

    var dots = document.getElementsByClassName("demo");
    var dot = document.getElementsByClassName("dem");
    var demo = document.getElementsByClassName("para");


    if (n > 5) { slideIndex = 1 }
    if (n < 1) { slideIndex = 5 }
    if (slideIndex == 1) {
      animate(t1, t3);
    }



    for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";

      dots[i].className = dots[i].className.replace(" active", "");
      dot[i].className = dot[i].className.replace(" active", "");

    }


    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
    dot[slideIndex - 1].className += " active";

  }
  return (
    <Preloader fadeDuration={1300}>
      <div className="App" style={{ position: "relative" }}>

        <div class="under" style={{ zIndex: -1, backgroundColor: "#0A1623", height: "100%", width: "100vw", position: "fixed" }}>

          <img id="lo" style={{ marginLeft: "48.5%", marginTop: "15px", height: "50px", width: "50px", opacity: "1" }} src={logo}></img>
          <img id="lotxt" style={{ marginLeft: "47.4%", marginTop: "15px", height: "20px", width: "90px", opacity: "0" }} src={logotxt} uk-image="true"></img>

        </div>

        <div class="slideshow-container">

          <div id="container" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} class="mySlides ">
            <Home  ></Home>
            <a class="prev" uk-slideshow-item="previous" onClick={(e) => { animonarrow(0, -1); scroll() }}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >C O N T A C T </div>
            <a class="next" uk-slideshow-item="next" onClick={(e) => { animonarrow(0, 1); scroll() }}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div class="txt uk-visible@l "  >S E R V I C E S </div>
            <div class="particle" id="particle1" ></div>
            <div class="particle" id="particle2" ></div>
            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>

          </div>

          <div id="container" class="mySlides ">

            <Services></Services>
            <a class="prev" uk-slideshow-item="previous" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} onClick={(e) => { animonarrow(0, -1); scroll() }}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >H O M E </div>
            <a class="next" uk-slideshow-item="next" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} onClick={(e) => { animonarrow(0, 1); scroll() }}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div className="txt uk-visible@l">P R O J E C T S</div>


            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle7" ></div>
            <div class="particle" id="particle8"  ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>
            <div class="particle" id="particle12"  ></div>
            <div class="particle" id="particle13"  ></div>
          </div>

          <div id="container" class="mySlides ">
            <Projects></Projects>
            <a class="prev" uk-slideshow-item="previous"  onMouseMove={(e) => parallaxIt(e, '.particle',-200)}onClick={(e) => { animonarrow(1, -1); scroll() }}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >S E R V I C E S </div>
            <a class="next" uk-slideshow-item="next"  onMouseMove={(e) => parallaxIt(e, '.particle',-200)}onClick={(e) => { animonarrow(1, 1); scroll() }}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div class="txt uk-visible@l"  >A B O U T </div>
            <div class="particle" id="particle3" ></div>
            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle7" ></div>
            <div class="particle" id="particle8"  ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>
            <div class="particle" id="particle12"  ></div>
            <div class="particle" id="particle13"  ></div>
          </div>

          <div id="container"  class="mySlides ">
            <About></About>
            <a class="prev" uk-slideshow-item="previous" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} onClick={(e) => { animonarrow(2, -1); scroll() }}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >P R O J E C T S </div>
            <a class="next" uk-slideshow-item="next" onMouseMove={(e) => parallaxIt(e, '.particle', -200)}onClick={(e) => { animonarrow(2, 1); scroll() }}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div class="txt uk-visible@l">C O N T A C T </div>
            <div class="particle" id="particle3" ></div>
            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle7" ></div>
            <div class="particle" id="particle8"  ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>
            <div class="particle" id="particle12"  ></div>
            <div class="particle" id="particle13"  ></div>
          </div>
          <div id="container" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} class="mySlides ">
            <Contacts></Contacts>
            <a class="prev" uk-slideshow-item="previous" onClick={(e) => { animonarrow(3, -1); scroll() }}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >A B O U T </div>
            <a class="next" uk-slideshow-item="next" onClick={(e) => { animonarrow(3, 1); scroll() }}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div class="txt uk-visible@l">H O M E </div>
            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle7" ></div>
            <div class="particle" id="particle8"  ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>
            <div class="particle" id="particle12"  ></div>
            <div class="particle" id="particle13"  ></div>
          </div>
        </div>


        <div class="topnav "  >
          <nav class=" uk-navbar-container" uk-navbar="true">
            <div class="uk-navbar-center">

              <ul class="uk-navbar-nav">
                <li><a><a class="demo active" href="#home"  onClick={(e) => currentSlide(1)}>HOME
        <div class="dem act" style={{ marginLeft: "15px" }}></div></a></a></li>

                <li><a><a class="demo" href="#services" onClick={(e) =>{ animontab(0, 2);scroll()}}>SERVICE
        <div class="dem " style={{ marginLeft: "21px" }}></div></a></a></li>

                <li><a><a class="demo" href="#projects" onClick={(e) =>{animontab(1, 3);scroll()}}>PROJECT
        <div class="dem " style={{ marginLeft: "24px" }}></div></a></a></li>

                <li><a><a class="demo" href="#about" onClick={(e) =>{ animontab(2, 4);scroll()}}>ABOUT
        <div class="dem " style={{ marginLeft: "17px" }}></div></a></a></li>

                <li><a><a class="demo" href="#contacts" onClick={(e) =>{ animontab(3, 5);scroll()}}>CONTACTS
        <div class="dem " style={{ marginLeft: "26px" }}></div></a></a></li>
              </ul>

            </div>
          </nav>
        </div>
      </div>
      <Placeholder>
        <div class="uk-text-center" style={{ backgroundColor: "#0A1623", height: "100vh", width: "100vw" }}>
          <img width="280px" height="280px" style={{ marginTop: "15%", border: "1px solid #E99639", borderRadius: "50%", padding: "40px" }} src={logo} uk-img="true"></img>

        </div>
      </Placeholder>
    </Preloader >
  );
}

export default App;
