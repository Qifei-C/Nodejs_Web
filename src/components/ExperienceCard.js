import { Col } from "react-bootstrap";

export const ExperienceCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="exp-imgbx">
        <img src={imgUrl} />
        <div className="exp-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}