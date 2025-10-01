import React, { useState } from "react";
import { Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  // const checkForm = () => {
  //   if(!username || !password || !name) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  const handleChangeInput = (field: string, value: string) => {
    setRegisterForm((prevState) => ({
      ...prevState, // Giữ nguyên các field cũ
      [field]: value, // Cập nhật field tương ứng với giá trị mới
    }));
  };

  const checkForm = () => {
    // Kiểm tra xem có ít nhất một key nào đó không có dữ liệu
    const isFormValid = Object.values(registerForm).every(
      (value) => value.trim() !== ""
    );
    return isFormValid; // Trả về true nếu tất cả các key đều có dữ liệu, false nếu có ít nhất một key không có dữ liệu
  };

  const handleSubmit = () => {
    // Logic xử lý đăng nhập thực tế sẽ ở đây
    console.log("Thông tin:", registerForm);
    const isChecked = checkForm();
    // const isFilledAllFields = checkForm();
    if (!isChecked) {
      toast.error("Bạn chưa điền đầy đủ thông tin. Vui lòng nhập lại!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (registerForm.password !== registerForm.confirmPassword) {
        console.log("khac nhau");
        toast.error("Mật khẩu không trùng khớp. Vui lòng nhập lại!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log("giong nhau");
        const payload = {
          name: registerForm.name,
          email: registerForm.email,
          address: registerForm.address,
          phone: registerForm.phone,
          password: registerForm.password,
          role: "user",
        };

        console.log("payload: ", payload);

        const loginUrl = "https://lapshop-be.onrender.com/api/auth/register";

        axios
          .post(loginUrl, payload)
          .then(function (response) {
            console.log("THANH CONG: ", response.data);
            navigate("/login");
            toast.success("Đăng ký thành công!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .catch(function (error) {
            console.log("THAT BAI: ", error);
            toast.error("Đăng ký thất bại. Vui lòng thử lại!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      }
    }
  };

  return (
    // Nền gradient toàn màn hình (trending)
    <div
      className="min-h-screen flex items-center justify-center p-4 
                    bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200"
    >
      <div
        className="w-full max-w-2xl p-8 
                      bg-white border border-gray border-opacity-30 
                      rounded-2xl shadow-2xl transition duration-500 hover:shadow-3xl"
      >
        <h2 className="text-4xl text-purple-900 text-center mb-8 tracking-wider font-bold">
          Lapshop
        </h2>

        <form className="flex gap-4">
          <div className="w-1/2">
            {/* Input: Username */}
            <label className="text-gray-400 text-sm">Họ và tên</label><span className="ml-1 text-red-500">*</span>
            <div className="mb-4 mt-1">
              <Input
                placeholder="Họ và tên"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 
                         border border-blue-600 border-opacity-20 focus:outline-none focus:ring-2 
                         focus:ring-white focus:ring-opacity-50 transition duration-300
                         font-light"
                value={registerForm.name}
                onChange={(e) => handleChangeInput("name", e.target.value)}
              />
            </div>

            <label className="text-gray-400 text-sm">Email</label><span className="ml-1 text-red-500">*</span>
            <div className="mb-4 mt-1">
              <Input
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 
                         border border-blue-600 border-opacity-20 focus:outline-none focus:ring-2 
                         focus:ring-white focus:ring-opacity-50 transition duration-300
                         font-light"
                value={registerForm.email}
                onChange={(e) => handleChangeInput("email", e.target.value)}
              />
            </div>

            <label className="text-gray-400 text-sm">Địa chỉ</label><span className="ml-1 text-red-500">*</span>
            <div className="mb-4 mt-1">
              <Input
                placeholder="Địa chỉ"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 
                         border border-blue-600 border-opacity-20 focus:outline-none focus:ring-2 
                         focus:ring-white focus:ring-opacity-50 transition duration-300
                         font-light"
                value={registerForm.address}
                onChange={(e) => handleChangeInput("address", e.target.value)}
              />
            </div>
          </div>

          <div className="w-1/2">
            <label className="text-gray-400 text-sm">Số điện thoại</label><span className="ml-1 text-red-500">*</span>
            <div className="mb-4 mt-1">
              <Input
                placeholder="Số điện thoại"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 
                         border border-blue-600 border-opacity-20 focus:outline-none focus:ring-2 
                         focus:ring-white focus:ring-opacity-50 transition duration-300
                         font-light"
                value={registerForm.phone}
                onChange={(e) => handleChangeInput("phone", e.target.value)}
              />
            </div>

            {/* Input: Password */}
            <label className="text-gray-400 text-sm">Mật khẩu</label><span className="ml-1 text-red-500">*</span>
            <div className="mb-4 mt-1">
              <Input.Password
                placeholder="Mật khẩu"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 
                         border border-blue-600 border-opacity-20 focus:outline-none focus:ring-2 
                         focus:ring-white focus:ring-opacity-50 transition duration-300
                         font-light"
                value={registerForm.password}
                onChange={(e) => handleChangeInput("password", e.target.value)}
              />
            </div>

            {/* Input: Confirm Password */}
            <label className="text-gray-400 text-sm">Xác nhận mật khẩu</label><span className="ml-1 text-red-500">*</span>
            <div className="mb-4 mt-1">
              <Input.Password
                placeholder="Xác nhận mật khẩu"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 
                         border border-blue-600 border-opacity-20 focus:outline-none focus:ring-2 
                         focus:ring-white focus:ring-opacity-50 transition duration-300
                         font-light"
                value={registerForm.confirmPassword}
                onChange={(e) =>
                  handleChangeInput("confirmPassword", e.target.value)
                }
              />
            </div>
          </div>
        </form>
        {/* Button: Đăng ký */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full p-3 bg-gray-100 text-purple-600 rounded-lg font-bold 
                       hover:bg-gray-200 hover:shadow-lg transition duration-300 transform 
                       hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
        >
          Đăng ký
        </button>

        <div className="w-full h-2 border-b border-purple-400 mt-6" />

        <p className="text-center text-purple-500 text-sm mt-4">
          Nếu bạn đã có tài khoản
        </p>

        {/* Liên kết Đăng ký và Quên mật khẩu */}
        <button
          onClick={() => navigate('/login')}
          type="submit"
          className="w-full p-3 bg-green-100 text-purple-600 mt-4 rounded-lg font-bold 
                       hover:bg-green-200 hover:shadow-lg transition duration-300 transform 
                       hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default Register;