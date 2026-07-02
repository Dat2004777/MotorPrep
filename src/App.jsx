import { Routes, Route } from "react-router";
import HomePage from "./pages/user/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AdminQuestionsPage from "./pages/admin/question/AdminQuestionsPage";
import AdminQuestionCreatePage from "./pages/admin/question/AdminQuestionCreatePage";
import AdminQuestionUpdatePage from "./pages/admin/question/AdminQuestionUpdatePage";
import ExamTestPage from "./pages/user/ExamTestPage";
import HistoryPage from "./pages/user/HistoryPage";
import HistoryDetail from "./pages/user/HistoryDetailPage";
import AdminTestsPage from "./pages/admin/test/AdminTestsPage";
import AdminTestCreatePage from "./pages/admin/test/AdminTestCreatePage";
import AdminTestUpdatePage from "./pages/admin/test/AdminTestUpdatePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
          <Route path="/exam-test/:examId" element={<ExamTestPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route
            path="/history/detail/:historyId"
            element={<HistoryDetail />}
          />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/questions" element={<AdminQuestionsPage />} />
          <Route
            path="/admin/questions/create"
            element={<AdminQuestionCreatePage />}
          />
          <Route
            path="/admin/questions/update/:questionId"
            element={<AdminQuestionUpdatePage />}
          />
          <Route path="/admin/tests" element={<AdminTestsPage />} />
          <Route path="/admin/tests/create" element={<AdminTestCreatePage />} />
          <Route
            path="/admin/tests/update/:testId"
            element={<AdminTestUpdatePage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
