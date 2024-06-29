import React, {useEffect} from 'react'
import thanks from './thanks.css'
import confetti from './confetti.min.js'

export const Thanks = () => {
  const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
  };
  
  //  Stop  
  const stop = () => {
      setTimeout(function() {
          confetti.stop()
      }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
  };

  useEffect(() => {
    start();
    return () => {
      stop(); // This will be called when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  
  return (
    <section className="thanks container section" id="thanks">
        <div className="thanks__container">
          <h1 className="thanks__title">Thank you! All letter received!</h1>
        </div>

    </section>
  )
}

export default Thanks
