import axios from "axios";

const BASE_URL = 'https://api.covid19api.com';
 
export const fetchCountries = async () => {
  const {data} = await axios.get(`${BASE_URL}/countries`)
  return data;
}

export const fetchDailyData = async (country) => {
  const {data} = await axios.get(`${BASE_URL}/dayone/country/${country}`)
  return data;
}