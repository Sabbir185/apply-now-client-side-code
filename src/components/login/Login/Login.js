import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import googleIcon from '../../../images/Group 573.png'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const Login = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        const google = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(google)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email, photoURL } = result.user;
                const googleUserInfo = { name: displayName, email, photoURL, google: true };
                setUserInfo(googleUserInfo)
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
            });
    }

    return (
        <div>
            <MainNavbar />
            <div>
                <div className='row mt-5 pt-5'>
                    <div className="col-3"></div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 mb-5">
                        <div onClick={handleGoogle} className="google-sign w-75"><img src={googleIcon} alt="" /> Continue with Google</div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;