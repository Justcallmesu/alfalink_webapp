import { axiosGetPermissions } from "@/lib/axios-config/permissions/Permissions";
import {
  axiosCreateRole,
  axiosGetRoleById,
  axiosUpdateRole,
} from "@/lib/axios-config/roles/Roles";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { PermissionsModel, RoleModel } from "@/lib/models/Auth/auth";
import { CreateRolesDto } from "@/lib/models/Roles/Roles";
import { ResponseModel } from "@/lib/models/base";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { permissionsKeys, rolesKeys } from "@/lib/queryKeys/Auth/AuthKeys";
import { useParams } from "react-router-dom";

function useRolesFormModel() {
  const { id } = useParams();

  const { data: rolesData } = useGetAxios<ResponseModel<RoleModel>>({
    config: axiosGetRoleById(id!),
    queryKey: rolesKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  const { data: permissionsData } = useGetAxios<
    PaginationModel<PermissionsModel>
  >({
    config: axiosGetPermissions(),
    queryKey: permissionsKeys.lists().queryKey,
  });

  const { mutate: mutatePostPatchRole } = useAxiosPostPatch<CreateRolesDto>({
    config: (id) => {
      if (id) return axiosUpdateRole(id);
      return axiosCreateRole();
    },
    invalidateQueryKey: rolesKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    rolesData,
    permissionsData,
    mutatePostPatchRole,
  };
}

export default useRolesFormModel;
