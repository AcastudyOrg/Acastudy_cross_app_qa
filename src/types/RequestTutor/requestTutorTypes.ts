export type courseType = {
    id?: number,
    value?: number,
    title?: string,
    label?: string,
    description: string,
    topics: topicType[],
    tutors: string[],
    books: bookType[],
}

export type topicType = {
    id: number,
    name: string,
    description: string,
}

export type bookType = {
    id: number,
    title: string,
    author: string,
    year: number,
    chapters: chapterType[],
}

export type chapterType = {
    id: number,
    title: string,
}
