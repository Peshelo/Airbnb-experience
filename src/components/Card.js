import React from 'react'

const Card = ({details}) => {
  console.log(details)
  return (
    <div className='card'>
        {details.spots === 0 && <label id="tag">SOLD OUT</label>}
        <img src={`../assets/images/${details.image}`} alt="" />
        <div className='cardDetails'>
            <label>{details.rating} <span style={{color:'rgb(134, 134, 134)'}}>({details.reviews}) . {details.country}</span></label>
            <label id="cardDescription">{details.description.length > 25 ? details.description.slice(0,60)+ "..." : details.description}</label>
            <label id="pricing"><span>From ${details.price}</span> / person</label>
        </div>
    </div>
  )
}

export default Card