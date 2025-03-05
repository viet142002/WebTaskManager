import { create } from "zustand";

interface ICommon {
    projectActive?: number;
    activeProject: (id: number) => void;
    initProjectActive: (id: number) => void;
}

const KEY_SAVE_PROJECT_ACTIVE = "PROJECT_ACTIVE";

const getProjectActiveInLocal = () => {
    const projectActiveInLocal = localStorage.getItem(KEY_SAVE_PROJECT_ACTIVE);
    return projectActiveInLocal ? +projectActiveInLocal : undefined;
};

export const useCommon = create<ICommon>((set) => ({
    projectActive: undefined,
    initProjectActive: (id) =>
        set({
            projectActive: getProjectActiveInLocal() ?? id,
        }),
    activeProject: (id) => {
        console.log('active nẻ');
        
        localStorage.setItem(KEY_SAVE_PROJECT_ACTIVE, "" + id);
        set({
            projectActive: id,
        });
    },
}));
