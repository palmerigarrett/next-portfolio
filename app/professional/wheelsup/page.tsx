import CardHorizontalCopy from '@/app/_components/Cards/CardHorizontal/CardHorizontalCopy';
import '../../globals.css';
import styles from './page.module.css';
import data from '../../_data.json';
import GoToResumeButton from '@/app/_components/FindOutMoreButton/GoToResumeButton';

const Page = () => {
  return (
    <div className='pageContainer'>
      <section className={styles.container}>
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
      </section>
      <section>
        <GoToResumeButton/>
      </section>
    </div>
  );
};

export default Page;