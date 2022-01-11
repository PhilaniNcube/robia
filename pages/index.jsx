import { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import ImageGrid from '../components/Home/ImageGrid';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <ImageGrid />
    </Fragment>
  );
}
