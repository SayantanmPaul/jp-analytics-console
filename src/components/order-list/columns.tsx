'use client';

import { Icons } from '@/assets/icons';
import { OrdersProps } from '@/data/sample-data';
import { ColumnDef } from '@tanstack/react-table';
import UserAvatar from '../shared/UserAvatar';
import { Checkbox } from '../ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import OrderBadge from './OrderBadge';

export const orderListColumns: ColumnDef<OrdersProps>[] = [
  {
    id: 'select',
    enableSorting: false,
    enableHiding: false,
    enableColumnFilter: false,
    header: ({ table }) => (
      <span className="px-1">
        <Checkbox
          aria-label="Select all"
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      </span>
    ),
    cell: ({ row }) => (
      <span className="px-1">
        <Checkbox
          aria-label="Select row"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          className="px-1"
        />
      </span>
    ),
  },
  {
    accessorKey: 'id',
    header: () => <span className="text-muted-foreground font-normal">Order ID</span>,
    cell: ({ row }) => <span>{row.original.id}</span>,

    sortingFn: (rowA, rowB, columnId) => {
      const a = Number(rowA.getValue(columnId));
      const b = Number(rowB.getValue(columnId));
      return a === b ? 0 : a > b ? 1 : -1;
    },
  },
  {
    accessorKey: 'user',
    header: () => <p className="text-muted-foreground font-normal ">User</p>,
    accessorFn: (row) => row.user.name,
    filterFn: (row, columnId, filterValue) => {
      const userName = row.original.user.name.toLowerCase();
      return userName.includes(filterValue.toLowerCase());
    },
    cell: ({ row }) => {
      const { avatar, name } = row.original.user;
      return (
        <div className="">
          <UserAvatar user={{ image: avatar, name }} />
        </div>
      );
    },
    enableGlobalFilter: true,
  },
  {
    accessorKey: 'project',
    header: () => <p className="text-muted-foreground font-normal">Project</p>,
    accessorFn: (row) => row.project,
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className="">
          <span>{row.original.project}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'address',
    header: () => <p className="text-muted-foreground font-normal">Address</p>,
    accessorFn: (row) => row.address,
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className="">
          <span>{row.original.address}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: () => <p className="text-muted-foreground font-normal">Date</p>,
    accessorFn: (row) => row.date,
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className=" text-primary flex items-center space-x-1">
          <Icons.calendarBlank className="w-4 h-4" />
          <span>{row.original.date}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: () => <p className="text-muted-foreground font-normal">Status</p>,
    accessorFn: (row) => row.status,
    enableGlobalFilter: true,
    cell: ({ row }) => (
      <div className="py-2.5">
        <OrderBadge statustype={row.original.status} />
      </div>
    ),
    filterFn: 'arrIncludesSome',
  },
  {
    accessorKey: 'action',
    header: '',
    cell: ({ row }) => {
      const selected = row.getIsSelected();
      if (!selected) return <div className="w-8" />;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="h-4 flex justify-center items-center">
            <Icons.threeDots className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-primary-foreground border-secondary hover:cursor-pointer"
          >
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Change Status</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    maxSize: 20,
  },
];
