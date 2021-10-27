import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

function Home(props) {
    return (
        <div className="home-container" id={ props.id || ''}>
            <Header />
            <Profile />
            <Footer /> 
            <div className='icon'>
            <a href="https://web.facebook.com/tathagata.chakraborty.9041"className='facebook'><i className='fa fa-facebook-f'></i> Facebook </a>
            <a href="https://github.com/tathagata1805" className='github'> <i className='fa fa-github'></i>Github</a>
            <a href="https://www.linkedin.com/in/tathagata-chakraborty-0bb5b71a3" className='linkedin'> <i className='fa fa-linkedin'></i> LinkedIn </a>
            
          </div>
        </div>
    )
}

export default Home;
