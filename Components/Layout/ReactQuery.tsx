import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import toast from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: Infinity,
      // onError: (error) => {
      //   toast.error(`データを取得できませんでした `);
      // },
    },
  },
});

export const ReactQuery = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};
