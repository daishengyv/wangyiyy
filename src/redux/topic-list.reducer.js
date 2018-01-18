import axios from 'axios'

const GET_TOPICS_SUCC = 'GET_TOPICS_SUCC'
const GET_TOPICS_ERR = 'GET_TOPICS_ERR'
const LOADING = 'LOADING'
const LOADEND = 'LOADENG'

let init = {
  loading: false,
  topics: {
    data:[{url:'http://m10.music.126.net/20180112123216/8d7f9e445ff8e92c6816fa2d6a96eccd/ymusic/e2c6/8cb7/b3a1/879c7e63ded901f9ff7aec78031c4a71.mp3'}],
    mname:'123',
    rname:'456'

  }
}

export function topicListReducer(state = init, action) {
 
  if (action.type === GET_TOPICS_SUCC) {
    console.log(1111,action)
    return { ...state, success: action.payload.success, topics: action.payload.data }
  }
  
  if (action.type === GET_TOPICS_ERR) {
    console.log(2222,action)
    return { ...state, msg: action.payload.msg , topics: action.payload }
  }
  
  if (action.type === LOADING) {
    console.log(3333,action)
    return { ...state, loading: true }
  }
  
  if (action.type === LOADEND) {
    console.log(4444,action)
    return { ...state, loading: false }
  }
  console.log(5555,action)
  return state
}

export function getTopicList({tab = 'all', limit = 30, page = 1} = {}) {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('/api/topics', {
      params: {
        tab,
        limit,
        page,
      },
    }).then((res) => {
      if (res.status === 200 && res.data.success) {
        dispatch({ type: GET_TOPICS_SUCC, payload: res.data })

      } else {
        dispatch({ type: GET_TOPICS_ERR, payload: res.data })
      }
      dispatch({ type: LOADEND })
    }).catch((err) => {
      if (err.response) {
        dispatch({ type: GET_TOPICS_ERR, payload: err.response.data })
      } else {
        dispatch({ type: GET_TOPICS_ERR, payload: {msg: err.message } })
      }
    })
  }
}


export function getPlayList(id) {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('/playlist/detail?id=' + id).then((res) => {
     
        dispatch({ type: GET_TOPICS_SUCC, payload: res.data })
    
    }).catch((err) => {
      if (err.response) {
        dispatch({ type: GET_TOPICS_ERR, payload: err.response.data })
      } else {
        dispatch({ type: GET_TOPICS_ERR, payload: {msg: err.message } })
      }
    })
  }
}


export function playMusic(id,mname,rname) {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('/music/url?id=' + id ).then((res) => {
      res.data.mname = mname
      res.data.rname = rname
      if (res.code == 200) {
        dispatch({ type: GET_TOPICS_SUCC, payload: res.data })
      } else {
        dispatch({ type: GET_TOPICS_ERR, payload: res.data })
      }
      dispatch({ type: LOADEND })
    }).catch((err) => {
      if (err.response) {
        dispatch({ type: GET_TOPICS_ERR, payload: err.response.data })
      } else {
        dispatch({ type: GET_TOPICS_ERR, payload: {msg: err.message } })
      }
    })
  }
}










export function showSubitem(){
  return console.log(init)
}













































