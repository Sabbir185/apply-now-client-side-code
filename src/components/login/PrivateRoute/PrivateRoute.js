import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const [userInfo, setUserInfo] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                userInfo.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;