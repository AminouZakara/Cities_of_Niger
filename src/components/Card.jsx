import React from 'react'

const Card = (props) => {
  return (
    <div className="container-wrapper">
        <div className='card-container'>
            <div className="card-items">
                <img src={props.img} />

                <div className="card-content">
                    <div className="title">
                        <h2> {props.title} </h2>
                    </div>
                    <div className="description">
                        <p> {props.desc} </p>
                    </div>
                    

                </div>
                <div className="btn">
                        <button>Learn More</button>
                    </div>
            </div>
        
        </div>
    </div>
    
  )
}

export default Card