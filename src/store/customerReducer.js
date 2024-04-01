const defaultState = {
    customers: [
        {
            name: 'Витя',
            id: 1,
        },
        {
            name: 'Саша',
            id: 2,
        },
        {
            name: 'Ваня',
            id: 3,
        },
        {
            name: 'Петя',
            id: 4,
        },
        {
            name: 'Вася',
            id: 5,
        },
        {
            name: 'Коля',
            id: 6,
        },
    ],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return { ...state, customers: [...state.customers, ...action.payload] };
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] };

        case REMOVE_CUSTOMERS:
            return { ...state, customers: state.customers.filter((customer) => customer.id !== action.payload) };

        default:
            return state;
    }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMERS, payload });
export const addManyCustomers = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload });
