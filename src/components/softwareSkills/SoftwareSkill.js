import React, { useEffect } from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  // Animation for skill level on component mount
  useEffect(() => {
    const skillLevels = document.querySelectorAll('.skill-level-fill');
    
    // Animate skill levels after a short delay
    setTimeout(() => {
      skillLevels.forEach(skill => {
        skill.style.width = skill.getAttribute('data-level') + '%';
      });
    }, 300);
  }, []);

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
                {skills.level && (
                  <div className="skill-level">
                    <div 
                      className="skill-level-fill" 
                      data-level={skills.level}
                      style={{ width: "0%" }} // Initial width, will be animated
                    ></div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
