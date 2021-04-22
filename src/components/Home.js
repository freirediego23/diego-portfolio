import React from "react"
import image2 from "../cloud.png"
import image from "../mountain.png"

export default function Home() {
    return (
        <main>
            <div className="top-container">
            <img src={image2} id="top-cloud" alt="clouds"></img>
            <section className="">
            <h1>I'm Diego</h1>
            <h2>A web developer</h2>
            </section>
            <img src={image2} id="bot-cloud" alt="clouds"></img>
                <img src={image} id="mountain" alt="mountain"></img>
                
                
            </div>
        </main>
    )
}