import regCard from '../components/RegCard.css';

function RegCard(){
    return(
        <div className='reg-card'>
            <h2 className='title'>Register</h2>

            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="mobile" placeholder="Mobile" />
            <input type="date" placeholder="Date of Birth" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button type="submit" className="reg-btn">Register</button>
        </div>
    );
}

export default RegCard;