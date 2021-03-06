import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Unprotected = ({component,...rest}) => {
    const token=localStorage.getItem('token')

    console.log(token)
    const isAuthenticated=token;
    return (
        <>
            {
                !isAuthenticated ? <Route {...rest} component={component} />
                : <Redirect to={{ pathname: "/" }} />
            }
        </>
    )
}

export default Unprotected
