"use client";
import CardHorizontalCopy from '@/app/_components/Cards/CardHorizontal/CardHorizontalCopy';
import '../../globals.css';
import styles from './page.module.css';
import data from '../../_data.json';
import GoToResumeButton from '@/app/_components/FindOutMoreButton/GoToResumeButton';
import { useViewport } from '@/app/_hooks';
import CardImageCopy from '@/app/_components/Cards/CardImageCopy/CardImageCopy';

const Page = () => {
  const { width } = useViewport();
  return (
    <div className='pageContainer'>
      <section className={styles.container}>
        {width > 600
          ? (
            <>
              <CardHorizontalCopy
                title="Front End Services"
                copy={data.pinFE}
              />
              <CardHorizontalCopy
                title="Backend Services"
                copy={data.pinBE}
              />
              <CardHorizontalCopy
                title="Miscellaneous"
                copy={data.pinMisc}
              />
            </>
        ) : (
          <>
            <CardImageCopy
                title="Front End Services"
                copy={data.pinFE}
              />
            <CardImageCopy
              title="Backend Services"
              copy={data.pinBE}
            />
            <CardImageCopy
              title="Miscellaneous"
              copy={data.pinMisc}
            />
          </>
        )}
      </section>
      <section>
        <GoToResumeButton/>
      </section>
    </div>
  );
};

export default Page;