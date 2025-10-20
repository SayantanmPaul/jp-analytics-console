import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetTopProductsList } from '../../../api/apiClient';
import { Skeleton } from '../ui/skeleton';

const TopSellingProductsTable = () => {
  const { data: topProductsLists, loading } = useGetTopProductsList();

  return (
    <div className="w-full h-[336px] rounded-2xl bg-card flex flex-col space-y-1 p-6">
      <h3
        id="top-selling-products-heading"
        className="text-sm font-semibold leading-5 text-primary space-y-3 w-full"
      >
        Top Selling Products
      </h3>

      <div className="w-full overflow-x-auto no-scrollbar ">
        <Table className="mb-6 min-w-[614px]" aria-labelledby="top-selling-products-heading">
          <TableHeader>
            <TableRow className="h-10 hover:bg-transparent dark:hover:bg-transparent">
              <TableHead scope="col" className="text-muted-foreground text-xs leading-5 space-y-2">
                Name
              </TableHead>
              <TableHead
                scope="col"
                className="text-muted-foreground text-xs leading-5 space-y-2 px-3"
              >
                Price
              </TableHead>
              <TableHead
                scope="col"
                className="text-muted-foreground text-xs leading-5 space-y-2 px-3"
              >
                Quantity
              </TableHead>
              <TableHead
                scope="col"
                className="text-muted-foreground text-xs leading-5 space-y-2 px-3"
              >
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index} className="h-10">
                    <TableCell>
                      <Skeleton className="h-4 w-32" />
                    </TableCell>
                    <TableCell className="px-3">
                      <Skeleton className="h-4 w-9" />
                    </TableCell>
                    <TableCell className="px-3">
                      <Skeleton className="h-4 w-8" />
                    </TableCell>
                    <TableCell className="px-3">
                      <Skeleton className="h-4 w-13" />
                    </TableCell>
                  </TableRow>
                ))
              : topProductsLists.map((product, index) => (
                  <TableRow key={index} className="h-10">
                    <TableCell
                      scope="row"
                      className="lg:max-w-56 max-w-20 text-xs leading-5 font-normal"
                    >
                      {product.product_name}
                    </TableCell>
                    <TableCell scope="row" className="text-xs leading-5 font-normal px-3">
                      ${product.price.toFixed(2)}
                    </TableCell>
                    <TableCell scope="row" className="text-xs leading-5 font-normal px-3">
                      {product.quantity}
                    </TableCell>
                    <TableCell scope="row" className="text-xs leading-5 font-normal px-3">
                      ${product.amount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TopSellingProductsTable;
