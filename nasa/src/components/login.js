import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successfully");
            navigate('/PicOfDay');
        } catch (err) {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Incorrect email or password. Please try again.',
            });
        }
    }

    return (
        <div>
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <h2>Log In</h2>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className="mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    );
}

export default Login;
