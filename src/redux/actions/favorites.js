export const Add = (comic) => ({
    type: "ADD",
    payload: comic
})

export const Delete = (id) => ({
    type: "DELETE",
    payload: id
})