import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../App/hooks/useAppDispatch';
import { useAppSelector } from '../App/hooks/useAppSelector';
import { Board } from '../../components/Board';
import { Grid } from '../../components/Grid';
import { Image } from '../../components/Image';
import { addNumber, resetStore } from './state/reducer';
import { selectAllNumbers } from './state/selectors';
import { getLast5Numbers } from './utils/getLast5Numbers';
import { getSumFromArray } from './utils/getSumFromArray';
import { RandomNumbersIFrame, SteamdbLogo } from './types';
import { formatArrayToString } from './utils/formatArrayToString';
import { getLast10Numbers } from './utils/getLast10Numbers';
import { getAverageFromArray } from './utils/getAverageFromArray';

function RandomNumbers() {
  const dispatch = useAppDispatch();
  const allNumbers = useAppSelector(selectAllNumbers);

  const [steamdbLogos, setSteamdbLogos] = useState<SteamdbLogo[] | null>(null)
  const [currentSteamdbLogo, setCurrentSteamdbLogo] = useState<SteamdbLogo | null>(null)

  const messageListener = useCallback((e: MessageEvent<RandomNumbersIFrame>) => {
    if (e.origin === 'https://assets.skilldnsproc.com' && e.data.randomNumber) {
      dispatch(addNumber(e.data.randomNumber))

      if (!!steamdbLogos) {
        setCurrentSteamdbLogo(steamdbLogos[e.data.randomNumber])
      }
    }
  }, [dispatch, steamdbLogos])

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch("https://assets.skilldnsproc.com/career/home-task/steamdb.small.json", {signal})
    .then(response => response.json())
    .then(data => setSteamdbLogos(data))
    
    return () => {
      abortController.abort();
    };
  }, [])

  useEffect(() => {
    window.addEventListener('message', messageListener);
    
    return () => window.removeEventListener('message', messageListener)
  }, [messageListener])

  const last5Numbers = getLast5Numbers(allNumbers)

  const last10Numbers = getLast10Numbers(allNumbers)

  const handleReset = () => {
    dispatch(resetStore())
  }

  return (
    <>
    <button type='button' onClick={handleReset}>Reset</button>
    <Grid>
      <Grid.Item title='Last 5 Numbers'><Board>{formatArrayToString(last5Numbers)}</Board></Grid.Item>
      <Grid.Item title='Counter'><Board>{getSumFromArray(allNumbers)}</Board></Grid.Item>
      <Grid.Item title='Average of last 10 numbers'><Board>{getAverageFromArray(last10Numbers)}</Board></Grid.Item>
      <Grid.Item title='Steam db'><Board>{!!currentSteamdbLogo && <Image src={currentSteamdbLogo.image}/>}</Board></Grid.Item>
      <Grid.Item title='Iframe'><iframe title='Random numbers' src='https://assets.skilldnsproc.com/career/home-task/random.html' width="300" height="300"></iframe></Grid.Item>
    </Grid>
    </>
  );
}

export default RandomNumbers;
