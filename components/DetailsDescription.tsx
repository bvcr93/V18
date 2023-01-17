import React from 'react'
import { campingTents } from '../app/camping/[itemId]/types';
import { useMockState } from '../hooks/useMockState';

type Props = {
    params: {
      category: string;
    };
  };
  

export const DetailsDescription = ({params: { category }}:Props) => {
    const { data } = useMockState(
        campingTents.find((item) => (item.id.toString() === category)),
        true
      );
 
  return (
    <div>
    <div>{`Equipment / ${category}`}</div>
  
    <p>{data?.desc}</p>
   
    </div>
  )
}
