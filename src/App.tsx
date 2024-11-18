import MainLayout from "./Layouts/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckEligibility from "./Pages/CheckEligibility/CheckEligibility";
import { ThemeContextProvider } from "./Context/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Pages/Home/Home";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import { useLoading } from "./Context/LoadingContext";

function App() {
  const { loading } = useLoading();
  return (
    <ThemeContextProvider>
      <>
        <CssBaseline />
        {loading && <LoadingSpinner />}
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
      </>
    </ThemeContextProvider>
  );
}

export default App;
