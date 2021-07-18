import React, {useEffect, useState} from "react"
import pic3 from "../pic3.png"
import sanityClient from "../client.js";
import emailjs from "emailjs-com";


export default function Project() {

    

    // function message () {
    //     document.getElementById('#message') = 'Your message has been sent!'
    //         .then()
    // }
        
      
       
      
    // function Message() {
    //     return <p>Your message has been sent!</p>
    //   }


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'Diego-website-template', e.target, 'user_1wfFo5vSdxYEkYRe41a1S')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            });

    }

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <>
            <main className="bg-white min-h-screen p-12">
                <section className="container mx-auto">
                <div id="designs">
                    <h2>My Projects</h2><br></br>
                    <p className="mx-15 mb-20 lg:mx-60 lg:mb-20">My specialty is frontend web development. I can translate all your
                        ideas into a great website. I have a solid understanding in fundamentals such as: HTML,
                        CSS, JavaScript, version control with github, and frameworks as Bootstrap or Tailwind.
                        Please have a look at some of my previous projects:<br></br>
                    </p>
                 
                    
                </div>
                    {/* <h2 className="text-lg text-gray-600 flex justify-center mb-12">Diego's Portfolio</h2> */}
                    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-3 2xl-cols-4">
                        
                        {projectData &&
                        projectData.map((project, index) =>(
                        <article className="bg-blue-200 relative rounded-lg shadow-xl sm:py-6 md:p-8 lg:p-16 p-7">
                            <h3 className="text-gray-900 text-3xl font-bold mb-2 hover:text-red-700">
                                <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                >{project.title}</a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4 ">

                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Company</strong>{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {project.description}
                                </p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                    View The Project {" "}
                                    <span role="img" aria-label="right pointer">
                                        👍
                                    </span>
                                </a>
                            </div>
                        </article>

                        
                        ))}

                    </section>
                </section>

                <div id="designs">
                    <h2>Let's work on something!</h2>
                    <p>I'm willing to work on your next project. Let me know your ideas</p>
                </div>

                <div className="form-main-cont row">
                    <div className="form-img-cont col-sm-11 col-md-6 col-lg-7">
                        <img src={pic3} className="custom-img" alt="img" />
                    </div>

                    <div className="form-input-cont col-sm-11 col-md-6 col-lg-4">
                        <form onSubmit={sendEmail}>
                            <h2 id="formh2">Contact me</h2>
                            <div className="mb-3">
                                <input type="text" name="name" id="name" placeholder="Full name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" name="email" id="email" placeholder="Email Address" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="subject" id="subject" placeholder="Subject" />
                            </div>
                            <textarea id="message" name="message" rows="6" placeholder="Hey Diego. Can we meet?" />
                            <button type="submit" className="submit2" onClick={()=>{ alert('Your message has been sent!'); }}>Submit</button><br/>
                            
                        </form>
                    </div>
                </div>

                
            </main>
            <footer className="color1 custom-font p-7 bg-red-100">
                <p>Made by Diego Freire &copy; 2021 </p>
            </footer>
        </>
        
    )
    

}