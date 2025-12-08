import { animationDefaultoption } from "@/lib/utils";
import Lottie from "react-lottie";

const EmptyChatContainer = () => {
    return (
        <section
            className="flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-1000 transition-all"
            aria-label="Empty Chat Container"
        >
            <Lottie
                isClickToPauseDisabled={true}
                height={200}
                width={200}
                options={animationDefaultoption}
            />
            <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-100 text-center">
                <h3 className="poppins-medium">
                    Olá <span className="text-purple-500">!</span> Bem-vindo ao
                    <span className="text-purple-500"> Neo Chat </span> App <span className="text-purple-500">.</span>
                </h3>
                <h3 className="brawler-regular">
                    <span><span className="text-purple-400">Conecte-se, Converse</span> e faça <span className="text-purple-400">novas amizades</span>!</span>
                </h3>
            </div>
        </section>
    );
};

export default EmptyChatContainer;