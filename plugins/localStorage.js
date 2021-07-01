import createpersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
let cookiestorage = {
    getItem: function(key) {
        return Cookies.getJSON(key);
    },
    setItem: function(key, value) {
        return Cookies.set(key, value, { expires: 3, secure: false });
    },
    removeItem: function(key) {
        return Cookies.remove(key);
    }
};

export default (context) => {
    createpersistedState({
        storage: cookiestorage,
        BetState: cookiestorage.getItem,
        setstate: cookiestorage.setItem
    })(context.store)
};