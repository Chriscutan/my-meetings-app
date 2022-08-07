import mymeetings from '../components/MyMeetings.css';

function MyMeetings(){
    return(
        <div className='container'>
            <h1 className='title'>Schedule Meeting</h1>

            <input type="text" placeholder="Meeting Title"/>
            <input type="text" placeholder="Meeting Description" />
            <input type="date" placeholder="Meeting Date" />
            <input type="time" placeholder="Meeting Time" />

            <button type='submit' className='meet-btn'>Schedule Meeting</button>
        </div>
    );
}

export default MyMeetings;