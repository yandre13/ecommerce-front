
export const resetInfo = (dispatch)=>{
 dispatch({
  type: 'setInfo',
  setNewInfo: {
   error: false,
   loading: false,
   success: false
  }
 })
}
