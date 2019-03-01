import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: '',
            results: '',
        }
        
        this.state = {
            password: '',
            results1: '',
        }
        

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange=this.onPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    //handler for data from child component
    onEmailChange(email){
        
        console.log("From the child: " + email);

        this.setState( () => {
                return {
                    email
                };
            }
        );

        console.log("From the parent state: " + this.state.email);
    }
    
        onPasswordChange(password){
        
        console.log("From the child: " + password);

        this.setState( () => {
                return {
                    password
                };
            }
        );

        console.log("From the parent state: " + this.state.password);
    }
    

    onFormSubmit(event){

        event.preventDefault();

        const results = "Email address is: " + this.state.email;
        const results1 = "Password is : " + this.state.password;
        

        this.setState( () => {
                return {
                    results,
                    results1
                };
            }
            
        );

        //this is also lifting state to the parent
        this.props.onFormSubmit(results);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange} 
                     

                               />
                    <PasswordInput onPasswordInputChange={this.onEmailChange}/>
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
            </div>            
        );
    };
}

export default LoginForm;