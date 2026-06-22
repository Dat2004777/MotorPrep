import { Routes, Route } from "react-router";
import HomePage from "./pages/user/HomePage";
import HistoryPage from "./pages/user/HistoryPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AdminQuestionsPage from "./pages/admin/AdminQuestionsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/admin/questions" element={<AdminQuestionsPage />} />
      </Routes>
    </>
  );
}

export default App;
