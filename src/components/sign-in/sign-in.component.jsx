import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '' , password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I have already account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>                    
                    <FormInput onChange={this.handleChange}
                           type="email" 
                           name="email"
                           label="email"
                           value={this.state.email} 
                           required/>
                    <FormInput onChange={this.handleChange}
                           type="password" 
                           name="password"
                           label="password" 
                           value={this.state.password} 
                           required />
                    <CustomButton type="submit"> sign in </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;