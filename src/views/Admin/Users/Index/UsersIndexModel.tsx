import { axiosDeleteUser, axiosGetUsers } from "@/lib/axios-config/users/Users";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { UserModel } from "@/lib/models/Auth/auth";
import { UserQueryDto } from "@/lib/models/Users/Users";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { usersKeys } from "@/lib/queryKeys/Auth/AuthKeys";
import { useState } from "react";

function useUsersIndexModel() {
  const [userQuery, setUserQuery] = useState<UserQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: usersData,
    isFetching: isUserFetching,
    refetch: refetchUser,
  } = useGetAxios<PaginationModel<UserModel>>({
    config: axiosGetUsers(),
    queryKey: usersKeys.lists(userQuery).queryKey,
    queryParams: userQuery,
  });

  const { mutate: mutateDeleteUser } = useAxiosDelete({
    config: (id) => axiosDeleteUser(id!),
    invalidateQueryKey: usersKeys.lists(userQuery).queryKey,
    invalidateType: "all",
  });

  return {
    userQuery,
    setUserQuery,
    usersData,
    isUserFetching,
    refetchUser,
    mutateDeleteUser,
  };
}

export default useUsersIndexModel;
