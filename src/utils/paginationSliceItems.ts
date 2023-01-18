const ITEMS_PER_PAGE = 4;

export const paginationSliceItems = (currentPage: number, length: number) => {
  const fromGameItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const toGameItem =
    currentPage === Math.ceil(length / ITEMS_PER_PAGE)
      ? length
      : currentPage * ITEMS_PER_PAGE;
  return [fromGameItem, toGameItem]
}