import { axiosInstance } from "./config";

export const getCarouselData = () =>
    axiosInstance.post('/api/resources/carousel',{})

export const getPromoData = (url, data) => 
    axiosInstance.post(url,{
        ...data
    })