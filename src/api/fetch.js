import axios from '../request'

//查询软件产品
export const listSoftProduct=()=>axios.get('/ticket/public/list-soft-product');