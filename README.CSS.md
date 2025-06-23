# ‼️‼️‼️ Học HTML và CSS ‼️‼️‼️
-------------------------

# CSS -- Cascading Style Sheet 📊📊📊📊
    -- Tạo phong cách và định kiểu cho những yếu tố được viết dưới dạng ngôn ngữ đánh dấu (HTLM)

### --> Các kiểu CSS trong HTML

#### Internal - `Sử dụng cặp thẻ Style trong HTML`
#### External - `Nhúng hoặc sử dụng link từ bên ngoài`
#### Inline - `Sử dụng Attributes Style để CSS`


# 🎨 Tổng hợp đầy đủ các thuộc tính CSS và công dụng

> Tài liệu tra cứu nhanh tất cả các thuộc tính CSS phổ biến, **giải thích chi tiết**, **cú pháp**, **ví dụ minh họa** và **ghi chú mở rộng**, kèm **icon trực quan**. KHÔNG bao gồm thẻ HTML.

---

## 📏 1. Kích thước & Khoảng cách

| Thuộc tính                | Công dụng                         | Ví dụ                         | Ghi chú                                                           |
|---------------------------|-----------------------------------|-------------------------------|-------------------------------------------------------------------|
| `width`, `height`         | Đặt chiều rộng / chiều cao       | `width: 200px; height: 100px;`| Đơn vị: px, %, em, rem, vw, vh, auto                              |
| `max-width`, `min-height` | Giới hạn kích thước tối đa/tối thiểu | `max-width: 100%;`        | Hữu ích khi responsive                                            |
| `padding`                 | Khoảng cách bên trong             | `padding: 10px 20px;`         | Theo thứ tự: top, right, bottom, left. Dùng `padding-top`...     |
| `margin`                  | Khoảng cách bên ngoài             | `margin: 0 auto;`             | `margin: auto` giúp căn giữa khối block                          |
| `box-sizing`              | Cách tính kích thước hộp          | `box-sizing: border-box;`     | border-box = bao gồm cả padding & border                         |

---

## 🖍 2. Màu sắc & Nền

| Thuộc tính            | Công dụng             | Ví dụ                                 | Ghi chú                                          |
|----------------------|-----------------------|---------------------------------------|--------------------------------------------------|
| `color`              | Màu chữ               | `color: red;`                         | Dùng tên màu, mã HEX (`#fff`), RGB, HSL          |
| `background-color`   | Màu nền               | `background-color: #f0f0f0;`          |                                                  |
| `background-image`   | Ảnh nền               | `background-image: url("img.jpg");`  | Có thể dùng gradient hoặc URL                   |
| `background-size`    | Kích thước ảnh nền    | `background-size: cover;`             | cover, contain, auto                            |
| `background-position`| Vị trí ảnh nền        | `background-position: center top;`    |                                                  |
| `background-repeat`  | Lặp ảnh nền           | `background-repeat: no-repeat;`       |                                                  |
| `opacity`            | Độ mờ của phần tử     | `opacity: 0.5;`                        | 0 là trong suốt, 1 là rõ nét                    |

---

## 🧍 3. Văn bản

| Thuộc tính         | Công dụng                    | Ví dụ                               | Ghi chú                                                        |
|--------------------|------------------------------|-------------------------------------|----------------------------------------------------------------|
| `font-family`      | Kiểu chữ                     | `font-family: Arial, sans-serif;`   | Gợi ý nhiều font dự phòng                                      |
| `font-size`        | Cỡ chữ                       | `font-size: 16px;`                  | Đơn vị: px, em, rem                                            |
| `font-weight`      | Độ đậm của chữ              | `font-weight: bold;`                | hoặc số từ 100–900                                             |
| `text-align`       | Căn lề văn bản               | `text-align: center;`               | `start`, `end`, `left`, `right`, `center`, `justify`           |
| `line-height`      | Khoảng cách dòng            | `line-height: 1.5;`                 | Tăng độ dễ đọc                                                 |
| `text-decoration`  | Trang trí văn bản            | `text-decoration: underline;`       | `none`, `underline`, `line-through`, `overline`                |
| `text-transform`   | Biến đổi chữ hoa/thường     | `text-transform: uppercase;`        | `capitalize`, `uppercase`, `lowercase`                         |
| `letter-spacing`   | Khoảng cách giữa ký tự      | `letter-spacing: 2px;`              |                                                              |
| `word-spacing`     | Khoảng cách giữa từ         | `word-spacing: 5px;`                |                                                              |
| `white-space`      | Quản lý xuống dòng & khoảng trắng | `white-space: nowrap;`        | `normal`, `pre`, `nowrap`, `pre-line`, `pre-wrap`              |

---

## 📦 4. Hiển thị & Vị trí

| Thuộc tính         | Công dụng                     | Ví dụ                            | Ghi chú                                                                 |
|--------------------|-------------------------------|----------------------------------|-------------------------------------------------------------------------|
| `display`          | Kiểu hiển thị phần tử         | `display: flex;`                 | `block`, `inline`, `inline-block`, `flex`, `grid`, `none`             |
| `visibility`       | Ẩn/hiện phần tử               | `visibility: hidden;`            | Phần tử vẫn chiếm chỗ                                                  |
| `position`         | Định vị trí                   | `position: absolute;`            | `static` (mặc định), `relative`, `absolute`, `fixed`, `sticky`        |
| `top`, `left`, `right`, `bottom` | Vị trí cụ thể | `top: 10px; left: 5px;`           | Cần kết hợp `position` khác `static`                                   |
| `z-index`          | Thứ tự lớp                    | `z-index: 999;`                  | Giá trị lớn hơn thì nằm trên                                           |
| `overflow`         | Xử lý tràn nội dung           | `overflow: auto;`                | `visible`, `hidden`, `scroll`, `auto`                                 |

