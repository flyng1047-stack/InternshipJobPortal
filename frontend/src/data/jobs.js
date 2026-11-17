
const jobs = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'TechVision',
    location: 'TP. Hồ Chí Minh',
    salary: '3–5 triệu/tháng',
    type: 'Thực tập',
    category: 'Frontend',
    description:
      'Tham gia phát triển giao diện website bằng ReactJS, phối hợp với Backend Developer để xây dựng các chức năng cho hệ thống.',
    requirements: [
      'Có kiến thức cơ bản về HTML, CSS và JavaScript.',
      'Biết sử dụng ReactJS là một lợi thế.',
      'Có tinh thần học hỏi và làm việc nhóm.',
    ],
    benefits: [
      'Được hướng dẫn bởi lập trình viên có kinh nghiệm.',
      'Có cơ hội tham gia dự án thực tế.',
      'Hỗ trợ thực tập hàng tháng.',
    ],
  },
  {
    id: 2,
    title: 'Backend Developer Intern',
    company: 'CloudTech',
    location: 'Hà Nội',
    salary: '4–6 triệu/tháng',
    type: 'Thực tập',
    category: 'Backend',
    description:
      'Tham gia xây dựng REST API, xử lý dữ liệu và phát triển các chức năng phía máy chủ cho ứng dụng.',
    requirements: [
      'Có kiến thức cơ bản về Python hoặc Java.',
      'Hiểu biết cơ bản về cơ sở dữ liệu SQL.',
      'Có tư duy logic và khả năng giải quyết vấn đề.',
    ],
    benefits: [
      'Được đào tạo về quy trình phát triển Backend.',
      'Tham gia xây dựng API thực tế.',
      'Có cơ hội trở thành nhân viên chính thức.',
    ],
  },
  {
    id: 3,
    title: 'UI/UX Designer Intern',
    company: 'Creative Studio',
    location: 'Đà Nẵng',
    salary: 'Thỏa thuận',
    type: 'Thực tập',
    category: 'Design',
    description:
      'Hỗ trợ thiết kế giao diện và trải nghiệm người dùng cho website, ứng dụng di động.',
    requirements: [
      'Có kiến thức cơ bản về UI/UX.',
      'Biết sử dụng Figma là một lợi thế.',
      'Có khả năng sáng tạo và chú ý đến chi tiết.',
    ],
    benefits: [
      'Được hướng dẫn sử dụng công cụ thiết kế chuyên nghiệp.',
      'Tham gia các dự án thiết kế thực tế.',
      'Môi trường làm việc sáng tạo.',
    ],
  },
  {
    id: 4,
    title: 'Fullstack Developer Intern',
    company: 'FPT Software',
    location: 'TP. Hồ Chí Minh',
    salary: '4–7 triệu/tháng',
    type: 'Thực tập',
    category: 'Fullstack',
    description:
      'Hỗ trợ phát triển cả giao diện người dùng và hệ thống xử lý phía máy chủ cho các ứng dụng web.',
    requirements: [
      'Có kiến thức HTML, CSS, JavaScript.',
      'Có hiểu biết cơ bản về ReactJS hoặc một framework tương tự.',
      'Có kiến thức cơ bản về API và cơ sở dữ liệu.',
    ],
    benefits: [
      'Được tham gia quy trình phát triển phần mềm.',
      'Được hướng dẫn bởi đội ngũ kỹ thuật.',
      'Có cơ hội học hỏi công nghệ mới.',
    ],
  },
  {
    id: 5,
    title: 'Mobile Developer Intern',
    company: 'AppNova',
    location: 'Hà Nội',
    salary: '3–5 triệu/tháng',
    type: 'Thực tập',
    category: 'Mobile',
    description:
      'Tham gia phát triển và kiểm thử ứng dụng di động trên nền tảng Android hoặc iOS.',
    requirements: [
      'Có kiến thức lập trình cơ bản.',
      'Có hiểu biết về Java, Kotlin hoặc Flutter.',
      'Có khả năng tự học và làm việc nhóm.',
    ],
    benefits: [
      'Được hướng dẫn phát triển ứng dụng di động.',
      'Tiếp cận quy trình kiểm thử ứng dụng.',
      'Hỗ trợ thực tập hàng tháng.',
    ],
  },
  {
    id: 6,
    title: 'Data Analyst Intern',
    company: 'DataPlus',
    location: 'Cần Thơ',
    salary: '3–4 triệu/tháng',
    type: 'Thực tập',
    category: 'Data',
    description:
      'Hỗ trợ thu thập, xử lý và phân tích dữ liệu nhằm tạo báo cáo phục vụ hoạt động kinh doanh.',
    requirements: [
      'Có kiến thức cơ bản về Excel.',
      'Biết SQL là một lợi thế.',
      'Có tư duy phân tích và cẩn thận với dữ liệu.',
    ],
    benefits: [
      'Được hướng dẫn xử lý dữ liệu thực tế.',
      'Làm quen với quy trình phân tích dữ liệu.',
      'Có cơ hội học hỏi các công cụ báo cáo.',
    ],
  },
  {
    id: 7,
    title: 'Software Tester Intern',
    company: 'QualityTech',
    location: 'Hải Phòng',
    salary: '3–5 triệu/tháng',
    type: 'Thực tập',
    category: 'Testing',
    description:
      'Tham gia kiểm thử phần mềm, viết test case, ghi nhận lỗi và phối hợp với nhóm phát triển để cải thiện chất lượng sản phẩm.',
    requirements: [
      'Có kiến thức cơ bản về quy trình phát triển phần mềm.',
      'Cẩn thận, có khả năng quan sát và phân tích.',
      'Biết sử dụng Postman là một lợi thế.',
    ],
    benefits: [
      'Được hướng dẫn viết test case.',
      'Thực hành kiểm thử ứng dụng thực tế.',
      'Được tiếp cận quy trình đảm bảo chất lượng phần mềm.',
    ],
  },
  {
    id: 8,
    title: 'DevOps Engineer Intern',
    company: 'CloudNext',
    location: 'TP. Hồ Chí Minh',
    salary: '4–6 triệu/tháng',
    type: 'Thực tập',
    category: 'DevOps',
    description:
      'Hỗ trợ triển khai ứng dụng, làm quen với Docker, Linux và quy trình tự động hóa xây dựng phần mềm.',
    requirements: [
      'Có kiến thức cơ bản về Linux.',
      'Có hiểu biết về Git và Docker.',
      'Có tinh thần học hỏi và chủ động.',
    ],
    benefits: [
      'Được thực hành triển khai ứng dụng.',
      'Tiếp cận quy trình CI/CD.',
      'Được hướng dẫn bởi đội ngũ kỹ thuật.',
    ],
  },
  {
    id: 9,
    title: 'Java Developer Intern',
    company: 'SmartSolutions',
    location: 'Bình Dương',
    salary: '4–6 triệu/tháng',
    type: 'Thực tập',
    category: 'Backend',
    description:
      'Tham gia phát triển các chức năng Backend bằng Java, hỗ trợ xây dựng API và làm việc với cơ sở dữ liệu.',
    requirements: [
      'Có kiến thức lập trình hướng đối tượng.',
      'Nắm được cú pháp Java cơ bản.',
      'Có hiểu biết về SQL là một lợi thế.',
    ],
    benefits: [
      'Được hướng dẫn sử dụng Java trong dự án.',
      'Tham gia phát triển chức năng thực tế.',
      'Có cơ hội phát triển lên vị trí Junior Developer.',
    ],
  },
  {
    id: 10,
    title: 'Web Developer Part-time',
    company: 'DigitalWorks',
    location: 'Đà Nẵng',
    salary: '5–7 triệu/tháng',
    type: 'Bán thời gian',
    category: 'Frontend',
    description:
      'Tham gia xây dựng và cập nhật giao diện website, tối ưu hiển thị trên máy tính và thiết bị di động.',
    requirements: [
      'Có kiến thức HTML, CSS và JavaScript.',
      'Biết sử dụng Git cơ bản.',
      'Có thể sắp xếp thời gian làm việc bán thời gian.',
    ],
    benefits: [
      'Lịch làm việc linh hoạt.',
      'Được tham gia các dự án website.',
      'Có cơ hội tích lũy kinh nghiệm thực tế.',
    ],
  },
]

export default jobs
