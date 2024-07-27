import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { getRoleData, getUserData } from "@/lib/utils/LocalStorage";
import { Badge, Flex, Paper, Text, rem } from "@mantine/core";
import { IconCircleKey } from "@tabler/icons-react";

function AdminHome() {
	const userData = getUserData();
	const roleData = getRoleData();

	usePageTitle({ title: "Admin Home" });

	return (
		<Paper
			w={"100%"}
			shadow="sm"
			p="md">
			<Flex
				direction={"column"}
				gap={rem(10)}>
				<Text>
					Hello, Welcome Back <span className="font-bold">{userData.name}</span>
				</Text>
				<Badge
					py="sm"
					size="sm"
					pr={rem(15)}
					leftSection={<IconCircleKey />}>
					<Text size="sm">{roleData.roleName}</Text>
				</Badge>
			</Flex>
		</Paper>
	);
}

export default AdminHome;
