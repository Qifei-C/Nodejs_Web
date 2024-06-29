import React from 'react'

export const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">5670</h3>
                <span className="about__subtitle">Cups of Coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">22</h3>
                <span className="about__subtitle">Just replace with something</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">10</h3>
                <span className="about__subtitle">Just replace with something too</span>
            </div>
        </div>
    </div>

    
  )
}

export default AboutBox