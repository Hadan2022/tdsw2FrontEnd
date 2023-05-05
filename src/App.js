import './App.css'
import Feed from './Pages/Feed/Feed'
import Login from './Pages/Login/Login'
import RecoveryRequest from './Pages/PwRecovery/RecoveryRequest'
import ResetPw from './Pages/PwRecovery/ResetPw'
import Register from './Pages/Register/Register'
import UserProfile from './Pages/UserProfile/UserProfile'
import Router from './router/index'
import AnonymousProtectedRoute from './routing/AnonymousProtectedRoute'
import AuthenticationProtectedRoute from './routing/AuthenticationProtectedRoute'

const routes = [
    { 
        path: '/', 
        component: <Feed />,
    },
    { 
        path: '/login', 
        component: <Login />,
        protection: <AnonymousProtectedRoute></AnonymousProtectedRoute>
     },
    { 
        path: '/logout', 
        component: <Feed />,
        protection: (
            <AuthenticationProtectedRoute></AuthenticationProtectedRoute>
        )
    },
    { 
        path: '/register', 
        component: <Register />,
        protection: <AnonymousProtectedRoute></AnonymousProtectedRoute>
    },
    { 
        path: '/password-recovery', 
        component: <RecoveryRequest />,
        protection: <AnonymousProtectedRoute></AnonymousProtectedRoute>
    },
    { 
        path: '/reset-password/:token',
        component: <ResetPw />,
        protection: <AnonymousProtectedRoute></AnonymousProtectedRoute>
    },
    { 
        path: '/profile',
        component: <UserProfile />,
        protection: (
            <AuthenticationProtectedRoute></AuthenticationProtectedRoute>
        )
    },
]

function App() {
    
    return (
        <Router routes={routes} />  
    );
}

export default App;
