// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const [urdu, setUrdu] = useState(false);

  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="AI-native textbook for Physical AI & Humanoid Robotics"
    >
      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.hero}>
          <h1>
            {urdu
              ? 'فزیکل اے آئی اور ہیومینائیڈ روبوٹکس'
              : 'Physical AI & Humanoid Robotics'}
          </h1>

          <p>
            {urdu
              ? 'مصنوعی ذہانت کو فزیکل دنیا میں لانے والا جدید نصاب'
              : 'An AI-native textbook bridging intelligence with the physical world'}
          </p>

          <div className={styles.heroButtons}>
            <a href="/docs/intro" className={styles.primaryBtn}>
              Start Learning
            </a>
            <a href="/signin" className={styles.secondaryBtn}>
              Sign In
            </a>
            <button
              className={styles.urduToggle}
              onClick={() => setUrdu(!urdu)}
            >
              {urdu ? 'English' : 'اردو'}
            </button>
          </div>
        </section>

        {/* CHATBOT PREVIEW */}
        <section className={styles.chatbot}>
          <h2>AI Tutor (Preview)</h2>
          <div className={styles.chatbox}>
            <p className={styles.ai}>🤖 AI: Ask me anything about ROS 2</p>
            <p className={styles.user}>👤 User: What is a ROS Node?</p>
            <p className={styles.ai}>
              🤖 AI: A ROS node is a process that performs computation in a robot system.
            </p>
            <span className={styles.note}>
              (Full AI tutor unlocked after sign in)
            </span>
          </div>
        </section>

        {/* MODULES */}
        <section className={styles.modules}>
          <h2>Course Modules</h2>
          <div className={styles.grid}>
            <div className={styles.card}>Physical AI Foundations</div>
            <div className={styles.card}>ROS 2 Nervous System</div>
            <div className={styles.card}>Simulation & Digital Twins</div>
            <div className={styles.card}>NVIDIA Isaac Platform</div>
            <div className={styles.card}>Vision-Language-Action</div>
            <div className={styles.card}>Humanoid Robotics</div>
          </div>
        </section>

      </main>
    </Layout>
  );
}

