import React from "react";
import { render, screen } from "@testing-library/react";
import ContactList from "../Components/ContactList";
import callHistory from '../assets/callHistory.json';

jest.mock('../utils/mapCallHistoryData', () => {
    return jest.fn(x => {
        return [
            {
                "firstName": "John",
                "lastName": "Smith",
                "phoneNumber": "+15551234567",
                "called": 1533633205,
                "calledArr": [1533633205, 1533556800]
                },
                {
                "firstName": "Jane",
                "lastName": "Bolster",
                "phoneNumber": "+15555550000",
                "called": 1533633205,
                "calledArr": []
                },
        ]
    })
})

describe("ContactList", () => {
    it("renders <ContactList /> component", () => {
        render(<ContactList
            data={callHistory}
        />);
    });

    it("renders child component", () => {
        const component = render(<ContactList
            data={callHistory}
        />);

       expect(screen.getByText("My favorite contacts")).toBeTruthy();
       expect(screen.getAllByTestId('accordion-component')).toBeTruthy();
    });
    
});