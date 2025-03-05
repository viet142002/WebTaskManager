import { LANG_LIST } from "@/assets/langs/config";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TLang, useTrans } from "@/store";
import { useLayout } from "@/store/useLayout";
import { useCallback } from "react";

function ChangeLang() {
    const { changeLang, t, lang } = useTrans((state) => state);
    const toggleLoadingGlobal = useLayout(state => state.toggleLoadingGlobal);

    const handleChangeLang = useCallback(async (val: string) => {
        toggleLoadingGlobal();
        changeLang(val as TLang);
        toggleLoadingGlobal()
    }, [changeLang, toggleLoadingGlobal])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuRadioGroup value={lang} onValueChange={handleChangeLang}>
                    {LANG_LIST.map((lang) => (
                        <DropdownMenuRadioItem value={lang} key={lang} className="cursor-pointer">
                            {t("label_lang_" + lang)}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ChangeLang;
