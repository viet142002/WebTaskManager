import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

function OtherRegister() {
    return (
        <div className="flex justify-between gap-2">
            <Button className="w-full bg-black/20 transition-all duration-200 hover:bg-black/30">
                <span className="rounded-full bg-black/30 p-1">
                    <FaGoogle />
                </span>{" "}
                Google
            </Button>
            <Button className="w-full bg-black/20 transition-all duration-200 hover:bg-black/30">
                <span className="rounded-full bg-black/30 p-1">
                    <FaGithub />
                </span>{" "}
                Github
            </Button>
        </div>
    );
}

export default OtherRegister;
