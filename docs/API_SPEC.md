
# INTERNCONNECT - API SPECIFICATION

## 1. Giới thiệu

InternConnect là hệ thống kết nối sinh viên CNTT với doanh nghiệp tuyển dụng thực tập và việc làm.

Frontend: ReactJS + Vite + Bootstrap.
Backend dự kiến: Python + FastAPI.
Database: PostgreSQL.

## 2. Vai trò người dùng

### Student
- Đăng ký, đăng nhập.
- Xem và tìm kiếm công việc.
- Xem chi tiết công việc.
- Quản lý hồ sơ cá nhân.
- Cập nhật kỹ năng.
- Tải CV.
- Ứng tuyển công việc.
- Xem danh sách đơn ứng tuyển.

### Employer
- Đăng nhập.
- Quản lý thông tin doanh nghiệp.
- Đăng tin tuyển dụng.
- Quản lý tin tuyển dụng.
- Xem danh sách ứng viên.
- Cập nhật trạng thái đơn ứng tuyển.

### Admin
- Quản lý người dùng.
- Quản lý doanh nghiệp.
- Quản lý tin tuyển dụng.

## 3. Cấu trúc dữ liệu dự kiến

### users
- id: integer, primary key
- full_name: string
- email: string, unique
- password_hash: string
- role: student / employer / admin
- created_at: datetime

### student_profiles
- id: integer, primary key
- user_id: integer, foreign key
- phone: string
- university: string
- major: string
- year: string
- skills: text
- cv_url: string

### companies
- id: integer, primary key
- user_id: integer, foreign key
- company_name: string
- description: text
- address: string
- website: string

### jobs
- id: integer, primary key
- company_id: integer, foreign key
- title: string
- description: text
- requirements: text
- benefits: text
- location: string
- salary: string
- type: string
- category: string
- status: open / closed
- created_at: datetime

### applications
- id: integer, primary key
- student_id: integer, foreign key
- job_id: integer, foreign key
- email: string
- message: text
- cv_url: string
- status: pending / reviewing / accepted / rejected
- applied_at: datetime

## 4. API cần xây dựng

### 4.1 Authentication

POST /auth/register

Đăng ký tài khoản.

Request:
{
  "full_name": "Nguyen Van A",
  "email": "student@gmail.com",
  "password": "123456",
  "role": "student"
}

POST /auth/login

Đăng nhập.

Request:
{
  "email": "student@gmail.com",
  "password": "123456"
}

Response dự kiến:
{
  "access_token": "JWT_TOKEN",
  "token_type": "bearer"
}

### 4.2 Jobs

GET /jobs

Lấy danh sách công việc.

Hỗ trợ query:
- keyword
- location
- type
- category

GET /jobs/{id}

Lấy chi tiết một công việc.

POST /jobs

Tạo tin tuyển dụng. Chỉ Employer được phép.

PUT /jobs/{id}

Cập nhật tin tuyển dụng.

DELETE /jobs/{id}

Đóng hoặc xóa tin tuyển dụng.

### 4.3 Student Profile

GET /students/me

Lấy hồ sơ sinh viên đang đăng nhập.

PUT /students/me

Cập nhật hồ sơ sinh viên.

PUT /students/me/skills

Cập nhật kỹ năng.

POST /students/me/cv

Tải CV lên hệ thống.

### 4.4 Applications

POST /jobs/{id}/applications

Ứng tuyển công việc.

Request:
{
  "email": "student@gmail.com",
  "message": "Tôi muốn ứng tuyển vị trí này."
}

GET /applications/me

Lấy danh sách đơn ứng tuyển của sinh viên.

GET /companies/me/applications

Nhà tuyển dụng xem đơn ứng tuyển vào các công việc của mình.

PATCH /applications/{id}/status

Cập nhật trạng thái đơn ứng tuyển.

Request:
{
  "status": "reviewing"
}

## 5. Quy tắc nghiệp vụ

1. Email đăng ký phải duy nhất.
2. Mật khẩu phải được băm trước khi lưu.
3. Người chưa đăng nhập không được ứng tuyển.
4. Sinh viên không được ứng tuyển cùng một công việc nhiều lần.
5. Nhà tuyển dụng chỉ được quản lý công việc của doanh nghiệp mình.
6. Chỉ nhà tuyển dụng có quyền cập nhật trạng thái đơn ứng tuyển thuộc doanh nghiệp mình.
7. JWT được sử dụng để xác thực API.
8. Kiểm tra dữ liệu đầu vào trước khi lưu vào database.

## 6. Quy tắc tích hợp Frontend

Frontend sử dụng:
- Base URL: http://localhost:8000
- API format: JSON
- Authentication: Bearer Token
- Token được gửi trong Authorization Header.

Ví dụ:

Authorization: Bearer ACCESS_TOKEN

Frontend sẽ thay dữ liệu mẫu trong src/data/jobs.js bằng dữ liệu lấy từ GET /jobs.

Dữ liệu ứng tuyển trong localStorage sẽ được thay bằng POST /jobs/{id}/applications.

Dữ liệu hồ sơ trong localStorage sẽ được thay bằng GET /students/me và PUT /students/me.

## 7. Yêu cầu Backend

- Sử dụng FastAPI.
- PostgreSQL.
- SQLAlchemy ORM.
- Alembic migration.
- JWT Authentication.
- Phân quyền Student, Employer, Admin.
- Swagger tại /docs.
- Docker Compose.
- Có dữ liệu mẫu để kiểm thử.
- Có hướng dẫn chạy dự án trong README.md.
