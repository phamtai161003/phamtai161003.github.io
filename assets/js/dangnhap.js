function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

function validateLoginForm() {
    // Xác thực dữ liệu đăng nhập
    // Nếu xác thực thành công, trả về true. Ngược lại, trả về false.
    return true;
}

function validateRegisterForm() {
    // Xác thực dữ liệu đăng ký
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp. Vui lòng kiểm tra lại.');
        return false;
    }

    // Nếu xác thực thành công, trả về true. Ngược lại, trả về false.
    return true;
}