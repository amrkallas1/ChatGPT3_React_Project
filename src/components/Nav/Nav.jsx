import './nav.css'
import logo from './../../assets/logo.svg'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { useState } from 'react'
function Nav(){
    const [toggle_menu,setToggle_menu]=useState(false);
    const Link=()=>(
        <>
        <a href=""><p>Home</p></a>
        <a href=""><p>WhatIsGPT?</p></a>
        <a href=""><p>OpenAl</p></a>
        <a href=""><p>Case Studies</p></a>
        <a href=""><p>Library</p></a>
        </>
        )
    return(
        <div className='navBar'>
            <div className="navBar_left">
                <div className="image">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <Link/>
                </div>
            </div>
            <div className="navBar_right">
                <button className='sign-in'>Sign in</button>
                <button className='sign-up'>Sign up</button>
            </div>
            <div className="toggle-menu">
                {toggle_menu?<RiCloseLine onClick={()=>setToggle_menu(false)}/>:<RiMenu3Line onClick={()=>setToggle_menu(true)}/>}
                {toggle_menu&&(
                    <div className="menu scale-up-center ">
                        <div className="menu-links">
                            <Link/>
                        </div>
                        <div className="menu-sign">
                            <button className='sign-in'>Sign in</button>
                            <button className='sign-up'>Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Nav;