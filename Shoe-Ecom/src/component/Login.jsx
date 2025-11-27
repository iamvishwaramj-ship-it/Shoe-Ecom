import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from './StoreContext';

export default function Login(){
  const { login } = useContext(StoreContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigate();

  function submit(e){
    e?.preventDefault();
    if(!email) return alert('enter email');
    login(email);
    nav('/');
  }

  return (
    <main className="container" style={{maxWidth:480}}>
      <h1 className="page-title">Login</h1>
      <form onSubmit={submit} style={{display:'grid',gap:12}}>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input className="input" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
