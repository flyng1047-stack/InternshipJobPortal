
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import jobs from '../data/jobs'

function JobDetail() {
  const { id } = useParams()
  const job = jobs.find((item) => item.id === Number(id))

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [notice, setNotice] = useState('')
  const [success, setSuccess] = useState(false)

  function handleApply(event) {
    event.preventDefault()

    const applications = JSON.parse(
      localStorage.getItem('applications') || '[]'
    )

    // Kiểm tra email đã ứng tuyển công việc này chưa
    const alreadyApplied = applications.some(
      (item) =>
        item.jobId === job.id &&
        item.email.toLowerCase() === email.trim().toLowerCase()
    )

    if (alreadyApplied) {
      setSuccess(false)
      setNotice('Email này đã ứng tuyển công việc này rồi.')
      return
    }

    const newApplication = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      email: email.trim(),
      message: message.trim(),
      appliedAt: new Date().toISOString(),
    }

    applications.push(newApplication)

    localStorage.setItem(
      'applications',
      JSON.stringify(applications)
    )

    setSuccess(true)
    setNotice('Ứng tuyển thành công! Thông tin đã được lưu.')
    setEmail('')
    setMessage('')
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="container text-center py-5">
          <h3>Không tìm thấy công việc</h3>
          <Link to="/jobs" className="btn btn-primary mt-3">
            Quay lại danh sách việc làm
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <Link to="/jobs" className="text-decoration-none">
          ← Quay lại danh sách việc làm
        </Link>

        <div className="card border-0 shadow-sm mt-4">
          <div className="card-body p-4 p-md-5">
            <span className="badge bg-primary-subtle text-primary mb-3">
              {job.type}
            </span>

            <h2 className="fw-bold">{job.title}</h2>
            <h5 className="text-secondary mb-4">{job.company}</h5>

            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <strong>Địa điểm</strong>
                <p className="text-secondary">{job.location}</p>
              </div>

              <div className="col-md-4">
                <strong>Mức lương</strong>
                <p className="text-success fw-semibold">{job.salary}</p>
              </div>

              <div className="col-md-4">
                <strong>Danh mục</strong>
                <p className="text-secondary">{job.category}</p>
              </div>
            </div>

            <hr />

            <section className="mb-4">
              <h5 className="fw-bold">Mô tả công việc</h5>
              <p className="text-secondary">{job.description}</p>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold">Yêu cầu ứng viên</h5>
              <ul className="text-secondary">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold">Quyền lợi</h5>
              <ul className="text-secondary">
                {job.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <hr />

            {/* Khu vực ứng tuyển */}
            <section className="mt-4">
              <h4 className="fw-bold mb-3">Ứng tuyển công việc</h4>

              <form onSubmit={handleApply}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email liên hệ
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Lời nhắn
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Giới thiệu ngắn về bản thân hoặc lý do ứng tuyển..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Ứng tuyển ngay
                </button>
              </form>

              {notice && (
                <div
                  className={`alert mt-3 mb-0 ${
                    success ? 'alert-success' : 'alert-warning'
                  }`}
                  role="alert"
                >
                  {notice}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default JobDetail
