'use client'
import React, { useState } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

type Props = {};

export default function LoginForm({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleLogin  = async () => {
    try {

      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch('http://localhost:5000/users/signin', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Successful login logic
        console.log('Login successful');
      } else {
        // Handle error scenarios
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  const handleSubmit =  (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission

    // Add your login logic here using 'email' and 'password'
    console.log('Email:', email);
    console.log('Password:', password);
    if(email && password){
      handleLogin();
    }
  


  };

  const inputStyle = "w-[100%] h-[40px] bg-white border-2 border-gray-300 rounded-md my-2 p-2";

  return (

    <form onSubmit={handleSubmit} className='w-[100%] md:w-[50%] h-auto mx-auto my-[100px] md:my-[300px] bg-orange-100 md:bg-red-300 flex justify-center items-center flex-col'>
      <div className='w-[80%] md-[100%] '>
        <input
          className={`${inputStyle}`}
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleInput}
        />
      </div>
      <div className='w-[80%]'>
        <input
          className={`${inputStyle}`}
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleInput}
        />
      </div>
      <div className='w-[80%]'>
        <button type="submit" className={`${inputStyle} cursor-pointer hover:bg-blue-200`}>Login</button>
      </div>
    </form>
  );
}
