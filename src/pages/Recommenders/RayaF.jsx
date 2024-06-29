import React, { useState, useEffect} from 'react'
import "./recommendations.css"
import schoolList from './schoolList'
import recommendation from "../../assets/cropped-avatar.png";

const recommender =  {
    first: "Raya",
    last: "Feldman"
  };


const RayaF = () => {
  const [items, setItems] = useState([]);
    
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

  useEffect(() => {
    // Initialize the items based on the specific recommender when the component mounts
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
                    Thanks again for your support with my applications! To check out the status of your recommendations, please click on the filters <b>Awaiting</b> to see which ones you haven't tackled yet.  
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
        </section>
    )
}

export default RayaF