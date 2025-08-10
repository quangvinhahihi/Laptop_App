import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const items = [
  {
    href: "/",
    title: <HomeOutlined />,
  },
  {
    title: "Thanh toán",
  },
];

const Payment = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb items={items} className="mb-6" />

        <h2 className="text-2xl font-bold mb-6">Thanh toán đơn hàng</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-4">Thông tin giao hàng</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border p-2 rounded w-full"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border p-2 rounded w-full"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="border p-2 rounded w-full"
                  placeholder="Nhập email"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  Địa chỉ giao hàng <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  placeholder="Nhập địa chỉ chi tiết"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  Ghi chú đơn hàng
                </label>
                <textarea
                  className="border p-2 rounded w-full"
                  placeholder="Ghi chú thêm về đơn hàng (tùy chọn)"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-4">Phương thức thanh toán</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="radio" name="payment" defaultChecked />
                  <i className="fa-regular fa-money-bill-1 text-orange-600"></i>
                  <span>Thanh toán khi nhận hàng (COD)</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="payment" />
                  <i className="fa-regular fa-credit-card text-blue-600"></i>
                  <span>Thẻ tín dụng / Thẻ ghi nợ</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="payment" />
                  <i className="fa-solid fa-building-columns text-green-600"></i>
                  <span>Chuyển khoản ngân hàng</span>
                </label>
                <div className="bg-gray-100 p-3 text-sm rounded mt-2 text-gray-700">
                  <i className="fa-regular fa-truck"></i>
                  <b>Thanh toán khi nhận hàng</b><br />
                  Bạn sẽ thanh toán bằng tiền mặt khi nhận được sản phẩm. Phí COD: 30.000đ
                </div>
              </div>
            </div>
          </div>

          {/* Đơn hàng */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="font-semibold text-lg mb-3">Đơn hàng của bạn</h3>
            <div className="flex gap-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjJ2wsajeKzldq3iBMXBQJJwP09vVVuxxZA&s"
                alt="Laptop"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-semibold">ASUS TUF Gaming F15 FX506LH</p>
                <p className="text-sm text-gray-600">RAM: 8GB</p>
                <p className="text-sm">Số lượng: 1</p>
                <p className="font-bold">22.990.000đ</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 border-t pt-3 space-y-2">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>22.990.000đ</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span>Miễn phí</span>
              </div>
              <div className="flex justify-between">
                <span>Phí COD:</span>
                <span>30.000đ</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-red-600 text-base">
                <span>Tổng cộng:</span>
                <span>23.020.000đ</span>
              </div>
            </div>

            <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Xác nhận đặt hàng
            </button>
            <p className="text-center text-green-600 text-sm">
              <i className="fa-solid fa-shield"></i>
              Thanh toán an toàn & bảo mật
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
