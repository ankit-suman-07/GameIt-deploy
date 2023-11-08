import React from 'react';
import Navbar from '../../components/user-navbar/UserNav';
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className='aboutpage-outer' >

                <div className="about-section">
                    <div className='aboutpage-sub'>Features</div>
                    <ul>
                        <li>
                            <strong>Netflix-Inspired UI:</strong> The platform boasts a visually appealing and intuitive interface, drawing inspiration from Netflix. Game titles are elegantly showcased horizontally on the user's home screen, enhancing engagement and ease of navigation.
                        </li>
                        <li>
                            <strong>Detailed Game Pages:</strong> Users can delve into the gaming world by clicking on game titles, granting access to comprehensive game description pages. These pages are rich in content, featuring game trailers, in-game screenshots, and other vital information. This detailed overview empowers potential players to make informed decisions about their gaming choices.
                        </li>
                    </ul>

                    <h4>User Roles</h4>
                    <ul>
                        <li>
                            <strong>Gamers:</strong> Gamers have the freedom to explore an extensive library of game titles. They can access detailed descriptions, enabling them to gain insights into the gameplay, graphics, and storyline. This information assists gamers in selecting the games that align with their preferences.
                        </li>
                        <li>
                            <strong>Game Studios:</strong> Game Studios enjoy advanced privileges on the platform. They can seamlessly add new game listings, view existing titles, and edit game details. This functionality not only facilitates effective game showcasing but also ensures that the platform's content remains current and engaging.
                        </li>
                    </ul>

                    <h4>Key Functionalities</h4>
                    <ul>
                        <li>
                            <strong>Horizontal Title Display:</strong> Titles are presented horizontally on the home screen, enhancing user engagement and making the browsing experience visually appealing.
                        </li>
                        <li>
                            <strong>Detailed Game Pages:</strong> Each game listing includes a detailed page with multimedia elements, such as trailers and screenshots, providing gamers with a glimpse into the gameplay.
                        </li>
                        <li>
                            <strong>User Authentication:</strong> The application ensures secure user authentication, allowing Game Studios to access editing features while enabling Gamers to explore the platform without authentication barriers. Google Firebase has been used to authenticate users.
                        </li>
                        <li>
                            <strong>CRUD Operations for Game Studios:</strong> Game Studios can perform Create, Read, Update, and Delete (CRUD) operations, enabling them to add new games, modify existing listings, and keep the content up-to-date.
                        </li>
                    </ul>
                </div>
                <div className="about-section">
                    <div className='aboutpage-sub'>Origin</div>
                    <p>This MERN stack web application is a game listing platform, drawing inspiration from the intuitive user interface of Netflix. Users are presented with a visually appealing layout where game titles are displayed horizontally on their home screen, reminiscent of the Netflix browsing experience. The platform caters to two distinct user roles: Game Studios and Gamers.</p>
                </div>
                <div className="about-section">
                    <div className='aboutpage-sub'>Copyrights</div>
                    <p>
                        All content, graphics, and multimedia elements on this platform are the property of GameIt Inc. unless otherwise stated.
                        These materials are protected by copyright law and may not be used, reproduced, or distributed without our written permission.
                    </p>
                    <p>
                        GameIt Inc respects the intellectual property rights of others. If you believe that your work has been copied
                        in a way that constitutes copyright infringement, please contact us at ankitsuman07@gmail.co
                    </p>
                </div>
                <div className="about-section">
                    <div className='aboutpage-sub'>Terms and Conditions</div>
                    <h4>Terms and Conditions</h4>
                    <p>
                        By accessing and using this platform, you agree to comply with these terms and conditions. If you do not agree with any part
                        of these terms, please do not use our platform.
                    </p>
                    <h4>1. Use of Content</h4>
                    <p>
                        All content provided on this platform is for informational purposes only. [Your Company Name] reserves the right to change,
                        modify, or remove the content at any time without notice.
                    </p>
                    <h4>2. User Conduct</h4>
                    <p>
                        Users are prohibited from violating or attempting to violate the security of the platform, including, without limitation:
                        <ul>
                            <li>Accessing data not intended for you or logging into a server or account that you are not authorized to access.</li>
                            <li>Attempting to probe, scan, or test the vulnerability of a system or network or to breach security or authentication measures.</li>
                            <li>Interfering with service to any user, host, or network, including, without limitation, sending unsolicited email, flooding, or crashing.</li>
                            <li>Forging any TCP/IP packet header or any part of the header information in any email or posting.</li>
                        </ul>
                    </p>
                    <h4>3. Privacy Policy</h4>
                    <p>
                        Please review our <a href="/privacy-policy">Privacy Policy</a>, which also governs your use of this platform, to understand our practices.
                    </p>
                    <h4>4. Governing Law</h4>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes relating
                        to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
                    </p>

                </div>
                <div className="about-section">
                    <div className='aboutpage-sub'>Help Desk</div>
                    <p>For any assistance or inquiries, please contact our help desk at:</p>
                    <p>Email: ankitsuman07@gmail.com</p>
                    <p>Phone: 99999-99999</p>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;
