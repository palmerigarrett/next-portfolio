"use client";
import React, { createContext, useReducer } from "react";

export interface IAppContext {
  viewMode: "dark" | "light";
}

interface IAppProvider {
  children: React.ReactNode;
}

const getSetViewMode = (type: "get" | "set", val?: "dark" | "light") => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    switch (type) {
      case "get":
        return localStorage.getItem("viewMode") as "dark" | "light";
      case "set":
        val && localStorage.setItem("viewMode", val)
        break;
      default:
        break;
    }
  }
};

const initialState: IAppContext = {
  viewMode: getSetViewMode("get") ?? "dark"
};

type Action = { type: "SET_VIEW_MODE"; payload: "dark" | "light" };

const reducer = (state: IAppContext, action: Action) => {
  switch (action.type) {
    case "SET_VIEW_MODE":
      getSetViewMode("set", action.payload);
      return { ...state, viewMode: action.payload };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: IAppContext;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null
});

const ContextWrapper: React.FC<IAppProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextWrapper };
