import React, { useState } from "react";

function LoginForm({ Login, error}){
    const [details, setDetails] = useState({stu_id: '',password: ''});
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }




    
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <img src='https://fulltext.car.chula.ac.th/carweb2/images/chula_logo.png' alt='logo' width='60'/>
                <h2>สำนักงานการทะเบียน (สนท.)</h2>
                <h2>OFFICE OF THE REGISTRAR</h2>
                <div className='form-group'>
                    <label htmlFor='stu_id'>Student ID</label>
                    <input type='text' name='stu_id' id='stu_id' required onChange={e => setDetails({...details, stu_id: e.target.value})} value={details.stu_id} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' required onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                {(error !== '') ? (<div className='error'>{error}</div>) : ''}
                <input type='submit' value='Login'></input>
            </div>
        </form>
    )
}

export default LoginForm