import React from 'react';
import { MdSchool } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css"
const Education = () => {
  return (
    <>
  <div className=" education" id='education'>
  <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education details
        </h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'balck' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2015 - 2017"
    iconStyle={{ background: 'rgb(11 147 78)', color: '#fff' }}
    icon={<MdSchool  />}
  >
    <h3 className="vertical-timeline-element-title">MATRIC</h3>
    <h4 className="vertical-timeline-element-subtitle">PAF COLLEGE SARGODHA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'balck' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2017 - 2019"
    iconStyle={{ background: 'rgb(11 147 78)', color: '#fff' }}
    icon={<MdSchool  />}
  >
    <h3 className="vertical-timeline-element-title">INTERMEDIATE</h3>
    <h4 className="vertical-timeline-element-subtitle">PAF COLLEGE SARGODHA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'balck' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019 - 2023"
    iconStyle={{ background: 'rgb(11 147 78)', color: '#fff' }}
    icon={<MdSchool  />}
  >
    <h3 className="vertical-timeline-element-title">BS SOFTWARE ENGINEERING</h3>
    <h4 className="vertical-timeline-element-subtitle">MINHAJ UNIVERSITY LAHORE</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
  </div>

    </>
  )
}

export default Education
