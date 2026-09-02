import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, login, user } = useAuth();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === 'signup') {
      result = signUp(data.email, data.password);
      return;
    }

    else{
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate('/');
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  }

  return (
    <div className="flex min-h-[94vh] w-full items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="mb-6 flex items-center justify-center flex-col gap-2">
          
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-lg font-semibold text-white">
            {mode === 'signup' ? 'S' : 'L'}
          </div>
          {user && <p className="text-red-600">User logged in: {user.email}</p>}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {error && <p className="text-red-600">{error}</p>}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-200"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <span className="text-[80%] text-red-600">{errors.email.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-200"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
                maxLength: {
                  value: 12,
                  message: 'Password must be 12 characters or less',
                },
              })}
            />
            {errors.password && (
              <span className="text-[80%] text-red-600">{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-4 py-3 text-base font-semibold text-white transition hover:bg-slate-800" onClick={(e)=>{
              if(e.target.textContent === "Sign up"){
                signUp();
              } else {
                login();
              }
            }}
            
          >
            {mode === 'signup' ? 'Sign up' : 'Log in'}
          </button>

          <div className="flex w-full items-center justify-center">
            {mode === 'login' ? (
              <p className="text-5 text-gray-400">
                Don&apos;t have an account?{' '}
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => setMode('signup')}
                >
                  Sign up
                </span>
              </p>
            ) : (
              <p className="text-5 text-gray-400">
                Already have an account?{' '}
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => setMode('login')}
                >
                  Log in
                </span>
              </p>
            )}
            
          </div>
        </form>
      </div>
    </div>
  );
}