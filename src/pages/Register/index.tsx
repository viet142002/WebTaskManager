import Banner from "@/pages/Register/Banner";
import RegisterForm from "@/pages/Register/RegisterForm";

function RegisterPage() {
    return (
        <div className="h-dvh w-dvw bg-[#544e65] flex items-center p-2">
            <div className="grid md:grid-cols-2 gap-6 md:max-w-5xl w-full mx-auto p-6 bg-[#2c2636] rounded-md shadow-2xl shadow-accent-foreground">
                <Banner />
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterPage;
