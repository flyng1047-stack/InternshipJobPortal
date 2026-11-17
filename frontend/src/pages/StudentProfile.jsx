
import { useState } from 'react'
import Navbar from '../components/Navbar'

const defaultProfile = {
  fullName: '',
  email: '',
  phone: '',
  university: '',
  major: '',
  year: '',
  skills: '',
}

function StudentProfile() {
  const [profile, setProfile] = useState(() => {
    try {
      return {
        ...defaultProfile,
        ...JSON.parse(localStorage.getItem('studentProfile') || '{}'),
      }
    } catch {
      return defaultProfile
    }
  })

  const [notice, setNotice] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }))

    setNotice('')
  }

  function handleSave(event) {
    event.preventDefault()

    localStorage.setItem('studentProfile', JSON.stringify(profile))
    setNotice('Hồ sơ của bạn đã được lưu thành công!')
  }

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="mb-4">
          <h2 className="fw-bold">Hồ sơ sinh viên</h2>
          <p className="text-secondary">
            Cập nhật thông tin cá nhân và kỹ năng để chuẩn bị ứng tuyển.
          </p>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-body p-4 p-md-5">
            <form onSubmit={handleSave}>
              <h5 className="fw-bold mb-3">Thông tin cá nhân</h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Họ và tên</label>
                  <input
                    className="form-control"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Số điện thoại</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Trường học</label>
                  <input
                    className="form-control"
                    name="university"
                    value={profile.university}
                    onChange={handleChange}
                    placeholder="Tên trường đại học"
                  />
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="fw-bold mb-3">Thông tin học tập</h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Chuyên ngành</label>
                  <input
                    className="form-control"
                    name="major"
                    value={profile.major}
                    onChange={handleChange}
                    placeholder="Ví dụ: Công nghệ thông tin"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Năm học</label>
                  <select
                    className="form-select"
                    name="year"
                    value={profile.year}
                    onChange={handleChange}
                  >
                    <option value="">Chọn năm học</option>
                    <option value="Năm 1">Năm 1</option>
                    <option value="Năm 2">Năm 2</option>
                    <option value="Năm 3">Năm 3</option>
                    <option value="Năm 4">Năm 4</option>
                    <option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Kỹ năng cá nhân
                  </label>
                  <textarea
                    className="form-control"
                    name="skills"
                    rows="4"
                    value={profile.skills}
                    onChange={handleChange}
                    placeholder="Ví dụ: Java, Python, ReactJS, SQL, Git..."
                  />
                  <div className="form-text">
                    Bạn có thể nhập nhiều kỹ năng, ngăn cách bằng dấu phẩy.
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button type="submit" className="btn btn-primary">
                  Lưu hồ sơ
                </button>
              </div>

              {notice && (
                <div className="alert alert-success mt-3 mb-0">
                  {notice}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default StudentProfile
