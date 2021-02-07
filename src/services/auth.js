const registerUrl = 'http://localhost:4000/user/register';
const loginUrl = 'http://localhost:4000/user/login';
const checkUrl = 'http://localhost:4000/user';
const logoutUrl = 'http://localhost:4000/user/logout';

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
    const res = await fetch(logoutUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    
    const jsonResponse = await res.json();

    if (!res.ok) {
        throw new Error(jsonResponse.message);
      }
    return jsonResponse.data;
}