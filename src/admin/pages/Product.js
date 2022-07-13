import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { getAllProducts, getTotalPage } from "../../api/ProductApi";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState({});
  const [active, setActive] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (orderId, statusId) => {
    setShow(true);
    // setObj({
    //   orderId: orderId,
    //   statusId: statusId,
    // });
  };

  useEffect(() => {
    onLoad();
  }, [page]);

  const onLoad = () => {
    getAllProducts(page, 9, active).then((response) =>
      setProducts(response.data)
    );
    getTotalPage().then((res) => setTotal(res.data));
  };

  const onChangePage = (page) => {
    setPage(page);
  };

  var rows = new Array(total).fill(0).map((zero, index) => (
    <li
      className={page === index + 1 ? "page-item active" : "page-item"}
      key={index}
    >
      <button
        className="page-link"
        style={{ borderRadius: 50 }}
        onClick={() => onChangePage(index + 1)}
      >
        {index + 1}
      </button>
    </li>
  ));
  return (
    <div className="col-12">
      <div className="card">
        <div className="card__header">
          <NavLink to="/add-product" className="btn btn-primary" style={{ borderRadius: 50 }}>Thêm sản phẩm</NavLink>
        </div>
        <div className="row mb-3 mt-3">
          <div className="form-check form-check-inline mr-5 ml-4">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              value="0"
              onChange={""}
              checked={true}
            />
            <label className="form-check-label">Đang bán</label>
          </div>
          <div className="form-check form-check-inline mr-5 ml-5">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              value="1"
              onChange={""}
              checked={false}
            />
            <label className="form-check-label">Dừng bán</label>
          </div>
        </div>
        <div className="card__body">
          <div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Mã sản phẩm</th>
                    <th scope="col">Thương hiệu</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Cập nhật</th>
                    <th scope="col">Dừng bán</th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">#{index + 1}</th>
                        <th>{item.name}</th>
                        <th>{item.code}</th>
                        <th>{item.brand}</th>
                        <th>
                          {" "}
                          <img
                            className="img-fluid"
                            style={{ width: "100px", height: "100px" }}
                            src={require(`../../static/images/${item.image}`)}
                            alt=""
                          />
                        </th>
                        <th>{item.isActive ? "Đang bán" : "Dừng bán"}</th>
                        <th>
                          <NavLink to={`/order-detail/${item.id}`} exact>
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </NavLink>
                        </th>
                        <th>
                          {" "}
                          <NavLink to={`/order-detail/${item.id}`} exact>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                          </NavLink>
                        </th>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation">
          <ul className="pagination offset-5 mt-3">
            <li className={page === 1 ? "page-item disabled" : "page-item"}>
              <button
                className="page-link"
                style={{ borderRadius: 50 }}
                onClick={() => onChangePage(1)}
              >
                {`<<`}
              </button>
            </li>
            {rows}
            <li className={page === total ? "page-item disabled" : "page-item"}>
              <button
                className="page-link"
                style={{ borderRadius: 50 }}
                onClick={() => onChangePage(total)}
              >
                {`>>`}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận cập nhật?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Xác nhận
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Product;
