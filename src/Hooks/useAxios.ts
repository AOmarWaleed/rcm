import { useState, useCallback } from "react";
import basicAPIWithJSONFormate from "../Utils/api";
import { useLoading } from "../Context/LoadingContext";

export function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setLoading: setLayerLoading } = useLoading();

  //! Without useCallback, the request function would be recreated on every render.
  const request = useCallback(
    async (
      method: "get" | "post" | "put" | "delete",
      url: string,
      data?: any
    ) => {
      setLoading(true);
      setError(null);
      setLayerLoading(true);
      try {
        const response = await basicAPIWithJSONFormate.request({
          method,
          url,
          data,
        });
        return response.data;
      } catch (err: any) {
        setError(
          JSON.stringify(err) || "Something went wrong,, check useAxios file"
        );
        throw err;
      } finally {
        setLayerLoading(false);
        setLoading(false);
      }
    },
    []
  );

  return { request, loading, error };
}
