import Instance from '../axios/Instance';

export const getBrandDetail = (id) =>{
    const url = `/api/site/get-brand-detail/${id}`;
    return Instance.get(url);
}
export const getBrands = (page, size) =>{
    const url = `/api/site/get-brand?page=${page}&size=${size}`;
    return Instance.get(url);
}

export const createBrand = (data) =>{
    const url = `/api/site/create-brand`;
    return Instance.post(url, data);
}

export const updateBrand = (data) =>{
    const url = `/api/site/update-brand`;
    return Instance.post(url, data);
}

