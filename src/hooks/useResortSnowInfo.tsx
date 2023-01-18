import { useCallback, useEffect, useMemo, useState } from "react";
import { getResortSnowInfo } from "../api/ski-resort-forecast.api";
import { DataResort } from "../types/dataResortType";

const useResortSnowInfo = (resort: string) => {
  const [data, setData] = useState<DataResort>({
    region: "",
    topLiftElevation: "",
    botLiftElevation: "",
    freshSnowfall: "",
    lastSnowfallDate: "",
    topSnowDepth: "",
    botSnowDepth: "",
    name: "",
  });
  const [error, setError] = useState({ msg: "", code: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const isError = useMemo(() => error.msg !== "", [error]);

  const fetchData = useCallback(async (resort: string) => {
    setIsLoading(true);
    try {
      const res = await getResortSnowInfo(resort);
      setData(res);
    } catch (err: any) {
      console.error(err);
      setError({ msg: "Failed to fetch data", code: err.code });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!resort) return;
    fetchData(resort);
  }, []);

  return {
    isError,
    error,
    isLoading,
    data,
    fetchData,
  };
};

export default useResortSnowInfo;
