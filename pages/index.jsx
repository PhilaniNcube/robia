import { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import ImageGrid from '../components/Home/ImageGrid';
import NewHero from '../components/Home/NewHero';

export default function Home() {
  return (
    <Fragment>
      <NewHero />
      <ImageGrid />
    </Fragment>
  );
}
