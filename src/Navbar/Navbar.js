import React from "react";
import './Navbar.css';


export const Navbar = () => {
    const frame = {
        t: "H",
        place: "Health Tracker",
        place2: "Home",
        findADoctor: "Find a doctor",
        apps: "Apps",
        testimonials: "Testimonials",
        aboutUs: "About us"
    };
    return (
        <>
            <div className="frame-2">
                <div className="logo-navbar">
                    <div className="overlap-group">
                        <div className="t">
                            {frame.t}
                        </div>
                    </div>
                    <div className="place">
                        {frame.place}
                    </div>
                </div>
                <div className="top-nav">
                    <div className="place-1 nav-list">
                        {frame.place2}
                    </div>
                    <div className="find-a-doctor mulish-normal-haiti-18px nav-list">
                        {frame.findADoctor}
                    </div>
                    <div className="apps mulish-normal-haiti-18px nav-list">
                        {frame.apps}
                    </div>
                    <div className="testimonials mulish-normal-haiti-18px nav-list">
                        {frame.testimonials}
                    </div>
                    <div className="about-us mulish-normal-haiti-18px nav-list">
                        {frame.aboutUs}
                    </div>
                </div>
            </div>
        </>
    )
}
