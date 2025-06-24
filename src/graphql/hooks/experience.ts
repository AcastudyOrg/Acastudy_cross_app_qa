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
            const updated = data?.updateExperience?.data;
            if (!updated) return;
            cache.modify({
                fields: {
                    getExperiencesByUserId(existing = {}, { readField }) {
                        if (!existing.data) return existing;
                        const updatedData = existing.data.map((exp: any) =>
                            readField("id", exp) === updated.id ? { ...exp, ...updated } : exp
                        );
                        return {
                            ...existing,
                            data: updatedData,
                            message: "Cache success",
                            status: data.updateExperience.status,
                        };
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

    return { user_experiences: data?.getExperiencesByUserId?.data || [], loading_get, refetch };
};

export const useDeleteExperience = () => {
    const [deleteExperience, { loading: loading_delete }] = useMutation(deleteExperienceMutation);
    return { deleteExperience, loading_delete };
};

