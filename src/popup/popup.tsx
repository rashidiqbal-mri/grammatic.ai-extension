import React from "react";
import {createRoot} from "react-dom/client";
import "../assets/tailwind.css";
const test= (
    <>
      <header>
    <div className="logo">
      <img src="logo.png" alt="Grammarly logo" />
    </div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div className="search-bar">
      <input type="text" placeholder="Search..."/>
      <button >Search</button>
    </div>
  </header>

  <main>
    <div className="hero">
      <h1>Write with confidence</h1>
      <p>Grammarly helps you eliminate writing errors and find the perfect words to express yourself.</p>
      <button className="text-5xl bg-teal-400">Get started</button>
    </div>

    <div className="features">
      <h2>Features</h2>
      <ul>
        <li><i className="fas fa-check"></i> Grammar and spell check</li>
        <li><i className="fas fa-check"></i> Writing suggestions</li>
        <li><i className="fas fa-check"></i> Plagiarism detection</li>
        <li><i className="fas fa-check"></i> Tone detection</li>
      </ul>
    </div>

    <div className="pricing">
      <h2>Pricing</h2>
      <ul>
        <li>Basic: Free</li>
        <li>Premium: $29.95/month</li>
        <li>Business: Contact us</li>
      </ul>
      <button>Sign up</button>
    </div>
  </main>

  <footer>
    <div className="footer-links">
      <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Terms of service</a></li>
      </ul>
    </div>
    <div className="social-icons">
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
    </div>
  </footer>
</>
)
const container =document.createElement("div");
document.body.appendChild(container);
const root=createRoot(container);
root.render(test)