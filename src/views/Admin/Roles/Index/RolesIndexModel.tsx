import { axiosGetRoles } from "@/lib/axios-config/roles/Roles";
import { axiosDeleteUser, axiosGetUsers } from "@/lib/axios-config/users/Users";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { RoleModel, UserModel } from "@/lib/models/Auth/auth";
import { RolesQueryDto } from "@/lib/models/Roles/Roles";
import { UserQueryDto } from "@/lib/models/Users/Users";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { rolesKeys, usersKeys } from "@/lib/queryKeys/Auth/AuthKeys";
import React, { useState } from "react";

function useRolesIndexModel() {
  const [roleQuery, setRoleQuery] = useState<RolesQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: roleData,
    isFetching: isRoleFetching,
    refetch: refetchRole,
  } = useGetAxios<PaginationModel<RoleModel>>({
    config: axiosGetRoles(),
    queryKey: rolesKeys.lists(roleQuery).queryKey,
    queryParams: roleQuery,
  });

  const { mutate: mutateDeleteRole } = useAxiosDelete({
    config: (id) => axiosDeleteUser(id!),
    invalidateQueryKey: rolesKeys.lists(roleQuery).queryKey,
    invalidateType: "all",
  });

  return {
    mutateDeleteRole,
    roleData,
    isRoleFetching,
    refetchRole,
    setRoleQuery,
  };
}

export default useRolesIndexModel;
