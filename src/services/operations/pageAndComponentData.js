import React from 'react'
import {toast} from "react-hot-toast"
import { apiConnector } from '../apiconnector';
import { catalogData } from '../apis';

export const getCatalogaPageData = async(categoryId,token) => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try{
        console.log(categoryId);
        const response = await apiConnector("POST", catalogData.CATALOGPAGEDATA_API, 
          {categoryId: categoryId,});
        if(!response?.data?.success)
            throw new Error("Could not Fetch Category page data");

         result = response?.data;

  }
  catch(error) {
    console.log("CATALOG PAGE DATA API ERROR....", error);
    toast.error(error.message);
    result = error.response?.data?.data;
  }
  toast.dismiss(toastId);
  return result;
}