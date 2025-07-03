# File này được tạo lâu rồi mà giờ mới dọn máy để làm dự án khác. Nên đẩy lên hơi trễ :)

## Lớp giả trong CSS

```css
:root{
    --text-color: #eb4d4b;
}

```

Lớp giả này là toàn cục - global.

## Đặt theo tiêu chuẩn BEM

### Ý nghĩa

- Viết tắt của: Block Element Modifier
- Block: Khối
- Element: Thành phần của khối
- Modifier: Bổ sung ý nghĩa cho `Block` và `Element`

### Tại sao phải dùng BEM

- Mỗi người đặt một kiểu
- Members đặt class trùng nhau, CSS đè lên nhau

### Cú pháp

- .block
- .block__element

- .block--modifier
- .block__element--modifier
