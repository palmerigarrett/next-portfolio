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
                title="Members Site Team"
                copy={data.ms}
              />
              <CardHorizontalCopy
                title="Azure Migration Team"
                copy={data.azure}
              />
              <CardHorizontalCopy
                title="Miscellaneous"
                copy={data.misc}
              />
            </>
          ) : (
            <>
              <CardImageCopy
                title="Members Site Team"
                copy={data.ms}
              />
              <CardImageCopy
                title="Azure Migration Team"
                copy={data.azure}
              />
              <CardImageCopy
                title="Miscellaneous"
                copy={data.misc}
              />
            </>
          )
        }
      </section>
      <section>
        <GoToResumeButton/>
      </section>
    </div>
  );
};

export default Page;