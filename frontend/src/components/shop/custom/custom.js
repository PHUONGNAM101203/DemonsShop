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
      <div className="mt-28">
        <div className="custom m-6">
          <h3 className="header-custom mr-4 ml-4">Become Shop Owner</h3>
          <div className="sub-title-custom mr-4 ml-4">
            Please fill in your details below to proceed.
          </div>
          <div className="content-custom m-4 md:mx-8 md:my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="content-custom-item rounded-lg shadow p-4 border m-1">
              <label htmlFor="fullName" className="block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control form-control-lg thick shadow-sm w-full p-2"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1">
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control form-control-lg thick shadow-sm w-full p-2"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1">
              <label htmlFor="phone" className="block mb-2">
                Zalo
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control form-control-lg thick shadow-sm w-full p-2"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1">
              <label htmlFor="address" className="block mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="form-control form-control-lg thick shadow-sm w-full p-2"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </div>
          </div>
        
          <div className="sub-title-custom m-4 text-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          {/* Chỉ hiển thị bảng comments nếu là admin */}
          {isAdmin() && (
            <div className="submitted-comments mt-6">
              <h4 className="mr-4 ml-4">Submitted Comments:</h4>
              {comments.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comments.map((comment, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{comment.fullName}</td>
                          <td>{comment.email}</td>
                          <td>{comment.phone}</td>
                          <td>{comment.address}</td>
                          <td>{comment.status}</td>
                          <td>
                            {comment.status === "pending" && (
                              <button
                                className="btn btn-primary"
                                onClick={() => handleApprove(index)}
                              >
                                Approve
                              </button>
                            )}
                            <button
                              className="btn btn-danger ml-2"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="mr-4 ml-4">No comments submitted yet.</p>
              )}
            </div>
          )}

          {/* Thông báo khi tài khoản User xem lại */}
          {!isAdmin() && (
            <div className="user-notification mt-6">
              <h4>Your Submission Status</h4>
              {comments.length > 0 && (
                comments.map((comment, index) => (
                  <div key={index} className="my-2">
                    {comment.status === "approved" ? (
                      <p>Your submit to become shop owner is approval.
                         We will contact you!
                      </p>
                    ) : (
                      <p>Your submission is still pending approval</p>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Custom;
