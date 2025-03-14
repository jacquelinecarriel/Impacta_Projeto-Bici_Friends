import React from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { AuthProvider} from "./pages/contexts/auth";

const App = () => {
    return (
      <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
      </AuthProvider>
    );
};

export default App;