import React, { Component } from 'react'
import App from "../../App"

import { useHistory } from 'react-router-dom'


const LOGIN_URL = "http://localhost:8000/api/users/login/"
const SIGNUP_URL = "http://localhost:8000/api/users/"

// This file stores the details of a user in case the user loggs in



class State extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            loggedInUser : {
                DoctorName : "Doctor Vigna ",
                EmailId : "abc@xyz.com", 
                token : ""
            },
            signUpUser : {
                DoctorName : "LogiNNnDoc",
                Email : "myEmail@gmail.com",
                Password : "Lololol"
            },
            loginUser : {
                DoctorName : "fdksnfd",
                Email : "jdkfd",
                Password : "kdfndswv"
            },
            // history : useHistory()

        }
        this.handleSignupChange = this.handleSignupChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.clickSignup = this.clickSignup.bind(this);

        // this.clickSignup = this,clickSignup.bind(this); 
        // const history = useHistory();

    }
    

    handleSignupChange(event){
        const target = event.target;
        if(target.name === "email"){
            this.setState({
                signUpUser : {
                    DoctorName : this.state.signUpUser.DoctorName,
                    Email : target.value,
                    Password : this.state.signUpUser.Password
                }
            })
        }
        if(target.name === "password"){
            this.setState({
                signUpUser : {
                    DoctorName : this.state.signUpUser.DoctorName,
                    Email : this.state.signUpUser.Email,
                    Password : target.value
                }
            })
        }
        if(target.name === "DoctorName"){
            this.setState({
                signUpUser : {
                    DoctorName : target.value,
                    Email : this.state.signUpUser.Email,
                    Password : this.state.signUpUser.Password
                }
            })
        }
        
        
    }
    handleLoginChange(event){

        const target = event.target;
        if(target.name === "email"){
            this.setState({
                LoginUser : {
                    DoctorName : this.state.signUpUser.DoctorName,
                    Email : target.value,
                    Password : this.state.signUpUser.Password
                }
            })
            console.log(this.state)
        }
        if(target.name === "password"){
            this.setState({
                LoginUser : {
                    DoctorName : this.state.signUpUser.DoctorName,
                    Email : this.state.signUpUser.Email,
                    Password : target.value
                }
            })
        }
        if(target.name === "DoctorName"){
            this.setState({
                LoginUser : {
                    DoctorName : target.value,
                    Email : this.state.signUpUser.Email,
                    Password : this.state.signUpUser.Password
                }
            })
        }

    }

// On clicking signUp

    async clickSignup(event){
        return fetch(SIGNUP_URL, {
            method : "POST", 
            headers: {

                "Content-Type": "application/json",
    
            },
            body : JSON.stringify({
                "username" : this.state.signUpUser.DoctorName,
                "password" : this.state.signUpUser.Password,
                "email" : this.state.signUpUser.Email
            })
        }).then((response) => {
            console.log(response)
            if(response.statusCode === 201){
                // history.push("/")
                let history = useHistory();
                history.push("/")
                history.goBack()

                console.log("HAHA")
            }
            else if(response.statusCode === 400){
                // Generate an error Message
                alert(response.body['username'] + " " + response.body["password"])
            }
            else {
                alert("Kindly add all the fields")
            }
        })
    }





    render()
    {
        return (
            <div>
                <App AppProps = {this.state} loginChange = {this.handleLoginChange} signupChange = {this.handleSignupChange} SignupSubmit = {this.clickSignup}  />
            </div>
        )
    }
}

export default State