import {
  PenjualanModel,
  PenjualanStatus,
  metodePembayaran,
} from "@/lib/models/penjualan/Penjualan";
import { Button, Modal, Select, Stack } from "@mantine/core";
import { Form } from "@mantine/form";

export interface PenjualanStatusModalProps {
  opened: boolean;
  handleCloseModal: () => void;
  handlePenjualanStatus: (values: any) => void;
  selectedPenjualan?: PenjualanModel | undefined | null;
  formModal: any;
}

function PenjualanStatusModal(props: PenjualanStatusModalProps) {
  const {
    opened,
    handleCloseModal,
    handlePenjualanStatus,
    formModal,
    selectedPenjualan,
  } = props;

  const status = [
    PenjualanStatus.CHECKING,
    PenjualanStatus.MOBIL_DISERAHKAN,
    PenjualanStatus.SELESAI,
    PenjualanStatus.BARU,
    PenjualanStatus.PELUNASAN_DP,
    PenjualanStatus.MENUNGGU_SURAT_PENCAIRAN,
    PenjualanStatus.TIDAK_SANGGUP_PENAMBAHAN_DP,
  ];

  if (selectedPenjualan?.metodePembayaran === metodePembayaran.KREDIT) {
    status.push(
      PenjualanStatus.PANJAR,
      PenjualanStatus.SURVEY,
      PenjualanStatus.MENUNGGU_RESPON,
      PenjualanStatus.PENAMBAHAN_DP,
      PenjualanStatus.MENERIMA_PENAMBAHAN_DP
    );
  }

  if (selectedPenjualan?.metodePembayaran === metodePembayaran.CASH) {
    status.push(PenjualanStatus.DITERIMA, PenjualanStatus.NEGOSIASI);
  }

  return (
    <Modal
      title={"Ubah Status Penjualan"}
      opened={opened}
      onClose={handleCloseModal}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Form
        form={formModal}
        onSubmit={(values) => handlePenjualanStatus(values)}
      >
        <Stack>
          <Select
            data-autofocus
            label="Status Penjualan"
            placeholder="Pilih Status Penjualan"
            data={status}
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

export default PenjualanStatusModal;
