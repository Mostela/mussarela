import React, { createContext, useState, useEffect } from "react";
import UserService from "./../Services/user.service";
import { IUserLogin, IUser } from "../Models/User.interface";
interface IAuthContext {
    signed: boolean;
    user: IUser | null;
    loading: boolean;
    signin(user: IUserLogin): Promise<void | string>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const userData = localStorage.getItem("@C4SAuth:user");
        const tokenData = localStorage.getItem("@C4SAuth:token");

        if (userData && tokenData) {
            setUser(JSON.parse(userData));
            setToken(JSON.parse(tokenData));
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (user && token) {
            setStorage(user, token);
        }
    }, [user, token]);

    async function setStorage(user: IUser | null, token: string) {
        localStorage.setItem("@C4SAuth:user", JSON.stringify(user));
        localStorage.setItem("@C4SAuth:token", JSON.stringify(token));
    }

    async function signin(userData: IUserLogin): Promise<void | string> {
        try {
            const response = await UserService.LogUserIn(userData);
            return;
        } catch (error) {
            return "O email ou a senha inserida não corresponde a nenhuma conta";
        }
    }

    return (
        <AuthContext.Provider
            value={{ signed: !!user, user, loading, signin }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
