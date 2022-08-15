import React, { useContext, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const { onInputChange, id, name, email, onResetForm } = useForm({
    id: '',
    name: '',
    email: ''
  });

  const login = (event) => {
    event.preventDefault();
    const newUser = {
      id: id,
      name: name,
      email: email
    };
    console.log('hola');
    setUser(newUser);
    onResetForm();
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <>
      <h1>Login</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Ingresa el id"
          name="id"
          value={id}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Ingresa el name"
          name="name"
          value={name}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Ingresa el email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <button className="btn btn-primary mt-2" type="submit">
          Set user
        </button>
      </form>
    </>
  );
};
