//import Image from "next/image";
import AuthorStyles from "@styles/Author.module.css";
import TypographyStyles from "@styles/Typography.module.scss";
import ContentWrapper from "@components/ContentWrapper";

import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useColorMode,
  SimpleGrid,
  GridItem,
  Spacer,
  Icon,
  Button,
  VStack,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

function renderTwitter(username) {
  return (
    <a
      className={`${AuthorStyles.author__linkText}`}
      href={`https://twitter.com/${username}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      Twitter
    </a>
  );
}

function renderTwitch(username) {
  return (
    <a
      className={`${AuthorStyles.author__linkText}`}
      href={`https://twitch.tv/${username}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      Twitch
    </a>
  );
}

function renderGitHub(username) {
  return (
    <a
      className={`${AuthorStyles.author__linkText}`}
      href={`https://github.com/${username}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      GitHub
    </a>
  );
}

function renderWebsite(url) {
  return (


      
    
    <div>
      <Flex verticalAlign="center">
       <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`} width="15"/>

      <a
        className={`${AuthorStyles.author__linkText}`}
        href={url}
        target="_blank"
        rel="nofollow noreferrer"
      >
       
        
       

        Website
      </a>
      </Flex>
    </div>
  
  );
}

export default function Author(props) {
  const { author } = props;
  const hasLinks =
    author.twitterUsername ||
    author.twitchUsername ||
    author.gitHubUsername ||
    author.websiteUrl;
  return (
    <>
      <ContentWrapper>
        <div className={AuthorStyles.author}>
          <div className={AuthorStyles.author__imgContainer}>
            <img
              className={AuthorStyles.author__img}
              src={`${author.image.url}?w=350`}
              alt={author.image.description}
              height={author.image.height}
              width="200"
            />
          </div>
          <div className={AuthorStyles.author__detailsContainer}>
            <h2 className={AuthorStyles.author__name}>{author.name}</h2>
            <p className={AuthorStyles.author__description}>
              {author.description}
            </p>
            {hasLinks && (
              <div className={AuthorStyles.author__links}>
                {author.twitterUsername &&
                  renderTwitter(author.twitterUsername)}
                {author.twitchUsername && renderTwitch(author.twitchUsername)}
                {author.gitHubUsername && renderGitHub(author.gitHubUsername)}
                {author.websiteUrl && renderWebsite(author.websiteUrl)}
              </div>
            )}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
