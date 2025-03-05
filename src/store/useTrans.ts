import { DEFAULT_LANG } from './../assets/langs/config';
import { LANG_LIST } from '@/assets/langs/config';
import { create } from 'zustand';

let dataLang: TObjectLang = {};
let currentLang: TLang = 'vi'; // Lưu trạng thái ngôn ngữ hiện tại

export type TLang = typeof LANG_LIST[number];

interface ITrang {
    lang: TLang;
    changeLang: (lang: TLang) => void;
    init: () => void;
    t: (key: string, params?: Record<string, string | number>) => string;
}

type TDataLang = Record<string, string>;
type TObjectLang = Record<string, string | TDataLang>;

const getLangFromKeys = (keys: string[], data: TObjectLang, index = 0): string | false => {
    if (index >= keys.length) return false;

    const key = keys[index];
    const value = data[key];

    if (typeof value === 'object') {
        return getLangFromKeys(keys, value as TObjectLang, index + 1);
    }

    return typeof value === 'string' ? value : false;
};

const replaceParams = (text: string, params: Record<string, string | number>) => {
    return text.replace(/{(\w+)}/g, (_, key) => (params[key] !== undefined ? String(params[key]) : `{${key}}`));
};

const locates = import.meta.glob(`../assets/langs/*.json`);

const getDataLang = async (lang: TLang) => {
    if (lang === currentLang) return; // Tránh tải lại nếu không cần thiết

    try {
        const filePath = `../assets/langs/${lang}.json`;
        if (!locates[filePath]) throw new Error(`Không tìm thấy file: ${filePath}`);

        dataLang = await locates[filePath]() as TObjectLang;
        currentLang = lang;
    } catch (error) {
        console.error(error);
        if (lang !== DEFAULT_LANG) await getDataLang(DEFAULT_LANG);
    }
};

export const useTrans = create<ITrang>((set) => ({
    lang: currentLang,
    changeLang: async (lang: TLang) => {
        await getDataLang(lang);
        set({ lang });
    },
    init: () => {
        const lang = navigator.language?.split('-')[0] as TLang;
        getDataLang(lang);
    },
    t: (key, params = {}) => {
        const value = getLangFromKeys(key.split('.'), dataLang);
        return value ? replaceParams(value, params) : key;
    }
}));
