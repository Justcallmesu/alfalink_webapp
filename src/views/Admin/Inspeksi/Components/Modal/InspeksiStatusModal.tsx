import { InspeksiStatus } from "@/lib/models/Inspeksi/inspeksi";
import { Button, Modal, Select, Stack } from "@mantine/core";
import { Form } from "@mantine/form";
import React from "react";

export interface InspeksiStatusModalProps {
  opened: boolean;
  handleCloseModal: () => void;
  handleUpdateInspeksiStatus: (values: any) => void;
  formModal: any;
}

function InspeksiStatusModal(props: InspeksiStatusModalProps) {
  const { opened, handleCloseModal, handleUpdateInspeksiStatus, formModal } =
    props;
  return (
    <Modal
      title={"Ubah Status Inspeksi"}
      opened={opened}
      onClose={handleCloseModal}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Form
        form={formModal}
        onSubmit={(values) => handleUpdateInspeksiStatus(values)}
      >
        <Stack>
          <Select
            data-autofocus
            label="Status Inspeksi"
            placeholder="Pilih Status Inspeksi"
            data={Object.values(InspeksiStatus)}
            key={formModal.key("status")}
            {...formModal.getInputProps("status")}
            clearable
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </Form>
    </Modal>
  );
}

export default InspeksiStatusModal;
