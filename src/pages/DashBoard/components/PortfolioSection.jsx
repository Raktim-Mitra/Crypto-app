import { HStack, Icon, Stack, Text, Tag,Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle,AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack justify={"space-between"} bg={"white"} borderRadius={"xl"} p={"6"}
    align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }} >
      <HStack spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}>
      <Stack>
        <HStack color={"black.80"}>
          <Text fontSize={"sm"}>Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text textStyle={"h2"}>$ 112,542,741</Text>
      </Stack>
      <Stack>
        <HStack color={"black.80"}>
          <Text fontSize={"sm"}>Wallet Balance</Text>
        </HStack>
        <HStack spacing={"4"}
        align={{
            base: "flex-start",
            sm: "center",
          }}
          flexDir={{
            base: "column",
            sm: "row",
          }}>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">22.35741200</Text>
            <Tag colorScheme="gray" fontWeight="medium">BTC</Tag >
          </HStack>
          <HStack>
            <Text textStyle={"h2"}fontWeight="medium">1300.00</Text>
            <Tag colorScheme="gray" fontWeight="medium">INR</Tag>
          </HStack>
        </HStack>
      </Stack>
      </HStack>
      <HStack>
               <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
               <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
