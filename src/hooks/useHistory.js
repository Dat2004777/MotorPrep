import historyService from "@/services/historyService";
import { useCallback, useState } from "react";
import { toast } from "sonner";

const useHistory = (usingPage) => {
  const [histories, setHistories] = useState([]);
  const [currentHistory, setCurrentHistory] = useState(null);

  const fetchHistoryByUserId = useCallback(
    async (userId) => {
      try {
        const historiesData = await historyService.getHistoryByUserId(userId);
        setHistories(historiesData);
      } catch (error) {
        console.log(`Lỗi khi tải lịch sử tại ${usingPage}: `, error);
        toast.error("Lỗi khi tải lịch sử");
      }
    },
    [usingPage],
  );

  const fetchHistoryById = useCallback(
    async (historyId) => {
      try {
        const historyData = await historyService.getHistoryById(historyId);
        setCurrentHistory(historyData);
      } catch (error) {
        console.log(`Lỗi khi tải chi tiết lịch sử tại ${usingPage}: `, error);
        toast.error("Lỗi khi tải chi tiết lịch sử");
      }
    },
    [usingPage],
  );

  return {
    histories,
    currentHistory,
    fetchHistoryByUserId,
    fetchHistoryById,
  };
};

export default useHistory;
