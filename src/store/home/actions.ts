import { action } from "typesafe-actions";
import { HomeActionTypes } from ".";

export const fetchListRequest = (payload: any) => action(HomeActionTypes.FETCH_LIST_REQUEST, payload);
export const fetchListSuccess = (data: any[]) => action(HomeActionTypes.FETCH_LIST_SUCCESS, data);
export const fetchListError = (message: string) => action(HomeActionTypes.FETCH_LIST_ERROR, message);