---

## 🎯 5. Flexbox

| Thuộc tính          | Công dụng                             | Ví dụ                                   | Ghi chú                                   |
|---------------------|---------------------------------------|-----------------------------------------|-------------------------------------------|
| `display: flex`     | Kích hoạt flexbox                     | `display: flex;`                         | Áp dụng cho container cha                 |
| `flex-direction`    | Hướng xếp các phần tử con             | `flex-direction: row;`                  | `row`, `row-reverse`, `column`, `column-reverse` |
| `justify-content`   | Căn chỉnh theo trục ngang             | `justify-content: space-between;`       | `center`, `flex-start`, `flex-end`, `space-around`, `space-evenly` |
| `align-items`       | Căn chỉnh theo trục dọc               | `align-items: center;`                  | `stretch`, `center`, `flex-start`, `flex-end`, `baseline` |
| `align-content`     | Căn chỉnh nhiều dòng (nếu có)         | `align-content: space-around;`          | Dùng khi có nhiều dòng trong flex-wrap   |
| `flex-wrap`         | Cho phép phần tử xuống dòng           | `flex-wrap: wrap;`                      | `nowrap`, `wrap-reverse`                 |
| `gap`               | Khoảng cách giữa các phần tử con      | `gap: 20px;`                            | Kết hợp với `row-gap`, `column-gap` nếu cần |
| `flex`              | Kích thước linh hoạt của phần tử con  | `flex: 1;`                              | Gồm: `flex-grow`, `flex-shrink`, `flex-basis` |
| `order`             | Sắp xếp thứ tự các phần tử            | `order: 2;`                             | Mặc định là 0, số càng nhỏ càng ưu tiên trước |

---

## 🌐 6. Responsive & Media Queries

| Thuộc tính / Kỹ thuật | Công dụng                         | Ví dụ                                    | Ghi chú                                            |
|------------------------|-----------------------------------|------------------------------------------|----------------------------------------------------|
| `@media`               | CSS điều kiện theo thiết bị       | `@media (max-width: 768px) { ... }`      | Dùng để responsive layout                          |
| `vw`, `vh`             | Đơn vị viewport                   | `width: 100vw; height: 100vh;`           | vw = chiều rộng màn hình, vh = chiều cao           |
| `%`                    | Tỷ lệ phần trăm                   | `width: 80%;`                            | Theo kích thước của phần tử cha                    |
| `clamp()`              | Giá trị co giãn giới hạn          | `font-size: clamp(14px, 2vw, 18px);`     | Rất hữu ích cho responsive text                   |

---

## 🌀 7. Animation & Transition

| Thuộc tính      | Công dụng                     | Ví dụ                                                              | Ghi chú                                           |
|------------------|-------------------------------|--------------------------------------------------------------------|---------------------------------------------------|
| `transition`     | Hiệu ứng chuyển động mượt     | `transition: all 0.3s ease;`                                      | Thường dùng cho hover, focus                     |
| `transition-delay` | Thời gian trễ khi chuyển     | `transition-delay: 0.5s;`                                         |                                                   |
| `animation`      | Gọi animation đã khai báo     | `animation: slideIn 1s ease-in-out;`                              | Dùng kèm với `@keyframes`                        |
| `@keyframes`     | Khung chuyển động             | `@keyframes slideIn { from {left: -100px;} to {left: 0;} }`       | Có thể dùng nhiều step: `0%`, `50%`, `100%`       |
| `animation-delay` | Trễ khi animation bắt đầu     | `animation-delay: 2s;`                                            |                                                   |
| `animation-iteration-count` | Số lần lặp        | `animation-iteration-count: infinite;`                            | `infinite`, hoặc số cụ thể                        |

---

## 🎨 8. Viền, Đổ Bóng & Bo Góc

| Thuộc tính        | Công dụng                           | Ví dụ                              | Ghi chú                         |
|--------------------|-------------------------------------|------------------------------------|---------------------------------|
| `border`           | Viền cơ bản                         | `border: 1px solid #000;`          | Có thể tách ra: `border-width`, `border-color`, `border-style` |
| `border-radius`    | Bo tròn góc                         | `border-radius: 10px;`             | Có thể dùng % cho hình tròn     |
| `box-shadow`       | Đổ bóng khối                        | `box-shadow: 2px 2px 8px rgba(0,0,0,0.3);` | offset-x, offset-y, blur, color |
| `outline`          | Viền ngoài không chiếm diện tích   | `outline: 2px dotted red;`         | Không ảnh hưởng đến layout      |

---

## ⚠️ 9. Các thuộc tính nên tránh / ít dùng

| Thuộc tính         | Lý do tránh dùng                   | Ghi chú                                               |
|--------------------|------------------------------------|-------------------------------------------------------|
| `float`            | Gây lỗi layout, khó kiểm soát      | Dùng Flexbox hoặc Grid thay thế                      |
| `!important`       | Gây khó bảo trì & ghi đè CSS       | Tránh dùng trừ khi cực kỳ cần thiết                  |
| `z-index` cao quá  | Dễ gây lỗi che nhau & xếp lớp sai  | Tổ chức z-index hợp lý theo từng tầng                |

---

📝 *Tài liệu đang được cập nhật liên tục. Bạn có thể mở pull request để đóng góp thêm.*
