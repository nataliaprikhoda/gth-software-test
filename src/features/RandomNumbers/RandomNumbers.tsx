import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../App/hooks/useAppDispatch';
import { useAppSelector } from '../App/hooks/useAppSelector';
import { Grid } from '../../components/Grid';
import { addNumber } from './state/reducer';
import { selectAllNumbers } from './state/selectors';
import { getLast5Numbers } from './utils/getLast5Numbers';
import { getSumFromArray } from './utils/getSumFromArray';
import { RandomNumbersIFrame } from './types';
import { formatArrayToString } from './utils/formatArrayToString';

function RandomNumbers() {
  const dispatch = useAppDispatch();
  const allNumbers = useAppSelector(selectAllNumbers);

  const messageListener = useCallback((e: MessageEvent<RandomNumbersIFrame>) => {
    if (e.data.randomNumber) {
      dispatch(addNumber(e.data.randomNumber))
    }
  }, [dispatch])


  useEffect(() => {
    window.addEventListener('message', messageListener);
    
    return () => window.removeEventListener('message', messageListener)
  }, [messageListener])

  const last5Numbers = getLast5Numbers(allNumbers)

  return (
    <Grid>
      <Grid.Item title='Last 5 Numbers'>{formatArrayToString(last5Numbers)}</Grid.Item>
      <Grid.Item title='Counter'>{getSumFromArray(allNumbers)}</Grid.Item>
      <Grid.Item title='Iframe'><iframe title='Random numbers' src='https://assets.skilldnsproc.com/career/home-task/random.html' width="300" height="300"></iframe></Grid.Item>
    </Grid>
  );
}

export default RandomNumbers;
