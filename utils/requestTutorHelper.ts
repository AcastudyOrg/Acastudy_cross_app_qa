import { bookType, chapterType, courseType, topicType } from "../src/types/RequestTutor/requestTutorTypes";

export const coursesDropdownDataFn = (courses: courseType[]) => {
    return courses?.map((course) => ({
        label: course.title,
        value: course.id,
        description: course.description,
        topics: course.topics,
        tutors: course.tutors,
        books: course.books
    }));
}

export const topicsDropdownDataFn = (topics: topicType[]) => {
    return topics?.map((topic) => ({
        label: topic.name,
        value: topic.id
    })) ?? [];
}

export const tutorsDropdownDataFn = (tutors: string[]) => {
    return tutors?.map((value, index) => ({
        label: value,
        value: index
    })) ?? [];
}

export const booksDropdownDataFn = (books: bookType[]) => {
    return books?.map((book) => ({
        label: book.title,
        chapters: book.chapters,
        id: book.id
    })) ?? [];
}

export const chaptersDropdownDataFn = (chapters: chapterType[]) => {
    return chapters?.map((chapter) => ({
        label: chapter.title,
        value: chapter.id,
    })) ?? [];
}