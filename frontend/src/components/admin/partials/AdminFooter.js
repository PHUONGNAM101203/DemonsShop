import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
    <footer className="page-footer font-small text-white  pt-4 bg-dark  pr-5 pl-5">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">ADDRESS</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!" className="text-light">Khu đô thị FPT, Ngũ Hành Sơn, Đà Nẵng</a></li>

                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">FOLLOW US</h5>
                    <ul className="list-unstyled ">
                        <li><a href="#!" className="text-light"><i class="bi bi-facebook"></i> Facebook</a></li>
                        <li><a href="#!" className="text-light"><i class="bi bi-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3 "  >© 2020 Copyright:
            <a href="#" className="text-light"> AROMATIC BAG </a>
        </div>

    </footer>
</Fragment>
  );
};

export default AdminFooter;
