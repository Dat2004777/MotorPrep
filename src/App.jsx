import { Routes, Route } from "react-router";
import HomePage from "./pages/user/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AdminQuestionsPage from "./pages/admin/AdminQuestionsPage";
import AdminQuestionCreatePage from "./pages/admin/AdminQuestionCreatePage";
import AdminQuestionUpdatePage from "./pages/admin/AdminQuestionUpdatePage";
import ExamTestPage from "./pages/user/ExamTestPage";
import HistoryPage from "./pages/user/HistoryPage";
import HistoryDetail from "./pages/user/HistoryDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/exam-test/:examId" element={<ExamTestPage />} />

        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/detail/:historyId" element={<HistoryDetail />} />

        <Route path="/admin/questions" element={<AdminQuestionsPage />} />
        <Route
          path="/admin/questions/create"
          element={<AdminQuestionCreatePage />}
        />
        <Route
          path="/admin/questions/update/:questionId"
          element={<AdminQuestionUpdatePage />}
        />
      </Routes>
    </>
  );
}

export default App;
