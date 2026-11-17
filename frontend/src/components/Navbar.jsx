
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
          Intern<span className="text-dark">Connect</span>
        </Link>

        <div className="d-flex align-items-center gap-3 ms-auto flex-wrap">
          <Link to="/" className="nav-link d-none d-md-block">
            Trang chủ
          </Link>

          <Link to="/jobs" className="nav-link">
            Việc làm
          </Link>

          <Link to="/profile" className="nav-link">
            Hồ sơ
          </Link>

          <Link to="/my-applications" className="nav-link">
            Đơn ứng tuyển
          </Link>

          <Link to="/employers" className="nav-link d-none d-lg-block">
            Nhà tuyển dụng
          </Link>

          <Link to="/login" className="btn btn-outline-primary">
            Đăng nhập
          </Link>

          <Link to="/register" className="btn btn-primary">
            Đăng ký
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
