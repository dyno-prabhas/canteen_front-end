import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-column">
            <h4>About Us</h4>
            <p>Our college canteen offers a variety of delicious and nutritious meals to keep you fueled throughout the day. We are dedicated to providing a comfortable and friendly environment for students and staff.</p>
        </div>

        <div class="footer-column">
            <h4>Contact Us</h4>
            <ul>
                <li>Email: canteen@college.edu</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 College Street, City, State</li>
            </ul>
        </div>

        <div class="footer-column">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Special Offers</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h4>Follow Us</h4>
            <div class="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2024 College Canteen. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer