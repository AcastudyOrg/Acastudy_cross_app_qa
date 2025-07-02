import { useState, useEffect } from "react";

const useGetRole = () => {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const getRole = async () => {
            const savedRole = await localStorage.getItem('role');
            setRole(savedRole);
        };
        getRole();
    }, []);
    return role;
}

export default useGetRole;
