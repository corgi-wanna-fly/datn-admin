import Instance from '../axios/Instance'

export const getAllProducts = (page, size, active) =>{
    const url = `/api/site/get-products?page=${page}&size=${size}&active=${active}`;
    return Instance.get(url);
}

export const getTotalPage = () =>{
    const url = `/api/site/get-total-page`;
    return Instance.get(url);
}

export const getProductById = (id) =>{
    const url = `/api/site/get-product-detail/${id}`;
    return Instance.get(url);
}