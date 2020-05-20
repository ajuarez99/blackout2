import {saveUser} from "../repositories/UserRepository"

export const reducer = (state = {}, action) => {
  const { payload, type } = action;
  switch(type){
    case "REGISTER_USER":
     saveUser(payload.user);
  }
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
  };