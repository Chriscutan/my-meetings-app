import home from '../pages/Home.css';
import MeetingCard from '../components/MeetingCard';

import meetings from '../images/meetings.jpeg';

function Home(){

    const meetingsList = [
        {name: "HTML Meeting", desc: "Learn all the basics of HTML", date:"08-Aug-2022", time:"10:30 AM"},
        {name: "CSS Meeting", desc: "Learn basics of CSS", date:"09-Aug-2022", time:"11:30 AM"},
        {name: "Javascript Meeting", desc: "Learn javascript basics", date:"10-Aug-2022", time:"12:30 AM"},
        {name: "React Meeting", desc: "Learn complete react", date:"11-Aug-2022", time:"9:30 AM"},
    ];
    return(
        <div className='home-container'>
            <img src={meetings} alt="No img" className="meeting"></img>

            <h1 className='title'>One stop for all your meetings...</h1>

            <h4 className='desc'>Meet your friends, family and office...</h4>

            <div className='meeting-cards'>
               {
                meetingsList.map((meet)=>{
                    return <MeetingCard name={meet.name} desc={meet.desc} date={meet.date} time={meet.time} />
                })
               }
            </div>
        </div>
    );
}

export default Home;