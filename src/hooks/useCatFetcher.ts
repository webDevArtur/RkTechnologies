import { useEffect, useState, useCallback } from "react";
import { fetchCat } from "../api/fetchCat";

export const useCatFetcher = (enabled: boolean, autoRefresh: boolean) => {
  const [catUrl, setCatUrl] = useState<string | null>(null);

  const getNewCat = useCallback(async () => {
    if (!enabled) return;
    try {
      const url = await fetchCat();
      setCatUrl(url);
    } catch (error) {
      console.error("Ошибка получения изображения:", error);
    }
  }, [enabled]);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      getNewCat();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRefresh, getNewCat]);

  return { catUrl, getNewCat };
};
