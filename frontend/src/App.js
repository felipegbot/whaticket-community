import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
import axios from "axios";
import api from "./services/api";

const App = () => {
  const [locale, setLocale] = useState();
  const [loading, setLoading] = useState(true);

  const theme = createTheme(
    {
      scrollbarStyles: {
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#e8e8e8",
        },
      },
      palette: {
        primary: { main: "#2576d2" },
      },
    },
    locale,
  );

  useEffect(() => {
    setLocale(ptBR);
    setEnvVars();
  }, []);

  const setEnvVars = async () => {
    const { data } = await axios.get("/env-vars");
    const envVars = data;
    console.log(envVars, "loaded env vars");
    api.defaults.baseURL = envVars.REACT_APP_BACKEND_URL;
    localStorage.setItem(
      "REACT_APP_BACKEND_URL",
      envVars.REACT_APP_BACKEND_URL,
    );
    setLoading(false);
  };

  if (loading) return null;

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
