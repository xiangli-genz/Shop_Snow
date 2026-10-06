# SnowShop Phone

Website thương mại điện tử bán điện thoại, được xây dựng bằng Node.js, TypeScript, Express, Pug và MongoDB. Dự án gồm giao diện khách hàng và trang quản trị sản phẩm, đơn hàng, tài khoản, bài viết, mã giảm giá và dịch vụ trạm sạc.

## Yêu cầu môi trường

- Node.js 20 trở lên
- npm hoặc Yarn
- MongoDB (MongoDB Atlas hoặc MongoDB chạy cục bộ)
- Git (nếu tải mã nguồn từ repository)

## Cài đặt

Mở terminal tại thư mục chứa `package.json` (`SnowShop/SnowShop`), sau đó chạy:

```bash
npm install
```

Hoặc:

```bash
yarn install
```

Tạo file `.env` từ mẫu bên dưới. Không commit file `.env` lên repository vì file này chứa mật khẩu và khóa API.

## Chạy dự án

Chạy ở chế độ phát triển (tự khởi động lại khi mã nguồn thay đổi):

```bash
npm run dev
```

Chạy thông thường:

```bash
npm start
```

- Website khách hàng: <http://localhost:3000>
- Đăng nhập khách hàng: <http://localhost:3000/auth/login>
- Đăng nhập quản trị: <http://localhost:3000/admin/account/login>

## Cấu trúc thư mục

```text
.
├── configs/       # Kết nối database, OAuth và cấu hình hệ thống
├── controllers/   # Xử lý request cho client và admin
├── helpers/       # Hàm dùng chung, email, đơn hàng và thanh toán
├── middlewares/   # Xác thực, SEO và dữ liệu dùng chung
├── models/        # Mongoose models
├── public/        # CSS, JavaScript, hình ảnh và file tĩnh
├── routes/        # Route client và admin
├── validates/     # Kiểm tra dữ liệu đầu vào
├── views/         # Giao diện Pug
├── index.ts       # Điểm khởi động Express
└── package.json   # Dependency và lệnh chạy
```