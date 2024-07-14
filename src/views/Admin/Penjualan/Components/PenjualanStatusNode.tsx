import { PenjualanStatus } from "@/lib/models/penjualan/Penjualan";
import { Badge } from "@mantine/core";
import {
  IconCheck,
  IconClock,
  IconExclamationCircle,
  IconEyeDollar,
  IconKey,
  IconPlus,
  IconQuestionMark,
  IconUsers,
  IconX,
  IconZoom,
} from "@tabler/icons-react";

function PenjualanStatusNode({ status }: { status: PenjualanStatus }) {
  if (!status) return;

  switch (status) {
    /**
     * General
     */
    case PenjualanStatus.SELESAI:
      return (
        <Badge color="green" leftSection={<IconCheck />}>
          Selesai
        </Badge>
      );

    case PenjualanStatus.CHECKING:
      return (
        <Badge color="blue" leftSection={<IconZoom />}>
          Customer Mengecek Mobil
        </Badge>
      );

    case PenjualanStatus.MOBIL_DISERAHKAN:
      return (
        <Badge color="blue" leftSection={<IconKey />}>
          Mobil Diserahkan
        </Badge>
      );

    case PenjualanStatus.BARU:
      return (
        <Badge color="blue" leftSection={<IconExclamationCircle />}>
          Penjualan Baru
        </Badge>
      );

    /**
     * Status Kredit
     */
    case PenjualanStatus.PANJAR:
      return (
        <Badge color="blue" leftSection={<IconUsers />}>
          Panjar
        </Badge>
      );

    case PenjualanStatus.SURVEY:
      return (
        <Badge color="blue" leftSection={<IconZoom />}>
          Survey
        </Badge>
      );

    case PenjualanStatus.MENUNGGU_RESPON:
      return (
        <Badge color="blue" leftSection={<IconQuestionMark />}>
          Menunggu Respon Pusat
        </Badge>
      );

    case PenjualanStatus.PENAMBAHAN_DP:
      return (
        <Badge color="blue" leftSection={<IconPlus />}>
          Penambahan DP
        </Badge>
      );

    case PenjualanStatus.MENERIMA_PENAMBAHAN_DP:
      return (
        <Badge color="blue" leftSection={<IconEyeDollar />}>
          Menerima Penambahan DP
        </Badge>
      );

    /**
     * Status Cash
     */
    case PenjualanStatus.DITERIMA:
      return (
        <Badge color="green" leftSection={<IconCheck />}>
          Diterima
        </Badge>
      );

    case PenjualanStatus.NEGOSIASI:
      return (
        <Badge color="blue" leftSection={<IconQuestionMark />}>
          Negosiasi
        </Badge>
      );

    /**
     * Berhasil
     */
    case PenjualanStatus.MENUNGGU_SURAT_PENCAIRAN:
      return (
        <Badge color="blue" leftSection={<IconClock />}>
          Menunggu Surat Pencairan
        </Badge>
      );

    /**
     * Gagal
     */
    case PenjualanStatus.TIDAK_SANGGUP_PENAMBAHAN_DP:
      return (
        <Badge color="red" leftSection={<IconX />}>
          Tidak Sanggup Penambahan DP
        </Badge>
      );
  }
}

export default PenjualanStatusNode;
