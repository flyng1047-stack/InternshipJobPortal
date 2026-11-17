
import { useState } from 'react'
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import jobs from '../data/jobs'

function Jobs() {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  const filteredJobs = jobs.filter((job) => {
    const searchKeyword = keyword.toLowerCase().trim()

    const matchKeyword =
      job.title.toLowerCase().includes(searchKeyword) ||
      job.company.toLowerCase().includes(searchKeyword) ||
      job.category.toLowerCase().includes(searchKeyword)

    const matchLocation =
      location === '' || job.location === location

    const matchType =
      type === '' || job.type === type

    const matchCategory =
      category === '' || job.category === category

    return (
      matchKeyword &&
      matchLocation &&
      matchType &&
      matchCategory
    )
  })

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="mb-4">
          <h2 className="fw-bold">Danh sách việc làm</h2>
          <p className="text-secondary">
            Tìm kiếm cơ hội thực tập và việc làm phù hợp với bạn.
          </p>
        </div>

        {/* Khu vực tìm kiếm và lọc */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="row g-3">

              {/* Tìm kiếm từ khóa */}
              <div className="col-md-6 col-lg-3">
                <label className="form-label fw-semibold">
                  Từ khóa
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên công việc, công ty..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              {/* Lọc địa điểm */}
              <div className="col-md-6 col-lg-3">
                <label className="form-label fw-semibold">
                  Địa điểm
                </label>
                <select
                  className="form-select"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Tất cả địa điểm</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Bình Dương">Bình Dương</option>
                </select>
              </div>

              {/* Lọc loại công việc */}
              <div className="col-md-6 col-lg-3">
                <label className="form-label fw-semibold">
                  Loại công việc
                </label>
                <select
                  className="form-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Tất cả loại công việc</option>
                  <option value="Thực tập">Thực tập</option>
                  <option value="Toàn thời gian">Toàn thời gian</option>
                  <option value="Bán thời gian">Bán thời gian</option>
                </select>
              </div>

              {/* Lọc danh mục */}
              <div className="col-md-6 col-lg-3">
                <label className="form-label fw-semibold">
                  Danh mục
                </label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Tất cả danh mục</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Fullstack">Fullstack</option>
                  <option value="Design">Design</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Data">Data</option>
                  <option value="Testing">Testing</option>
                  <option value="DevOps">DevOps</option>
                </select>
              </div>

            </div>

            {/* Nút xóa bộ lọc */}
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  setKeyword('')
                  setLocation('')
                  setType('')
                  setCategory('')
                }}
              >
                Xóa bộ lọc
              </button>
            </div>
          </div>
        </div>

        {/* Kết quả tìm kiếm */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">
            Kết quả tìm kiếm
          </h5>

          <span className="text-secondary">
            Tìm thấy {filteredJobs.length} công việc
          </span>
        </div>

        {/* Danh sách công việc */}
        <div className="row g-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h5 className="text-secondary">
                Không tìm thấy công việc phù hợp.
              </h5>
              <p className="text-secondary">
                Hãy thử thay đổi từ khóa hoặc bộ lọc.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default Jobs
