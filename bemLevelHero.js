function toast({
    title = '',
    msg = '',
    type = 'success',
    duration = 3000,
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        // Xoá sự kiện khỏi DOM
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // Bấm và close thông báo!
        toast.onclick = function(event) {
            console.log(event.target);
            if(event.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            };
        };

        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        }

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`); // Tạo class list
        toast.style.animation = `toastInLeft 0.5s ease forwards, toastOutRight linear 0.3s ${delay}s forwards`; // Thêm animation
        
        // Thêm thuộc tính của HTML
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close">
                <i class="fa fa-times"></i>
            </div>
        `;
        main.appendChild(toast);

    }
};

// Hàm Show Toast
function showSuccessToast() {
    toast({
        title: 'Thành công!',
        msg: 'Máy Vi tính đã kết nối internet (Windows, Ubuntu hoặc MacOs)',
        type: 'success',
        duration: 3000,
    });
}

function showErrorToast() {
    toast({
        title: 'Thất bại!',
        msg: 'Đã có lỗi xảy ra, vui lòng liên hệ quản trị viên!',
        type: 'error',
        duration: 3000,
    });
}
