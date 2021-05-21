import {request} from './request'

export function getLMovie() {
  return request({
    url: '/lmovie'
  })
 
}

export function getMovie() {
  return request({
    url: '/movie'
  })
 
}


export function getMovieType(type) {
  return request({
    url: '/movie/type',
    params: {
      type
    }
  })
}
//按名找电影
export function getMovieName(name) {
  return request({
    url: '/movie/name',
    params: {
      name
    }
  })
}