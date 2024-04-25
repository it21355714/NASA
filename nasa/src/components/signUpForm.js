import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Account created");
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Account created successfully!'
            });
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email is already in use. Please use a different email.'
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred. Please try again.'
                });
            }
            console.error(err);
        }
    }

    return (
        <div>
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className="mb-3">
                <h2>Sign Up</h2>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="mt-3">Already have an account? <Link to="/">Login</Link></p>
            </form>
           
        </div>
    );
}

export default SignUpForm;
