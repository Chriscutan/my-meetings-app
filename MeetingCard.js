import meetingCard from '../components/MeetingCard.css';

function MeetingCard(props){
    return(
        <div className='card'>
            <h2 className='title'>{props.name}</h2>
            
            <h3 className='desc'>{props.desc}</h3>

            <h4 className='date'>{props.date}</h4>

            <h4 className='time'>{props.time}</h4>

            <button className='meet-btn'>Join Meeting</button>
        </div>
    );
}

export default MeetingCard;