import isObject from 'lodash.isobject'
import api from '../api'
import { me } from '../initial_state'
import { importAccount } from './importer'

export const SAVE_USER_PROFILE_INFORMATION_FETCH_REQUEST = 'SAVE_USER_PROFILE_INFORMATION_FETCH_REQUEST'
export const SAVE_USER_PROFILE_INFORMATION_FETCH_SUCCESS = 'SAVE_USER_PROFILE_INFORMATION_FETCH_SUCCESS'
export const SAVE_USER_PROFILE_INFORMATION_FETCH_FAIL = 'SAVE_USER_PROFILE_INFORMATION_FETCH_FAIL'

export const saveUserProfileInformation = (data) => {
  return function (dispatch, getState) {
    if (!isObject(data) || !me) return

    dispatch(saveUserProfileInformationRequest())

    const formData = new FormData()
    if (data.displayName) formData.append('display_name', data.displayName)
    if (data.note) formData.append('note', data.note)
    if (data.avatar) formData.append('avatar', data.avatar)
    if (data.header) formData.append('header', data.header)

    api(getState).patch('/api/v1/accounts/update_credentials', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      dispatch(importAccount(response.data))
      dispatch(saveUserProfileInformationSuccess(response.data))
    }).catch(error => {
      dispatch(saveUserProfileInformationFail(error))
    })
  }
}

function saveUserProfileInformationRequest() {
  return {
    type: SAVE_USER_PROFILE_INFORMATION_FETCH_REQUEST,
  }
}

function saveUserProfileInformationSuccess(userProfileData) {
  return {
    type: SAVE_USER_PROFILE_INFORMATION_FETCH_SUCCESS,
    userProfileData,
  }
}

function saveUserProfileInformationFail(error) {
  return {
    type: SAVE_USER_PROFILE_INFORMATION_FETCH_FAIL,
    error,
  }
}