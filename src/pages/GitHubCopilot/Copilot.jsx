import React from 'react';
import styles from './Copilot.module.css';

const Copilot = () => {
  return (
    <div className={styles.copilot}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>GitHub Copilot</h1>
          <p>Your AI pair programmer</p>
          <button className={styles.tryButton}>Try Copilot</button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        {/* Feature 1 */}
        <div className={styles.feature}>
          <h2>Code Suggestions</h2>
          <p>Get suggestions for whole lines or entire functions right inside VS Code.</p>
          <div className={styles.codeExample}>
            <pre>
              <code>
{`function calculateTotal(items) {
  // Copilot suggests:
  return items.reduce((total, item) => total + item.price, 0);
}`}
              </code>
            </pre>
          </div>
        </div>

        {/* Feature 2 */}
        <div className={styles.feature}>
          <h2>Natural Language to Code</h2>
          <p>Turn comments into code with AI-powered suggestions.</p>
          <div className={styles.codeExample}>
            <pre>
              <code>
{`// Sort array of numbers in ascending order
numbers.sort((a, b) => a - b);`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <h2>Pricing Plans</h2>
        <div className={styles.pricingCards}>
          {/* Individual Plan */}
          <div className={styles.pricingCard}>
            <h3>Individual</h3>
            <div className={styles.price}>$10</div>
            <p className={styles.period}>per month</p>
            <ul>
              <li>AI code suggestions</li>
              <li>Works in VS Code</li>
              <li>Multiple languages support</li>
            </ul>
            <button>Start Free Trial</button>
          </div>

          {/* Enterprise Plan */}
          <div className={`${styles.pricingCard} ${styles.enterprise}`}>
            <h3>Enterprise</h3>
            <div className={styles.price}>Custom</div>
            <p className={styles.period}>per seat/month</p>
            <ul>
              <li>Everything in Individual</li>
              <li>Team management</li>
              <li>Advanced security</li>
              <li>Priority support</li>
            </ul>
            <button>Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Copilot;
