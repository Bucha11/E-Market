import * as axios from "axios";


const instance=axios.create({
    baseURL:"http://https://e-market-example.herokuapp.com/data"
})


export const itemsApi={
getHomeItems(){
    return instance.get().then(response=>response.data)
}
,
getMen(){return instance.get().then(response=>response.men)}
,
getWomen(){return instance.get().then(response=>response.women)}
,
getOther(){return instance.get().then(response=>response.other)}
,
getPurchase(){return instance.get().then(response=>response.purchase)}
}