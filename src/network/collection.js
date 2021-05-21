import {request} from './request'


export function getCollection(id) {
  return request({
    url: '/detail/coll',
    params: {
      id
    }
  })
}

export function setCollection(mId,uId,mSrc,mText) {
  return request({
    url: '/detail/setColl',
    method: 'post',
    data: {
      mId,
      uId,
      mSrc,
      mText
    }
  })
}
export function deleteCollection(id) {
  return request({
    url: '/delete/coll',
    params: {
      id
    }
  })
}
export function deleteColl(id) {
  return request({
    url: '/coll/delete',
    params: {
      id
    }
  })
}