import { useState } from "react";
import { itemsPageLimit } from "@/lib/data";

const usePagination = (items) => {
  const [page, setPage] = useState(1);
  const totalItems = items.length;

  const totalPages = Math.ceil(totalItems / itemsPageLimit);

  const visibleData = items.slice(
    (page - 1) * itemsPageLimit,
    page * itemsPageLimit,
  );

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return {
    page,
    setPage,
    totalPages,
    visibleData,
    handlePrev,
    handleNext,
    handlePageChange,
  };
};

export default usePagination;
