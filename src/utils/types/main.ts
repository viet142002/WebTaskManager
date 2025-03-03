import { IDefaultModel } from "@/utils/types/common";

export interface IProject extends IDefaultModel {
    name: string,
    des: string,
    tasks: Array<number>
    status: Array<number>
    totalTask: number,
    successTask: number,
    creator: string;
}

export interface ITask extends IDefaultModel {
    name: string,
    des: string,
    creator: number,
    status: number,
    assignTo: number,
    statedAt: string,
    doneAt: string,
}

export interface IStatus extends IDefaultModel {
    name: string,
    des: string
}

export interface IUser extends IDefaultModel {
    fullname: string,
    avatar: string,
    email: string,
    password?: string;
}

export interface IRoleProject extends IDefaultModel {
    name: string,
    des: string,
    access: Array<number>
}

