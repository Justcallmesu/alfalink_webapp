import { Flex, Text, Title } from "@mantine/core";
import { Children } from "react";
import { DataDisplayProps } from "./interface/DataDisplayProps";

function DataDisplay(props: DataDisplayProps) {
  const { children, title, titleFontSize = "1rem" } = props;
  return (
    <Flex gap={3} align={"center"}>
      <Title size={titleFontSize}>{title}</Title> : <Text>{children}</Text>
    </Flex>
  );
}

export default DataDisplay;
