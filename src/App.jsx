import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);

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
        </div>
    );
}

export default App;
