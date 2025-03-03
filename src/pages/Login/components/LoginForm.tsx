import { toast } from "sonner";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PASS_WORD_REGEX, ROUTES } from "@/utils/constants";
import OtherRegister from "@/pages/Register/components/OtherRegister";
import { Separator } from "@/components/ui/separator";
import { authService } from "@/services/auth.service";
import { ErrorWithCode } from "@/utils/helper";
import Spinner from "@/components/Loading/Spinner";
import ButtonNav from "@/components/ui/button-nav";

const formSchema = z.object({
    email: z.string().email("Vui lòng nhập đúng email"),
    password: z
        .string()
        .min(8, {
            message: "Mật khẩu phải có ít nhất 8 ký tự",
        })
        .regex(
            PASS_WORD_REGEX,
            "Mật khẩu phải có ít nhất một số, ký tự và ký tự đặc biệt",
        ),
});

const DEFAULT_VALUES_REGISTER: z.infer<typeof formSchema> = {
    email: "",
    password: "",
};

function LoginForm() {
    const navigate = useNavigate();
    const [isPendingLogin, startTransaction] = useTransition();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: DEFAULT_VALUES_REGISTER,
    });

    const login = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await authService.login({
                email: values.email,
                pass: values.password,
            });
            console.log(res);
            navigate(ROUTES.OVERVIEW);
        } catch (error) {
            toast.error((error as ErrorWithCode).message);
        }
    }

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        startTransaction(() => login(values));
    };

    return (
        <section className="flex flex-col justify-center">
            <div>
                <h1 className="text-4xl font-bold text-white">Đăng nhập</h1>
                <p className="my-3 text-lg text-white">
                    Bạn chưa có tài khoản?{" "}
                    <ButtonNav
                        className="duration-200 hover:text-blue-500 p-0 text-white text-base"
                        to={ROUTES.REGISTER}
                        variant='link'
                    >
                        Đăng ký
                    </ButtonNav>
                </p>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-4 space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="rounded-sm border-[#7049b3] text-white"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="mb-8">
                                <FormControl>
                                    <Input
                                        className="rounded-sm border-[#7049b3] text-white"
                                        placeholder="Nhập mật khẩu"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full bg-black/20 transition-all duration-200 hover:bg-black/30"
                        size={"lg"}
                    >
                        Đăng nhập {isPendingLogin && <Spinner />}
                    </Button>
                </form>
            </Form>
            <Separator className="my-4 bg-white/20" />
            <OtherRegister />
        </section>
    );
}

export default LoginForm;
