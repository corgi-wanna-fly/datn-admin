import React, { useState, useEffect } from "react";
import { getOrderById, getOrderDetailByOrderId } from "../../api/OrderApi";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const [orderDetail, setOrderDetail] = useState([]);
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const [amount, setAmount] = useState();
  const [sale, setSale] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    getOrderById(id).then((resp) => {
      setOrder(resp.data);
      setSale(resp.data.voucher ? resp.data.voucher.discount : 0);
      setTotal(resp.data.total);
    });
    getOrderDetailByOrderId(id).then((resp) => {
      setOrderDetail(resp.data);
      const result = resp.data.reduce(
        (price, item) => price + item.sellPrice * item.quantity,
        0
      );
      setAmount(result);
    });
  };

  return (
    <div className="container-fluid row padding mb-5">
      <div className="col-8 welcome mb-5 mt-5">
        <div className="col-10 offset-1 text ">
          <p className="display-4 text-danger" style={{ fontSize: "34px" }}>
            Đơn hàng #{order.id}
          </p>
        </div>
        <div className="col-10 offset-1 mb-5">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Mã sản phẩm</th>
                <th scope="col">Size</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {orderDetail &&
                orderDetail.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.attribute.id}</th>
                    <td>{item.attribute.size}</td>
                    <td>{item.sellPrice.toLocaleString()}₫</td>
                    <td>{item.quantity}</td>
                    <td>
                      {(item.sellPrice * item.quantity).toLocaleString()}₫
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="row mb-5">
            <div className="col offset-8 text ">
              <p>Tạm tính: {amount && amount.toLocaleString()} đ</p>
              <p>Giảm giá: - {sale ? (amount * sale / 100).toLocaleString() : 0} đ</p>
              <p className="text-danger">Tổng cộng: {total && total.toLocaleString()} đ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 welcome mb-5 mt-5">
        <div className="col-10 offset-1 text ">
          <p className="display-4 text-danger" style={{ fontSize: "24px" }}>
            Thông tin mua hàng
          </p>
          <p>Ngày tạo: {order.createDate}</p>
          <p>Người nhận: {order.fullname}</p>
          <p>Email: {order.email}</p>
        </div>
        <div className="col-10 offset-1 text ">
          <p className="display-4 text-danger" style={{ fontSize: "24px" }}>
            Địa chỉ nhận hàng
          </p>
          <p>SDT: {order.phone}</p>
          <p>DC: {order.address}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
