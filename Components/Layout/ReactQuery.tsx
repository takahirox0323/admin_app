import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
