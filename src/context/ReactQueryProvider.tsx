import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ProviderType } from "./@types";

const queryClient = new QueryClient();



export const ReactQueryProvider = ({ children }: ProviderType) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
