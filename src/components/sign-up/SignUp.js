import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user-action'
import CustomButton from '../customButton/CustomButton'
import FormInput from '../form-input/FormInput'
import './SignUp.scss'

const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({  
        displayName: '', 
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = userCredentials;
    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword)
        {
            alert("passwords don't match");
            return;
        }
        signUpStart({ displayName, email, password });
    }
    const handleChange = e =>{
        const {name, value} = e.target;
        setCredentials({ ...userCredentials, [name]: value })
    }
    return (
        <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span> 
        <form className="sign-up-form"  onSubmit={handleSubmit}>
            <FormInput 
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required
            />
            <FormInput 
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
            />
            <FormInput 
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
            />
            <FormInput 
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required
            />
            <CustomButton type="submit">SIGN UP</CustomButton>
        </form>            
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignUp);
