import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; 
import img1 from '../../../static/img/1.png'; // Adjust the relative path as needed
import img2 from '../../../static/img/2.jpg'; // Adjust the relative path as needed
import img3 from '../../../static/img/3.PNG'; // Adjust the relative path as needed

const FeatureList = [
  {
    title: 'Fácil de usar',
    imgSrc: img3,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Foco no que importa', 
    imgSrc: img2,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Tecnologia Fiori & UI5',
    imgSrc: img1,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc}  className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  ); //
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <section className={styles.features}></section>
        <div className="row" >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
