import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { updateUserMutation, getUserQuery, getAllTutorsQuery } from "@/graphql/api/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useUpdateUser = () => {
    const [updateUser, { loading: updating }] = useMutation(updateUserMutation, {
        update(cache, { data }) {
            const updatedUser = data?.updateUser?.data;
            if (!updatedUser) return;
            cache.modify({
                id: cache.identify({ __typename: "User", id: updatedUser.id }),
                fields: {
                    ...Object.fromEntries(
                        Object.entries(updatedUser).map(([key, value]) => [
                            key,
                            () => value,
                        ])
                    ),
                },
            });
        },
    });

    return { updateUser, updating };
};

export const useGetUser = (uid?: string) => {
    const [userId, setUserId] = React.useState<string | null>(null);
    React.useEffect(() => {
        const fetchUserId = async () => {
            const id = uid || await getUserId();
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

export const useGetTutors = () => {
    const { data, loading, refetch } = useQuery(getAllTutorsQuery);
    return { tutors: data?.getAllTutors?.data, loading, refetch };
};

export const getUserId = async () => {
    const userId = await AsyncStorage.getItem("userId");
    return userId;
};