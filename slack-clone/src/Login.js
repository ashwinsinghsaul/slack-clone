import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://assets.materialup.com/uploads/6aaec49a-f457-4a87-b75e-4d9102982a7d/preview.jpg"
                    alt=""
                />
                <h1>Sign in to SOAL</h1>
                <p>soal.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login