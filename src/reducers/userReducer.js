export const initialState = null

/*export const reducer = (state,action)=>{
    
    if(action.type=="MEMBER")
{
    return action.payload
}
else if(action.type=="SELLER")
{
    return action.payload
}
if(action.type=="CLEAR"){
    return null
}
return state

} 
*/

export const reducer = (state, action) => {
    switch (action.type) {
      case "USER": 
        return action.payload
       case "TRAINER": 
        return action.payload 
      case "CLEAR":
        return null
    default:
        return state;
    }
  };    