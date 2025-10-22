import { OrderStatus } from '@/data/sample-data';
import React from 'react';

interface OrderBadgeProps {
  statustype: OrderStatus;
}

const colorMap = {
  [OrderStatus.IN_PROGRESS]: '#8A8CD9',
  [OrderStatus.COMPLETE]: '#4AA785',
  [OrderStatus.PENDING]: '#59A8D4',
  [OrderStatus.APPROVED]: '#FFC555',
  [OrderStatus.REJECTED]: 'var(--muted-foreground)',
};

const OrderBadge: React.FC<OrderBadgeProps> = ({ statustype }) => {
  const color = colorMap[statustype];
  return (
    <div className={`${colorMap[statustype]} flex items-center `} style={{ color }}>
      <span className="w-4 h-4 flex items-center justify-center">
        <span className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: color }} />
      </span>
      {statustype}
    </div>
  );
};

export default OrderBadge;
