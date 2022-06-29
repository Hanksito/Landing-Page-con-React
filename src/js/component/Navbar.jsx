import React from "react";

const Navbar  = (props) => {
    return(


      <nav class="navbar navbar-dark navbar-expand-lg bg-dark ps-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{props.title}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <a class="nav-link active" aria-current="page" href="#">{props.btn1Label}</a>
            <a class="nav-link" href="#">{props.btn2Label}</a>
            <a class="nav-link" href="#">{props.btn3Label}</a>
            <a class="nav-link" href="#">{props.btn4Label}</a>
          </div>
          </div>
        </div>
        </nav>
      
    )
}

export default Navbar;

