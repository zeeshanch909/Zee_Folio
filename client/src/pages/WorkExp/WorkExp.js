import React from 'react';
import { FaNetworkWired } from "react-icons/fa";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "./WorkExp.css"
const WorkExp = () => {
  return (
    <>
     <div className=" work" id='experience'>
        <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <VerticalTimeline lineColor='#1e1e2c'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'balck' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2015 - 2017"
    iconStyle={{ background: 'rgb(11 147 78)', color: '#fff' }}
    icon={<FaNetworkWired  />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Zeetech pvt. Limited</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'balck' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2015 - 2017"
    iconStyle={{ background: 'rgb(11 147 78)', color: '#fff' }}
    icon={<FaNetworkWired  />}
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
    date="2015 - 2017"
    iconStyle={{ background: 'rgb(11 147 78)', color: '#fff' }}
    icon={<FaNetworkWired  />}
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
    date="2015 - 2017"
    iconStyle={{ background: 'rgb(11 147 78)', color: '#fff' }}
    icon={<FaNetworkWired  />}
  >
    <h3 className="vertical-timeline-element-title">MATRIC</h3>
    <h4 className="vertical-timeline-element-subtitle">PAF COLLEGE SARGODHA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
     </div>
    </>
  )
}

export default WorkExp
