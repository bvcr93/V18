import React from 'react'
import { campingItems } from '../data';
import { useMockState } from '../hooks/useMockState';

type Props = {
    params: {
      category: string;
    };
  };
  

export const DetailsDescription = ({params: { category }}:Props) => {
    const { data, loading, error } = useMockState(
        campingItems.find((item) => item.id.toString() === category),
        true
      );
  return (
    <div>{`Equipment / ${category}`}</div>
  )
}
