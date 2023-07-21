import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "../Components/Accordion";
import callHistory from '../assets/callHistory.json';

describe("Accordion", () => {

    const props = {
        "firstName": "John",
        "lastName": "Smith",
        "phoneNumber": "+15551234567",
        "called": "1533556800",
        "calledDispay": "Mon Aug 06 2018 07:00:00 GMT-0500 (Central Daylight Time) 7:00:00",
        "calledArrDisplay": [
            "Mon Aug 06 2018 07:00:00 GMT-0500 (Central Daylight Time) 7:00:00",
            "Sun Aug 12 2018 04:13:25 GMT-0500 (Central Daylight Time) 4:13:25" 
        ],
      };

    it("renders <ContactList /> component", () => {
        render(<Accordion
            userInfo={props}
        />);
    });  
    
    it("opens panel onClick event", () => {
        render(<Accordion
            userInfo={props}
        />);

        const button = screen.getByTestId("accordion-panel");
        fireEvent.click(button);

        expect(screen.getByText("Mon Aug 06 2018 07:00:00 GMT-0500 (Central Daylight Time) 7:00:00"))
        
    });
});