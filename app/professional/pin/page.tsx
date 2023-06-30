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
      </section>
      <section>
        <GoToResumeButton/>
      </section>
    </div>
  );
};

export default Page;