import React, { Fragment, useEffect, useState, useRef } from "react";
import NoteModal from "./NoteModal";



const Custom = (props) => {
  const tableRef = useRef(null);

  // Hàm xử lý sự kiện click trên nút "Tip"
  const handleTipClick = () => {
    // Kiểm tra nếu phần tử bảng đã được tham chiếu
    if (tableRef.current) {
      // Cuộn trang đến phần tử bảng với hiệu ứng mượt
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Fragment>
      <div class="mt-28">
        <div className=" custom m-6">
          <h3 className="hearder-custom mr-4 ml-4" >
            Customize
          </h3>
          <div className="sub-title-custom mr-4 ml-4">
            Unleash your creativity with a variety of materials and patterns
          </div>
          <div className="content-custom m-4 md:mx-8 md:my-6 grid grid-cols-1 md:grid-cols-4 ">
            <div className="content-custom-item rounded-lg shadow p-4 border m-1 ">
              <select className="select-curtom border rounded-lg shadow-sm mb-2 p-1 w-full  ">
                <option selected value="0">Choose bag style *</option>
                <option value="1">Heart shaped mesh bag</option>
                <option value="2">Heart shaped mesh bag</option>
                <option value="3">Heart shaped mesh bag</option>
              </select>
              <div className="item-custom-image  ">
                <img className="fix-custom-image rounded-lg" src="./image/custom5.png" alt="Girl in a jacket"></img>
              </div>
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1 ">
              <select className="select-curtom border rounded-lg shadow-sm mb-2 p-1 w-full  ">
                <option selected value="0">Choose motif *</option>
                <option value="1">Heart shaped mesh bag</option>
                <option value="2">Heart shaped mesh bag</option>
                <option value="3">Heart shaped mesh bag</option>
              </select>
              <div className="item-custom-image  ">
                <img className="fix-custom-image rounded-lg" src="./image/custom2.png" alt="Girl in a jacket"></img>
              </div>
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1 ">
              <select className="select-curtom border rounded-lg shadow-sm mb-2 p-1 w-full  ">
                <option selected value="0">Choose ingredients *</option>
                <option value="1">Lavender</option>
                <option value="2">Oakwood</option>
                <option value="3">Orange</option>
              </select>
              <div className="item-custom-image  ">
                <img className="fix-custom-image rounded-lg" src="./image/custom3.png" alt="Girl in a jacket"></img>
              </div>
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1 ">
              <select className="select-curtom border rounded-lg shadow-sm mb-2 p-1  ">
                <option selected value="0">Choose ingredients to add to mix</option>
                <option value="1">Bergamot</option>
                <option value="2">Vanilla</option>
                <option value="3">Jasmine</option>
              </select>
              <div className="item-custom-image  ">
                <img className="fix-custom-image rounded-lg" src="./image/custom4.png" alt="Girl in a jacket"></img>
              </div>
            </div>
          </div>
          <p className="mr-4 ml-4"><strong >If you're unsure which ingredients to combine, try following my tip </strong>  
           <i class="bi bi-arrow-90deg-right"></i>         
           <button type="button border-black"  onClick={handleTipClick} class="btn btn-outline-danger">Tip</button>
          </p>
          <div className="sub-title-custom mr-4 ml-4 text-center">
            <label for="formName" class="d-block">
              <i class="icon" data-feather="user"></i>
            </label>
            <input type="text" id="formName" class="form-control form-control-lg thick  shadow-lg" placeholder="Please enter product name..."></input>

          </div>
          <div className="sub-title-custom m-4 text-center">
            <button type="button" class="btn btn-success ">Add to card</button>
          </div>
          <div ref={tableRef}>
            < NoteModal />
          </div>

        </div>


      </div>

    </Fragment>
  );
};

export default Custom;
