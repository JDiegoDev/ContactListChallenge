import '../Styles/Accordion.scss';
import { useState } from 'react';

const Accordion = (props) => {
    
    const { firstName, lastName, calledDisplay, daysAgo, calledArrDisplay } = props.userInfo;

    const [ showPanel, setShowPanel ] = useState(false);
    const handleClick = () => setShowPanel(!showPanel);
    
    return (
        <div className='accordion' data-testid="accordion-component">
            <div className='accordion__selection' onClick={handleClick} data-testid="accordion-panel">
                <p className='accordion__display-name'>
                    { firstName }
                    <span>
                        { lastName }
                    </span>
                </p>
                <p className='accordion__preview'>
                    { `${daysAgo} days ago`}
                    <span>&#8594;</span>
                </p>
            </div>
            { showPanel && (
                    <div className='accordion__panel'>
                        { calledArrDisplay.length ? 
                            calledArrDisplay.map((called, index) => {
                                return <p key={index}>
                                    {called}
                                </p>
                            }) :
                            <p>{calledDisplay}</p>
                        }
                    </div>
                )
            }   
        </div>
    )
};

export default Accordion;