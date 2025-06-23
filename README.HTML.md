# 📘 Tổng hợp đầy đủ thẻ HTML và công dụng

> Tài liệu giúp bạn tra cứu nhanh các thẻ HTML, công dụng, cú pháp, ví dụ và ghi chú thực tế.

---

## 🧱 1. Thẻ cấu trúc tài liệu (Document Structure Tags)

| Thẻ | Công dụng | Ví dụ | Ghi chú |
|-----|-----------|-------|---------|
| `<!DOCTYPE>` | Khai báo kiểu tài liệu HTML5 | `<!DOCTYPE html>` | Luôn nằm đầu file, giúp trình duyệt hiểu đây là HTML5 |
| `<html>` | Bao toàn bộ nội dung HTML | `<html lang="vi">...</html>` | Nên khai báo `lang="vi"` hoặc `lang="en"` để hỗ trợ SEO |
| `<head>` | Chứa metadata, tiêu đề, link CSS... | `<head><title>...</title></head>` | Không hiển thị nội dung lên trình duyệt |
| `<title>` | Tiêu đề của trang web (trên tab) | `<title>Trang chủ</title>` | Bắt buộc nằm trong `<head>` |
| `<body>` | Chứa toàn bộ nội dung hiển thị | `<body>...</body>` | Tất cả nội dung giao diện nằm trong đây |

---

## 📄 2. Thẻ văn bản (Text Formatting Tags)

| Thẻ | Công dụng | Ví dụ | Ghi chú |
|-----|-----------|-------|---------|
| `<h1>` – `<h6>` | Tiêu đề, từ lớn đến nhỏ | `<h1>Tiêu đề chính</h1>` | Chỉ nên có 1 thẻ `<h1>`/trang |
| `<p>` | Đoạn văn | `<p>Đây là đoạn văn.</p>` | Tự động có khoảng cách dưới |
| `<br>` | Xuống dòng | `Dòng 1<br>Dòng 2` | Là thẻ đơn, không có thẻ đóng |
| `<hr>` | Kẻ đường ngang | `<hr>` | Phân cách nội dung |
| `<strong>` / `<b>` | Làm chữ đậm | `<strong>Chữ đậm</strong>` | `strong` nhấn mạnh ngữ nghĩa, `b` chỉ định dạng |
| `<em>` / `<i>` | Làm chữ nghiêng | `<em>Chữ nghiêng</em>` | `em` mang nghĩa nhấn mạnh |
| `<mark>` | Tô sáng chữ | `<mark>Chữ nổi bật</mark>` | Hay dùng để highlight |
| `<small>` | Cỡ chữ nhỏ | `<small>Chữ nhỏ</small>` | Thường dùng ghi chú, chú thích |
| `<del>` | Gạch bỏ chữ | `<del>Giá cũ</del>` | Dùng cho giá trước khuyến mãi |
| `<ins>` | Gạch chân chữ | `<ins>Giá mới</ins>` | Hay đi cùng `<del>` |
| `<sub>` / `<sup>` | Chữ dưới / trên dòng | H₂O = H<sub>2</sub>O | Công thức toán, hóa học |

---

## 🔗 3. Thẻ liên kết (Link Tags)

| Thẻ | Công dụng | Ví dụ | Ghi chú |
|-----|-----------|-------|---------|
| `<a>` | Tạo liên kết | `<a href="https://example.com">Trang</a>` | Dùng `target="_blank"` để mở tab mới |
| `<link>` | Liên kết tài nguyên ngoài (CSS, icon) | `<link rel="stylesheet" href="style.css">` | Nằm trong `<head>` |

---

## 🖼 4. Thẻ hình ảnh & media

| Thẻ | Công dụng | Ví dụ | Ghi chú |
|-----|-----------|-------|---------|
| `<img>` | Hiển thị hình ảnh | `<img src="anh.jpg" alt="mô tả">` | Thêm `alt` giúp SEO & hỗ trợ khi lỗi ảnh |
| `<figure>` | Gộp ảnh + mô tả | `<figure><img...><figcaption>Mô tả</figcaption></figure>` | Hỗ trợ nội dung minh họa |
| `<figcaption>` | Chú thích ảnh | Xem trên | Dùng trong `<figure>` |
| `<audio>` | Nhúng âm thanh | `<audio controls src="nhac.mp3"></audio>` | Thêm `controls` để có nút play |
| `<video>` | Nhúng video | `<video controls src="video.mp4"></video>` | Có thể thêm `poster`, `autoplay`, `loop` |
| `<source>` | Nguồn thay thế media | `<source src="file.mp3" type="audio/mp3">` | Dùng trong `<audio>` và `<video>` |

---

## 🧾 5. Thẻ biểu mẫu (Form Tags)

