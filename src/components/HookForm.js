import React, { useState } from 'react';

const HookForm = (props) => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const handleSumbit = (e) => {

    }

    return (
        <div>
            <form action="handleSubmit">
                <div>
                    <label htmlFor="firstName">First Name:  </label>
                    <input name='firstName' type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:  </label>
                    <input name='lastName' type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="email">Email:  </label>
                    <input name='email' type="text" value={email} onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="password">Password:  </label>
                    <input name='password' type="text" value={password} onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:  </label>
                    <input name='confirmPassword' type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
            </form>
        </div>
    )
}

export default HookForm;