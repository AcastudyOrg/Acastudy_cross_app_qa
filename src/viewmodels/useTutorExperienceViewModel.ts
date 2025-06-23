import { useState, useEffect } from 'react';
import { useAddExperience, useUserExperiences, useDeleteExperience, useUpdateExperience } from '@/graphql/hooks/experience';
import { Experience } from '@/types/User/Tutor';
import { UserType } from '@/types/User/User';

interface ExpInput {
    company: string, period: string, position: string;
}

export const useTutorExperienceViewModel = (user: UserType) => {
    const { addExperience, loading_add } = useAddExperience();
    const { deleteExperience, loading_delete } = useDeleteExperience();
    const { updateExperience, loading_update } = useUpdateExperience();
    const { user_experiences } = useUserExperiences();

    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<Experience | undefined>();
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

    useEffect(() => {
        setExperiences(user_experiences);
    }, [user_experiences]);

    const handleEdit = (exp: Experience, index: number) => {
        setSelectedExperience(exp);
        setSelectedIndex(index);
        setModalVisible(true);
    };

    const handleAdd = () => {
        setSelectedExperience(undefined);
        setSelectedIndex(undefined);
        setModalVisible(true);
    };

    const handleSave = async (exp: ExpInput) => {
        try {
            const res = await addExperience({
                variables: {
                    userId: user.id,
                    company: exp.company,
                    period: exp.period,
                    position: exp.position,
                }
            });

            if (res.data.addExperience.status !== 200) {
                throw new Error(res.data.addExperience.message);
            }
            const experience = res.data.addExperience.data;
            setExperiences([...experiences, experience]);

            console.log("Experience added successfully");
        } catch (error: any) {
            console.log("Error adding experience:", error.message);
        }
        setModalVisible(false);
    };

    const handleUpdate = async (exp: ExpInput, expId: string, index?: number) => {
        await updateExperience({
            variables: {
                id: expId, experienceInput: exp
            }
        }).then((res) => {
            if (res.data.updateExperience.status === 200) {
                if (index !== undefined) {
                    const updated = [...experiences];
                    updated[index] = res.data.updateExperience.data;
                    setExperiences(updated);
                    setModalVisible(false);
                }
            }
            else throw res.data.updateExperience;
        }).catch((err) => {
            console.log(err.message);
        })
    };

    const handleDelete = async (expId: string) => {
        const updated = experiences.filter((exp) => exp.id !== expId);
        setExperiences(updated);
        setModalVisible(false);

        try {
            const res = await deleteExperience({ variables: { id: expId } });

            if (res.data.deleteExperience.status !== 200) {
                throw new Error(res.data.deleteExperience.message);
            }
            console.log("Experience deleted successfully");
        } catch (error: any) {
            console.log("Error deleting experience:", error.message);
        }
    };

    return {
        experiences,
        modalVisible,
        selectedExperience,
        selectedIndex,
        handleAdd,
        handleEdit,
        handleSave,
        handleUpdate,
        handleDelete,
        closeModal: () => setModalVisible(false),
        loading_add,
        loading_delete,
        loading_update,
    };
};
