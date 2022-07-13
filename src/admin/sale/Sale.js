import React from "react";
import { NavLink } from "react-router-dom";

const Sale = () => {
  return (
    <div className="card">
      <div className="card__header mb-5">
        <NavLink
          to="/add-product"
          className="btn btn-primary"
          style={{ borderRadius: 50 }}
        >
          Thêm chương trình
        </NavLink>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Giảm giá(%)</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Cập nhật</th>
            <th scope="col">Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sale;
