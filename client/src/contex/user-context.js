import React from 'react';

export default React.createContext({
    getUser: () => {},
    postTodo: (value) => {},
    postCategory: () => {},
    postEvents: (values) => {},
    login: []
});