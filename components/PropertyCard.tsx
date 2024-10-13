import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface PropertyCardProps {
  status: string;
  country: string;
  company: string;
  address: string;
  totalPrice: number;
  tokenPrice: number;
  expectedIncome: number;
  incomeStartDate: string;
  incomePerToken: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  status,
  country,
  company,
  address,
  totalPrice,
  tokenPrice,
  expectedIncome,
  incomeStartDate,
  incomePerToken,
}) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">{address}</CardTitle>
        <div className="text-sm text-gray-500">{status} | {country} | {company}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <div className="font-semibold">Total Price</div>
            <div>${totalPrice.toLocaleString()}</div>
          </div>
          <div>
            <div className="font-semibold">Token Price</div>
            <div>${tokenPrice.toFixed(2)}</div>
          </div>
          <div>
            <div className="font-semibold">Expected Income</div>
            <div>{expectedIncome.toFixed(2)}%</div>
            <div className="text-xs text-gray-500">Not including capital appreciation</div>
          </div>
          <div>
            <div className="font-semibold">Income Start Date</div>
            <div>{incomeStartDate}</div>
          </div>
          <div>
            <div className="font-semibold">Income per Token</div>
            <div>${incomePerToken.toFixed(2)} / year</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Property</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
