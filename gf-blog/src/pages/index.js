import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { Typography, Grid, Button } from "@material-ui/core";
import { useTrail, animated, useSpring } from "react-spring";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography display={"inline"} gutterBottom>
            Social Media:
          </Typography>
        </Grid>

        <Grid item>
          <a href="https://github.com/ToBeABetter">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Grid>
      </Grid>
    </animated.div>
  );
}

const Home = function () {
  const { siteConfig } = useDocusaurusContext();
  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Grid container spacing={2} style={{ padding: "5%" }} className="hero">
          {/*Personal Intro */}
          <Grid item xs={12} lg={6} className="homeIntro">
            <animated.div style={animatedTexts[0]}>
              <Typography variant="h2" gutterBottom>
                <Translate>Hello! I am</Translate>
                <span className="intro__name"> {siteConfig.title}</span>
                {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
              </Typography>
            </animated.div>
            <animated.div style={animatedTexts[1]}>
              <Typography variant="body1">
                <Translate>A positive young man</Translate>{" "}
              </Typography>
            </animated.div>
            &nbsp;
            <animated.div style={animatedTexts[2]}>
              <Typography variant="h6" gutterBottom>
                <Translate>My Skills:</Translate>
              </Typography>
              <Typography variant="body1" gutterBottom>
                React.js、React Native、Node.js、Material UI、JavaScript、HTML5
                etc.
              </Typography>
            </animated.div>
            &nbsp;
            <animated.p style={animatedTexts[3]}>
              <Button
                style={{ textTransform: "none" }}
                color="primary"
                variant="outlined"
                size="small"
              >
                <Translate>My Resume</Translate>
              </Button>
            </animated.p>
            <SocialLinks animatedProps={animatedTexts[4]} />
          </Grid>

          <Grid item xs={12} lg={6} className="homeImg">
            {/* <img src={useBaseUrl(image)} className="image" /> */}
            <animated.img
              src={useBaseUrl("img/programming.svg")}
              style={animatedHero}
            />
          </Grid>
        </Grid>
      </main>
    </Layout>
  );
};

export default Home;
