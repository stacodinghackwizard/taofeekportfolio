import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ralioartPortfolio.png'
import IMG2 from '../../assets/staPortfolio.png'
import IMG3 from '../../assets/subssumPortfolioImg.png'
import IMG4 from '../../assets/quizPortfolio.png'
import IMG5 from '../../assets/ttaPortfolioImg.png'
import IMG6 from '../../assets/foodkartgold.png'
import IMG7 from '../../assets/temmiteePortfolio.png'
import IMG8 from '../../assets/smallecommerce.png'
import IMG9 from '../../assets/firstecommerce.png'
import IMG10 from '../../assets/ticketPass.png'
import IMG11 from '../../assets/oldPortfolio.png'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Personal Blog Website uses Jekyll (is a static site generator) and is hosted on Github.',
        github: 'https://github.com/stacodinghackwizard/ralioarts',
        demo: 'https://ralioarts.vercel.app/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'My Personal Portfolio Website uses React and is deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/taofeekportfolio',
        demo: 'https://taofeekportfolio.vercel.app/',
    },
    {
        id: 3,
        image: IMG3,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/subssum',
        demo: 'https://subssum-beta.vercel.app/dashboard',
    },
    {
        id: 4,
        image: IMG4,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/sta-quiz',
        demo: 'https://sta-quiz.vercel.app/',
    },
    {
        id: 5,
        image: IMG5,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/',
        demo: 'https://web.tta.ng/',
    },
    {
        id: 6,
        image: IMG6,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/',
        demo: 'https://foodkart-gold.vercel.app/',
    },
    {
        id: 7,
        image: IMG7,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/TemmiteeCakes',
        demo: 'https://temmitee-cakes.vercel.app/',
    },
    {
        id: 8,
        image: IMG8,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/stamaker-smecommerc',
        demo: 'https://stamaker-smecommerc.vercel.app/',
    },
    {
        id: 9,
        image: IMG9,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/stamaker-Ecommerce',
        demo: 'https://stamaker-ecommerce.vercel.app/',
    },
    {
        id: 10,
        image: IMG10,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard/STATicketpass',
        demo: 'https://ticketpass404.vercel.app/',
    },
    {
        id: 11,
        image: IMG11,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/stacodinghackwizard',
        demo: 'https://sta-portfolio-veu3.vercel.app/',
    },
    
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
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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