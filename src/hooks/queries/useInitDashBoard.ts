import { useRolesUser, useProjects } from "@/hooks/queries";
import { useCommon } from "@/store";
import { useEffect } from "react";

export const useInitOverView = () => {
    const initProjectActive = useCommon(state => state.initProjectActive);
    const projectQuery = useProjects();
    const projectId = projectQuery.data?.data[0].id;
    const roleQuery = useRolesUser({ projectId });

    useEffect(() => {
        if (projectQuery.data?.data[0]) {
            initProjectActive(projectQuery.data?.data[0].id)
        }
    }, [initProjectActive, projectQuery.data?.data])

    return {
        projects: projectQuery.data,
        role: roleQuery.data
    };
}