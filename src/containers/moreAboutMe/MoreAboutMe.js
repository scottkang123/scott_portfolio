import React, {useContext} from "react";
import "./MoreAboutMe.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {moreAboutMe} from "../../portfolio";

export default function MoreAboutMe() {
  const {isDark} = useContext(StyleContext);

  if (!moreAboutMe.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="moreaboutme">
        <div className="more-about-me-div">
          <div className="more-about-me-header">
            <h1 className="heading more-about-me-title">{moreAboutMe.title}</h1>

            {/* Work Experience Section */}
            <h2 className="more-about-me-subtitle">Other Work Experience</h2>
            <div className="more-about-me-work-section">
              {moreAboutMe.otherWorkExperience.map((work, i) => (
                <div key={i} className="more-about-me-work-item">
                  <h3 className="more-about-me-work-role">{work.role}</h3>
                  <p className="more-about-me-work-company">{work.company}</p>
                  <p className="more-about-me-work-date">{work.date}</p>
                  <p className="more-about-me-work-desc">{work.description}</p>
                  {work.image && (
                    <div className="more-about-me-work-image-div">
                      <img
                        src={work.image}
                        alt={work.company}
                        className="more-about-me-work-image"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Countries Lived In Section */}
            <h2 className="more-about-me-subtitle">Countries I've Lived In</h2>
            <div className="more-about-me-countries-section">
              {moreAboutMe.countriesLivedIn.map((country, i) => (
                <div key={i} className="more-about-me-country-item">
                  <h3 className="more-about-me-country-name">{country.name}</h3>
                  <p className="more-about-me-country-duration">
                    {country.duration}
                  </p>
                  {country.image && (
                    <div className="more-about-me-country-image-div">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="more-about-me-country-image"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hobbies Section */}
            <h2 className="more-about-me-subtitle">Hobbies</h2>
            <div className="more-about-me-hobbies-section">
              <ul className="more-about-me-hobbies-list">
                {moreAboutMe.hobbies.map((hobby, i) => (
                  <li key={i} className="more-about-me-hobby-item">
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
