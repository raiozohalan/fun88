import { ReactNode, useReducer } from "react";
import { initialState, RootContext } from "./useRootContext";
import { Action, rootReducer } from "./rootReducer";
import { RootContextProps } from "./interface";

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<RootContextProps, Action>>(rootReducer, initialState);

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};
