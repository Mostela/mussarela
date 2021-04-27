import React, { createContext, useState, useEffect } from "react";
import UserService from "./../Service/user.service";
import { IUserLogin, IUser } from "../Models/User.interface";
interface IAuthContext {
    signed: boolean;
    user: IUser | null;
    loading: boolean;
    signin(user: IUserLogin): Promise<void | string>;
    updateUserFN(user: IUser): Promise<void | string>;
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
            const response = await login(userData);

            setUser(response.data);
            setToken(response.data.token);

            return;
        } catch (error) {
            return "O email ou a senha inserida não corresponde a nenhuma conta";
        }
    }

    async function updateUserFN(userData: IUser): Promise<void | string> {
        try {
            userData.id = user?.id;
            const response = await updateUser(userData, token);
            const [updatedUser] = response.data;

            setUser(updatedUser);

            setStorage(user, token);
            return;
        } catch (error) {
            return "Erro no update";
        }
    }

    return (
        <AuthContext.Provider
            value={{ signed: !!user, user, loading, signin, updateUserFN }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
