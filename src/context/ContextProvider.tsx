import { ReactNode, useReducer } from "react";
import { initialState, RootContext } from "./useRootContext";
import { rootReducer } from "./rootReducer";

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};
