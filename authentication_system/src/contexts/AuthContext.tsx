import { Parentheses } from 'lucide-react';
import React, {useState, useContext, createContext} from 'react'

type AuthContextType = {
    isLogin: boolean;
    formData: {
      email: string;
      password: string;
      name: string;
      rememberMe: boolean;
    };
    setFormData: (newFormData: AuthContextType['formData']) => void;
    toggleForm: () => void;
}

const defaultFormData = {
    email: '',
    name: '',
    password: '',
    rememberMe: false,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}>  = ({children}) => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState(defaultFormData)
    
    const toggleForm = () =>{
        setIsLogin(!isLogin) // change to sign-up form
        setFormData(defaultFormData) // reset the form 
        console.log(isLogin);
    }

    return(
        <AuthContext.Provider value={{isLogin, formData, setFormData,toggleForm}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    
    if(!context)
        throw new Error('useAuthContext must be used within an AuthProvider')

    return context
}