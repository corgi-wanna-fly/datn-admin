import Instance from '../axios/Instance'

export const getCartItemByAccountId = (id) =>{
    const url = `/api/site/get-cart-item-by-account-id/${id}`;
    return Instance.get(url);
}

export const modifyCartItem = (data) =>{
    const url = `/api/site/cart-item/modify`;
    return Instance.post(url, data);
}

export const removeCartItem = (data) =>{
    const url = `api/site/cart-item/remove`;
    return Instance.post(url, data);
}

export const reloadCartItem = (id) =>{
    const url = `api/site/cart-item/reload?id=${id}`;
    return Instance.get(url);
}

export const isEnoughCartItem = (id, quantity) =>{
    const url = `api/site/cart-item/is-enough?id=${id}&quantity=${quantity}`;
    return Instance.get(url);
}