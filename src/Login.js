import React from 'react';
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => {
                alert(error.message);
            });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Emblem-700x394.png"
                    alt=""
                />
                <h1>Sign in to FriendBook</h1>
                <p>FriendBook.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
