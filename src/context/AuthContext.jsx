import { createContext, useState } from 'react';

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
      return { success: false, error: "Invalid email or password" };
      setUser(null);
    }
    setUser({email});
    localStorage.setItem('currentUserEmail', email);
    return { success: true };
  }

  function logout(){
    localStorage.removeItem('currentUserEmail', email);
    setUser(null);
  }

  function logout(){
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
}