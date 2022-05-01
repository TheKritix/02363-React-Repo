export const CommentItem = async () => {
    return [
        {
            CommentId: "1",
            body: "hva så manner",
            Book_Id: 38,
            username: "John",
            userId: "1",
            parentId: null,
            createdAt: "2022-01-01",
        },
        {
            CommentId: "2",
            body: "forstår ikke matematik",
            Book_Id: 38,
            username: "Per",
            userId: "2",
            parentId: 1,
            createdAt: "2022-01-02",
        },
        {
            CommentId: "3",
            body: "det okay",
            Book_Id: 39,
            username: "Bob",
            userId: "3",
            parentId: null,
            createdAt: "2022-01-02",
        },
    ];
};

export const createComment = async (text, parentId, Book_Id) => {
    return {
        CommentId: Math.random().toString(36).substr(2, 9),
        body: text,
        Book_Id,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toISOString().slice(0, 10),
    }
}

export const deleteComment = async () => {
    return {};
}