import { useContext, createContext, useState } from "react";

// step 1
export const UserContext = createContext();

export const UserObject = () => {
  const [clickDBodyToCloseNav, setclickDBodyToCloseNav] =
    useContext(UserContext);
  return { clickDBodyToCloseNav, setclickDBodyToCloseNav };
};

// step 2
export const UserProvider = ({ children }) => {
  const [clickDBodyToCloseNav, setclickDBodyToCloseNav] = useState(undefined);

  return (
    <UserContext.Provider
      value={[clickDBodyToCloseNav, setclickDBodyToCloseNav]}
    >
      {children}
    </UserContext.Provider>
  );
};
