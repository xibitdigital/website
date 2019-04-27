type ApiResponse = Record<string, any>;

interface ObjectIndexer<T> {
  [id: string]: T;
}

// ACTIONS
export const HomeActionTypes = {
  FETCH_LIST_REQUEST: "@@home/FETCH_LIST_REQUEST",
  FETCH_LIST_SUCCESS: "@@home/FETCH_LIST_SUCCESS",
  FETCH_LIST_ERROR: "@@home/FETCH_LIST_ERROR"
};

//STATE
export type HomeState = {
  readonly data: any;
  readonly loading: boolean;
  readonly updating: boolean;
  readonly errors?: string;
};
