import React, { useState, useEffect, useRef} from 'react'
import "./recommendations.css"
import schoolList from './schoolList'
import recommendation from "../../assets/cropped-avatar.png";
import Popup from '../../components/popup/Popup';
import confetti from '../Thanks/confetti.min.js';

const recommender =  {
    first: "Hector",
    last: "Ceniceros"
  };


const HectorC = () => {
  const [items, setItems] = useState([]);
  const confettiTriggeredRef = useRef(false);
  const [awaitingItems, setAwaitingItems] = useState([]);
  const [thanksPopup, setThanksPopup] = useState(false);
  const triggerRef = useRef(false); 
  const popupTriggeredRef = useRef(false);

    const filterItem = (statusItem) => {
      const updatedItems = schoolList.filter((curElem) => {
        // Check if the recommender is listed in the Recommenders and match the status
        return curElem.recommenders.some(recommenderInfo => 
          recommenderInfo.name === recommender.first && recommenderInfo.status === statusItem
        );
      });
  
      setItems(updatedItems);
    }

    const showAllItemsForRecommender = () => {
      const recommenderItems = schoolList.filter(school =>
        school.recommenders.some(r => r.name === recommender.first)
      );
    setItems(recommenderItems);
    }

    const filterAwaitingItems = () => {
      const filtered = items.filter(item => item.status === 'Awaiting');
      setAwaitingItems(filtered); // Update state specifically for "Awaiting" items
    };


    useEffect(() => {
      console.log('Items:', items);
      console.log('Awaiting Items:', awaitingItems);
      filterAwaitingItems();
    }, [items]); // Re-run whenever items change

    useEffect(() => {
      // Trigger only if there are no "Awaiting" items and it hasn't been triggered before
      if (awaitingItems.length === 0 && items.length > 0 && !triggerRef.current) {
        // Your trigger logic here (e.g., show popup or start confetti)
        console.log('Trigger for no Awaiting items'); // Placeholder for trigger action
        triggerRef.current = true; // Mark as triggered
      }
    }, [awaitingItems, items]); // Depend on awaitingItems to determine the trigger

    useEffect(() => {
      if (awaitingItems.length === 0 && items.length > 0 && !popupTriggeredRef.current) {
        // If no items and popup hasn't been triggered yet
        setThanksPopup(true); // Show the popup
        popupTriggeredRef.current = true; // Mark as triggered to prevent future triggers
      }
    }, [awaitingItems, items]); // This effect depends on 'items'
  

    const startConfetti = () => {
      confetti.start();
      setTimeout(() => {
        confetti.stop();
      }, 5000); // Stop 5 seconds after starting
    };
    
    useEffect(() => {
      if (awaitingItems.length === 0 && items.length > 0 && !confettiTriggeredRef.current) {
        // If no items and confetti hasn't been triggered yet
        setTimeout(() => {
          startConfetti();
        }, 500); // Delay confetti start by 500ms for effect
        
        confettiTriggeredRef.current = true; // Mark as triggered to prevent future triggers
      }
      // No dependencies are needed since we're directly accessing and modifying the ref and state
    }, [awaitingItems, items]); // This effect depends on 'items'

    useEffect(() => {
      showAllItemsForRecommender();
    }, []);
    
    return (
        <section className="recommendations container section" id="recommendations">
          <h2 className="section__title">Recommendation Status</h2>
          <div className="recommendations__container grid">
          <img src={recommendation} alt="" className="recommendations__img" />
            <div className="recommendations__data grid">
              <div className="recommendations__info">
                  <p className="recommendations__description">
                    Hi Professor/Dr. {recommender.last}! This is <b>Qifei</b>.
                  </p>
                  <p className="recommendations__description">
                    Thanks again for your support with my applications! To check out the status of your recommendations, please click on the filters <b>Awaiting</b> to see the missing ones.  
                  </p>
                  <p className="recommendations__description">Once you submitted a recommendation letter, the status of the recommendations would not be updated until 24h. Should you have any further questions or need additional assistance, please <a href="mailto:qifei@umail.ucsb.edu">send me an email</a>.</p>
              </div>
            </div>
          </div>
          <div className="recommendations__filters">
              <span className="recommendations__item" onClick={showAllItemsForRecommender}>All</span>
              <span className="recommendations__item" onClick={() => filterItem("Received")}>Received</span>
              <span className="recommendations__item" onClick={() => filterItem("In Progress")}>In Progress</span>
              <span className="recommendations__item" onClick={() => filterItem("Awaiting")}>Awaiting</span>
          </div>

          <div className="recommendations__container">
            <table className="recommendations__table">
              <thead>
                <tr>
                  <th>School</th>
                    <th>Program</th>
                    <th>Track</th>
                    <th>Status</th>
                </tr>
              </thead>
            <tbody>
            {items.map((elem, index) => {
              const { school, program, track, recommenders } = elem;
              const recommenderStatus = recommenders.find(r => r.name === recommender.first)?.status || 'Status Unknown';
              // Assign class based on status
              const statusClassName = recommenderStatus === "Received" ? "status-received" : 
                                      recommenderStatus === "Awaiting" ? "status-awaiting" : 
                                      recommenderStatus === "In Progress" ? "status-in-progress" :
                                      "status-other";
              
              return (
                <tr key={school + index}>
                  <td>{school}</td>
                  <td>{program}</td>
                  <td>{track}</td>
                  <td className={statusClassName}>{recommenderStatus}</td>
                </tr>
              );
            })}
            </tbody>
            </table>
          </div>
          <div className="recommendations__info">
            <p className="recommendations__updated">
              Information Updated at Feb 20th, 2024
            </p>
          </div>

          <Popup trigger={thanksPopup} setTrigger={setThanksPopup}>
            <h3>Test Popup</h3>
            <p>This is a test function of Popup</p>
          </Popup>
        </section>
    )
}

export default HectorC