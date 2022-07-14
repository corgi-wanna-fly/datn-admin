import Instance from '../axios/Instance';

export const getSaleDetail = (id) =>{
    const url = `/api/site/get-sale-by-id/${id}`;
    return Instance.get(url);
}
export const getSale = (page, size) =>{
    const url = `/api/site/get-sale?page=${page}&size=${size}`;
    return Instance.get(url);
}

export const createSale = (data) =>{
    const url = `/api/site/create-sale`;
    return Instance.post(url, data);
}

export const updateSale = (data) =>{
    const url = `/api/site/update-sale`;
    return Instance.post(url, data);
}
