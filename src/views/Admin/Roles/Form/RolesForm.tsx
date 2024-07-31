import useRolesFormController from "./RolesFormController";
import {
	Button,
	Card,
	Checkbox,
	Divider,
	Fieldset,
	Grid,
	Group,
	TextInput,
	Textarea,
} from "@mantine/core";
import { Form } from "@mantine/form";
import { CreateRolesDto } from "@/lib/models/Roles/Roles";
import { PermissionsModel } from "@/lib/models/Auth/auth";

function RolesForm() {
	const { form, handleFormSubmit, groupedPermissions } =
		useRolesFormController();

	return (
		<Card
			p={20}
			shadow="md"
			className="flex flex-col gap-3">
			<Form
				form={form}
				onSubmit={(values: CreateRolesDto) => handleFormSubmit(values)}
				className="w-full h-full flex flex-col justify-center gap-3">
				<Fieldset legend="Details Roles">
					<Grid>
						<Grid.Col span={6}>
							<TextInput
								key={form.key("roleName")}
								label="Nama Role"
								name="roleName"
								{...form.getInputProps("roleName")}
								withAsterisk
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<Textarea
								key={form.key("roleDescription")}
								label="Deskripsi Role"
								name="roleDescription"
								{...form.getInputProps("roleDescription")}
								withAsterisk
							/>
						</Grid.Col>
					</Grid>
				</Fieldset>

				<Divider label="Permissions"></Divider>
				{Object.keys(groupedPermissions).map((group) => (
					<Fieldset
						key={group}
						legend={group}>
						<Grid>
							{groupedPermissions[group].map((permission: PermissionsModel) => (
								<Grid.Col
									span={6}
									key={permission._id}>
									<Checkbox
										label={`${permission.permissionName}`.replaceAll("_", " ")}
										value={permission._id}
										checked={form.values.permissionsId.includes(permission._id)}
										onChange={(event) => {
											const value = event.currentTarget.value;
											const permissionsId = form.values.permissionsId;
											if (permissionsId.includes(value)) {
												form.setFieldValue(
													"permissionsId",
													permissionsId.filter((id) => id !== value)
												);
											} else {
												form.setFieldValue("permissionsId", [...permissionsId, value]);
											}
										}}
									/>
								</Grid.Col>
							))}
						</Grid>
					</Fieldset>
				))}

				<Group>
					<Button type="submit">Submit</Button>
				</Group>
			</Form>
		</Card>
	);
}

export default RolesForm;
