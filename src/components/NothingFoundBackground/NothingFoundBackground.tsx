import React from "react";
import { Container, Title, Text, Button, Group } from "@mantine/core";
import * as classes from "./NothingFoundBackground.module.css";
import { NothingFoundIllustration } from "../NothingFoundIllustration/NothingFoundIllustration";
import { navigate } from "gatsby";

export default function NothingFoundBackground() {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <NothingFoundIllustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <Button size="md" onClick={() => navigate("/")}>
              Take me back to home page
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
