import React,{Component} from "react";

import pf1 from './../../../../img/portfolio/01-thumbnail.jpg';
import pf2 from './../../../../img/portfolio/02-thumbnail.jpg';
import pf3 from './../../../../img/portfolio/03-thumbnail.jpg';
import pf4 from './../../../../img/portfolio/04-thumbnail.jpg';
import pf5 from './../../../../img/portfolio/05-thumbnail.jpg';
import pf6 from './../../../../img/portfolio/06-thumbnail.jpg';

function Modal(props){
    return (
        <div class="portfolio-modal modal fade" id={props.id} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                  
                    <h2 class="text-uppercase">{props.name}</h2>
                    <p class="item-intro text-muted">{props.head}</p>
                    <img class="img-fluid d-block mx-auto" src={Selection(props.src)} alt=""/>
                    <p>{props.description}</p>
                    <ul class="list-inline">
                      <li>{props.list[0]}</li>
                      <li>{props.list[1]}</li>
                      <li>{props.list[2]}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


function Selection(num){
    var array=[pf1,pf2,pf3,pf4,pf5,pf6];
    return array[num-1];
}

  export default Modal;