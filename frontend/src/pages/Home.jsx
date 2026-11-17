
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import jobs from '../data/jobs'

function Home() {
  return (
    <>
      <Navbar />

      {/* Khu vực giới thiệu */}
      <header className="hero-section py-5">
        <div className="container text-center py-4">
          <span className="badge text-bg-primary mb-3">
            CƠ HỘI NGHỀ NGHIỆP DÀNH CHO SINH VIÊN CNTT
          </span>

          <h1 className="display-5 fw-bold mb-3">
            Khởi đầu sự nghiệp công nghệ <br />
            <span className="text-primary">
              của bạn ngay hôm nay
            </span>
          </h1>

          <p className="text-secondary fs-5 mb-4">
            Tìm kiếm cơ hội thực tập và việc làm phù hợp với năng lực của bạn.
          </p>

          {/* Thanh tìm kiếm */}
          <div className="search-box bg-white shadow rounded-3 p-3 mx-auto">
            <div className="row g-2">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Tên công việc, kỹ năng..."
                />
              </div>

              <div className="col-md-4">
                <select className="form-select form-select-lg">
                  <option value="">Tất cả địa điểm</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                </select>
              </div>

              <div className="col-md-3">
                <button className="btn btn-primary btn-lg w-100">
                  Tìm việc ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Danh sách việc làm */}
      <main className="container py-5" id="jobs">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Việc làm nổi bật</h2>
            <p className="text-secondary mb-0">
              Những cơ hội thực tập dành cho bạn
            </p>
          </div>

          <a href="#jobs" className="text-decoration-none">
            Xem tất cả →
          </a>
        </div>

        <div className="row g-4">
          {jobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      </main>

      {/* Chân trang */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <h5 className="fw-bold">InternConnect</h5>
          <p className="text-white-50 mb-0">
            Kết nối sinh viên CNTT với cơ hội nghề nghiệp tương lai.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home
