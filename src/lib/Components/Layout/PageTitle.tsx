import { Container, Flex, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { To, useNavigate } from "react-router-dom";

export type PageTitleProps = {
  title?: string;
  prevRoute?: string | number;
};

function PageTitle(props: PageTitleProps) {
  const { title, prevRoute } = props;

  const navigate = useNavigate();

  return (
    <Container fluid p={0} m={0}>
      <Flex justify={"start"} m={0} gap={"lg"}>
        {prevRoute && (
          <IconArrowLeft
            color="white"
            cursor={"pointer"}
            onClick={() => navigate(prevRoute as To)}
          />
        )}
        <Text c="white" fw={"bolder"}>
          {title}
        </Text>
      </Flex>
    </Container>
  );
}

export default PageTitle;
