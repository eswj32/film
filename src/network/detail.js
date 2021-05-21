import {request} from './request'

export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      id
    }
  })
}
export function getDetailDiscess(id) {
  return request({
    url: '/detail/discuss',
    params: {
      id
    }
  })
}

export function addDetailDiscuss(mId,uName,mName,uImg,mSrc,dDate,dText) {
  return request({
    url: '/detail/discuss/info',
    method:'post',
    data: {
      mId,
      uName,
      mName,
      uImg,
      mSrc,
      dDate,
      dText
    }
  })
}
export function getDiscess(uName) {
  return request({
    url: '/user/discuss',
    params: {
      uName
    }
  })
}

export function deleteDiscess(dId) {
  return request({
    url: '/delete/duss',
    params: {
      dId
    }
  })
}
