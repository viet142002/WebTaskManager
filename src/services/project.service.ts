import { delay, fakeApi } from "@/services/fakeApi";
import instanceAxios from "@/services/instanceAxios";

const isUseFakeApi =import.meta.env.VITE_IS_FAKE_API;

export const projectService = {
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
            return fakeApi('projects', {
                id
            })
        }
        return instanceAxios.post('/auth/register', {
            id
        })
    },
    getAll: async ({ userId }: { userId?: number }) => {
        if (isUseFakeApi) {
            const data = fakeApi('projects', {
                members: userId ? [userId] : []
            }, {
                members: (a, b) => {
                    if ((b as Array<number>)?.length === 0) return true;
                    return (a as Array<number>)?.includes((b as Array<number>)[0])
                }
            })
            delay();
            return data
        }
        return instanceAxios.post('/auth/register', {
            userId
        })
    },
}