'use client'
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageButton from '../components/ImageButton';
import Link from 'next/link';
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
  router.push('/contact')
}
  return (
    <div>
      <Navbar />
      {/* First Section: Large Image + title */}
      <div id="title">
        <h1> FindBlue</h1>
      </div>
      {/* Second Section: Quote Section */}
      <section className="quote-section">
        <blockquote>Made for students, by students, FindBlue is the go-to space for students at the University of Michigan
          to launch ideas and build ventures. We provide a platform for motivated, and driven students to find other students
          looking to make a difference. </blockquote>
      </section>
      {/* Third Section: Title and Image Buttons */}
      <section className="image-buttons-section">
      {/* Centered title above the image buttons */}
        <div className="section-title">
          <h2>Some success stories...</h2>
        </div>
        <div className="image-buttons-container">
          <ImageButton
            imageSrc="careerfairedited.jpg"
            altText="Button 1 Image"
            label={<><span className="bold-line">Connor's burger bar</span><br/><span className="normal-line">he makes burgers</span></>}
            link="link1.html"
          />
          <ImageButton
            imageSrc="careerfairedited.jpg"
            altText="Button 2 Image"
            label={<><span className="bold-line">David's microchip company</span><br/><span className="normal-line">they make microchips</span></>}
            link="link2.html"
          />
          <ImageButton
            imageSrc="careerfairedited.jpg"
            altText="Button 3 Image"
            label={<><span className="bold-line">Sam's Soup</span><br/><span className="normal-line">they make advanced rocket tech</span></>}
            link="link3.html"
          />
          <ImageButton
            imageSrc="careerfairedited.jpg"
            altText="Button 4 Image"
            label={<><span className="bold-line">Pravesh</span><br/><span className="normal-line">Pravesh</span></>}
            link="link4.html"
          />
        </div>
      </section>
      {/* Fourth Section: Create your profile */}
      <section className="profile-section">
        <div className="content-left">
          <h1 className="section-title-large">Create Your Profile</h1>
          <p className="section-subtext">Join us today and start exploring the endless possibilities.</p>
          <button className="profile-button">Make Your Profile</button>
        </div>
        <div className="content-right">
          <img src="laptophalf.png" alt="Profile Graphic" className="profile-image" />
        </div>
      </section>
      {/* Fifth Section: 3 steps*/}
      <section className="step-by-step-section">
        <div className="section-title">
          <h2>With You Every Step of the Way</h2>
        </div>
        <div className="steps-container">
          <div className="step start">
            <img src="project2_fixed.png" alt="Start Icon" className="step-icon2" />
            <h3>Create your project</h3>
            <p>Got the next best idea in business? Get access to everything you need to take on the world with your StartUp</p>
            <a href="link1.html" className="learn-more">Learn More</a>
          </div>
          <div className="step grow">
            <img src="proposal_fixed.png" alt="Start Icon" className="step-icon" />
            <h3>Make your proposal</h3>
            <p>Ready to grow your market? Get exclusive access to professionals and leaders to get you there!</p>
            <a href="link2.html" className="learn-more">Learn More</a>
          </div>
          <div className="step fund">
            <img src="hands_fixed.png" alt="Start Icon" className="step-icon" />
            <h3>Find your team</h3>
            <p>Is your business seeking capital? Access an exclusive network of investors and prepare your business to get Funded!</p>
            <a href="link3.html" className="learn-more">Learn More</a>
          </div>
        </div>
      </section>
      {/* Second Section: Quote Section */}
      <section className="quote-section">
        <blockquote>Made for students, by students, FindBlue is the go-to space for students at the University of Michigan
          to launch ideas and build ventures. We provide a platform for motivated, and driven students to find other students
          looking to make a difference. </blockquote>
      </section>
      <Footer />
    </div>
  );
}







