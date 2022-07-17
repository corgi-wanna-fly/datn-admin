import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CardProfile from "../image/CardProfile";
import AttributeForm from "../attribute/AttributeForm";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="pb-3 container-fluid card">
      <div className="col-10 offset-1 text-center">
        <h2 className="text-danger">Sản phẩm</h2>
      </div>
      <div className="row">
        <div className="col-md-5 col-lg-4 order-md-last">
          <div className="card">
            <h4 className="d-flex justify-content-between align-items-center mb-1">
              <span className="text-dark">Biến thể sản phẩm</span> <br />
            </h4>
            <span className="text-dark">Số lượng</span> <br />
            <select class="form-control mb-2">
              <option>1</option>
              <option>2</option>
              <option selected>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <AttributeForm></AttributeForm>
          <AttributeForm></AttributeForm>
          <AttributeForm></AttributeForm>
        </div>
        <div className="col-md-7 col-lg-8 card">
          <form className="needs-validation" onSubmit={handleSubmit()}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  type="text"
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
              <div className="col-sm-6">
                <label className="form-label">Code</label>
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
                <label className="form-label">Mô tả sản phẩm</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  {...register("note", { required: false })}
                />
              </div>
              <div className="col-sm-6 mt-5">
                <label className="form-label">Thương hiệu</label>
                <select
                  className="form-control"
                  {...register("isPending", { required: false })}
                >
                  <option value="false">Adidas</option>
                  <option value="true">Nike</option>
                </select>
              </div>
              <div className="col-sm-6 mt-5">
                <label className="form-label">Chương trình giảm giá</label>
                <select
                  className="form-control"
                  {...register("orderStatus", { required: false })}
                >
                  <option value="1">Mặc định</option>
                  <option value="2">Black Friday</option>
                  <option value="3">8/3</option>
                </select>
              </div>
              <div className="col-12 mt-5">
                <label className="form-label mb-3">Loại sản phẩm</label> <br />
                <div class="form-check form-check-inline mr-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Giày nam
                  </label>
                </div>
                <div class="form-check form-check-inline mr-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    Giày nữ
                  </label>
                </div>
                <div class="form-check form-check-inline mr-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Giày bóng đá
                  </label>
                </div>
                <div class="form-check form-check-inline mr-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    Giày bóng rổ
                  </label>
                </div>
              </div>
              <div className="col-12 mt-5">
                <label className="form-label mb-3">Hình ảnh sản phẩm</label>{" "}
                <br />
                <div className="container-fluid row">
                  <CardProfile name="Tổng thể"></CardProfile>
                  <CardProfile name="Mặt trước"></CardProfile>
                  <CardProfile name="Mặt sau"></CardProfile>
                  <CardProfile name="Lưỡi gà"></CardProfile>
                  <CardProfile name="Đế giày"></CardProfile>
                  <CardProfile name="Lót giày"></CardProfile>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg mt-5 mb-5"
              type="submit"
              style={{ marginLeft: 80, borderRadius: 50 }}
            >
              Thêm mới
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
