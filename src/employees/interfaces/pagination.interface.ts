import { NextAndPrevPages } from "./nextandprevpages.interface"

export interface Pagination {
    totalEmployees: number,
    currentPage: number,
    totalPages: number,
    limitPerPage: number,
    nextAndPrevPages: NextAndPrevPages
}