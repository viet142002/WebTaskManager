import { LANG_LIST } from "@/assets/langs/config";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TLang, useTrans } from "@/store";

function ChangeLang() {
    const { changeLang, t, lang } = useTrans((state) => state);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuRadioGroup value={lang} onValueChange={(val) => changeLang(val as TLang)}>
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
