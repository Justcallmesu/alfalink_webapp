import { PageTitleProps } from "@/lib/Components/Layout/PageTitle";
import { OutletContextModel } from "@/lib/interface/OutletContextModel";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function usePageTitle(props: PageTitleProps) {
  const { setPageTitleProps } = useOutletContext<OutletContextModel>();

  useEffect(() => {
    setPageTitleProps(props);
  }, []);
}

export default usePageTitle;
