import React,{Component} from "react";


import pf1 from './../../../../img/portfolio/01-thumbnail.jpg';
import pf2 from './../../../../img/portfolio/02-thumbnail.jpg';
import pf3 from './../../../../img/portfolio/03-thumbnail.jpg';
import pf4 from './../../../../img/portfolio/04-thumbnail.jpg';
import pf5 from './../../../../img/portfolio/05-thumbnail.jpg';
import pf6 from './../../../../img/portfolio/06-thumbnail.jpg';

function Portfolio(){
    return (
  <section class="bg-light" id="portfolio">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Portfolio</h2>
              <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div class="row">
            <Element id={"1"} src={pf1} head={"Threads"} text={"Illustration"}/>
            <Element id={"2"} src={pf2} head={"Explore"} text={"Graphic Design"}/>
            <Element id={"3"} src={pf3} head={"Finish"} text={"Identity"}/>
            <Element id={"4"} src={pf4} head={"Lines"} text={"Branding"}/>
            <Element id={"5"} src={pf5} head={"Southwest"} text={"Website Design"}/>
            <Element id={"6"} src={pf6} head={"Windows"} text={"Photography"}/>
          </div>
        </div>
      </section>
    )
  }

  function Element(props){
        return (
            <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href={"#portfolioModal"+props.id}>
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src={props.src} alt=""/>
            </a>
            <div class="portfolio-caption">
              <h4>{props.head}</h4>
              <p class="text-muted">{props.text}</p>
            </div>
          </div>
        )
  }


  export default Portfolio;