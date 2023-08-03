import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/TechIcons.jpg";
import Section from "../shared/section";
import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper"> 
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                       <ul className="skill">
                        <li>
                            ReactJs
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            SCSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                       </ul>
                    </p>
                    <CallToAction
                        text="Download CV"
                        // icon={<AiOutlineCloudDownload />}
                        // action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
