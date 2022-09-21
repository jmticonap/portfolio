import React from 'react';

export const ProjectItem = ({ image, alt, name }) => {
    return (
        <article className="portfolio__card">
            <div className="portfolio__img-container">
                <img src={image} alt={alt} />
                <p className="portfolio__text">{name}</p>
                <div className="custom-after"></div>
            </div>
        </article>
    )
}

export const Projects = (props) => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio__aligner">
                <h2 className="portfolio__h2">Portfolio</h2>
                { props.children }
            </div>
        </section>
    )
}
