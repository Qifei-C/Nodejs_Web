import React from 'react'

export const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className="about__box">
            <i className="about__icon icon-chart"></i>

            <div>
                <h3 className="about__title">20+</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">10+</h3>
                <span className="about__subtitle">Team Leading Experience</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">2</h3>
                <span className="about__subtitle">Kaggle Badge</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-book-open"></i>

            <div>
                <h3 className="about__title">1</h3>
                <span className="about__subtitle">Publicans</span>
            </div>
        </div>
    </div>

    
  )
}

export default AboutBox