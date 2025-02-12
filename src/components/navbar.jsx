import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import "../styles.css";

const Navbar = () => {
    const getIsDesktop = () => {
      return typeof window !== "undefined" && window.innerWidth > 768;
    };
  
    // Khởi tạo trạng thái isOpen dựa trên kích thước màn hình
    const [isOpen, setIsOpen] = useState(getIsDesktop());
    
  return (
    <div>  {/* Thay <>...</> bằng <div> */}
      {/* Nút mở navbar, chỉ hiện khi navbar đóng */}
      {!isOpen && (
        <button className="open-btn" onClick={() => setIsOpen(true)}>☰</button>
      )}

        <nav className={`navbar ${isOpen ? "open" : ""}`}>
            {/* Nút đóng navbar, chỉ hiện khi navbar mở */}
            {isOpen && (
                <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                )}
        <ul className="nav-links">
            <li><a href="#landing">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <SocialLinks />
        <p className="copyright">© 2025 tdcq.me</p>
        </nav>
    </div>
  );
};

export default Navbar;
