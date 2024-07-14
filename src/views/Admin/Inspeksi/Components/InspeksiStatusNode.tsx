import { InspeksiStatus } from "@/lib/models/Inspeksi/inspeksi";
import { Badge } from "@mantine/core";
import {
  IconCheck,
  IconExclamationCircle,
  IconSettings,
  IconSparkles,
  IconWash,
  IconZoom,
} from "@tabler/icons-react";

function InspeksiStatusNode({ status }: { status: InspeksiStatus }) {
  if (!status) return;

  switch (status) {
    case InspeksiStatus.BARU:
      return (
        <Badge color="blue" leftSection={<IconExclamationCircle />}>
          Mobil Baru
        </Badge>
      );
    case InspeksiStatus.CUCI:
      return (
        <Badge color="blue" leftSection={<IconWash />}>
          CUCI Mobil
        </Badge>
      );
    case InspeksiStatus.POLES:
      return (
        <Badge color="blue" leftSection={<IconSparkles />}>
          POLES Mobil
        </Badge>
      );
    case InspeksiStatus.BENGKEL:
      return (
        <Badge color="blue" leftSection={<IconSettings />}>
          SERVIS Mobil
        </Badge>
      );
    case InspeksiStatus.INSPEKSI:
      return (
        <Badge color="blue" leftSection={<IconZoom />}>
          Inspeksi Mobil
        </Badge>
      );
    case InspeksiStatus.SELESAI:
      return (
        <Badge color="green" leftSection={<IconCheck />}>
          Selesai
        </Badge>
      );
  }
}

export default InspeksiStatusNode;
