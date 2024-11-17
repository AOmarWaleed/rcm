import MainLayout from "./Layouts/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckEligibility from "./Pages/CheckEligibility/CheckEligibility";
import { ThemeContextProvider } from "./Context/ThemeContext";
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <ThemeContextProvider>
       <CssBaseline  />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="check-eligibility"
              element={<CheckEligibility />}
            ></Route>
          </Route>

          {/* !!!! auth layout  */}
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
