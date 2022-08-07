import loginCard from '../components/LoginCard.css';

function LoginCard(){
    return(
        <div className='log-card'>
            <h1>Login</h1>

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button type="submit" className="log-btn">Login</button>
        </div>
    );
}

export default LoginCard;