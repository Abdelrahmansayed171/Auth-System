import SigninForm from './components/SigninForm'
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <SigninForm />
    </AuthProvider>
  );
}

export default App;
