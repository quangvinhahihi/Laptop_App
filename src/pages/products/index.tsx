import React from "react";
import { products } from "../../components/home-type-products/fakeData";
import ProductCard from "../../components/hot-products/productCard";
import { Checkbox, Select } from "antd";

const { Option } = Select;

const Type = ["Tất cả", "Gaming", "Văn phòng", "Đồ họa", "Sinh viên"];
const Brands = ["Dell", "HP", "Lenovo", "Asus", "Acer", "MSI", "Apple", "Gigabyte", "LG", "Samsung"];

const Products = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Laptop</h1>
      <p className="text-gray-600 mb-6">
        Tìm kiếm và mua sắm laptop phù hợp với nhu cầu của bạn
      </p>
      <div className="flex gap-6">
        <div className="w-1/4 bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Danh mục</h2>
          <ul className="space-y-2 mb-6">
            {Type.map((item) => (
              <li
                key={item}
                className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-50 transition-all border border-transparent hover:border-blue-400"
              >
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-semibold mb-3">Thương hiệu</h2>
          <div className="space-y-2">
            {Brands.map((item) => (
              <Checkbox key={item}>{item}</Checkbox>
            ))}
          </div>
        </div>

        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <Select defaultValue="Newest" style={{ width: 200 }}>
              <Option value="Newest">Mới nhất</Option>
              <Option value="priceIncrease">Giá tăng dần</Option>
              <Option value="priceDescrease">Giá giảm dần</Option>
            </Select>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((item, index) => (
              <ProductCard key={index} item={item} isHot />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
