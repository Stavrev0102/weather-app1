/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
   const foreCastDays =  WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))
    console.log(foreCastDays);
    return (
    <>
    <label className="title"> Daily</label>
    <Accordion allowZeroExpanded>
        {data.list.splice(0,7).map((item, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="daily-item">
                            <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                            <label className="day"></label>
                            </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
        ))}
        
    </Accordion>
    </>
    )
}   
export default Forecast