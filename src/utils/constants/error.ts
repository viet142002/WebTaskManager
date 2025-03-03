export const ERROR_CODE = {
    "400": "bad_request", // Yêu cầu không hợp lệ
    "401": "unauthorized", // Chưa xác thực hoặc xác thực thất bại
    "402": "payment_required", // Cần thanh toán để tiếp tục
    "403": "forbidden", // Không có quyền truy cập
    "404": "not_found", // Không tìm thấy tài nguyên
    "405": "method_not_allowed", // Phương thức HTTP không được hỗ trợ

    "500": "internal_server_error", // Lỗi máy chủ nội bộ
    "501": "not_implemented", // Chưa hỗ trợ phương thức yêu cầu

    // 6xx - Lỗi xác thực & tài khoản
    "600": "password_incorrect", // Mật khẩu không đúng
    "601": "user_not_found", // Không tìm thấy người dùng
    "602": "account_locked", // Tài khoản bị khóa
    "603": "token_expired", // Token hết hạn
    "604": "invalid_captcha", // Mã CAPTCHA không hợp lệ
    "605": "email_not_verified", // Email chưa được xác minh
    "606": "phone_not_verified", // Số điện thoại chưa được xác minh
    "607": "session_expired", // Phiên đăng nhập đã hết hạn
    "608": "invalid_two_factor_code", // Mã xác thực hai yếu tố không hợp lệ
    "609": "account_suspended", // Tài khoản bị tạm khóa

    // 7xx - Lỗi dữ liệu & nhập liệu
    "700": "invalid_input_data", // Dữ liệu nhập vào không hợp lệ
    "701": "missing_required_fields", // Thiếu trường dữ liệu bắt buộc
    "702": "duplicate_entry", // Dữ liệu bị trùng lặp
    "703": "invalid_file_format", // Định dạng tệp không hợp lệ
    "704": "file_too_large", // Kích thước tệp quá lớn
    "705": "unsupported_file_type", // Loại tệp không được hỗ trợ
    "706": "data_conflict", // Dữ liệu xung đột với hệ thống
    "707": "invalid_date_format", // Định dạng ngày tháng không hợp lệ
    "708": "username_taken", // Tên người dùng đã có người sử dụng
    "709": "email_taken", // Email đã được sử dụng
    "710": "phone_number_taken", // Số điện thoại đã được sử dụng
};
