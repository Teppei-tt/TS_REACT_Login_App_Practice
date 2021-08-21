import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={5} borderRadius="sm" shadow="md">
        <Heading as="h1" size="md" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        {/* Stackは囲った要素を等間隔に配置するときに便利 */}
        <Stack spacing={5} py={4} px={12}>
          <Input placeholder="ユーザーID" />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
