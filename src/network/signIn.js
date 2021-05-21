import {request} from './request'


export function getUserName(uName) {
  return request({
    url: '/user/name',
    params: {
      uName
    }
  })
 
}

export function addUser(uName,uPwd) {
  return request({
    url: '/user',
    method: 'post',
    data: {
      uName,
      uPwd
    },
  })
 
}

export function updateUser(uName,uPwd) {
  return request({
    url: '/user/update',
    method: 'post',
    data: {
      uName,
      uPwd
    },
  })
 
}

export function deleteUser(uId) {
  return request({
    url: '/user/delete',
    params: {
      uId,
    },
  })
 
}