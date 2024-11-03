import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define the types for the state and actions
type AppState = { mode: string };
type AppAction = { type: "SWITCH_MODE" };

// Set up the initial state
// const initialState: AppState = {
//   mode:
//     localStorage.getItem("mode") ||
//     (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
// };
const initialState: AppState = {
  mode: localStorage.getItem("mode") || 
        (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
};

// Reducer function to toggle the mode
const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SWITCH_MODE":
      return { mode: state.mode === "dark" ? "light" : "dark" };
    default:
      return state;
  }
};

          /////////////////////////////////////  Context  ////////////////////////////


// Context setup
const StoreContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider component
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
            // make exporttt

