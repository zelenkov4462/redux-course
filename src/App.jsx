import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCashAction, getCashAction } from "./store/CashReducer";
import {
  addCustomerAction,
  addManyCustomersAction,
  removeCustomerAction,
} from "./store/CustomerReducer";
import { fetchCustomers } from "./asyncActions/fetchCustomers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const newCustomer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(newCustomer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>Баланс: {cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Добавить денег
        </button>
        <button onClick={() => getCash(Number(prompt()))}>Взять деньги</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить всех клиентов
        </button>
      </div>
      {!customers.length ? (
        <h1>Список клиентов пуст</h1>
      ) : (
        customers.map((customer) => (
          <div
            style={{
              fontSize: "3rem",
              border: "1px solid teal",
              marginTop: "15px",
              cursor: "pointer",
            }}
            onClick={() => removeCustomer(customer.id)}
            key={customer.id}
          >
            {customer.name}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
