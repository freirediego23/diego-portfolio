import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar() {
    return (
        <header className="color1 ">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                <NavLink to="/" 
                exact 
                activeClassName="text-white"
                className="custom-font inflex-flex items-center py-6 px-3 mr-4 text-white-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                    Df
                </NavLink>
                <NavLink 
                to="/post" 
                className="custom-font inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-white"
                activeClassName="bg-blue-900 bg-gray-400 text-white">
                    Blog Posts
                </NavLink>
                <NavLink 
                to="/project" 
                className="custom-font inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-white"
                activeClassName="bg-blue-900 bg-gray-400 text-white">
                    Projects
                </NavLink>
                <NavLink to="/about" 
                className="custom-font inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-white"
                activeClassName="bg-blue-900 bg-gray-400 text-white">
                    About Me
                </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/profile.php?id=100006891975832" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:35, width:35}}>

                    </SocialIcon>
                    <SocialIcon url="https://www.linkedin.com/in/diegofre/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:35, width:35}}>
                        
                    </SocialIcon>
                    
                </div>
            </div>
        </header>
    )
}