import React from "react";


const Card = (props) => {
    return(
        <div class="p-3 d-flex justify-content-evenly">
        <div class="card" style={{width:"18rem"}}>
            <img src="http://via.placeholder.com/500x325" class="card-img-top" alt="..."/>
            <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
    )

}
export default Card
