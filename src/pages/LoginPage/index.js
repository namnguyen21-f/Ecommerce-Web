import React from 'react';
import Image from './image.jpg'
import './index.css';
import axios from 'axios';

import SignInForm from './SigninForm'
import { validateLoginForm } from '../../ulti/validator';


class LoginPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            errors: {
                message: "",
            },
            user: {
                email: "",
                password: "", 
            },
   
            btnTxt: "show",
            type: "password",
            loading: true,
        };
        this.pwMask = this.pwMask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitSignin = this.submitSignin.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount(){
        if (localStorage.getItem('token')){
            axios.get('http://localhost:3000/api/getUserInfo' , {
                headers: {
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res =>{
                window.location.href = "/";
            }).catch(err => {
                this.setState({loading: false})
            })
        }  
    }   

    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        });
    }

    
    submitSignin() {
        var params = { 
            password: this.state.user.password, 
            email: this.state.user.email, 
        };
        axios
        .post("http://localhost:3000/api/signin", params)
        .then(res => {
            localStorage.token = res.data.token;
            localStorage.isAuthenticated = true;
            window.location.href = "/";
        })
        .catch(error => {
            this.setState({
                errors: { message: error.response.data.message }
            });
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
        var payload = validateLoginForm(this.state.user);
        
        if (payload.success) {
          this.setState({
            errors: {}
          });
         
          this.submitSignin();
          
        } else {
          const errors = payload.errors;
          this.setState({
            errors
          });
        }

    }


    render(){
        if (!this.state.loading){
            return (
                <div className="SignInPage">
                    <SignInForm
                        onSubmit={this.validateForm}
                        onChange={this.handleChange}
                        onPwChange={this.pwHandleChange}
                        errors={this.state.errors}
                        user={this.state.user}
                        type={this.state.type}
                        pwMask={this.pwMask}
                    />
                </div>
            )
        }else{
            return <div></div>
        }
    }
}

export default LoginPage;