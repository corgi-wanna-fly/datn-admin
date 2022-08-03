import Instance from '../axios/Instance'

export const getAllOrderStatus = () =>{
    const url = `/api/admin/get-order-statuses`;
    return Instance.get(url);
}
