import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncAction/customers';
import { asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator } from './store/countReducer';
import { fetchUsers, setUsers } from './store/userReducer';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);
    const count = useSelector((state) => state.count.count)
    const users = useSelector((state) => state.users.users)

    const addCash = (cash) => {
        dispatch({ type: 'ADD_CASH', payload: cash });
    };
    const getCash = (cash) => {
        dispatch({ type: 'GET_CASH', payload: cash });
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };
    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <div className='App'>
            <div className='cash'>{cash}</div>
            <div className='buttons-block'>
                <button onClick={() => addCash(Number(prompt('Сколько денег вы хотите положить на счёт', 0)))}>
                    Пополнить счет
                </button>
                <button onClick={() => getCash(Number(prompt('Сколько денег вы хотите снять со счёта', 0)))}>
                    Снять со счета
                </button>
            </div>
            <div className='buttons-block'>
                <button onClick={() => addCustomer(prompt('Введите имя клиента'))}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить МНОГО клиентов из базы</button>
            </div>
            {customers.length > 0 ? (
                <div>
                    {customers.map((customer) => (
                        <div
                            onClick={() => removeCustomer(customer)}
                            style={{
                                fontSize: '35px',
                                textAlign: 'center',
                                marginTop: '30px',
                                border: '2px solid teal',
                                width: '20%',
                            }}>
                            {customer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ fontSize: '35px', textAlign: 'center', marginTop: '30px' }}>Клиенты отсутствуют</div>
            )}
            <br />
            <br />
            <div style={{fontSize: '40px', textAlign: 'center', marginTop: '30px', color: 'orange'}}>
                count = {count}
                <br />
                <button onClick={() => dispatch(asyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
                <button onClick={() => dispatch(asyncDecrementCreator())}>ДЕКРЕМЕНТ--</button>
            </div>
            <br />
            <br />
            <div style={{fontSize: '40px', textAlign: 'center', marginTop: '30px', color: 'orange'}}>
                list users
                <br />
                <button onClick={() => dispatch(fetchUsers())}>GET USERS FROM API</button>
                <br />
                {users.map(user =>
                    <div>
                        {user.name}
                    </div>
                )}
            <div/>
            <div style={{marginTop: '500px'}}>end</div>
        </div>
        </div>
    );
}

export default App;
