import { useState, useEffect, useContext } from "react";
import { fetchSiteDataList, postBranch, postParkType, postUser } from "@/apis";
import {
  useQuery,
  useQueryClient,
  useMutation,
  UseMutationResult,
} from "react-query";
import {
  Branch,
  ParkRequest,
  ParkTypeRequest,
  UserRequest,
} from "@/types/branch";
import toast from "react-hot-toast";
import { ErrorContext } from "@/context/error/userContext";
import axios from "axios";
import { API_URL } from "@/config";

type ReturnType = {
  isLoading: boolean;
  parkList: any;
  isError: boolean;
};
type parkTypeReturnType = {
  isLoading: boolean;
  parkTypeList: any;
  isError: boolean;
};
type UserListReturnType = {
  isLoading: boolean;
  userList: any;
  isError: boolean;
};

// 公園一覧取得
export const useParkList = (userBranchId?: number): ReturnType => {
  const { onChangeErrorMessage } = useContext(ErrorContext);
  const {
    isLoading,
    data: parkList,
    error,
    isError,
  } = useQuery(
    ["useParkList"],
    async () => {
      return await axios.get(`${API_URL}/parks`);
    },
    {
      onError: (error) => {
        onChangeErrorMessage(`データを取得できませんでした `);
      },
    }
  );

  return { isLoading, parkList, isError };
};

// 公園タイプ一覧取得
export const useParkTypeList = (): parkTypeReturnType => {
  const { onChangeErrorMessage } = useContext(ErrorContext);
  const {
    isLoading,
    data: parkTypeList,
    error,
    isError,
  } = useQuery(
    ["useParkTypeList"],
    async () => {
      return await axios.get(`${API_URL}/parkTypes`);
    },
    {
      onError: (error) => {
        onChangeErrorMessage(`データを取得できませんでした `);
      },
    }
  );
  return { isLoading, parkTypeList, isError };
};

// ユーザー一覧取得
export const useUserList = (): UserListReturnType => {
  const { onChangeErrorMessage } = useContext(ErrorContext);
  const {
    isLoading,
    data: userList,
    error,
    isError,
  } = useQuery(
    ["useUserList"],
    async () => {
      return await axios.get(`${API_URL}/users`);
    },
    {
      onError: (error) => {
        onChangeErrorMessage(`データを取得できませんでした `);
      },
    }
  );
  return { isLoading, userList, isError };
};

// 公園タイプ更新
export const usePostParkType = (body: ParkTypeRequest) => {
  const { isLoading, onChangeError, onChangeErrorMessage } =
    useContext(ErrorContext);

  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      await postParkType(body);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("usePostParkType");
      },
    }
  );
};

// 公園更新
export const usePostPark = (body: ParkRequest) => {
  const { isLoading, onChangeError, onChangeErrorMessage } =
    useContext(ErrorContext);

  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      await postBranch(body);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("useBranch");
      },
    }
  );
};

// ユーザー更新
export const usePostUser = (body: UserRequest) => {
  const { isLoading, onChangeError, onChangeErrorMessage } =
    useContext(ErrorContext);

  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      await postUser(body);
    },
    {
      onSuccess: () => {
        onChangeErrorMessage(`データを更新できませんでした `);
        queryClient.invalidateQueries("useBranch");
      },
    }
  );
};

// 現場取得
export const usePostSiteaa = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchSiteDataList();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data };
};
