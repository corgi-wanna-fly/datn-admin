import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../image/CardProfile.css";
import { getBrands } from "../../api/BrandApi";
import { getSale } from "../../api/SaleApi";
import { getCategory } from "../../api/CategoryApi";
import { getProductById, modifyProduct } from "../../api/ProductApi";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";


const EditProduct = () => {
  const [brand, setBrand] = useState([]);
  const [sale, setSale] = useState([]);
  const [cate, setCate] = useState([]);
  const [item, setItem] = useState();
  const [attributes, setAttributes] = useState([]);
  const [flag, setFlag] = useState([]);

  const { id } = useParams();
  const history = useHistory();

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
      .then((resp) => setCate(resp.data.content))
      .catch((error) => console.log(error));

   getProductById(id)
        .then((res) => {
          setItem(res.data);
          setFlag(res.data.category);
          setAttributes(res.data.attributes);
          reset(res.data);
        })
        .catch((error) => console.log(error));
  }, []);

  const submitHandler = (data) => {
    const flag = {
      id: id,
      name: data.name,
      code: data.code,
      description: data.description, 
      brandId: data.brandId,
      saleId: data.saleId,
      categoryId: data.category,
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
      ].slice(0, attributes.length),
    };
    modifyProduct(flag)
    .then(() => {
      toast.success("Cập nhật thành công!");
      history.push("/products");
    })
    .catch((error) => console.log(error.response.data));
  };
  return (
    <div className="pb-3 container-fluid card">
    <div className="col-10 offset-1 text-center">
      <h1 className="text-danger">Sản phẩm</h1>
    </div>
    <div className="row card">
      <form
        className="needs-validation pro-form"
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
                {...register("brandId", { required: true })}
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
                {...register("saleId", { required: true })}
              >
                {sale &&
                  sale.map((item, index) => (
                    <option
                      value={item.id}
                      key={index}
                    >
                      {item.name} - {item.discount} %
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-12 mt-5 mb-5">
              <label className="form-label mb-3">Loại sản phẩm</label> <br />
              {cate &&
                cate.map((i, index) => (
                  <div className="col-2 form-check form-check-inline mr-5" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue={i.id}
                      defaultChecked={flag && flag.includes(i.id)}
                      {...register("category", { required: true })}
                    />
                    <label className="form-check-label">{i.name}</label>
                  </div>
                ))}
            </div>         
          </div>
        </div>
        <div className="col-10 row">
          <div className="card mr-5 col-10">
            <h4 className="d-flex justify-content-between align-items-center mb-1">
              <span className="text-dark">Chi tiết sản phẩm</span> <br />
            </h4>
            <span className="text-dark">Số lượng: {attributes.length}</span> <br />
          </div>
          {attributes.length >= 1 && (
            <div className="card mr-3">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Size</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.attributes[0].size}
                    {...register("size1", {
                      required: true,
                    })}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Giá</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.attributes[0].price}
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
                    defaultValue={item.attributes[0].stock}
                    {...register("quantity1", {
                      required: true,
                    })}
                  />
                </div>
              </div>
            </div>
          )}
          {attributes.length >= 2 && (
            <div className="card mr-3">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Size</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.attributes[1].size}
                    {...register("size2", {
                      required: true,
                    })}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Giá</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.attributes[1].price}
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
                    defaultValue={item.attributes[1].stock}
                    {...register("quantity2", {
                      required: true,
                    })}
                    
                  />
                </div>
              </div>
            </div>
          )}
          {attributes.length >= 3 && (
            <div className="card mr-3">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Size</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.attributes[2].size}
                    {...register("size3", {
                      required: false,
                    })}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Giá</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.attributes[2].price}
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
                    defaultValue={item.attributes[2].stock}
                    {...register("quantity3", {
                      required: false,
                    })}
                  />
                </div>
              </div>
            </div>
          )}
          {attributes.length >= 4 && (
            <div className="card mr-3">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Size</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.attributes[3].size}
                    {...register("size4", {
                      required: true,
                    })}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Giá</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.attributes[3].price}
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
                    defaultValue={item.attributes[3].stock}
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
