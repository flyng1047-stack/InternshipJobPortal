
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import MyApplications from './pages/MyApplications'
import StudentProfile from './pages/StudentProfile'

function ComingSoon({ title }) {
  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold">{title}</h2>
      <p className="text-secondary">
        Trang này đang được phát triển.
      </p>
      <a href="/" className="btn btn-primary">
        Quay về trang chủ
      </a>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/my-applications" element={<MyApplications />} />
      <Route path="/profile" element={<StudentProfile />} />

      <Route
        path="/employers"
        element={<ComingSoon title="Nhà tuyển dụng" />}
      />

      <Route
        path="/login"
        element={<ComingSoon title="Đăng nhập" />}
      />

      <Route
        path="/register"
        element={<ComingSoon title="Đăng ký tài khoản" />}
      />
    </Routes>
  )
}

export default App
