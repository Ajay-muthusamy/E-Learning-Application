import React from 'react';
import '../css/main.css';
import inno from '../assets/innovation.png'
import himage from '../assets/happylearn.jpg'
const Home = () => {
  return (
    <>
      <div className="showcase">
        <div className="container grid">
          <div className="text">
            <h1>Don't Just Watch Learn</h1>
            <p>Learn technical skills faster through our website</p>
            <input
              type="text"
              className="single-line-input"
              placeholder="Search Course"
            />
          </div>
          <div className="showcase-img">
            <img
              src={"https://qwasar.io/wp-content/uploads/2020/07/Experiential-Learning-Platform-46-1024x925.png"}
              alt=""
              className="floating-image"
            />
          </div>
        </div>
      </div>
    <div className="home">
      <h1>How to make your life easier</h1>
      <div className="home-container">
        <div className="size">
          <img
            src={"https://www.pngall.com/wp-content/uploads/8/Business-Strategy-PNG-Free-Image.png"}
            alt=""
          />
          <h5>Online Strategy</h5>
          <p>
            Unlimited access to user database curriculum and community which
            includes over 5000 classes taught by industry experts across
          </p>
        </div>
        <div className="size">
          <img
            src={"https://www.freeiconspng.com/uploads/experience-logo-company-infographic-management-organization-business-computer-icons-0.png"}
            alt=""
          />
          <h5>Unique Experience</h5>
          <p>
            Learning experience tailored to you like private workshops, groups,
            and offline learning sessions
          </p>
        </div>
        <div className="size">
          <img
            src={"https://www.pngmart.com/files/8/Report-PNG-Photos.png"}
            alt=""
          />
          <h5>Online Strategy</h5>
          <p>
            Unlimited access to user database curriculum and community which
            includes over 5000 classes taught by industry experts across
          </p>
        </div>
      </div>
    </div>
    <div className="love-lesson">
      <h1>Lessons you'll love. Guaranteed.</h1>
      <p>Try another tutor for free if you're not satisfied</p>
    </div>
    <section id="happy-bg">
      <div className="happy-learn">
        <div className="happy-text">
          <h1>Language Learning made easy</h1>
          <p>
            Explore additional learning resources and tools to make your language
            learning experience even better.
          </p>
          <div className="happy-btn">
            <button>Learn English</button>
            <button>Learn Spanish</button>
            <button>Learn Japanese</button>
            <button>Learn French</button>
            <button>Learn German</button>
            <button>Learn Italian</button>
          </div>
        </div>
        <div className="happy-img">
        <img src={himage} alt="" width="100%" />
        </div>
      </div>
    </section>
    <div className="tutor">
      <div className="tut-container">
        <div className="tut-img">
          <img src={inno} alt="" width="30%" />
          <div className="txt">
            <h1>Become a Tutor</h1>
            <p>Earn money sharing your expert knowledge with students. Sign up to start tutoring online with Preply.</p>
            <ul>
              <li style={{ color: 'brown' }}>Find new students</li>
              <li>Grow your business</li>
              <li>Get paid securely</li>
            </ul>
            <button>Hire Tutor</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
