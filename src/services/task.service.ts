import { delay, fakeApi } from "@/services/fakeApi";
import instanceAxios from "@/services/instanceAxios";

const isUseFakeApi =import.meta.env.VITE_IS_FAKE_API;

export const taskService = {
    create: async ({ pass, email }: { pass: string, email: string }) => {
        return instanceAxios.post('/auth/login', {
            password: pass,
            email
        })
    },
    update: async ({ pass, email, fullname }: { pass: string, email: string, fullname: string }) => {
        return instanceAxios.post('/auth/register', {
            password: pass,
            email,
            fullname
        })
    },
    delete: async ({ pass, email, fullname }: { pass: string, email: string, fullname: string }) => {
        return instanceAxios.post('/auth/register', {
            password: pass,
            email,
            fullname
        })
    },
    getById: async (id: number) => {
        if (isUseFakeApi) {
            return fakeApi('tasks', {
                id
            })
        }
        return instanceAxios.post('/auth/register', {
            id
        })
    },
    getAll: async ({ assignTo, projectId, creator }: { assignTo?: number, projectId?: number, creator?: number, }) => {
        if (isUseFakeApi) {
            const data = fakeApi('tasks', {
                projectId,
                assignTo,
                creator
            })
            delay();
            return data
        }
        return instanceAxios.post('/auth/register', {
            assignTo, projectId, creator
        })
    },
}