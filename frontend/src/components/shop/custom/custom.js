import React, { Fragment, useState, useRef, useEffect } from "react";
import { isAdmin } from "../auth/fetchApi"; // Giả sử bạn có hàm isAdmin

const Custom = (props) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: ""
  });

  const [comments, setComments] = useState([]);
  const tableRef = useRef(null);

  // Hàm lưu comments vào LocalStorage
  const saveCommentsToLocalStorage = (newComments) => {
    localStorage.setItem("comments", JSON.stringify(newComments));
  };

  // Khi component mount, lấy comments từ LocalStorage (nếu có)
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Hàm xử lý khi điền form
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Hàm xử lý khi submit form
  const handleSubmit = () => {
    const updatedComments = [
      ...comments,
      { ...formData, status: "pending" } // Thêm trạng thái cho comment
    ];
    setComments(updatedComments);
    saveCommentsToLocalStorage(updatedComments); // Lưu vào LocalStorage
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: ""
    });
  };

  // Hàm xử lý Approve
  const handleApprove = (index) => {
    const updatedComments = comments.map((comment, i) => 
      i === index ? { ...comment, status: "approved" } : comment
    );
    setComments(updatedComments);
    saveCommentsToLocalStorage(updatedComments); // Cập nhật LocalStorage
  };

  // Hàm xử lý Delete
  const handleDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    saveCommentsToLocalStorage(updatedComments); // Cập nhật LocalStorage
  };

  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
          <h3 className="text-3xl text-center mb-6">Đăng kí trở thành shop </h3>
          <p className="text-center text-gray-600 mb-6">Vui lòng điền thông tin chi tiết của bạn bên dưới để tiếp tục.</p>
          
          {/* Form content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block mb-2 text-lg font-medium">Tên Shop</label>
              <input
                type="text"
                id="fullName"
                className="form-control w-full p-3 border border-gray-300 rounded"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nhập tên shop của bạn"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="form-control w-full p-3 border border-gray-300 rounded"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập email của bạn"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-lg font-medium">Zalo</label>
              <input
                type="tel"
                id="phone"
                className="form-control w-full p-3 border border-gray-300 rounded"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số zalo của bạn"
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2 text-lg font-medium">Địa chỉ</label>
              <input
                type="text"
                id="address"
                className="form-control w-full p-3 border border-gray-300 rounded"
                value={formData.address}
                onChange={handleChange}
                placeholder="Nhập địa chỉ của bạn"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              className="px-6 py-3 bg-yellow-600 text-white text-lg rounded-lg shadow-lg hover:bg-yellow-700"
              onClick={handleSubmit}
            >
              Gửi
            </button>
          </div>
        </div>
      </div>

      {/* Comments section */}
      {isAdmin() && (
        <div className="mt-8 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h4 className="text-2xl mb-4">Bảng danh sách đăng kí thành shop</h4>
          {comments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto bg-white shadow-lg rounded">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Tên shop</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Zalo</th>
                    <th className="px-4 py-2">Địa chỉ</th>
                    <th className="px-4 py-2">Trạng thái</th>
                    <th className="px-4 py-2">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((comment, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{comment.fullName}</td>
                      <td className="px-4 py-2">{comment.email}</td>
                      <td className="px-4 py-2">{comment.phone}</td>
                      <td className="px-4 py-2">{comment.address}</td>
                      <td className="px-4 py-2">{comment.status}</td>
                      <td className="px-4 py-2">
                        {comment.status === "pending" && (
                          <button
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => handleApprove(index)}
                          >
                            Đồng ý
                          </button>
                        )}
                        <button
                          className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
                          onClick={() => handleDelete(index)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>Không có đơn đăng kí nào</p>
          )}
        </div>
      )}

      {!isAdmin() && (
        <div className="mt-8 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h4>Trạng thái đăng kí của bạn</h4>
          {comments.length > 0 && (
            comments.map((comment, index) => (
              <div key={index} className="my-2">
                {comment.status === "approved" ? (
                  <p>Việc gửi đơn đăng ký trở thành shop của bạn đã được phê duyệt. Chúng tôi sẽ liên lạc với bạn!</p>
                ) : (
                  <p>Nội dung đăng kí của bạn vẫn đang chờ phê duyệt.</p>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Custom;
