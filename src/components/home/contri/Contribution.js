import React from 'react'
import './Contribution.css'

import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {Container} from "react-bootstrap";


export default function Contribution() {
  const MyGitHubColorScheme = {
    light: ["#dedce8", "#c0bbfa", "#9d96fa", "#8178fa", "#675cff"],
  };

  return (
    <Container data-aos="fade-up">
      
      <div className="font-bold contri-title">
        <h2>My Github Contributions</h2>
      </div>
      
      <div className='calender'>
        <GitHubCalendar
          username="007-Shivam"
          theme={MyGitHubColorScheme}
          fontSize={16}
          blockSize={20}
          blockRadius={5}
          year="last"
          colorScheme="light"
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
            })
          }
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
        />
        <ReactTooltip id="react-tooltip" />
      </div>
    </Container>
  )
}
