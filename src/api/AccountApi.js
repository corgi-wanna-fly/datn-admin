import Instance from '../axios/Instance'

export const getAccountDetailByAccountId = (id) =>{
    const url = `/api/site/account/${id}`;
    return Instance.get(url);
}
export const getAccounts = (page, size) =>{
    const url = `/api/site/accounts?page=${page}&size=${size}`;
    return Instance.get(url);
}
export const getAccountByRole = (page, size, role) =>{
    const url = `/api/site/account?page=${page}&size=${size}&roleName=${role}`;
    return Instance.get(url);
}

export const getTotalPage = () =>{
    const url = `/api/site/account/get-total-page`;
    return Instance.get(url);
}

export const createAccount = (data) =>{
    const url = `/api/site/account/create`;
    return Instance.post(url, data);
}

export const updateAccount = (data) =>{
    const url = `/api/site/account/update`;
    return Instance.post(url, data);
}
export const countAccount = () =>{
    const url = `api/site/count-account`;
    return Instance.get(url);
}


