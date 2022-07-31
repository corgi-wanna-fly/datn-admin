import React, { useState, useEffect } from "react";
import { reportAmountYear } from "../../api/OrderApi";
import { NavLink, useHistory } from "react-router-dom";

const ReportYear = () => {
  const [year, setYear] = useState([]);
  const history = useHistory();

  useEffect(() => {
    reportAmountYear()
      .then((resp) => setYear(resp.data))
      .catch((error) => console.log(error));
  }, []);

  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="col-12">
      <div className="card">
        <div className="card__header">
          <h3 className="text-primary">Doanh thu theo Năm</h3>
        </div>
        <button style={{ width: 60 }} onClick={() => goBack()}>
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
                <th scope="col">Năm</th>
                <th scope="col">Số lượng đơn</th>
                <th scope="col">Doanh thu</th>
              </tr>
            </thead>
            <tbody>
              {year &&
                year.map((item, index) => (
                  <tr key={index}>
                    <th scope="row"><NavLink exact to={`/report-month/${item.year}`}>
                    {index + 1}
                    </NavLink></th>
                    <td>{item.year}</td>
                    <td>{item.count}</td>
                    <td>{item.total && item.total.toLocaleString()} đ</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportYear;
