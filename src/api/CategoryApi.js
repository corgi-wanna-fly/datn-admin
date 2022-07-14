import Instance from '../axios/Instance';

export const getCategoryDetail = (id) =>{
    const url = `/api/site/category/get-category-by-id/${id}`;
    return Instance.get(url);
}
export const getCategory = (page, size) =>{
    const url = `/api/site/category/findall?page=${page}&size=${size}`;
    return Instance.get(url);
}

export const createCategory = (data) =>{
    const url = `/api/site/category/create`;
    return Instance.post(url, data);
}

export const updateCategory = (data) =>{
    const url = `/api/site/category/update`;
    return Instance.post(url, data);
}
