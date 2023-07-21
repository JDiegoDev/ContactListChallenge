import '../Styles/ContactList.scss';
import Accordion from './Accordion';
import { dateDaysAgo, fullDay } from '../utils/unitTimesStamp';
import mapCallHistoryData from '../utils/mapCallHistoryData';

const ContactList = ({ data }) => {

    const mappedData = mapCallHistoryData(data);

    return (
        <div className="contact-list">
            <div className="contact-list__header">
                <p>My favorite contacts</p>
            </div>
            <div className="contact-list__container">
                { 
                    (mappedData && mappedData.length) && mappedData.map((user, index) => {
                        const daysAgo = dateDaysAgo(user.called);
                        const newUserInfo = {
                            ...user,
                            daysAgo,
                            calledDisplay: fullDay(user.called),
                            calledArrDisplay: user.calledArr ? user.calledArr.map(called => fullDay(called)) : [],
                        };

                        const { firstName, lastName } = user;
                        

                        return (
                            <Accordion 
                                key={`${firstName}-${lastName}-${index}`}
                                userInfo={newUserInfo}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ContactList;