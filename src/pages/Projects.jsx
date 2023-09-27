
import React from 'react';
import './../styles/Projects.scss'; // Make sure your SCSS file path is correct
import jcg from '../assets/backgrounds/jcg.png';
import nike from '../assets/backgrounds/nike.png';
import weather from '../assets/backgrounds/weather.png';
import rachit from '../assets/backgrounds/arport.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  return (
    <section id='portfolio' data-aos="fade">
      <h5>PROJECTS</h5>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={jcg} alt="" />
          </div>
          <h3>SEO-R&D : Jio Cloud Gaming</h3>
          <a href="https://cloudplay.jiogames.com" className="btn" target="blank">Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={nike} alt="" />
          </div>
          <h3>Nike Clone</h3>
          <a href="https://nike-store-taupe.vercel.app/" className="btn" target="blank">Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={weather} alt="" />
          </div>
          <h3>WeatherScape</h3>
          <a href="/" className="btn" target="blank">Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={rachit} alt="" />
          </div>
          <h3>Architect Portfolio</h3>
          <a href="https://react-portfolio-smoky-one.vercel.app/" className="btn" target="blank">Live Demo</a>
        </article>
      </div>
    </section>
    
  )
}

export default Projects














// import React from 'react';
// import './../styles/Projects.scss'; // Make sure your SCSS file path is correct
// import jcg from '../assets/backgrounds/jcg.png';
// import nike from '../assets/backgrounds/nike.png';
// import weather from '../assets/backgrounds/weather.png';
// import rachit from '../assets/backgrounds/arport.png';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// const Projects = () => {
//   return (
//     <div id="project-container" data-aos="slide-up">
//       <h4>PROJECTS</h4>
//       <hr id="hr" />
//       <div className="nft">
//         <div className="main">
//         <a href="https://cloudplay.jiogames.com">
//           <img className="tokenImage" src={jcg} alt="NFT" />
//           </a>
//           <h2>CloudPlay : Jio Cloud Games</h2>
//           <p className="description">
//             Jio Cloud Games, leveraging expertise in Search Engine Optimization
//             (SEO), Progressive Web Applications (PWAs), and Front-End
//             Development. Role includes hands-on debugging, active participation
//             in Research and Development (R&D) initiatives, and the application
//             of strong supervisory skills to improve the gaming experience.
//             Contributions are crucial in ensuring a seamless and optimized
//             gaming platform for users.
//           </p>
//           <hr />
//           <div className="creator">
//             <p>
//               <ins>Website: </ins>
//               <a href="https://cloudplay.jiogames.com">cloudplay.jiogames.com</a>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="nft">
//         <div className="main">
//         <a href="https://nike-store-taupe.vercel.app/">
//           <img className="tokenImage" src={nike} alt="NFT" />
//           </a>
//           <h2>Nike Clone</h2>
//           <p className="description">
//             Developed a responsive website that replicates the Nike e-commerce
//             platform, featuring a user authentication system with a custom API
//             for real-time credential verification. The design prioritizes
//             responsiveness, ensuring seamless user experiences across various
//             devices. Additionally, the site incorporates a minimalist design
//             with captivating AOS animations, MailJS integration for contact, and
//             browser routing for smooth navigation. This project not only
//             showcases my web development skills but also highlights my dedication
//             to user-centric design and functionality.
//           </p>
//           <hr />
//           <div className="creator">
//             <p>
//               <ins>Website: </ins>
//               <a href="https://nike-store-taupe.vercel.app/">NikeClone</a>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="nft">
//         <div className="main">
//         <a href="">
//           <img className="tokenImage" src={weather} alt="NFT" />
//           </a>
//           <h2>WeatherScape</h2>
//           <p className="description">
//             As the developer of WeatherScape Pro, I integrated the OpenWeather
//             API to provide real-time weather data from across the globe. This
//             innovative app offers users a dynamic experience, with background
//             images changing to reflect the weather conditions of their chosen
//             city. It features an intuitive user interface for easy navigation and
//             personalization, allowing users to save favorite cities for quick
//             access. WeatherScape Pro combines aesthetic appeal with functional
//             reliability, offering accurate weather information and a visual
//             journey through the skies. This project highlights my ability to
//             create engaging user experiences and effectively integrate data
//             sources for enhanced functionality.
//           </p>
//           <hr />
//           <div className="creator">
//             <p>
//               <ins>Website: </ins>
//               <a href="">Link Coming Soon</a>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="nft">
//         <div className="main">
//         <a href="https://react-portfolio-smoky-one.vercel.app/">
//           <img className="tokenImage" src={rachit} alt="NFT" />
//           </a>
//           <h2>Architect Portfolio</h2>
//           <p className="description">
//             I created a portfolio website for an architect using React and
//             MailJS with a focus on minimalism. The site is fully responsive for
//             seamless viewing on all devices. It elegantly showcases the
//             architect's projects with high-quality images and detailed
//             descriptions. A MailJS-powered contact form enables direct client
//             communication. An "About" section offers architect background, and
//             user-friendly navigation enhances the browsing experience. Social
//             media links encourage engagement.
//           </p>
//           <hr />
//           <div className="creator">
//             <p>
//               <ins>Website: </ins>
//               <a href="https://react-portfolio-smoky-one.vercel.app/">PortfolioWebsite</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

