import React from "react";

//include images into your bundle


//create your first component

const Jumbotron = (props) => {
    return(
        <div class="jumbotron m-5 rounded ">
            <h1 class="display-4">{props.title}</h1>
            <p class="lead">{props.descripcion}</p>
            <hr class="my-4"/>
            <p class="lead">
                <a class="btn btn-primary btn-lg mb-2" href="#" role="button">{props.btnLabel}</a>
            </p>
        </div>
    )

}


export default Jumbotron;
