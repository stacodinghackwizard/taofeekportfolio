import React from 'react'
import './portfolio.css'
import IMG0 from '../../assets/moniflowImg.png'
import IMG1 from '../../assets/ralioartPortfolio.png'
import IMG2 from '../../assets/staPortfolio.png'
import IMG3 from '../../assets/subssumPortfolioImg.png'
import IMG4 from '../../assets/motoka.png'
import IMG5 from '../../assets/ttaPortfolioImg.png'
import IMG6 from '../../assets/foodkartgold.png'
import IMG7 from '../../assets/temmiteePortfolio.png'
import IMG8 from '../../assets/smallecommerce.png'
import IMG9 from '../../assets/firstecommerce.png'
import IMG10 from '../../assets/ticketPass.png'
import IMG11 from '../../assets/oldPortfolio.png'
import VID01 from '../../assets/ticketPass.png'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG0,
        title: 'Moniwave is a sophisticated cloud-based accounting and inventory management system designed to streamline financial and operational processes for businesses. This system simplifies expense tracking, sales management, inventory control, and financial reporting.',
        github: '',
        demo: 'https://web.moniwave.com/',
    },
    {
        id: 1,
        image: IMG1,
        title: 'The Ralioarts portfolio website was designed to showcase the creative work of a professional UI/UX designer. Built using Vuejs and hosted on GitHub Pages, the site serves as a sleek, responsive gallery for displaying various design projects.',
        github: 'https://github.com/stacodinghackwizard/ralioarts',
        demo: 'https://ralioarts.vercel.app/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'This Personal Portfolio Website is built with React and deployed on Vercel, showcasing my work, skills, and achievements. Designed to highlight my projects and professional background, the portfolio features an elegant and responsive layout that adapts to various devices.',
        github: 'https://github.com/stacodinghackwizard/taofeekportfolio',
        demo: 'https://taofeekportfolio.vercel.app/',
    },
    {
        id: 3,
        image: IMG5,
        title: 'The Tech Talent Academy (TTA) website was developed as part of a team project to showcase the institution’s courses, programs, and offerings. Designed with a clean and modern layout, the site provides students and educators with an easy-to-navigate platform.',
        github: 'https://github.com/stacodinghackwizard/',
        demo: 'https://web.tta.ng/',
    },
    {
        id: 4,
        image: IMG3,
        title: 'This User Dashboard application was developed as part of a collaborative project, designed to manage user profiles and data. Built using React, the application offers an intuitive interface for users to easily access and interact with their information.',
        github: 'https://github.com/stacodinghackwizard/subssum',
        demo: 'https://subssum-beta.vercel.app/dashboard',
    },
    {
        id: 5,
        image: IMG6,
        title: 'FoodKart connects local marketers with customers, allowing sellers to register and list products while customers can browse and buy from various vendors. It offers a streamlined, community-driven marketplace for easy buying and selling.',
        github: 'https://github.com/stacodinghackwizard/',
        demo: 'https://foodkart-gold.vercel.app/',
    },
    {
        id: 5,
        image: IMG10,
        title: 'This Event Planner website is designed to streamline event management by allowing users to sell tickets and manage events efficiently. The platform provides an easy-to-use interface for event organizers to list their events, sell tickets, and handle registrations, while attendees can browse events and purchase tickets seamlessly.',
        github: 'https://github.com/stacodinghackwizard/STATicketpass',
        demo: 'https://ticketpass404.vercel.app/',
    },
  
   
   
    {
        id: 6,
        image: IMG7,
        title: 'This personal eCommerce website, built in 2021, was developed for hands-on practice and to showcase my skills in creating online stores. The platform features a user-friendly interface where visitors can browse products, add items to their cart, and complete purchases.',
        github: 'https://github.com/stacodinghackwizard/TemmiteeCakes',
        demo: 'https://temmitee-cakes.vercel.app/',
    },
    {
        id: 7,
        image: IMG8,
        title: 'This personal eCommerce website, built in 2021, was developed for hands-on practice and to showcase my skills in creating online stores. The platform features a user-friendly interface where visitors can browse products, add items to their cart, and complete purchases.',
        github: 'https://github.com/stacodinghackwizard/stamaker-smecommerc',
        demo: 'https://stamaker-smecommerc.vercel.app/',
    },
    {
        id: 8,
        image: IMG9,
        title: 'This personal eCommerce website, built in 2021, was developed for hands-on practice and to showcase my skills in creating online stores. The platform features a user-friendly interface where visitors can browse products, add items to their cart, and complete purchases.',
        github: 'https://github.com/stacodinghackwizard/stamaker-Ecommerce',
        demo: 'https://stamaker-ecommerce.vercel.app/',
    },
    {
        id: 9,
        image: IMG4,
        title: 'I contributed to the Motoka project as a full-stack developer and penetration tester. My work spanned both the frontend and backend, where I implemented features for user authentication, vehicle management, KYC verification, and payment integration. I also conducted penetration testing to identify and resolve security vulnerabilities, ensuring the platform’s robustness and data protection. My involvement covered the full development lifecycle, from building user interfaces to designing APIs and securing the application.',
        github: 'https://github.com/stacodinghackwizard/',
        demo: 'https://motoka.vercel.app/auth/login',
    },

  

   
    // {
    //     id: 10,
    //     image: IMG11,
    //     title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
    //     github: 'https://github.com/stacodinghackwizard',
    //     demo: 'https://sta-portfolio-veu3.vercel.app/',
    // },
    
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    {id === 10 ? (
                                        <a href={`/video?id=vid01`} target='_blank' rel='noopener noreferrer'>
                                            <video width="320" height="240" controls>
                                                <source src={image} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </a>
                                    ) : (
                                        <img src={image} alt={title} />
                                    )}
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={`/video?id=vid01`} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio