import axios from "axios";
import { IUser, IUserLogin } from "./../Models/user.interface";
import { environment } from '../Environments/environments';

export default class UserService {
    public static async RegisterUser(user: IUser) {
        console.log(user);
        
        try {
            const response = await axios.post(`${environment.api}/usuario`, user); 
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    public static async LogUserIn(user: IUserLogin) {   
        console.log(user, 'Payload');
        console.log(`${environment.api}/usuario/login`);
        
         
        try {
            const response = await axios.post(`${environment.api}/usuario/login`, user); 
            console.log(response);
            return response
        } catch (error) {
            console.log(error);
        }    
    }
}
