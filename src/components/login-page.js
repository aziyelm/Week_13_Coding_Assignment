import React from 'react';
import LoginForm from './login-form';
import NavBar from './navbar';

//login page with navbar and login form
export default class LoginPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <NavBar/>
                </div>
                <div className='login'>
                    <LoginForm/>
                </div>
                
            </div>
        );

    }
}