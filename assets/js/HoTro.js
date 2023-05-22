// HoTro.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Xử lý form ở đây
            const formData = new FormData(form);
            const requestOptions = {
                method: "POST",
                body: formData
            };

            fetch("https://formsubmit.co/pdtai161003@gmail.com", requestOptions)
                .then(response => {
                    if (response.ok) {
                        alert("Thông tin đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.");
                        form.reset();
                    } else {
                        alert("Có lỗi xảy ra trong quá trình gửi thông tin. Vui lòng thử lại sau.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("Có lỗi xảy ra trong quá trình gửi thông tin. Vui lòng thử lại sau.");
                });
        });
    }
});