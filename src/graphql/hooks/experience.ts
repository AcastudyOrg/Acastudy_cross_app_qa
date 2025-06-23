import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getUserId } from "./user";
import {
    addExperienceMutation,
    userExperiencesQuery,
    updateExperienceMutation,
    deleteExperienceMutation
} from "@/graphql/api/experience";

export const useAddExperience = () => {
    const [addExperience, { loading: loading_add }] = useMutation(addExperienceMutation);
    return { addExperience, loading_add };
};

export const useUpdateExperience = () => {
    const [updateExperience, { loading: loading_update }] = useMutation(updateExperienceMutation, {
        update(cache, { data }) {
            const updateExperience = data?.updateExperience?.data;
            if (!updateExperience) return;
            cache.writeQuery({
                query: userExperiencesQuery,
                variables: { id: updateExperience.userId },
                data: {
                    getExperience: {
                        data: {
                            ...updateExperience,
                        },
                        message: "Cache success",
                        status: data.updateExperience.status,
                    },
                },
            });
        },
    });

    return { updateExperience, loading_update };
};

export const useUserExperiences = (uid?: string) => {
    const [userId, setUserId] = React.useState<string | null>(null);
    React.useEffect(() => {
        const fetchUserId = async () => {
            const id = uid || await getUserId();
            setUserId(id);
        };
        fetchUserId();
    }, []);

    const { data, loading: loading_get, refetch } = useQuery(userExperiencesQuery, {
        variables: { userId: userId },
        skip: !userId,
    });

    return { user_experiences: data?.getExperiencesByUserId?.data, loading_get, refetch };
};

export const useDeleteExperience = () => {
    const [deleteExperience, { loading: loading_delete }] = useMutation(deleteExperienceMutation);
    return { deleteExperience, loading_delete };
};

