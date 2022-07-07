import logo from './logo.svg';
import './style.css';
import bg from './images/bg-curvy-desktop.svg'
import intro from './images/illustration-intro.png'
import access from './images/icon-access-anywhere.svg'
import security from './images/icon-security.svg'
import collabo from './images/icon-collaboration.svg'
import anyFile from './images/icon-any-file.svg';
import productive from './images/illustration-stay-productive.png';
import arrowSvg from './images/icon-arrow.svg';
import profileA from './images/profile-1.jpg';
import profileB from './images/profile-2.jpg';
import profileC from './images/profile-3.jpg';
import quote from './images/bg-quotes.png';
import locate from './images/icon-location.svg';
import phone from './images/icon-phone.svg';
import email from './images/icon-email.svg';






function App() {
  return (
   <>
    <div className="container"> 

      <nav className="navbar">
        <div className="logo">
        <svg width="176" height="52" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z"/></g></svg>
        </div>
        <ul className="nav-links">
          <li><a href='#'>Features</a></li>
          <li><a href='#'>Team</a></li>
          <li><a href='#'>Sign in</a></li>
        </ul>
      </nav>

      {
      //intro section
      }
      <section className="intro">
        <img src={intro}/>
        <h1>
        All your files in one secure location, <br/> accessible anywhere.
        </h1>
        <p>
        Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with <br/> friends family, and co-workers.
        </p>
        <a className="btn-intro">Get Started</a>
      </section>

      {
      //feature section
      }
      <section className="features">
        <div className="row">

          <div className="feature">
            <img src={access} />
            <h2>Access your files, anywhere</h2>
            <p>
            The ability to use a smartphone, tablet, or computer to access your account means your 
            files follow you everywhere.
            </p>
          </div>

          <div className="feature">
            <img src={security} />
            <h2>Security you can trust</h2>
            <p>
            2-factor authentication and user-controlled encryption are just a couple of the security 
            features we allow to help secure your files.
            </p>
          </div>

        </div>

        <div className="row">

          <div className="feature">
            <img src={collabo} />
            <h2>Real-time collaboration</h2>
            <p>
            Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required.
            </p>
          </div>

          <div className="feature">
            <img src={anyFile} />
            <h2>Store any type of file</h2>
            <p>
            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
            file types to be securely stored and shared.
            </p>
          </div>

        </div>
      </section>

      <section className="mission">

        <div className="missionIll">
         <img src={productive}/>  
        </div>

        <div className="missionContent">
          <h1>Stay productive, wherever you are </h1>
          <p>  
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
            storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email 
            attachments required.
          </p>
          <div className="howItWorks">
          <a href='#'>See how Fylo works <span><img src={arrowSvg}/></span></a>
          </div>
        </div>

      </section>

      <section className="testimonial">
       <img className="quote" src={quote} />
      <div className="testimony">
        <div className="comment">
          <p>  
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
          </p>
          <div className="profile">
            <img src={profileA}/>
            <div className="details"> 
              <h5>Satish Patel</h5>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className="comment">
          <p>  
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
          </p>
          <div className="profile">
            <img src={profileB}/>
            <div className="details"> 
              <h5>Bruce McKenzie</h5>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className="comment">
          <p>  
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.
          </p>
          <div className="profile">
            <img src={profileC}/>
            <div className="details"> 
              <h5>Iva Boyd</h5>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

      </div>

        
      </section>

      <section className="subscribe">
        <div>
          <h1>Get early access today</h1>
          <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
          questions, our support team would be happy to help you.
          </p>
          <form>
            <input placeholder="email@example.com" type='email' className="email"/>
            <input type='submit' value="Get Started For Free" className="btn-intro"/>
          </form>
        </div>
      </section>
    </div>
    <section className="footer">
        <div className="logo">
        <svg width="176" height="52" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z"/></g></svg>
        </div>
        <div className="footerContent">


        <div className="contacts">

          <div className="locateUs">
              <img src={locate} />
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua
              </p>
          </div>

            <ul>
                <li>
                  <img src={phone} />
                  <p>+1-543-123-4567</p>
                </li>
                <li>
                  <img src={email} />
                  <p><span></span> example@fylo.com</p>
                </li>
            </ul>

        </div>

          <div className="links">

            <ul>
              <li><p>About us</p></li>
              <li><p>jobs</p></li>
              <li><p>Press</p></li>
              <li><p>Blog</p></li>
            </ul>

            <ul>
              <li><p>Contact Us</p></li>
              <li><p>Terms</p></li>
              <li><p>Privacy</p></li>
            </ul>

            <div className="social-links">
              <img src={email} />
              <img src={email} />
              <img src={email} />
            </div>

          </div>
         
         
        </div>

    </section>
   </>
  );
}

export default App;
