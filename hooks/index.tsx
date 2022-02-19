import { useState, useEffect, useContext } from "react";
import { fetchSiteDataList, postBranch } from "@/apis";
import {
  useQuery,
  useQueryClient,
  useMutation,
  UseMutationResult,
} from "react-query";
import { Branch, BranchRequest } from "@/types/branch";
import toast from "react-hot-toast";
import { ErrorContext } from "@/context/error/userContext";

type ReturnType = {
  isLoading: boolean;
  branchList?: Branch[];
  isError: boolean;
};

// 現場取得
export const useFetchSite = (userBranchId?: number): ReturnType => {
  const { onChangeErrorMessage } = useContext(ErrorContext);
  const {
    isLoading,
    data: branchList,
    error,
    isError,
  } = useQuery(
    ["useBranch", ""],
    async () => {
      // throw new Error("Oh no!");
      return await fetchSiteDataList();
    },
    {
      onError: (error) => {
        console.log(error.status);
        onChangeErrorMessage(`データを取得できませんでした `);
      },
    }
  );

  return { isLoading, branchList, isError };
};

// 現場取得
export const usePostSite = (
  body: BranchRequest
): {
  UseMutationResult: UseMutationResult<void, unknown, void, unknown>;
} => {
  const { isLoading, onChangeError, onChangeErrorMessage } =
    useContext(ErrorContext);

  const queryClient = useQueryClient();
  const UseMutationResult = useMutation(
    async () => {
      await postBranch(body);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("useBranch");
      },
    }
  );

  return { UseMutationResult };
};
