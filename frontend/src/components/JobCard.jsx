
import { Link } from 'react-router-dom'

function JobCard({ job }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card job-card h-100 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between mb-3">
            <span className="badge bg-primary-subtle text-primary">
              {job.type}
            </span>

            <span className="text-secondary small">
              {job.category}
            </span>
          </div>

          <h5 className="fw-bold">{job.title}</h5>

          <p className="text-secondary mb-3">
            {job.company}
          </p>

          <p className="mb-2">
            <span className="text-secondary">Địa điểm:</span>{' '}
            {job.location}
          </p>

          <p className="mb-4">
            <span className="text-secondary">Mức lương:</span>{' '}
            <strong className="text-success">
              {job.salary}
            </strong>
          </p>

          <Link
            to={`/jobs/${job.id}`}
            className="btn btn-outline-primary w-100"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JobCard
