// can you create signup form using bootstrap have name and email and submit button

import React, { useState } from 'react'

const SignUp = () => {
    const [loading,setIsLoading]= useState(false);
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    
const handleSubmit = (e:any) => {
    setIsLoading(true);
    setTimeout(() => {
        alert(`Welcome ${name}! You have successfully signed up with email ${email}`);
        setIsLoading(false);
        setName('');
        setEmail('');
    }, 2000);

    e.preventDefault();
 
}

  return (
    <div className='card'>
        <div className='card-header'>
            Sign Up
        </div>
        <div className='card-body'>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={name} className='form-control' id='name' placeholder='Enter Name' onChange={(e)=> setName(e.target.value) } />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' value={email} className='form-control' id='email' placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value) } />
                </div>
                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                    {loading? <div className="spinner-border" role="status">
</div> : 'Submit'}</button>
            </form>
        </div>
        <div className='card-footer'>
            Already have an account? <a href='#'>Login</a>
        </div>

    </div>
  )
}

export default SignUp