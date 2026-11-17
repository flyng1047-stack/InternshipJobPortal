# InternConnect – Internship and Job Portal

## 1. Giới thiệu

InternConnect là hệ thống kết nối sinh viên Công nghệ thông tin với các cơ hội thực tập và việc làm. Dự án hỗ trợ sinh viên tìm kiếm công việc, xem thông tin tuyển dụng, quản lý hồ sơ cá nhân và theo dõi đơn ứng tuyển.

## 2. Công nghệ sử dụng

### Frontend
- React
- Vite
- JavaScript
- Bootstrap
- React Router

### Backend dự kiến
- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- Alembic
- JWT Authentication

## 3. Cấu trúc dự án

```text
InternshipJobPortal/
├── docs/
│   └── API_SPEC.md
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 4. Chạy Frontend

Yêu cầu: Node.js và npm.

Mở Terminal tại thư mục frontend:

```bash
cd frontend
npm install
npm run dev
```

Mở địa chỉ được Vite cung cấp, thông thường là:

```text
http://localhost:5173
```

## 5. Build Frontend

```bash
cd frontend
npm run build
```

Thư mục `frontend/dist` chứa phiên bản build.

## 6. Tài liệu API

Xem tài liệu `docs/API_SPEC.md` để tham khảo danh sách API dự kiến, cấu trúc dữ liệu và quy tắc nghiệp vụ phục vụ tích hợp Backend.

## 7. Trạng thái dự án

- Frontend: Đã xây dựng giao diện và dữ liệu mẫu.
- Backend: Chờ triển khai và tích hợp.
- Database: Chờ triển khai.
- Authentication: Chờ tích hợp JWT.
- Deployment: Chờ triển khai.