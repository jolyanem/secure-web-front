import Cookies from 'js-cookie';

const sessionStorage = {
    setItem: (key, value) => {
        Cookies.set(key, value, { expires: 1 });
    },
    getItem: (key) => {
        return Cookies.get(key);
    },
    removeItem: (key) => {
        Cookies.remove(key);
    },
};

export default sessionStorage;