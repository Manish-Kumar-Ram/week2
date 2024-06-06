import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Aside() {
  return (
    <>
      <aside className='container-profile'>
        <div className="img">
          <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuc3xlbnwwfHwwfHx8MA%3D%3D' className='im' alt="Manish Kumar Ram" />
        </div>
        <div className="profile-info">
          <h2>
            Manish Kumar Ram
          </h2>
          <input type='text' value="hello" readOnly />
          <hr />
          <ul>
            <li className="icons-info">
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="info">
                <p>AGE</p>
                <time>29 years old</time>
              </div>
            </li>
            <li className="icons-info">
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="info">
                <p>LOCATION</p>
                <address>Darbhanga, India</address>
              </div>
            </li>
            <li className="icons-info">
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="info">
                <p>PERSONALITY TYPE</p>
                <type>INTJ-T</type>
              </div>
            </li>
          </ul>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </aside>
    </>
  );
}

export default Aside;
