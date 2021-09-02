import React, { useState } from 'react'


const Card=(props)=>{

    
  
        return (

            
            <div className="card shadow-sm">
        <img alt={props.movie.title} src={'https://image.tmdb.org/t/p/w500/'+props.movie.poster_path}/>
            <div className="card-body">
              <h5 className="card-title">{props.movie.title} </h5>
              <p className="card-text" >{props.movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center" >
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small className="text-muted">Rating: {props.movie.vote_average}</small>
              </div>
            </div>
            </div>
          
        )
    
}
export default Card 