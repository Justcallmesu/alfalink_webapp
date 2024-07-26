import { axiosGetRoles } from "@/lib/axios-config/roles/Roles";
import {
  axiosCreateUser,
  axiosGetUserById,
  axiosUpdateUser,
} from "@/lib/axios-config/users/Users";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { RoleModel, UserModel } from "@/lib/models/Auth/auth";
import { RolesQueryDto } from "@/lib/models/Roles/Roles";
import { ResponseModel } from "@/lib/models/base";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { rolesKeys, usersKeys } from "@/lib/queryKeys/Auth/AuthKeys";
import { useState } from "react";
import { useParams } from "react-router-dom";

function useUsersFormModel() {
  const { id } = useParams();

  const { data: userData } = useGetAxios<ResponseModel<UserModel>>({
    config: axiosGetUserById(id!),
    queryKey: usersKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  const [roleQuery, setRoleQuery] = useState<RolesQueryDto>({
    page: 1,
    limit: 10,
  });

  const { data: rolesModel } = useGetAxios<PaginationModel<RoleModel>>({
    config: axiosGetRoles(),
    queryKey: rolesKeys.lists(roleQuery).queryKey,
    queryParams: roleQuery,
  });

  const { mutate: mutatePostPatchUser } = useAxiosPostPatch({
    config: (id) => {
      if (id) return axiosUpdateUser(id);
      return axiosCreateUser();
    },
    invalidateQueryKey: usersKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    userData,
    rolesModel,
    setRoleQuery,
    mutatePostPatchUser,
  };
}

export default useUsersFormModel;
