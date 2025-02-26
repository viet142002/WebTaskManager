import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router";

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
import OtherRegister from "@/pages/Register/OtherRegister";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "Nhập họ đi bro",
    }),
    lastname: z.string().min(2, {
        message: "Nhập tên đi bro",
    }),
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
    firstname: "",
    lastname: "",
    email: "",
    password: "",
};

function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: DEFAULT_VALUES_REGISTER,
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <section className="flex flex-col justify-center">
            <div>
                <h1 className="text-4xl font-bold text-white">Tạo tài khoản</h1>
                <p className="my-3 text-lg text-white">
                    Bạn đã có tài khoản?{" "}
                    <Link
                        className="duration-200 hover:text-blue-500"
                        to={ROUTES.LOGIN}
                    >
                        Đăng nhập
                    </Link>
                </p>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 mt-4"
                >
                    <div className="flex justify-between gap-2">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem className="flex-[1]">
                                    <FormControl>
                                        <Input
                                            className="rounded-sm border-[#7049b3]"
                                            placeholder="Họ"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem className="flex-[1]">
                                    <FormControl>
                                        <Input
                                            className="rounded-sm border-[#7049b3]"
                                            placeholder="Tên"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="rounded-sm border-[#7049b3]"
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
                                        className="rounded-sm border-[#7049b3]"
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
                        Đăng ký
                    </Button>
                </form>
            </Form>
            <Separator className="my-4 bg-white/20" />
            <OtherRegister />
        </section>
    );
}

export default RegisterForm;
