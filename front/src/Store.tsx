import React, { createContext, useReducer, useContext } from "react";

// Define the types for the state and actions
type AppState = { mode: string };
type AppAction = { type: "SWITCH_MODE" };

// Initialize the initial state based on localStorage or media preference
const initialState: AppState = {
  mode: localStorage.getItem("mode")
    ? localStorage.getItem("mode")!
    : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
};

// Reducer function to handle state changes
function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SWITCH_MODE":
      return { mode: state.mode === "dark" ? "light" : "dark" };
    default:
      return state;
  }
}

// Default dispatch placeholder (does nothing)
const defaultDispatch: React.Dispatch<AppAction> = () => initialState;

// Create a context with the state and dispatch
const StoreContext = createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

// StoreProvider component to provide state and dispatch to the component tree
function StoreProvider({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer<React.Reducer<AppState, AppAction>>(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}

// Custom hook to use the Store context
function useStore() {
  return useContext(StoreContext);
}

export { StoreProvider, useStore };
