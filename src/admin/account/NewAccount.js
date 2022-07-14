import React from "react";
import { useForm } from "react-hook-form";

const NewAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {};

  return (
    <div className="pb-3 container-fluid card">
      <div className="py-3 col-10 offset-1 text-center">
        <h2 className="text-danger">Tài khoản</h2>
      </div>
      <div className="col-10 offset-1">
        <form
          className="needs-validation"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="row g-3">
            <div className="col-sm-6 mt-2">
              <label className="form-label">Username</label>
              <input
                type="password"
                className="form-control"
                id="lastName"
                {...register("fullname", {
                  required: true,
                  pattern: /^\s*\S+.*/,
                })}
              />
              {errors.fullname && (
                <div className="alert alert-danger" role="alert">
                  Họ tên không hợp lệ!
                </div>
              )}
            </div>
            <div className="col-sm-6 mt-2">
              <label className="form-label">Password</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                {...register("phone", {
                  required: true,
                  pattern: /^0[0-9]{9}$/,
                })}
              />
              {errors.phone && (
                <div className="alert alert-danger" role="alert">
                  Số điện thoại không hợp lệ!
                </div>
              )}
            </div>
            <div className="col-sm-6 mt-5">
              <label className="form-label">Họ tên</label>
              <input
                type="password"
                className="form-control"
                id="lastName"
                {...register("fullname", {
                  required: true,
                  pattern: /^\s*\S+.*/,
                })}
              />
              {errors.fullname && (
                <div className="alert alert-danger" role="alert">
                  Họ tên không hợp lệ!
                </div>
              )}
            </div>
            <div className="col-sm-6 mt-5">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                {...register("phone", {
                  required: true,
                  pattern: /^0[0-9]{9}$/,
                })}
              />
              {errors.phone && (
                <div className="alert alert-danger" role="alert">
                  Số điện thoại không hợp lệ!
                </div>
              )}
            </div>
            <div className="col-12 mt-5">
              <label className="form-label">Địa chỉ</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                {...register("address", {
                  required: true,
                  pattern: /^\s*\S+.*/,
                })}
              ></textarea>
              {errors.address && (
                <div className="alert alert-danger" role="alert">
                  Địa chỉ không hợp lệ!
                </div>
              )}
            </div>

            <div className="col-sm-6 mt-5">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <div className="alert alert-danger" role="alert">
                  Email không hợp lệ!
                </div>
              )}
            </div>
            <div className="col-sm-6 mt-5">
              <label className="form-label">Ngày sinh</label>
              <input
                type="date"
                className="form-control"
                id="lastName"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <div className="alert alert-danger" role="alert">
                  Email không hợp lệ!
                </div>
              )}
            </div>
            <div className="col-sm-6 mt-5">
              <label className="form-label">Giới tính</label> <br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  1
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  2
                </label>
              </div>
            </div>
          </div>

          <button
            className="btn btn-primary btn-lg mt-5 mb-5"
            type="submit"
            style={{ marginLeft: 50, borderRadius: 50 }}
          >
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAccount;
