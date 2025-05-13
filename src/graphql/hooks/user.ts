import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { updateUserMutation, getUserQuery } from "@/graphql/api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useUpdateUser = () => {
    const [updateUser, { loading: updating }] = useMutation(updateUserMutation, {
        update(cache, { data }) {
            const updatedUser = data?.updateUser?.data;
            if (!updatedUser) return;
            cache.writeQuery({
                query: getUserQuery,
                variables: { id: updatedUser.id },
                data: {
                    getUser: {
                        data: {
                            ...updatedUser,
                        },
                        message: "Cache success",
                        status: data.updateUser.status,
                    },
                },
            });
        },
    });

    return { updateUser, updating };
};

export const useGetUser = () => {
    const [userId, setUserId] = React.useState<string | null>(null);
    React.useEffect(() => {
        const fetchUserId = async () => {
            const id = await getUserId();
            setUserId(id);
        };
        fetchUserId();
    }, []);

    const { data, loading: loadingUser, refetch } = useQuery(getUserQuery, {
        variables: { id: userId },
        skip: !userId,
    });

    return { user: data?.getUser?.data, loadingUser, refetch };
};

export const getUserId = async () => {
    const userId = await AsyncStorage.getItem("userId");
    return userId;
};