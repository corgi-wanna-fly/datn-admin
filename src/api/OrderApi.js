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

