export interface IResponse<T> {
    data: Array<T>,
    status: number,
    message: string,
}

export interface IDefaultModel {
    id: number,
    createdAt: string,
    updatedAt: string,
}