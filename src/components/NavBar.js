import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
import {myFunction} from "../customize.js";


export default function NavBar() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (

        

        <header className="color1 ">
            <div className="container mx-auto w-full flex flex-wrap justify-between blind">
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

           


           
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <NavLink 
                to="/post" 
                className="custom-font inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-white"
                activeClassName="bg-blue-900 bg-gray-400 text-white">
                    Blog Posts
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink 
                to="/project" 
                className="custom-font inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-white"
                activeClassName="bg-blue-900 bg-gray-400 text-white">
                    Projects
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/about" 
                className="custom-font inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-white"
                activeClassName="bg-blue-900 bg-gray-400 text-white">
                    About Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

        </header>
        
    )
}