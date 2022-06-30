import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(customers);
  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const newCustomer = {
      id: Date.now(),
      name: name,
    };
    dispatch(addCustomerAction(newCustomer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>Баланс: {cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => addCustomer(prompt())}>Удалить клиента</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              key={customer.id}
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Список пользователей пуст</h1>
        </div>
      )}
    </div>
  );
}

export default App;
