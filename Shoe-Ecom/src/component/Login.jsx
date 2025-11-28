import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from './StoreContext';
import "./Login.css"
export default function Login(){
  const { login } = useContext(StoreContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigate();

  function submit(e){
    e?.preventDefault();
    if(!email) return alert('please enter email');
    login(email);
    nav('/');
  }

  return (
    <>
    <main className='body'>
    <div className="container" >
      <h1 className="page-title">Login</h1>
      <form onSubmit={submit} >
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Email" />
        <input className="input" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" type="Enter password" />
        <button className='btn' type="submit">Login</button>
      </form>
    </div>
    </main>
    </>
  );
}
