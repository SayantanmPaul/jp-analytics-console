'use client';

import { orderListColumns } from '@/components/order-list/columns';
import { OrderDataTable } from '@/components/order-list/OrderTable';
import DashboardHeader from '@/components/shared/Header';
import { useGetMockOrders } from '../../../../api/apiClient';

const OrderList = () => {
  const { data: sampleOrderList, loading } = useGetMockOrders();

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full h-full p-7">
      <DashboardHeader label="Order List" />
      <OrderDataTable columns={orderListColumns} data={sampleOrderList} isLoading={loading} />
    </div>
  );
};

export default OrderList;
