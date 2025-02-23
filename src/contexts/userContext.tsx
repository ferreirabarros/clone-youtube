import { createContext, useEffect, useState } from "react";
import api from "../api";

interface User {
  id?: string;
  email?: string;
}

interface UserContextProps {
  login: boolean;
  user: User | null;
  handleLogin: (email: string, password: string) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserStore = ({ children }: { children: React.ReactNode }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token") || null);

  const getUser = (token: string) => {
    api
      .get("/user/get-user", { headers: { Authorization: token } })
      .then(({ data }) => {
        setUser(data.user);      
        setLogin(true);
      })
      .catch((error) => {
        console.error("Usuário não autenticado", error);
      });
  };

  useEffect(() => {
    if (token) {
      getUser(token);
    }
  }, [token]);

  const handleLogin = (email: string, password: string) => {
    api
      .post("/user/sign-in", { email, password })
      .then(({ data }) => {
        setLogin(true);
        localStorage.setItem("token", data.token);
        setToken(data.token);
        getUser(data.token);
        console.log( data );
        console.log("Autenticado com sucesso", data.token )
      })
      .catch((error) => {
        if (error.response) {
          console.error("Erro no login:", error.response.data.error);
          alert(error.response.data.error);   
        } else {
          console.error("Erro inesperado no login:", error);
        }
      });
  };

  return (
    <UserContext.Provider value={{ login, user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};
