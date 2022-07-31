import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  getAllOrderAndPagination,
  updateOrderWithStatus,
  getOrderByOrderStatusAndYearAndMonth,
  getOrderByOrderStatusBetweenDate,
} from "../../api/OrderApi";
import "../table/table.css";
import Badge from "../badge/Badge";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { getAllOrderStatus } from "../../api/OrderStatusApi";

const orderStatus = {
  "Đang xử lí": "primary",
  "Đang vận chuyển": "warning",
  "Đã giao": "success",
  "Đã hủy": "danger",
};

const pendingStatus = {
  true: "success",
  false: "danger",
};

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (orderId, statusId) => {
    setShow(true);
    setObj({
      orderId: orderId,
      statusId: statusId,
    });
  };
  const [status, setStatus] = useState(0);
  const [orderStatuses, setOrderStatuses] = useState([]);
  const [obj, setObj] = useState({});
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const [year, setYear] = useState(2022);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

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
  const onChangePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    onLoad();
  }, [page]);

  const onLoad = () => {
    getAllOrderAndPagination(status, page, 8)
      .then((res) => {
        setOrders(res.data.content);
        setTotal(res.data.totalPages);
      })
      .catch((error) => console.log(error));
    getAllOrderStatus()
      .then((resp) => setOrderStatuses(resp.data))
      .catch((error) => console.log(error.response.data.Errors));
  };

  const updateStatusHandler = (orderId, statusId) => {
    handleShow(orderId, statusId);
  };

  const confirmUpdateHandler = () => {
    updateOrderWithStatus(obj.orderId, obj.statusId)
      .then(() => {
        setStatus(obj.statusId);
        setPage(1);
        getAllOrderAndPagination(obj.statusId, 1, 8)
          .then((res) => {
            setOrders(res.data.content);
            setTotal(res.data.totalPages);
          })
          .catch((error) => console.log(error));
        toast.success("Cập nhật thành công.");
      })
      .catch((error) => toast.warning(error.response.data.Errors));
    setShow(false);
  };

  const getAllOrderByStatus = (value) => {
    setStatus(value);
    getAllOrderAndPagination(value, page, 8)
      .then((res) => {
        setOrders(res.data.content);
        setTotal(res.data.totalPages);
      })
      .catch((error) => console.log(error.response.data.Errors));
  };

  const getAllOrderByOrderStatusAndYearAndMonth = (value) => {
    setFrom('');
    setTo('');
    getOrderByOrderStatusAndYearAndMonth(status, year, value, page, 8)
      .then((res) => {
        setOrders(res.data.content);
        setTotal(res.data.totalPages);
      })
      .catch((error) => console.log(error.response.data.Errors));
  };

  const changeYearHandler = (value) => {
    setYear(value);
  };

  const searchHandler = () => {
    if (from.length === 0 || to.length === 0) {
      toast.warning("Chọn ngày cần tìm kiếm.");
    } else {
      if (from > to) {
        toast.warning("Chọn ngày tìm kiếm không hợp lệ.");
      } else {
        let a = from.split("-");
        let strFrom = a[2] + "-" + a[1] + "-" + a[0];
        let b = to.split("-");
        let strTo = b[2] + "-" + b[1] + "-" + b[0];
        console.log(strFrom + " " + strTo);
        getOrderByOrderStatusBetweenDate(status, strFrom, strTo, page, 8)
          .then((res) => {
            setOrders(res.data.content);
            setTotal(res.data.totalPages);
          })
          .catch((error) => console.log(error.response.data.Errors));
      }
    }
  };
  return (
    <div className="col-12">
      <div className="card">
        <div className="card__header">
          <h3>Đơn hàng</h3>
        </div>
        <div className="row">
          <div className="col-sm-4 mt-2">
            <select
              className="form-control"
              onChange={(event) => getAllOrderByStatus(event.target.value)}
            >
              <option value="0">Tất cả</option>
              {orderStatuses &&
                orderStatuses.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-sm-4 mt-2">
            <select
              className="form-control"
              onChange={(e) => changeYearHandler(e.target.value)}
            >
              <option selected disabled hidden>
                Chọn năm
              </option>
              <option value="2019">2019</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="col-sm-4 mt-2">
            <select
              className="form-control"
              onChange={(e) =>
                getAllOrderByOrderStatusAndYearAndMonth(e.target.value)
              }
            >
              <option selected disabled hidden>
                Chọn tháng
              </option>
              {month &&
                month.map((item, index) => (
                  <option key={index} value={item}>
                    Tháng {item}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 mt-2">
            <input
              type="date"
              name=""
              id=""
              className="border"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
            />
          </div>

          <div className="col-sm-4 mt-2">
            <input
              type="date"
              name=""
              id=""
              className="border"
              onChange={(e) => setTo(e.target.value)}
              value={to}
            />
          </div>
          <button
            className="btn btn-primary mt-2"
            onClick={() => searchHandler()}
          >
            Tìm kiếm
          </button>
        </div>
        <div className="row"></div>
        <div className="card__body">
          {orders && (
            <div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Mã đơn hàng</th>
                      <th scope="col">Ngày mua</th>
                      <th scope="col">Thanh toán</th>
                      <th scope="col">Tổng tiền</th>
                      <th scope="col">
                        <Badge
                          type={orderStatus["Đang xử lí"]}
                          content={"Đang xử lí"}
                        />
                      </th>
                      <th scope="col">
                        <Badge
                          type={orderStatus["Đang vận chuyển"]}
                          content={"Đang vận chuyển"}
                        />
                      </th>
                      <th scope="col">
                        <Badge
                          type={orderStatus["Đã giao"]}
                          content={"Đã giao"}
                        />
                      </th>
                      <th scope="col">
                        <Badge
                          type={orderStatus["Đã hủy"]}
                          content={"Đã hủy"}
                        />
                      </th>
                      <th scope="col">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">
                            <NavLink to={`/detail-order/${item.id}`} exact>
                              #OD{item.id}
                            </NavLink>
                          </th>
                          <th>{item.createDate}</th>
                          <th>
                            <Badge
                              type={pendingStatus[item.isPending]}
                              content={
                                item.isPending
                                  ? "Đã thanh toán"
                                  : "Chưa thanh toán"
                              }
                            />
                          </th>
                          <th> {item.total.toLocaleString()} ₫</th>
                          <th>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={index}
                                checked={item.orderStatus.id === 1}
                                value="1"
                                onChange={(e) =>
                                  updateStatusHandler(item.id, e.target.value)
                                }
                              />
                            </div>
                          </th>
                          <th>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={index}
                                checked={item.orderStatus.id === 2}
                                value="2"
                                onChange={(e) =>
                                  updateStatusHandler(item.id, e.target.value)
                                }
                              />
                            </div>
                          </th>
                          <th>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={index}
                                checked={item.orderStatus.id === 3}
                                value="3"
                                onChange={(e) =>
                                  updateStatusHandler(item.id, e.target.value)
                                }
                              />
                            </div>
                          </th>
                          <th>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={index}
                                checked={item.orderStatus.id === 4}
                                value="4"
                                onChange={(e) =>
                                  updateStatusHandler(item.id, e.target.value)
                                }
                              />
                            </div>
                          </th>
                          <th>
                            {item.orderStatus.id !== 4 &&
                            item.orderStatus.id !== 3 &&
                            item.orderStatus.id !== 2 ? (
                              <NavLink to={`/order-detail/${item.id}`} exact>
                                <i
                                  className="fa fa-pencil-square-o"
                                  aria-hidden="true"
                                ></i>
                              </NavLink>
                            ) : (
                              ""
                            )}
                          </th>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
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
              <Button variant="danger" onClick={confirmUpdateHandler}>
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

export default Order;
