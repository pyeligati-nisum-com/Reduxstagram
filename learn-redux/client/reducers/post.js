// a reducer takes in two things
//1. the action(info about what happened)
//2.copy of current state


function posts(state=[],action){
  console.log(state,action);
  if(action.type=="INCREMENT_LIKES")
  {
    console.log("Incrementing Likes!!");
    const i = action.index;
    return [...state.slice(0,i),
    {...state[i],likes:state[i].likes+1},
    ...state.slice(i+1)]
  }
  else{
  return state;
  }
}

export default posts;
