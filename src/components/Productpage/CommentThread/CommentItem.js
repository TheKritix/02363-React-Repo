export const CommentItem = async () => {
    return [
        {
            CommentId: "1",
            body: "hva så manner",
            username: "John",
            userId: "1",
            parentId: null,
            createdAt: "2022-01-01",
        },
        {
            CommentId: "2",
            body: "forstår ikke matematik",
            username: "Per",
            userId: "2",
            parentId: null,
            createdAt: "2022-01-02",
        },
        {
            CommentId: "3",
            body: "det okay",
            username: "Bob",
            userId: "3",
            parentId: null,
            createdAt: "2022-01-02",
        },
    ];
};

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toString().slice(0, 15),
    }
}

export const deleteComment = async () => {
    return {};
}