import { delay, fakeApi } from "@/services/fakeApi";
import instanceAxios from "@/services/instanceAxios";
import { ErrorWithCode } from "@/utils/helper";
const isUseFakeApi = import.meta.env.VITE_IS_FAKE_API;

export const authService = {
    login: async ({ pass, email }: { pass: string, email: string }) => {
        if (isUseFakeApi) {
            const data = fakeApi('users', {
                email,
            })
            await delay();
            if (!data?.length) {
                throw new ErrorWithCode(400, "Không tồn tại người dùng");
            } if (data[0].password !== pass) {
                throw new ErrorWithCode(401, "Mật khẩu không chính xác");
            }
            return data;
        }
        return instanceAxios.post('/auth/login', {
            password: pass,
            email
        })
    },
    register: async ({ pass, email, fullname }: { pass: string, email: string, fullname: string }) => {
        return instanceAxios.post('/auth/register', {
            password: pass,
            email,
            fullname
        })
    }
}