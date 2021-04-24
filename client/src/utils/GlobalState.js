import React, { createContext, useReducer, useContext } from "react";
const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { user: action.user };
    // case "signedup":
    //   return { user: action.user };
    case "setBreweries":
      return { ...state, breweries: action.breweries };
    case "iterateIndex":
      return { ...state, index: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const UserProvider = ({ value = null, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { user: value, index: 0 });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
