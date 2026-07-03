import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const CommonPagination = ({
  page,
  totalPages,
  onClickPrev,
  onClickNext,
  onClickPageChange,
}) => {
  const generatePages = () => {
    const pages = [];

    if (totalPages < 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page < 4) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (page > totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", page, "...", totalPages);
      }
    }

    return pages;
  };

  const pagesToShow = generatePages();

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={page == 1 ? undefined : onClickPrev}
              className={cn(
                "cursor-pointer",
                page === 1 && "pointer-events-none opacity-50",
              )}
            />
          </PaginationItem>

          {pagesToShow.map((item, index) => (
            <PaginationItem key={index}>
              {item === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => {
                    if (item !== page) onClickPageChange(item);
                  }}
                  isActive={page === item}
                  className="cursor-pointer"
                >
                  {item}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={page === totalPages ? undefined : onClickNext}
              className={cn(
                "cursor-pointer",
                page === totalPages && "pointer-events-none opacity-50",
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CommonPagination;
