const reducer = (state, action)=>{
  const {value, name} = action;
  const newState = {
    ...state,
    [name]:value
  }
  return newState;
}
export default reducer;