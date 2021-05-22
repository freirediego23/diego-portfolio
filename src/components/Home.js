import React from "react"
import image2 from "../cloud.png"
import image from "../mountain.png"

export default function Home() {
    return (
        <main>
            <div className="top-container">
                <img src={image2} id="top-cloud" className="animate-left" alt="clouds"></img>
                <section className="">
                    <h1 className= "animate-fade-in-down">I'm Diego</h1>
                    <h2 className= "animate-fade-in-down2">a web developer</h2>
                    <a className="button custom-font hide" href="/project">Check Portfolio</a><br></br>
                </section>
                <img src={image2} id="bot-cloud" className="animate-right" alt="clouds"></img>
                <img src={image} id="mountain" alt="mountain"></img>
            </div>
        </main>
    )
}