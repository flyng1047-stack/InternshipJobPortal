
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MyApplications() {
  const applications = JSON.parse(
    localStorage.getItem('applications') || '[]'
  )

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="mb-4">
          <h2 className="fw-bold">Đơn ứng tuyển của tôi</h2>
          <p className="text-secondary">
            Theo dõi các công việc bạn đã gửi đơn ứng tuyển.
          </p>
        </div>

        <div className="mb-4">
          <span className="badge bg-primary fs-6">
            Tổng số đơn: {applications.length}
          </span>
        </div>

        {applications.length === 0 ? (
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center py-5">
              <h5>Chưa có đơn ứng tuyển nào</h5>
              <p className="text-secondary">
                Hãy tìm kiếm công việc phù hợp và ứng tuyển ngay.
              </p>
              <Link to="/jobs" className="btn btn-primary">
                Tìm việc làm
              </Link>
            </div>
          </div>
        ) : (
          <div className="row g-3">
            {applications
              .slice()
              .reverse()
              .map((application) => (
                <div className="col-12" key={application.id}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between flex-wrap gap-2">
                        <div>
                          <h5 className="fw-bold">
                            {application.jobTitle}
                          </h5>
                          <p className="text-secondary mb-2">
                            {application.company}
                          </p>
                        </div>

                        <span className="badge bg-warning-subtle text-warning-emphasis align-self-start">
                          Đã gửi đơn (bản thử nghiệm)
                        </span>
                      </div>

                      <p className="mb-2">
                        <strong>Email:</strong> {application.email}
                      </p>

                      <p className="mb-2">
                        <strong>Lời nhắn:</strong>{' '}
                        {application.message || 'Không có'}
                      </p>

                      <p className="text-secondary small mb-0">
                        Thời gian ứng tuyển:{' '}
                        {new Date(application.appliedAt).toLocaleString('vi-VN')}
                      </p>

                      <Link
                        to={`/jobs/${application.jobId}`}
                        className="btn btn-outline-primary btn-sm mt-3"
                      >
                        Xem lại công việc
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>
    </>
  )
}

export default MyApplications
