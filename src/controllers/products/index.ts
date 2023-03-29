import axios from "axios";
import { ApiLink } from "../../constants/ApiLink";
import { ICartProduct } from "../../types/CartType";
import UserSessionStorage from "../../storages/SessionStorage";

const { email, password } = UserSessionStorage.haveUserSession();

export const addProduct = async(product: ICartProduct) => {
  const { email, password } = UserSessionStorage.haveUserSession();
  return await axios.post(`${ ApiLink }/users/addProduct`, { email, password, product });
}

export const removeProduct = async(product: ICartProduct) => {
  const { email, password } = UserSessionStorage.haveUserSession();
  return await axios.post(`${ ApiLink }/users/removeProduct`, { email, password, product });
}

export const deleteProduct = async(product: ICartProduct) => {
  const { email, password } = UserSessionStorage.haveUserSession();
  return await axios.post(`${ ApiLink }/users/deleteProduct`, { email, password, product });
}
