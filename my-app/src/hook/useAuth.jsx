import { useState } from "react";

const useAuth = () => {
    const storeId = localStorage.getItem('id');
    const storeUsername = localStorage.getItem('username')
    const [user, setUser] = useState({ username: storeUsername, id: parseInt(storeId) });
    const [isLogin, setIsLogin] = useState(storeUsername ? true : false);
    const [loading] = useState();

    return { user, setUser, isLogin, setIsLogin, loading };

};

export default useAuth;