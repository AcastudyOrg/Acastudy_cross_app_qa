import * as DocumentPicker from 'expo-document-picker';

export interface FormData {
    studyLevel: string;
    course: string;
    book: string;
    tutor: string;
    chapter: string;
    topics: string;
    preferredDate: string;
    preferredTime: string;
    description: string;
    uploadedFile: DocumentPicker.DocumentPickerResult | null;
}

export const handleFileUpload = async (
    setFormData: React.Dispatch<React.SetStateAction<FormData>>,
    formData: FormData
) => {
    try {
        const result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
            copyToCacheDirectory: true,
        });

        if (result.output?.length !== 0) {
            setFormData((prev) => ({
                ...prev,
                uploadedFile: result,
            }));
        }
    } catch (error) {
        console.error('File upload failed:', error);
    }
};

export const validateForm = (
    formData: FormData,
    setErrors: React.Dispatch<React.SetStateAction<{ [key in keyof FormData]?: string }>>
): boolean => {
    const newErrors: { [key in keyof FormData]?: string } = {};
    const requiredFields: (keyof FormData)[] = [
        'studyLevel',
        'course',
        'topics',
        'preferredDate',
        'preferredTime',
        'description',
    ];

    requiredFields.forEach((field) => {
        if (!formData[field]) {
            newErrors[field] = 'This field is required';
        }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

export const handleInputChange = <K extends keyof FormData>(
    field: K,
    value: string,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>,
    errors: { [key in keyof FormData]?: string },
    setErrors: React.Dispatch<React.SetStateAction<{ [key in keyof FormData]?: string }>>
) => {
    setFormData((prev) => ({
        ...prev,
        [field]: value,
    }));

    // Clear the error for the field being updated
    if (errors[field]) {
        setErrors((prev) => ({
            ...prev,
            [field]: '',
        }));
    }
};

