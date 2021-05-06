const registerUrl = 'https://liga-2b.herokuapp.com/user/register';
const loginUrl = 'https://liga-2b.herokuapp.com/user/login';
const checkUrl = 'https://liga-2b.herokuapp.com/user';
const logoutUrl = 'https://liga-2b.herokuapp.com/user/logout';

export const register = async (userData) => {

    const response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include', 
        body: JSON.stringify(userData),
    });

    const jsonResponse = await response.json();
    
    if(!response.ok){
        throw new Error(jsonResponse.message);
    }

    return jsonResponse;

}

export const login = async (userData) => {
    const request = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:*",
            "Access-Control-Allow-Credentials": true,
        },
        credentials: 'include',
        body: JSON.stringify(userData),
    });

    const jsonResponse = await request.json();

    if(!request.ok){
        throw new Error(jsonResponse.message);
    }
    return jsonResponse;
}

export const checkUser = async () => {
    const response = await fetch (checkUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
    },
    credentials:'include',
    });

    const jsonResponse = await response.json();

    if(!response.ok){
        throw new Error(jsonResponse.message);
    }
    return jsonResponse.data;
} 

export const logout = async () => {
    const response = await fetch(logoutUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
    });
    
    const jsonResponse = await response.json();

    if (!response.ok) {
        throw new Error(jsonResponse.message);
      }
    return jsonResponse.data;
}
