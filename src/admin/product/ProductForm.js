import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../image/CardProfile.css";

const ProductForm = () => {
  const [count, setCount] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const flag = {
      brandId: data.brand,
      categoryId: data.category,
      code: data.code,
      description: data.description,

    }
    console.log(flag);
  };

  const changeCountHandler = (value) => {
    setCount(value);
  };

  return (
    <div className="pb-3 container-fluid card">
      <div className="col-10 offset-1 text-center">
        <h1 className="text-danger">Sản phẩm</h1>
      </div>
      <div className="row card">
        <form
          className="needs-validation"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="col-10">
            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name", {
                    required: true,
                    pattern: /^\s*\S+.*/,
                  })}
                />
                {errors.fullname && (
                  <div className="alert alert-danger" role="alert">
                    Tên sản phẩm không hợp lệ!
                  </div>
                )}
              </div>
              <div className="col-sm-6">
                <label className="form-label">Code</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("code", {
                    required: true,
                    pattern: /^\s*\S+.*/,
                  })}
                />
                {errors.phone && (
                  <div className="alert alert-danger" role="alert">
                    Code không hợp lệ!
                  </div>
                )}
              </div>
              <div className="col-12 mt-5">
                <label className="form-label">Mô tả sản phẩm</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  {...register("description", {
                    required: true,
                    pattern: /^\s*\S+.*/,
                  })}
                />
              </div>
              <div className="col-sm-6 mt-5">
                <label className="form-label">Thương hiệu</label>
                <select
                  className="form-control"
                  {...register("brand", { required: true })}
                >
                  <option value="1">Adidas</option>
                  <option value="2">Nike</option>
                </select>
              </div>
              <div className="col-sm-6 mt-5">
                <label className="form-label">Chương trình giảm giá</label>
                <select
                  className="form-control"
                  {...register("sale", { required: true })}
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
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    {...register("category", { required: true })}
                  />
                  <label class="form-check-label">Giày nam</label>
                </div>
                <div class="form-check form-check-inline mr-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="2"
                    {...register("category", { required: true })}
                  />
                  <label class="form-check-label">Giày nữ</label>
                </div>
                <div class="form-check form-check-inline mr-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="3"
                    {...register("category", { required: true })}
                  />
                  <label class="form-check-label">Giày bóng đá</label>
                </div>
                <div class="form-check form-check-inline mr-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="4"
                    {...register("category", { required: true })}
                  />
                  <label class="form-check-label">Giày bóng rổ</label>
                </div>
              </div>
              <div className="col-12 mt-5">
                <label className="form-label mb-5">Hình ảnh sản phẩm</label>{" "}
                <br />
                <div className="row">
                  <div
                    className="col-3 mr-5 ml-3 mb-5"
                    style={{ paddingRight: 70 }}
                  >
                    <label className="custom-file-upload fas">
                      <div className="img-wrap img-upload">
                        <img
                          alt=""
                          src={""}
                        />
                      </div>
                      <input
                        id="photo-upload"
                        type="file"
                        {...register("image-1", { required: true })}
                      />
                    </label>
                  </div>              
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 row">
           <div className="card mr-5 col-10">
              <h4 className="d-flex justify-content-between align-items-center mb-1">
                <span className="text-dark">Chi tiết sản phẩm</span> <br />
              </h4>
              <span className="text-dark">Số lượng</span> <br />
              <select
                class="form-control mb-2"
                onChange={(e) => changeCountHandler(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            {count >= 1 && (
              <div className="card mr-3">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Size</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("size1", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Giá</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("price1", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-10">
                    <label>Số lượng</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("quantity1", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
            {count >= 2 && (
              <div className="card mr-3">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Size</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("size2", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Giá</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("price2", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-10">
                    <label>Số lượng</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("quantity2", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
            {count >= 3 && (
              <div className="card mr-3">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Size</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("size3", {
                        required: false,
                      })}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Giá</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("price3", {
                        required: false,
                      })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-10">
                    <label>Số lượng</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("quantity3", {
                        required: false,
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
            {count >= 4 && (
              <div className="card mr-3">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Size</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("size4", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Giá</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("price4", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-10">
                    <label>Số lượng</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("quantity4", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            className="btn btn-primary btn-lg mt-5 mb-5"
            type="submit"
            style={{ marginLeft: 70, borderRadius: 50 }}
          >
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
