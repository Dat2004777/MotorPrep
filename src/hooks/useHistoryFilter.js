import { historyFilterData } from "@/lib/data";
import { useState, useMemo } from "react";

const useHistoryFilter = (histories) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState(historyFilterData.all);
  const [dateSort, setDateSort] = useState(historyFilterData.all);

  const filteredAndSortedHistories = useMemo(() => {
    let result = [...histories];

    if (searchTerm.trim() !== "") {
      result = result.filter((item) =>
        item.examTitle.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (statusFilter === historyFilterData.true) {
      result = result.filter((item) => item.isPassed === true);
    } else if (statusFilter === historyFilterData.false) {
      result = result.filter((item) => item.isPassed === false);
    }

    if (dateSort === historyFilterData.newest) {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (dateSort === historyFilterData.oldest) {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return result;
  }, [histories, searchTerm, statusFilter, dateSort]);

  return {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    dateSort,
    setDateSort,
    filteredAndSortedHistories,
  };
};

export default useHistoryFilter;
