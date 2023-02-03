import React, { Component } from "react";
import { loadPhones, loadUsers } from "../api";
import DataLoader from "../components/DataLoader";

class LoaderPage extends Component {
  render() {
    return (
      <>
        {/* <DataLoader
          loadData={loadPhones}
          render={(state) => (
            <ul>
              {state.data.map((phone) => (
                <li key={phone.id}>
                  {phone.brand}, price:{phone.price}
                </li>
              ))}
            </ul>
          )}
        /> */}
        <DataLoader loadData={loadPhones}>
          {(state) => (
            <ul>
              {state.data.map((phone) => (
                <li key={phone.id}>
                  {phone.brand}, price:{phone.price}
                </li>
              ))}
            </ul>
          )}
        </DataLoader>
        <DataLoader loadData={loadUsers}>
          {(state) => (
            <ol>
              {state.data.map((user) => (
                <li key={user.id}> {user.name}</li>
              ))}
            </ol>
          )}
        </DataLoader>
      </>
    );
  }
}

export default LoaderPage;
