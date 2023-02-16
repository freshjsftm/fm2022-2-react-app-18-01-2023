import React, {useReducer} from 'react';
import reducer from './reducer';

const initialArg = {
  fname:'',
  sname:'', 
  email:'',
  password:'',
  phone:'',
  age:16
}
const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, initialArg);
  const handlerInput = ({target:{value, name}})=>{
    const action = {value, name};
    dispatch(action);
  }
  return (
    <form>
      <input type="text" name="fname" value={state.fname} onChange={handlerInput} />
      <input type="text" name="sname" value={state.sname} onChange={handlerInput} />
      <input type="email" name="email" value={state.email} onChange={handlerInput} />
      <input type="password" name="password" value={state.password} onChange={handlerInput} />
      <input type="text" name="phone" value={state.phone} onChange={handlerInput} />
      <input type="number" name="age" value={state.age} onChange={handlerInput} />
    </form>
  );
}

export default SignUpForm;
