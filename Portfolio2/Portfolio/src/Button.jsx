import React from 'react';

const Button = ({ targetId }) => {

  const handleHideText = () => {
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.style.display = "none";
    }
  }

  const handleShowText = () => {
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.style.display = "block";
    }
  }

  return (
    <div className="project-button-container">
      <div className="project-button" onClick={handleShowText}>
        Show description
      </div>

      <div className="project-button" onClick={handleHideText}>
        Hide description
      </div>
    </div>
  )
}

export default Button;
