import React from "react";
import useInspeksiFormController from "./InspeksiFormController";
import {
  Accordion,
  AccordionControl,
  Button,
  Card,
  Checkbox,
  Fieldset,
  Grid,
  Group,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { Form } from "@mantine/form";
import { CreateInspeksiDto } from "@/lib/models/Inspeksi/inspeksi";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";

function InspeksiForm(props: FormType) {
  const { carsData, form, handleCarSearch, handleSubmit, handleCarOnChange } =
    useInspeksiFormController();

  const { formType } = props;

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(
          values:
            | CreateInspeksiDto
            | { merk: string; warna: string; tahun: number }
        ) => handleSubmit(values as CreateInspeksiDto)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Data Mobil">
          <Grid>
            <Grid.Col span={6}>
              <Select
                searchable
                placeholder="Pilih Mobil"
                label="Mobil"
                onSearchChange={(value) => handleCarSearch(value)}
                data={carsData?.data.map((car) => ({
                  label: `${car.nama} - ${car.noPolisi}`,
                  value: car._id,
                }))}
                {...form.getInputProps("mobil")}
                onChange={(value) => handleCarOnChange(value!)}
                readOnly={formType === FormTypeEnum.UPDATE}
                disabled={formType === FormTypeEnum.UPDATE}
                key={form.key("mobil")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                placeholder="Merk"
                label="Merk"
                readOnly
                {...form.getInputProps("merk")}
                key={form.key("merk")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                placeholder="Warna"
                label="Warna"
                readOnly
                {...form.getInputProps("warna")}
                key={form.key("warna")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                placeholder="Tahun"
                label="Tahun"
                readOnly
                {...form.getInputProps("tahun")}
                key={form.key("tahun")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                placeholder="Catatan"
                label="Catatan"
                {...form.getInputProps("catatan")}
                key={form.key("catatan")}
              ></Textarea>
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Accordion chevronPosition="left">
          <Accordion.Item value="kelengkapan">
            <AccordionControl>Kelengkapan</AccordionControl>
            <Accordion.Panel>
              <Fieldset legend="Ketebalan Ban / Benjolan">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Ketebalan Ban / Benjolan"
                      {...form.getInputProps("ketebalanBanBenjolan.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("ketebalanBanBenjolan.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps(
                        "ketebalanBanBenjolan.description"
                      )}
                      key={form.key("ketebalanBanBenjolan.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Baut Ban (Kuat & Serasi)">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Baut Ban (Kuat & Serasi)"
                      {...form.getInputProps("bautBan.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("bautBan.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("bautBan.description")}
                      key={form.key("bautBan.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Tekanan Angin Ban (lebih/Sedikit)">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Tekanan Angin Ban (lebih/Sedikit)"
                      {...form.getInputProps("tekananAngin.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("tekananAngin.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("tekananAngin.description")}
                      key={form.key("tekananAngin.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Klakson">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Klakson"
                      {...form.getInputProps("klakson.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("klakson.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("klakson.description")}
                      key={form.key("klakson.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Karpet (Dasar/Bihun)">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Karpet (Dasar/Bihun)"
                      {...form.getInputProps("karpet.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("karpet.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("karpet.description")}
                      key={form.key("karpet.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Pemantik Api">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Pemantik Api"
                      {...form.getInputProps("pemantikApi.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("pemantikApi.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("pemantikApi.description")}
                      key={form.key("pemantikApi.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Speaker">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Speaker"
                      {...form.getInputProps("speaker.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("speaker.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("speaker.description")}
                      key={form.key("speaker.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Tutup Derek">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Tutup Derek"
                      {...form.getInputProps("tutupDerek.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("tutupDerek.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("tutupDerek.description")}
                      key={form.key("tutupDerek.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Spion Elektrik">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Spion Elektrik"
                      {...form.getInputProps("spionElektrik.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("spionElektrik.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("spionElektrik.description")}
                      key={form.key("spionElektrik.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Dongkrak & Kunci Ban">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Dongkrak & Kunci Ban"
                      {...form.getInputProps("dongkrakKunciBan.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("dongkrakKunciBan.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("dongkrakKunciBan.description")}
                      key={form.key("dongkrakKunciBan.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Buku Manual">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Buku Manual"
                      {...form.getInputProps("bukuManual.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("bukuManual.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("bukuManual.description")}
                      key={form.key("bukuManual.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Radio/TV/CD">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Radio/TV/CD"
                      {...form.getInputProps("radioTvCd.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("radioTvCd.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("radioTvCd.description")}
                      key={form.key("radioTvCd.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Antena">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Antena"
                      {...form.getInputProps("antena.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("antena.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("antena.description")}
                      key={form.key("antena.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Dop Velg">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Dop Velg"
                      {...form.getInputProps("dopVelg.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("dopVelg.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("dopVelg.description")}
                      key={form.key("dopVelg.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Kunci Serap">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Kunci Serap"
                      {...form.getInputProps("kunciSerap.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("kunciSerap.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("kunciSerap.description")}
                      key={form.key("kunciSerap.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Jok">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Jok"
                      {...form.getInputProps("jok.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("jok.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("jok.description")}
                      key={form.key("jok.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Lampu Plafon (Putih/Orange)">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Lampu Plafon (Putih/Orange)"
                      {...form.getInputProps("lampuPlafonPutihOrange.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("lampuPlafonPutihOrange.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps(
                        "lampuPlafonPutihOrange.description"
                      )}
                      key={form.key("lampuPlafonPutihOrange.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Gagang Pintu">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Gagang Pintu"
                      {...form.getInputProps("gagangPintu.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("gagangPintu.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("gagangPintu.description")}
                      key={form.key("gagangPintu.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Cat Bawah Besi + Interior">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Cat Bawah Besi + Interior"
                      {...form.getInputProps("catBawahBesi.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("catBawahBesi.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("catBawahBesi.description")}
                      key={form.key("catBawahBesi.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Sarung Jok">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Sarung Jok"
                      {...form.getInputProps("sarungJok.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("sarungJok.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("sarungJok.description")}
                      key={form.key("sarungJok.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Karpet Dasar">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Karpet Dasar"
                      {...form.getInputProps("karpetDasar.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("karpetDasar.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("karpetDasar.description")}
                      key={form.key("karpetDasar.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Karpet Mundur">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Karpet Mundur"
                      {...form.getInputProps("karpetMundur.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("karpetMundur.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("karpetMundur.description")}
                      key={form.key("karpetMundur.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Lampu Plafon">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Lampu Plafon"
                      {...form.getInputProps("lampuPlafon.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("lampuPlafon.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("lampuPlafon.description")}
                      key={form.key("lampuPlafon.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Spoiler">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Spoiler"
                      {...form.getInputProps("spoiler.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("spoiler.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("spoiler.description")}
                      key={form.key("spoiler.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Talang Air">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Talang Air"
                      {...form.getInputProps("talangAir.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("talangAir.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("talangAir.description")}
                      key={form.key("talangAir.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Pelindung Lumpur">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Pelindung Lumpur"
                      {...form.getInputProps("pelindungLumpur.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("pelindungLumpur.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("pelindungLumpur.description")}
                      key={form.key("pelindungLumpur.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Aksesoris">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Aksesoris"
                      {...form.getInputProps("aksesoris.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("aksesoris.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("aksesoris.description")}
                      key={form.key("aksesoris.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Kaca Film">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Kaca Film"
                      {...form.getInputProps("kacaFilm.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("kacaFilm.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("kacaFilm.description")}
                      key={form.key("kacaFilm.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Setir">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Setir"
                      {...form.getInputProps("setir.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("setir.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("setir.description")}
                      key={form.key("setir.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Lampu Luar (Nyala & Bening)">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Lampu Luar (Nyala & Bening)"
                      {...form.getInputProps("lampuLuarNyalaBening.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("lampuLuarNyalaBening.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps(
                        "lampuLuarNyalaBening.description"
                      )}
                      key={form.key("lampuLuarNyalaBening.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Kebersihan */}
          <Accordion.Item value="item-2">
            <AccordionControl>Kebersihan</AccordionControl>
            <Accordion.Panel>
              <Fieldset legend="Mesin">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Mesin"
                      {...form.getInputProps("mesin.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("mesin.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("mesin.description")}
                      key={form.key("mesin.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Kilat Body">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Kilat Body"
                      {...form.getInputProps("kilatBody.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("kilatBody.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("kilatBody.description")}
                      key={form.key("kilatBody.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Lampu">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Lampu"
                      {...form.getInputProps("lampu.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("lampu.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("lampu.description")}
                      key={form.key("lampu.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Celah Pintu">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Celah Pintu"
                      {...form.getInputProps("celahPintu.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("celahPintu.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("celahPintu.description")}
                      key={form.key("celahPintu.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Plafon">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Plafon"
                      {...form.getInputProps("plafon.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("plafon.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("plafon.description")}
                      key={form.key("plafon.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Bagasi">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Bagasi"
                      {...form.getInputProps("bagasi.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("bagasi.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("bagasi.description")}
                      key={form.key("bagasi.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Plastik Hitam (Cat)">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Plastik Hitam (Cat)"
                      {...form.getInputProps("plastikHitamCat.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("plastikHitamCat.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("plastikHitamCat.description")}
                      key={form.key("plastikHitamCat.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Logo">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Logo"
                      {...form.getInputProps("logo.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("logo.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("logo.description")}
                      key={form.key("logo.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Body Plastik Dalam + Topi">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Body Plastik Dalam + Topi"
                      {...form.getInputProps("bodyPlastikDalamTopi.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("bodyPlastikDalamTopi.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps(
                        "bodyPlastikDalamTopi.description"
                      )}
                      key={form.key("bodyPlastikDalamTopi.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Lubang Bensin">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Lubang Bensin"
                      {...form.getInputProps("lubangBensin.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("lubangBensin.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("lubangBensin.description")}
                      key={form.key("lubangBensin.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Dashboard + Saku">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Dashboard + Saku"
                      {...form.getInputProps("dashboardSaku.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("dashboardSaku.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("dashboardSaku.description")}
                      key={form.key("dashboardSaku.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Dongkrak">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Dongkrak"
                      {...form.getInputProps("dongkrak.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("dongkrak.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("dongkrak.description")}
                      key={form.key("dongkrak.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Sarung Jok">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Sarung Jok"
                      {...form.getInputProps("kebersihanSarungJok.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("kebersihanSarungJok.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("kebersihanSarungJok.description")}
                      key={form.key("kebersihanSarungJok.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Sabuk">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Sabuk"
                      {...form.getInputProps("sabuk.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("sabuk.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("sabuk.description")}
                      key={form.key("sabuk.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Kulit Pedal Transmisi">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Kulit Pedal Transmisi"
                      {...form.getInputProps("kulitPedalTransmisi.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("kulitPedalTransmisi.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("kulitPedalTransmisi.description")}
                      key={form.key("kulitPedalTransmisi.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Cat Lebih">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Cat Lebih"
                      {...form.getInputProps("catLebih.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("catLebih.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("catLebih.description")}
                      key={form.key("catLebih.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Cat Bawah">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Cat Bawah"
                      {...form.getInputProps("catBawah.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("catBawah.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("catBawah.description")}
                      key={form.key("catBawah.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Karat">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Karat"
                      {...form.getInputProps("karat.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("karat.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("karat.description")}
                      key={form.key("karat.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <AccordionControl>Mesin</AccordionControl>
            <Accordion.Panel>
              <Fieldset legend="Oli">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Oli"
                      {...form.getInputProps("oli.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("oli.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("oli.description")}
                      key={form.key("oli.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Air Radiator">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Air Radiator"
                      {...form.getInputProps("airRadiator.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("airRadiator.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("airRadiator.description")}
                      key={form.key("airRadiator.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Air Wiper">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Air Wiper"
                      {...form.getInputProps("airWiper.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("airWiper.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("airWiper.description")}
                      key={form.key("airWiper.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Suara Mesin">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Suara Mesin"
                      {...form.getInputProps("suaraMesin.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("suaraMesin.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("suaraMesin.description")}
                      key={form.key("suaraMesin.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Van Belt">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Van Belt"
                      {...form.getInputProps("vanBelt.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("vanBelt.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("vanBelt.description")}
                      key={form.key("vanBelt.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Minyak Rem">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Minyak Rem"
                      {...form.getInputProps("minyakRem.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("minyakRem.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("minyakRem.description")}
                      key={form.key("minyakRem.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Filter Udara Mesin & AC">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Filter Udara Mesin & AC"
                      {...form.getInputProps("filterUdaraMesinAc.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("filterUdaraMesinAc.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("filterUdaraMesinAc.description")}
                      key={form.key("filterUdaraMesinAc.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Air Aki & Penjepit Aki">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Air Aki & Penjepit Aki"
                      {...form.getInputProps("airAkiPenjepitAki.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("airAkiPenjepitAki.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("airAkiPenjepitAki.description")}
                      key={form.key("airAkiPenjepitAki.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Karat Mesin">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Karat Mesin"
                      {...form.getInputProps("karatMesin.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("karatMesin.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("karatMesin.description")}
                      key={form.key("karatMesin.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Peredam Suara & Panas">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Peredam Suara & Panas"
                      {...form.getInputProps("peredamSuaraPanas.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("peredamSuaraPanas.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("peredamSuaraPanas.description")}
                      key={form.key("peredamSuaraPanas.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Cekak/Kancing Luar-Dalam">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Cekak/Kancing Luar-Dalam"
                      {...form.getInputProps("cekakKancingLuarDalam.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("cekakKancingLuarDalam.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps(
                        "cekakKancingLuarDalam.description"
                      )}
                      key={form.key("cekakKancingLuarDalam.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Kabel">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Kabel"
                      {...form.getInputProps("kabel.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("kabel.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("kabel.description")}
                      key={form.key("kabel.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Minyak Kilat">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Minyak Kilat"
                      {...form.getInputProps("minyakKilat.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("minyakKilat.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("minyakKilat.description")}
                      key={form.key("minyakKilat.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Power Steering">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Power Steering"
                      {...form.getInputProps("powerSteering.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("powerSteering.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("powerSteering.description")}
                      key={form.key("powerSteering.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Transmisi">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Transmisi"
                      {...form.getInputProps("transmisi.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("transmisi.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("transmisi.description")}
                      key={form.key("transmisi.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Rem">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Rem"
                      {...form.getInputProps("rem.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("rem.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("rem.description")}
                      key={form.key("rem.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Gardan">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Gardan"
                      {...form.getInputProps("gardan.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("gardan.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("gardan.description")}
                      key={form.key("gardan.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="AC (Air Conditioner)">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="AC (Air Conditioner)"
                      {...form.getInputProps("airConditioner.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("airConditioner.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("airConditioner.description")}
                      key={form.key("airConditioner.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Lampu Indikator">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Lampu Indikator"
                      {...form.getInputProps("lampuIndikator.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("lampuIndikator.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("lampuIndikator.description")}
                      key={form.key("lampuIndikator.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Shock Pintu">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Shock Pintu"
                      {...form.getInputProps("shockPintu.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("shockPintu.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("shockPintu.description")}
                      key={form.key("shockPintu.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Wiper & Karet Wiper">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Wiper & Karet Wiper"
                      {...form.getInputProps("wiperKaretWiper.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("wiperKaretWiper.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("wiperKaretWiper.description")}
                      key={form.key("wiperKaretWiper.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
              <Fieldset legend="Power Window">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Checkbox
                      label="Power Window"
                      {...form.getInputProps("powerWindow.isOk", {
                        type: "checkbox",
                      })}
                      key={form.key("powerWindow.isOk")}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      placeholder="Keterangan"
                      label="Keterangan"
                      {...form.getInputProps("powerWindow.description")}
                      key={form.key("powerWindow.description")}
                    />
                  </Grid.Col>
                </Grid>
              </Fieldset>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Group>
          <Button type="submit">Submit</Button>
        </Group>
      </Form>
    </Card>
  );
}

export default InspeksiForm;
