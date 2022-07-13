import Instance from '../axios/Instance'

export const getAccountDetailByAccountId = (id) =>{
    const url = `/api/site/account-detail?id=${id}`;
    return Instance.get(url);
}