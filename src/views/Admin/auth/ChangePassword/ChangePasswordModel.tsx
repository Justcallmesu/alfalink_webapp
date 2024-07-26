import { axiosUpdatePassword } from "@/lib/axios-config/auth/Auth";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { removeAllCredentials } from "@/lib/utils/LocalStorage";

function useChangePasswordModel() {
  const { mutate: mutateUpdatePassword } = useAxiosPostPatch({
    config: () => axiosUpdatePassword(),
    redirect: "/admin/login",
    onSuccess: () => removeAllCredentials(),
  });

  return {
    mutateUpdatePassword,
  };
}

export default useChangePasswordModel;
