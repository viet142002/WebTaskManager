import { DEFAULT_LANG } from './../assets/langs/config';
import { LANG_LIST } from '@/assets/langs/config';
import { create } from 'zustand';

export type TLang = typeof LANG_LIST[number];
interface ITrang {
    lang: TLang;
    changeLang: (lang: TLang) => void;
    init: () => void,
    t: (key: string) => string,
}

type TDataLang = Record<string, string>; 
type TObjectLang = Record<string, string | TDataLang>;
let dataLang: TObjectLang = {};

const getLangFromKeys = (keys: string[], data: TObjectLang) => {
    if (keys.length === 0) {
        return false;
    }
    const keyInit = keys[0];
    if (typeof data[keyInit] === 'object') {
        if (keys.length > 1) {
            return getLangFromKeys(keys.splice(0,1), data[keyInit]);
        }
        return false;
    }
    if (typeof data[keyInit] === 'string' && keys.length > 1) {
        return false;
    }
    return data[keyInit];
}

const locates = import.meta.glob(`../assets/langs/*.json`)

const getDataLang = async (lang: TLang) => {
    try {
        console.log(`../assets/langs/${lang}.json`);
        if (!locates[`../assets/langs/${lang}.json`]) {
            throw new Error(`Không tìm thấy file: ../assets/langs/${lang}.json`);
        }
        dataLang = await locates[`../assets/langs/${lang}.json`]() as TObjectLang;
    } catch (error) {
        // Nếu lấy không được file ngôn ngữ hiện tại thì lấy file mặc đinh
        if (lang !== DEFAULT_LANG) {
            getDataLang(DEFAULT_LANG);
        }
        console.error(error);
    }
}

export const useTrans = create<ITrang>((set) => {
    return ({
        lang: 'vi',
        changeLang: async (lang: TLang) => {
            await getDataLang(lang);
            set({ lang })
        },
        init: () => {
            const lang = navigator.language?.split('-')[0] as TLang;
            getDataLang(lang);
        },
        t: (key: string) => {
            const parseKey = key.split('.');
            return getLangFromKeys(parseKey, dataLang) || key;
        }
    })
});