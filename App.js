import React from "react"
import TemplateCard from "./Components/TemplateCard.js"
import cardData from "./data.js"

export default function App() {
    const card = cardData.map(function(data) {
        return (
            <TemplateCard
                key={data.id}
                {...data}
            />
        )
    })
    return (
        <div>
            <Header/>
            {card}
        </div>
    )
}
