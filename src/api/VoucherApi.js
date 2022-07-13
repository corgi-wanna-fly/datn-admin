import Instance from '../axios/Instance'

export const getVoucherByCode = (code) =>{
    const url = `/api/site/get-voucher-by-code?code=${code}`;
    return Instance.get(url);
}

export const getVoucherDetail = (id) =>{
    const url = `/api/site/get-voucher-detail/${id}`;
    return Instance.get(url);
}
export const getVouchers = (page, size) =>{
    const url = `/api/site/get-voucher?page=${page}&size=${size}`;
    return Instance.get(url);
}

export const createVoucher = (data) =>{
    const url = `/api/site/create-voucher`;
    return Instance.post(url, data);
}

export const updateVoucher = (data) =>{
    const url = `/api/site/update-voucher`;
    return Instance.post(url, data);
}

