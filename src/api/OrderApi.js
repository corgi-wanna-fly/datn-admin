import Instance from '../axios/Instance'

export const createOrder = (data) =>{
    const url = `api/site/create-order`;
    return Instance.post(url, data);
}
export const updateOrder = (data) =>{
    const url = `api/site/update-order`;
    return Instance.post(url, data);
}
export const cancelOrder = (id) =>{
    const url = `api/site/cancel-order?id=${id}`;
    return Instance.get(url);
}
export const getAllOrder = (id, status) =>{
    const url = `api/site/get-orders?id=${id}&status=${status}`;
    return Instance.get(url);
}

export const getOrderByOrderStatusAndYearAndMonth = (status, year, month, page, size) =>{
    const url = `api/site/page-orders-by-year-and-month?id=${status}&year=${year}&month=${month}&page=${page}&size=${size}`;
    return Instance.get(url);
}

export const getOrderByOrderStatusBetweenDate = (status, from, to, page, size) =>{
    const url = `api/site/page-orders-between-date?id=${status}&from=${from}&to=${to}&page=${page}&size=${size}`;
    return Instance.get(url);
}

export const getAllOrderAndPagination = (status, page, size) =>{
    const url = `api/site/get-orders-and-pagination?page=${page}&size=${size}&status=${status}`;
    return Instance.get(url);
}

export const getOrderById = (id) =>{
    const url = `api/site/get-order-by-id?id=${id}`;
    return Instance.get(url);
}

export const getOrderDetailByOrderId = (id) =>{
    const url = `api/site/get-order-detail-by-id?id=${id}`;
    return Instance.get(url);
}

export const updateOrderWithStatus = (orderId, statusId) =>{
    const url = `api/site/update-order-with-status?id=${orderId}&status=${statusId}`;
    return Instance.get(url);
}

export const reportByProduct = (page, size) =>{
    const url = `api/site/page-report-product?page=${page}&size=${size}`;
    return Instance.get(url);
}

export const getOrderByProduct = (id, page, size) =>{
    const url = `api/site/page-orders-by-product?id=${id}&page=${page}&size=${size}`;
    return Instance.get(url);
}

export const reportAmountYear = () =>{
    const url = `api/site/amount-year`;
    return Instance.get(url);
}

export const reportAmountMonth = (year) =>{
    const url = `api/site/amount-month?year=${year}`;
    return Instance.get(url);
}

export const countOrder = () =>{
    const url = `api/site/count-order`;
    return Instance.get(url);
}

export const countOrderByName = () =>{
    const url = `api/site/count-order-by-name`;
    return Instance.get(url);
}