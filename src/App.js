import './App.css'
import Feed from './Pages/Feed/Feed'
import Login from './Pages/Login/Login'
import RecoveryRequest from './Pages/PwRecovery/RecoveryRequest'
import ResetPw from './Pages/PwRecovery/ResetPw'
import Register from './Pages/Register/Register'
import Router from './router/index'


function App() {
  const routes = [
    { path: '/', component: <Feed /> },
    { path: '/login', component: <Login /> },
    { path: '/logout', component: <Login /> },
    { path: '/register', component: <Register /> },
    { path: '/password-recovery', component: <RecoveryRequest />},
    { path: '/reset-password/:token', component: <ResetPw />},
  ]
  
  return (
      <Router routes={routes} />  
  );
}

export default App;
