import { Component } from 'react';
import { ThemeContext, UserContext } from "../../contexts";

export const WithTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <InnerComponent theme={theme} setTheme={setTheme} {...props}/>
      )}
    </ThemeContext.Consumer>
  );
};

export const WithUser = (InnerComponent) => {
  class InnerComponentWithUser extends Component{
    render(){
      return(
        <UserContext.Consumer>
          {(user)=> <InnerComponent user={user} {...this.props}/>}
        </UserContext.Consumer>
      )
    }
  }
  return InnerComponentWithUser;
}