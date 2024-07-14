import { axiosUpdateMe } from "@/lib/axios-config/auth/Auth";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { UpdateMeDto } from "@/lib/models/Auth/auth";

function useUpdateMeModel() {
  const { mutate: mutateUpdateMe } = useAxiosPostPatch<UpdateMeDto>({
    config: () => axiosUpdateMe(),
    redirect: "/admin",
    onSuccess: () => {},
  });

  return {
    mutateUpdateMe,
  };
}

export default useUpdateMeModel;
