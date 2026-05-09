import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Component, lazy, Suspense } from 'react';
import FormLoader from './components/loaderCom/loadercom';
import { Toaster } from "sonner";
import PostAdd from './pages/crud/post_add/postAdd';



const Register = lazy(() => import('./pages/auth/signUp/register'));
const Login = lazy(() => import('./pages/auth/signIn/login'));
const VerifyOTP = lazy(() => import('./pages/auth/otp/verifyotp'))


function App() {

  const publicRoute = [
    {
      path: '/auth/register',
      component: <Register />
    },
    {
      path: '/auth/login',
      component: <Login />
    },
    {
      path: '/auth/verify-otp',
      component: <VerifyOTP/>
    }
  ]

  const privateRoute = [
    {
      path: '/product/add',
      component: <PostAdd/>
    }
    
  ]

  return (
    <>
      <Toaster position="top-right" richColors />
      <Suspense fallback={<FormLoader/>}>
        <BrowserRouter>
          <Routes>
            {publicRoute.map((item) => {
              return <Route path={item.path} element={item.component} />
            })}

            {privateRoute.map((item) => {
              return <Route path={item.path} element={item.component} />
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>

    </>
  )
}

export default App;
