import { categoryData } from "@/lib/data";
import { useState, useMemo } from "react";

const useQuestionFilter = (questions, selectedIds = []) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(categoryData.all);
  const [typeFilter, setTypeFilter] = useState(categoryData.all);
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);

  const filteredQuestions = useMemo(() => {
    let result = [...questions];

    if (searchTerm.trim() !== "") {
      result = result.filter((q) =>
        q.questionText.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (categoryFilter !== categoryData.all) {
      result = result.filter(
        (q) => categoryData[q.category] === categoryFilter,
      );
    }

    if (typeFilter === categoryData.isCritical) {
      result = result.filter((q) => q.isCritical === true);
    } else if (typeFilter === categoryData.normal) {
      result = result.filter((q) => q.isCritical === false);
    }

    if (showSelectedOnly) {
      result = result.filter((q) => selectedIds.includes(q.id));
    }

    return result;
  }, [
    questions,
    searchTerm,
    categoryFilter,
    typeFilter,
    showSelectedOnly,
    selectedIds,
  ]);

  return {
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    typeFilter,
    setTypeFilter,
    showSelectedOnly,
    setShowSelectedOnly,
    filteredQuestions,
  };
};

export default useQuestionFilter;
