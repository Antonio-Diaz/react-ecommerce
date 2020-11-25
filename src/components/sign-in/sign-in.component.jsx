import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '' , password: ''})
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
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
                    <div className="buttons">
                        <CustomButton type="submit"> sign in </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;