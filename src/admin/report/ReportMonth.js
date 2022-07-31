import React, { useState, useEffect } from "react";
import { reportAmountMonth } from "../../api/OrderApi";
import { NavLink, useHistory, useParams } from "react-router-dom";

const ReportMonth = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [month, setMonth] = useState([]);

  useEffect(() => {
    reportAmountMonth(id)
    .then((resp) => setMonth(resp.data))
    .catch((error) => console.log(error));
    props.yearHandler(id);
  }, [])

  const goBack = () => {
    history.goBack();
  };
  return  <div className="col-12">
  <div className="card">
    <div className="card__header">
      <h3 className="text-primary">Doanh thu của Năm {id}</h3>
    </div>
    <button style={{width: 60}} onClick={() => goBack()}>
      <i
        className="fa fa-arrow-left"
        style={{ fontSize: 18 }}
        aria-hidden="true"
      ></i>
    </button>
    <div className="card__body">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tháng</th>
            <th scope="col">Số lượng đơn</th>
            <th scope="col">Doanh thu</th>
          </tr>
        </thead>
        <tbody>
          {month &&
            month.map((item, index) => (
              <tr key={index}>
                <th scope="row"><NavLink exact to={`/order-month/${item.month}`}>
                {index + 1}
                </NavLink></th>
                <td>{item.month}</td>
                <td>{item.count}</td>
                <td>{item.total && item.total.toLocaleString()} đ</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
</div>;
};

export default ReportMonth;
