import { useState, useEffect } from "react";
import { fetchSiteDataList } from "@/apis";
import { useQuery } from "react-query";
import { Branch } from "@/types/branch";

type ReturnType = {
  isLoading: boolean;
  branchList?: Branch[];
};

// 現場取得
export const useFetchSite = (userBranchId?: number): ReturnType => {
  const { isLoading, data: branchList } = useQuery(
    ["useBranch", ""],
    async () => {
      return await fetchSiteDataList();
    }
  );

  return { isLoading, branchList };
};
