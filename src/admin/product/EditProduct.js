import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../image/CardProfile.css";
import { getBrands } from "../../api/BrandApi";
import { getSale } from "../../api/SaleApi";
import { getCategory } from "../../api/CategoryApi";
import { getProductById } from "../../api/ProductApi";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import { upload } from "../services/upload-files.service";
import { getAttribute } from "../../api/AttributeApi";

const EditProduct = () => {
  const [count, setCount] = useState(1);
  const [brand, setBrand] = useState([]);
  const [sale, setSale] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [item, setItem] = useState();
  const [attributes, setAttributes] = useState();

  const { id } = useParams();

  const { 
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    getBrands(1, 20)
      .then((resp) => setBrand(resp.data.content))
      .catch((error) => console.log(error));

    getSale(1, 8)
      .then((resp) => setSale(resp.data.content))
      .catch((error) => console.log(error));

    getCategory(1, 20)
      .then((resp) => setCategory(resp.data.content))
      .catch((error) => console.log(error));

   getProductById(id)
        .then((res) => {
          setItem(res.data);
          setAttributes(res.data.attributes);
          reset(res.data);
        })
        .catch((error) => console.log(error));
  }, []);

  const submitHandler = (data) => {
    const flag = {
      name: data.name,
      code: data.code,
      description: data.description,
      brandId: data.brand,
      saleId: data.sale,
      categoryId: data.category,
      imageUrl: image.map((item) => item.name),
      attribute: [
        {
          size: data.size1,
          price: data.price1,
          stock: data.quantity1,
        },
        {
          size: data.size2,
          price: data.price2,
          stock: data.quantity2,
        },
        {
          size: data.size3,
          price: data.price3,
          stock: data.quantity3,
        },
        {
          size: data.size4,
          price: data.price4,
          stock: data.quantity4,
        },
      ].slice(0, count),
    };
    console.log(flag);
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
              {errors.name && (
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
              {errors.code && (
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
              {errors.description && (
                <div className="alert alert-danger" role="alert">
                  Mô tả không hợp lệ!
                </div>
              )}
            </div>
            <div className="col-sm-6 mt-5">
              <label className="form-label">Thương hiệu</label>
              <select
                className="form-control"
                {...register("brand", { required: true })}
              >
                {brand &&
                  brand.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-sm-6 mt-5">
              <label className="form-label">Chương trình giảm giá</label>
              <select
                className="form-control"
                {...register("sale", { required: true })}
              >
                {sale &&
                  sale.map((item, index) => (
                    <option
                      value={item.id}
                      key={index}
                      selected={item.id === 1}
                    >
                      {item.name} - {item.discount} %
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-12 mt-5">
              <label className="form-label mb-3">Loại sản phẩm</label> <br />
              {category &&
                category.map((item, index) => (
                  <div class="col-2 form-check form-check-inline mr-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item.id}
                      {...register("category", { required: true })}
                    />
                    <label class="form-check-label">{item.name}</label>
                  </div>
                ))}
            </div>
            <div className="col-12 mt-5">
              <label className="form-label mb-5">Hình ảnh sản phẩm</label>{" "}
              <br />
              <div className="row">
                
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
              // onChange={(e) => changeCountHandler(e.target.value)}
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
          Cập nhật
        </button>
      </form>
    </div>
  </div>
  );
};

export default EditProduct;
