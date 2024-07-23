import React from "react";
import { NavigationBar } from "../NavigationBar";

export function MainLayout({ children }) {
 return (
     <div>
         <NavigationBar />

         <section>{children}</section>

         <footer className="text-dark py-4">
             <div className="container">
                 <div className="row">
                     {/* Left side with unordered list */}
                     <div className="col-md-6">
                         <ul className="list-unstyled">
                             <li><a href="/" className="text-dark mx-2">Help and support</a></li>
                             <li><a href="/" className="text-dark mx-2">About us</a></li>
                             <li><a href="/" className="text-dark mx-2">Accessibility statement</a></li>
                             <li><a href="/" className="text-dark mx-2">Contact</a></li>
                         </ul>
                     </div>

                     {/* Right side with social media icons */}
                     <div className="col-md-6 text-right">
                         <i className="mx-2 bi bi-arrow-clockwise"></i>
                         <i className="mx-2 bi bi-camera"></i>
                         <i className="mx-2 bi bi-chat-dots"></i>
                         <i className="mx-2 bi bi-cart2"></i>
                     </div>
                 </div>
             </div>
         </footer>
     </div>
 )
}
