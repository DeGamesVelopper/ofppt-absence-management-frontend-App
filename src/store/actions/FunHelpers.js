import axios from "axios";
import {
  LOADING,
  FETCHING_ERROR,
  UNAUTHORIZED_ERROR,
  LOGIN__SUCCESS,
  LOGIN__PROCCESS,
} from "./TYPES";

const getToken = () => {
  const token = localStorage.getItem("token");
  return !token ? null : token;
};

const FetchData = (
  url,
  SUCCES_ACTION,
  showLoading = true
) => async dispatch => {
  try {
    if (showLoading)
      dispatch({
        type: LOADING,
      });
    const token = getToken();
    if (!token)
      return dispatch({
        type: UNAUTHORIZED_ERROR,
      });
    const headers = {
      Authorization: token,
    };
    const res = await axios.get(url, {
      headers,
    });
    if (!res.data)
      return dispatch({
        type: FETCHING_ERROR,
      });
    return dispatch({
      type: SUCCES_ACTION,
      data: res.data.collection,
      length: res.data.length,
    });
  } catch (error) {
    return dispatch({
      type: UNAUTHORIZED_ERROR,
    });
  }
};

const GoToIndex = (
  collection,
  firstIndex,
  lastIndex,
  SUCCES_ACTION
) => dispatch => {
  if (!collection)
    return dispatch({
      type: FETCHING_ERROR,
    });
  const col = [];
  for (let i = firstIndex; i < lastIndex; i++) {
    const elem = collection[i];
    if (elem) col.push(elem);
  }
  if (col)
    return dispatch({
      type: SUCCES_ACTION,
      data: col,
    });
};

const RefreshData = (obj, collection, action, REFRESHED) => async dispatch => {
  const indexOfObj = collection.findIndex(col => col._id === obj._id);
  if (action === Action.edit) collection.splice(indexOfObj, 1, obj);
  if (action === Action.delete) collection.splice(indexOfObj, 1);
  if (action === Action.add) collection.splice(collection.length + 1, 0, obj);

  dispatch({
    type: REFRESHED,
    data: collection,
    length: collection.length,
  });
};

const Add = (
  url,
  data,
  collection, {
    PROCCESSING,
    ERROR,
    REFRESHED
  }
) => async dispatch => {
  try {
    const token = getToken();
    if (!token)
      return dispatch({
        type: UNAUTHORIZED_ERROR,
      });
    //set Authorization header
    const headers = {
      Authorization: token,
    };
    //check if data not empty
    const res = await axios.post(
      url, {
        data,
      }, {
        headers,
      }
    );
    const savedObj = res.data;
    if (!savedObj)
      return dispatch({
        type: ERROR,
      }); //handle error later
    dispatch({
      type: PROCCESSING,
    });
    await dispatch(RefreshData(savedObj, collection, Action.add, REFRESHED));
  } catch (error) {
    dispatch({
      type: UNAUTHORIZED_ERROR,
    });
  }
};

const Edit = (
  url,
  data,
  collection, {
    PROCCESSING,
    ERROR,
    REFRESHED
  }
) => async dispatch => {
  try {
    const token = getToken();
    if (!token)
      return dispatch({
        type: UNAUTHORIZED_ERROR,
      });
    const headers = {
      Authorization: token,
    };
    const res = await axios.put(
      url, {
        data,
      }, {
        headers,
      }
    );
    const updateddObj = res.data;
    if (!updateddObj)
      return dispatch({
        type: ERROR,
      });
    await dispatch({
      type: PROCCESSING,
    });
    //refresh filieres
    await dispatch(
      RefreshData(updateddObj, collection, Action.edit, REFRESHED)
    );
  } catch (error) {
    dispatch({
      type: UNAUTHORIZED_ERROR,
    });
  }
};

const Delete = (
  url,
  collection, {
    PROCCESSING,
    ERROR,
    REFRESHED
  }
) => async dispatch => {
  try {
    const token = getToken();
    if (!token)
      return dispatch({
        type: UNAUTHORIZED_ERROR,
      });
    const headers = {
      Authorization: token,
    };
    const res = await axios.delete(url, {
      headers,
    });
    const deletedObj = res.data;
    if (!deletedObj)
      return dispatch({
        type: ERROR,
      }); //handle error later
    //show loading
    dispatch({
      type: PROCCESSING,
    });
    //refresh data
    dispatch(
      RefreshData(deletedObj, collection, Action.delete, REFRESHED)
    );
  } catch (error) {
    dispatch({
      type: UNAUTHORIZED_ERROR,
    });
  }
};

const getLocalToken = () => async dispatch => {
  try {
    dispatch({
      type: LOGIN__PROCCESS,
    });

    const token = localStorage.getItem("token");
    if (!token)
      return dispatch({
        type: UNAUTHORIZED_ERROR,
      });
    const res = await axios.post("api/admin/checkToken", {
      token
    });
    if (!res.data)
      return dispatch({
        type: UNAUTHORIZED_ERROR,
      });
    dispatch({
      type: LOGIN__SUCCESS,
      token: res.data.token,
    });
  } catch (error) {
    dispatch({
      type: UNAUTHORIZED_ERROR,
    });
  }
};

const Action = Object.freeze({
  add: "add",
  edit: "edit",
  delete: "delete",
});

export {
  FetchData,
  GoToIndex,
  Add,
  Edit,
  Delete,
  getLocalToken
};