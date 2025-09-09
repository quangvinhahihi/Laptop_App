import React from "react";

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 p-6">
      <div className="w-64 bg-white shadow rounded p-4">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          </div>
          <div className="ml-3">
            <div className="font-semibold">Quangvinh2k</div>
            <button className="text-sm text-blue-500 hover:underline">
              Sửa Hồ Sơ
            </button>
          </div>
        </div>
        <nav className="space-y-2 text-sm">
          <div className="text-blue-500 font-semibold cursor-pointer">Tài Khoản Của Tôi</div>
          <div className="text-gray-700 font-semibold mt-4 hover:text-blue-500 cursor-pointer">Đơn Mua</div>
          <div className="text-gray-700 font-semibold mt-4 hover:text-blue-500 cursor-pointer">Kho Voucher</div>
        </nav>
      </div>

      <main className="flex-1 bg-white shadow rounded p-6 ml-6">
        <h1 className="text-xl font-bold mb-1">Hồ Sơ Của Tôi</h1>

        <div className="grid grid-cols-3 gap-6">
          {/* Form Fields */}
          <div className="col-span-2 space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Tên đăng nhập
              </label>
              <input
                type="text"
                value="quangvinh2k"
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Tên</label>
              <input
                type="text"
                value="Quangvinh2k"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <span className="mr-2">vinhnguye98@gmail.com</span>
              <button className="text-blue-500 hover:underline text-sm">
                Thay Đổi
              </button>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Địa chỉ</label>
              <span className="mr-2">Khu phố 9, Xã Thăng Bình, Thành Phố Đà Nẵng</span>
              <button className="text-blue-500 hover:underline text-sm">
                Thay Đổi
              </button>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Số điện thoại
              </label>
              <span className="mr-2">0364273798</span>
              <button className="text-blue-500 hover:underline text-sm">
                Thay Đổi
              </button>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Giới tính
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-1">
                  <input type="radio" name="gender" defaultChecked />
                  <span>Nam</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="gender" />
                  <span>Nữ</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="gender" />
                  <span>Không muốn công khai</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Ngày sinh
              </label>
              <span className="mr-2">05/03/2004</span>
              <button className="text-blue-500 hover:underline text-sm">
                Thay Đổi
              </button>
            </div>

            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
              Lưu
            </button>
          </div>

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            </div>
            <button className="mt-4 border rounded px-4 py-1">Chọn Ảnh</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
