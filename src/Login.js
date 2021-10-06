import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Switch,Link,useHistory } from "react-router-dom";
import './Login.css'
import {auth} from './firebase'
function Login() {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const history=useHistory();
    //it basically changes the url of the page and can be used for redirecting to another page over clicks

    const signIn=(e)=>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            if(auth)
            {
                history.push('/')
            }
        }
        )
        .catch((error)=>{alert(error.message)})

        //some fancy firebase login
    }


    const register=(e)=>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth)
            {
                history.push('/')
            }
        })
        .catch((error)=>{alert(error.message)})
        //some fancy firebase login
    }
    //check for when we click submit button  in normal js whether the data stays in the varibale or not



    return (
        
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                alt=""/>
                </Link>


                <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}  />

                    <h5>Password</h5>
                    <input type='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            
        </div>
           
        </div>
    )
}

export default Login


