import Instance from '../axios/Instance'

export const cacheAttribute = (data) =>{
    const url = `api/site/cache-attribute`;
    return Instance.post(url, data);
}

export const backAttribute = (data) =>{
    const url = `api/site/back-attribute`;
    return Instance.post(url, data);
}