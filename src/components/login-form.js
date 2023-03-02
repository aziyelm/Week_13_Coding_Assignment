import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return(
            <div>
                {/* h3 */}
                <h3 className='login-header'>Log In</h3>

                {/* login form */}
                <form className='form'>
                    <label>Username:
                        <input type="text" />
                    </label>
                    <br></br>
                    <label>Password:
                        <input type="text" />
                    </label>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}