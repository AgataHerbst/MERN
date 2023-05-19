import 'materialize-css';
import AuthPage from './pages/AuthPage';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext'

export default function App() {
  const {token, login, logout, userId} = useAuth()
const isAuthenticated = !!token
  return (
    <AuthContext.Provider value={{
token, login, logout, userId, isAuthenticated
    }}>
  <div className="container">
<AuthPage />
    </div>
    </AuthContext.Provider>
  )
}


