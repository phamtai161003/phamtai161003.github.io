function checkOrder() {
    const orderNumber = document.getElementById('order-number').value;
    const orderCode = document.getElementById('order-code').value;

    if (!orderNumber || !orderCode) {
        alert('Vui lòng nhập số điện thoại và mã đơn hàng');
        return;
    }

    // Gửi yêu cầu tra cứu đến máy chủ của bạn (thay 'your-server-url' bằng URL máy chủ thực tế)
    fetch(`your-server-url/lookup?phone=${orderNumber}&orderCode=${orderCode}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayOrderInfo(data.orderInfo);
            } else {
                alert('Không tìm thấy đơn hàng');
            }
        })
        .catch(error => {
            console.error('Error fetching order info:', error);
            alert('Có lỗi xảy ra khi tra cứu đơn hàng');
        });
}

function displayOrderInfo(orderInfo) {
    // Hiển thị thông tin đơn hàng dựa trên dữ liệu nhận được từ máy chủ
    // Bạn cần tạo các thành phần HTML và đưa thông tin đơn hàng vào đó
}

// Đăng ký sự kiện click cho nút "Kiểm tra"
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.kiemtra button').addEventListener('click', checkOrder);
});