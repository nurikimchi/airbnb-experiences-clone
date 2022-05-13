import React from "react"

export default function TemplateCard (props) {
    return (
        <div className="card">
            <div className="small-details">
                <p className="location">📍{props.location}</p>
                <a className="google-maps-url" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="main-details">
                <h1 className="title">{props.title}</h1>
                <p className="dates"><span><strong>{props.startDate}</strong> - <strong>{props.endDate}</strong></span></p>
                <p className="description">{props.description}</p>
             </div>
                <img className="image" src={props.imageUrl}/>
        </div>
    )
}