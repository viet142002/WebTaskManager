import { ArrowRight } from "lucide-react";
import { useNavigate  } from 'react-router';

import BannerRegister from "@/assets/img/banner_register.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";


function Banner() {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/')
    }

    return (
        <section className="hidden md:block">
            <AspectRatio ratio={5/6}>
                <img
                    src={BannerRegister}
                    alt="Image"
                    className="rounded-md object-cover size-full"
                />

                <Button className="bg-[#fff]/10 hover:bg-[#fff]/20 absolute duration-300 top-2 right-2 rounded-sm shadow group" onClick={handleClickBack}>
                    Trở về <ArrowRight className="group-hover:scale-125 duration-300" />
                </Button>
            </AspectRatio>
        </section>
    );
}

export default Banner;
