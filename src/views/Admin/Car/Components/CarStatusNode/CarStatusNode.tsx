import { CarModel, StatusMobil } from "@/lib/models/Car/Car";
import { Badge, Pill } from "@mantine/core";
import {
  IconCheck,
  IconCurrencyDollar,
  IconDesk,
  IconExclamationMark,
  IconEye,
  IconEyeDollar,
  IconServicemark,
  IconSettings,
} from "@tabler/icons-react";
import React from "react";

function CarStatusNode({ carRecord }: { carRecord: CarModel }) {
  if (!carRecord) return;
  const { status } = carRecord;

  switch (status) {
    case StatusMobil.NEW:
      return (
        <Badge color="blue" leftSection={<IconExclamationMark />}>
          Baru
        </Badge>
      );
    case StatusMobil.Ready:
      return (
        <Badge color="green" leftSection={<IconCheck />}>
          Siap
        </Badge>
      );
    case StatusMobil.SOLD:
      return (
        <Badge color="green" leftSection={<IconCurrencyDollar />}>
          Terjual
        </Badge>
      );
    case StatusMobil.SERVICE:
      return (
        <Badge color="orange" leftSection={<IconSettings />}>
          Sedang Diservis
        </Badge>
      );
    case StatusMobil.INSPECTION:
      return (
        <Badge color="orange" leftSection={<IconEye />}>
          Sedang Diperiksa
        </Badge>
      );
    case StatusMobil.POST:
      return (
        <Badge color="blue" leftSection={<IconEyeDollar />}>
          Sedang Dijual
        </Badge>
      );
  }
}

export default CarStatusNode;
