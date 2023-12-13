import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASEURL} from './constants';

const client = axios.create({
  baseURL: `${BASEURL}`,
});
export function setHeader(header: any, value: any) {
  client.defaults.headers.common = {Authorization: `Bearer ${value}`};
}

export async function apiService(
  method: any,
  url: any,
  data: any,
  header = {'Content-Type': 'application/json'},
) {
  try {
    const res = await client({
      method,
      url,
      data: data,
      // headers: header,
      withCredentials: false,
    });
    return res;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 401) {
        return error.response;
      }
      if (error.response.status === 403) {
        await AsyncStorage.removeItem('userToken');
        return error.response;
      }
      if (error.response.status === 404) {
        return error.response;
      }
      if (error.response.status === 400) {
        return error.response;
      }
      if (error.response.status === 408) {
        return error.response;
      }
      if (error.response.status === 500) {
        return error.response;
      }
    } else if (error.request) {
      console.log('Error request : ', error.request);
    } else {
      console.log('Error message : ', error.message);
    }
    return {data: {status: 500, message: 'Internal server error'}};
  }
}
