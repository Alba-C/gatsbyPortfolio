import React from 'react';
import { css } from '@emotion/react';

const About = () => {
  return (
    <section
      id="about"
      css={css`
        background-color: #f1f7ed;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          background-color: #f1f7ed;
          font-size: 1.15em;
          display: flex;
          flex-direction: column;
          padding: 25px 50px;
          @media (max-width: 768px) {
            padding: 30px 20px;
          }
        `}
      >
        <h2
          css={css`
            text-align: center;
          `}
        >
          Hi, I'm Chris.
        </h2>
        <p
          css={css`
            text-align: center;
            font-weight: bold;
          `}
        >
          Husband, dog person, all-around creative and big fan of JavaScript.
        </p>
        <p>
          In addition to making cool things with code, I have an extensive background in business development, marketing and education. I've worked for
          businesses large and small. I've managed teams, worked independently, and led week-long training sessions. Above all, I love helping people bring
          their visions to life.
        </p>

        <p>I'm never scared of a challenge, and can find a solution to any problem you throw at me.</p>
      </div>
    </section>
  );
};

export default About;
