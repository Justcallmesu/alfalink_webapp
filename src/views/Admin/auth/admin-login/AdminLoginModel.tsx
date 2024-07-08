import { useLoginQuery } from "@/lib/queries/auth.query";

function useAdminLoginModel() {
  const { mutateAsync: queryLogin, isPending } = useLoginQuery();

  return {
    queryLogin,
    isPending,
  };
}

export default useAdminLoginModel;
