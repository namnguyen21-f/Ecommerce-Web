import React from 'react';
import Image from './image.jpg'
import './index.css';
import axios from 'axios';
import {validateSignUpForm} from '../../ulti/validator'
import SignupForm from './SignupForm'
class SignupPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            errors: {
                message: "",
            },
            user: {
                username: "",
                email: "",
                password: "",
                pwconfirm: "",
                fName: "", 
                lName: "",
                phone: "",
            },
   
            btnTxt: "show",
            type: "password",
        };
        this.pwMask = this.pwMask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.pwHandleChange = this.pwHandleChange.bind(this);
    }

    componentDidMount(){

    }   

    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    pwHandleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
    
        this.setState({
          user
        });
    }

    submitSignup() {
        var params = { 
            userName: this.state.user.username, 
            password: this.state.user.password, 
            email: this.state.user.email, 
            firstName: this.state.user.fName,
            lastName: this.state.user.lName,
            phone: this.state.user.phone,
        };
        console.log(params)
        axios
        .post("http://localhost:3000/api/signup", params)
        .then(res => {
        if (res.data.success === true) {
            localStorage.token = res.data.token;
            localStorage.isAuthenticated = true;
            window.location.reload();
        } else {
            this.setState({
            errors: { message: res.data.message }
            });
        }
        })
        .catch(err => {
        console.log("Sign up data submit error: ", err);
        });
    }

    pwMask(event) {
        event.preventDefault();
        this.setState(state =>
          Object.assign({}, state, {
            type: this.state.type === "password" ? "input" : "password",
          })
        );
    }

    validateForm(event) {
        event.preventDefault();
        var payload = validateSignUpForm(this.state.user);
        if (payload.success) {
          this.setState({
            errors: {}
          });
          this.submitSignup();
        } else {
          const errors = payload.errors;
          this.setState({
            errors
          });
        }
    }


    render(){
        return (
            <div className="SignupPage">
                <SignupForm
                    onSubmit={this.validateForm}
                    onChange={this.handleChange}
                    onPwChange={this.pwHandleChange}
                    errors={this.state.errors}
                    user={this.state.user}
                    type={this.state.type}
                    pwMask={this.pwMask}
                    password={this.state.user.password}
                />
            </div>
        )
    }
}

export default SignupPage;