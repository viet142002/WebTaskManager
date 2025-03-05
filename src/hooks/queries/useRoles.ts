import { useQuery } from "@tanstack/react-query";

import { useAuth } from "@/store/useAuth"
import { KEYS_QUERIES } from "@/utils/constants";
import { rolesService } from "@/services";

interface IUseRolesUserProps {
    projectId?: number
}

export const useRolesUser = ({ projectId }: IUseRolesUserProps) => {
    const user = useAuth(state => state.user);
    const query = useQuery({
        queryKey: [KEYS_QUERIES.ROLES, user?.id, projectId],
        queryFn: () => rolesService.getByUser(user?.id as number),
        enabled: !!user?.id && !!projectId,
    });  
    return query;
}