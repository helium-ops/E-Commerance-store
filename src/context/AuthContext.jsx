import { createContext, useState } from 'react';
import { useContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem('currentUserEmail') ? { email: localStorage.getItem('currentUserEmail')} : null);

  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if(users.find(u => u.email === email)){
      return{success: false, error: "Email already exists"};
    }
    else{
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setUser({email});
    localStorage.setItem('currentUserEmail', email);  
    return { success: true, message: `User: ${email}` };
    }
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if(!user){
      setUser(null);
      return { success: false, error: "Invalid email or password" };
      
    }
    
    setUser({email});
    localStorage.setItem('currentUserEmail', email);
    return { success: true };
    
  }

  function logout(){
    localStorage.removeItem('currentUserEmail');
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