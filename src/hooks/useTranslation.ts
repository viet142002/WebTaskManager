import { useTrans } from "@/store";

export const useTranslation = () => {
    const { t } = useTrans(state => state);
    return { t };
}