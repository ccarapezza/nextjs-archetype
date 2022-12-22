import { getProviders, getCsrfToken } from "next-auth/react"
import ProvidersForms from "./components/ProvidersForms";

export default async function SignIn({
    searchParams,
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const providers = await getProviders();

    return (providers&&<ProvidersForms providers={providers} />)
}