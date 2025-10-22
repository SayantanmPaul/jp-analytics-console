'use client';

import { Icons } from '@/assets/icons';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { OrdersProps, OrderStatus } from '@/data/sample-data';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  Table as TanTable,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import SearchBar from '../layout/navigation/SearchBar';
import { Badge } from '../ui/badge';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
}

const FILTER_OPTIONS: OrderStatus[] = [
  OrderStatus.IN_PROGRESS,
  OrderStatus.COMPLETE,
  OrderStatus.PENDING,
  OrderStatus.APPROVED,
  OrderStatus.REJECTED,
];

type SortValue = 'none' | 'id-asc' | 'id-desc';

export function OrderDataTable<TData, TValue>({
  columns,
  data,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
      columnFilters,
      globalFilter,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: false,
  });

  return (
    <div className="w-full space-y-3">
      <div className="w-full p-2 bg-card rounded-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="cursor-pointer hover:bg-black-5 rounded-sm duration-200 ease-in-out size-7">
            <Icons.add className="w-5 h-5 size-full m-1" />
          </button>
          <FilterDropDown table={table} globalFilter={globalFilter} />
          <SortDropdown table={table} />
        </div>
        <SearchBar
          initialValue={globalFilter}
          onSearchChange={setGlobalFilter}
          containerClass="focus-within:border-black-10 border-transparent border bg-muted dark:bg-[#1C1C1C66]"
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  scope="col"
                  key={header.id}
                  className="px-3 py-2 text-xs leading-5 space-y-2"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="border-b">
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="flex flex-col gap-2 items-center justify-center h-[336px]">
                  <span className="text-sm text-muted-foreground">Loading data…</span>
                </div>
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className="rounded-lg overflow-hidden border-b border-black-5"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="pl-3 text-xs leading-5 space-y-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-12 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <PaginationSection table={table} />
    </div>
  );
}

// get current sort
function getCurrentSort(table: TanTable<OrdersProps>): SortValue {
  const s = table.getState().sorting[0];
  if (!s) return 'none';
  if (s.id === 'id' && s.desc === false) return 'id-asc';
  if (s.id === 'id' && s.desc === true) return 'id-desc';
  return 'none';
}

function applySort(table: TanTable<OrdersProps>, value: SortValue) {
  if (value === 'none') {
    table.setSorting([]);
  } else if (value === 'id-asc') {
    table.setSorting([{ id: 'id', desc: false }]);
  } else if (value === 'id-desc') {
    table.setSorting([{ id: 'id', desc: true }]);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SortDropdown = ({ table }: { table: TanTable<any> }) => {
  const value = getCurrentSort(table);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-none outline-0">
        <button
          aria-label="Sort"
          className="cursor-pointer hover:bg-black-5 rounded-sm duration-200 ease-in-out size-7"
        >
          <Icons.arrowsDownUp className="w-5 h-5 size-full m-1" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-44 bg-background border-secondary hover:cursor-pointer"
      >
        <DropdownMenuLabel className="font-semibold">Sort by</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(v) => applySort(table, v as SortValue)}
        >
          <DropdownMenuRadioItem value="none">Default order</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="id-asc">Ascending order</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="id-desc">Descending order</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const FilterDropDown = ({
  table,
  globalFilter,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: TanTable<any>;
  globalFilter: string;
}) => {
  const activeStatusFilter = (table.getColumn('status')?.getFilterValue() as string[]) || [];
  const activeFilterCount = activeStatusFilter.length + (globalFilter ? 1 : 0);
  const hasActiveFilters = activeFilterCount > 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-none outline-0">
        <button className="cursor-pointer hover:bg-black-5 rounded-sm duration-200 ease-in-out size-7 relative">
          <Icons.funnelSimple className="w-5 h-5 size-full m-1" />
          {hasActiveFilters && (
            <span className="absolute -top-1 -right-1">
              <Badge className="h-4 min-w-4  px-1 text-xs dark:bg-chart-1">
                {activeFilterCount}
              </Badge>
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-36 bg-background border-secondary hover:cursor-pointer"
      >
        <DropdownMenuLabel className="font-semibold">Select status</DropdownMenuLabel>
        {FILTER_OPTIONS.map((status) => (
          <DropdownMenuCheckboxItem
            key={status}
            className="capitalize"
            checked={activeStatusFilter.includes(status)}
            onCheckedChange={(checked) => {
              const updated = checked
                ? [...activeStatusFilter, status]
                : activeStatusFilter.filter((s) => s !== status);

              table.getColumn('status')?.setFilterValue(updated.length ? updated : undefined);
            }}
          >
            {status}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaginationSection = ({ table }: { table: TanTable<any> }) => {
  return (
    <Pagination className="justify-end">
      <PaginationContent className="flex items-center lg:space-x-2 space-x-1">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => table.previousPage()}
            aria-disabled={!table.getCanPreviousPage()}
            className={
              !table.getCanPreviousPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'
            }
          />
        </PaginationItem>

        {Array.from({ length: table.getPageCount() }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => table.setPageIndex(index)}
              isActive={table.getState().pagination.pageIndex === index}
              className="cursor-pointer border-none lg:text-sm text-xs font-normal leading-5 space-y-3"
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => table.nextPage()}
            aria-disabled={!table.getCanNextPage()}
            className={
              !table.getCanNextPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
