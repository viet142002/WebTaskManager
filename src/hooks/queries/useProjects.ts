import { useQuery } from "@tanstack/react-query";

import { useAuth } from "@/store/useAuth"
import { KEYS_QUERIES } from "@/utils/constants";
import { projectService } from "@/services";

export const useProjects = () => {
    const user = useAuth(state => state.user);
    const query = useQuery({
        queryKey: [KEYS_QUERIES.PROJECTS, user?.id],
        queryFn: () => projectService.getAll(user?.id),
        enabled: !!user?.id,
    }); 
    return query;
}