import { useEffect } from "react";
import { useAxios } from "../../Hooks/useAxios";

export default function Home() {
  const { request, error, loading: axiosLoading } = useAxios();

  async function getProducts() {
    const data = await request("get", "/api/v1/products");
    console.log(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return <div>Home Page {axiosLoading && "loading..."}</div>;
}
