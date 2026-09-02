import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    return storedUsers[0] || null;
  });

  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const alreadyExists = users.some(
      (storedUser) => storedUser.email.toLowerCase() === email.toLowerCase()
    );

    if (alreadyExists) {
      return { success: false, message: 'User already exists' };
    }

    const newUser = { email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser(newUser);

    return { success: true, message: 'Account created successfully' };
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = users.find(
      (storedUser) =>
        storedUser.email.toLowerCase() === email.toLowerCase() &&
        storedUser.password === password
    );

    if (!currentUser) {
      return { success: false, message: 'Invalid email or password' };
    }

    setUser(currentUser);
    return { success: true, message: 'Logged in successfully' };
  }

  function logout(){
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
}