import { AsyncStorage } from "react-native";

const userKey = "userKey";

const defaultUser={
    email:"",
    password:"",
    username:"",
    name:""
}

export async function getUser(){
    let user = await AsyncStorage.getItem(userKey);

    if(!users){
        AsyncStorage.setItem(userKey,JSON.stringify(defaultUser));
        return defaultUser;
    }else{
        return JSON.parse(user);
    }
}

export function saveUser(user){
    AsyncStorage.setItem(userKey,JSON.stringify(user));
}