| Thẻ | Công dụng | Ví dụ | Ghi chú |
|-----|-----------|-------|---------|
| `<form>` | Tạo form nhập liệu | `<form action="/submit" method="POST">...</form>` | Có thể dùng `GET` hoặc `POST` |
| `<input>` | Trường nhập liệu | `<input type="text">` | Rất đa dạng: `text`, `email`, `checkbox`, `radio`,... |
| `<label>` | Nhãn cho input | `<label for="email">Email:</label>` | Kết hợp với `id` của `input` |
| `<textarea>` | Nhập văn bản dài | `<textarea rows="4"></textarea>` | Không phải thẻ đơn |
| `<select>` | Danh sách chọn | `<select><option>1</option></select>` | Dùng kèm `<option>` |
| `<option>` | Mục trong `<select>` | `<option value="1">Một</option>` | Có thể thêm `selected` |
| `<button>` | Nút bấm | `<button type="submit">Gửi</button>` | Có thể `submit`, `reset`, `button` |
| `<fieldset>` | Nhóm nhóm input | `<fieldset><legend>Thông tin</legend>...</fieldset>` | Hay dùng để phân loại form |
| `<legend>` | Tiêu đề của fieldset | `<legend>Thông tin</legend>` | Phải đi kèm `<fieldset>` |

---

## 📋 6. Thẻ bảng (Table Tags)

| Thẻ | Công dụng | Ví dụ | Ghi chú |
|-----|-----------|-------|---------|
| `<table>` | Tạo bảng | `<table>...</table>` | Dùng kèm các thẻ con bên dưới |
| `<tr>` | Dòng trong bảng | `<tr>...</tr>` | Dòng chứa ô |
| `<td>` | Ô dữ liệu | `<td>Giá trị</td>` | Chứa dữ liệu thường |
| `<th>` | Ô tiêu đề | `<th>Tên</th>` | Mặc định in đậm & canh giữa |
| `<thead>` | Nhóm dòng tiêu đề | `<thead><tr>...</tr></thead>` | Đặt ở đầu bảng |
| `<tbody>` | Nhóm dữ liệu chính | `<tbody><tr>...</tr></tbody>` | Không bắt buộc nhưng nên dùng |
| `<tfoot>` | Nhóm dòng cuối | `<tfoot><tr>...</tr></tfoot>` | Dùng cho tổng kết |
| `colspan`, `rowspan` | Gộp ô | `<td colspan="2">...</td>` | Gộp cột hoặc dòng |

---

## 🎨 7. Thẻ bố cục/layout (Semantic Layout Tags)

| Thẻ | Công dụng | Ví dụ | Ghi chú |
|-----|-----------|-------|---------|
| `<header>` | Phần đầu trang | `<header>...</header>` | Thường chứa logo, nav |
| `<nav>` | Thanh điều hướng | `<nav><ul><li>...</li></ul></nav>` | Thường nằm trong header |
| `<main>` | Nội dung chính | `<main>...</main>` | Chỉ nên có 1 thẻ `<main>` |
| `<section>` | Khu vực nội dung | `<section>Giới thiệu</section>` | Dùng chia từng phần bài viết |
| `<article>` | Nội dung độc lập | `<article>Bài viết</article>` | Có thể chia nhỏ trang |
| `<aside>` | Thanh bên | `<aside>Quảng cáo</aside>` | Nội dung phụ |
| `<footer>` | Chân trang | `<footer>©2025</footer>` | Nằm cuối cùng |
| `<div>` | Khối không mang ý nghĩa | `<div class="box">...</div>` | Dùng chung với CSS |
| `<span>` | Nội tuyến không mang nghĩa | `<span class="red">Chữ đỏ</span>` | Không ngắt dòng |

---

## 🧠 8. Thẻ script & metadata

| Thẻ | Công dụng | Ví dụ | Ghi chú |
|-----|-----------|-------|---------|
| `<meta>` | Metadata (mã hóa, mô tả, từ khóa...) | `<meta charset="UTF-8">` | Bắt buộc có để tránh lỗi font |
| `<script>` | Nhúng JavaScript | `<script src="main.js"></script>` | Cuối `<body>` giúp tải nhanh |
| `<style>` | CSS nội tuyến | `<style>body {color:red;}</style>` | Nên hạn chế, ưu tiên file CSS |

---

## ⚠️ 9. Các thẻ không nên dùng (Obsolete / Deprecated)

| Thẻ | Lý do | Ghi chú |
|------|-------|---------|
| `<font>` | Không còn dùng trong HTML5 | Dùng CSS để thay thế |
| `<center>` | Đã lỗi thời | Dùng `text-align: center` trong CSS |
| `<u>` | Gạch chân nhưng không rõ ngữ nghĩa | Dùng `<ins>` hoặc CSS |

---

📝 *Tài liệu đang được cập nhật liên tục. Bạn có thể mở pull request để đóng góp thêm.*
