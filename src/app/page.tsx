"use client";
import { CotizacionData, CotizacionTemplate } from "@/components/templates/cotizacion";
import { Button, Input, Label, TextArea, Form, Select, Modal } from "@/components/ui";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [PDF, setPDF] = useState<JSX.Element>(<></>);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const PDFData: CotizacionData = {
      Nombre: formData.get("fullName") as string,
      Email: formData.get("email") as string,
      Edad: Number(formData.get("age")),
      País: formData.get("country") as string,
      Mensaje: formData.get("message") as string,
    };

    setPDF(<CotizacionTemplate data={PDFData} />);
    setShowModal(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Form className="max-w-2xl border-2" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <Label htmlFor="fullName">Nombre</Label>
          <Input name="fullName" id="fullName" type="text" placeholder="Nombre" required />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" placeholder="Email" required />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="age">Edad</Label>
          <Input name="age" id="age" type="number" placeholder="Edad" required />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="country">País</Label>
          <Select name="country" id="country" required>
            <option value="">Selecciona un país</option>
            <option value="MX">México</option>
            <option value="US">Estados Unidos</option>
            <option value="CA">Canadá</option>
          </Select>
        </div>

        <div className="flex flex-col">
          <Label htmlFor="message">Mensaje</Label>
          <TextArea name="message" id="message" placeholder="Mensaje" rows={4} required />
        </div>

        <Button type="submit">Enviar</Button>
      </Form>

      {showModal && (
        <Modal
          title="Cotización preparada"
          description="Tu cotización está lista, puedes descargarla en formato PDF presionando el botón de abajo."
          onClose={() => {
            setShowModal(false);
            setPDF(<></>);
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <PDFViewer>{PDF}</PDFViewer>
            <PDFDownloadLink document={PDF} fileName="cotizacion.pdf" className="w-full">
              <Button className="rounded-t-none">Descargar</Button>
            </PDFDownloadLink>
          </div>
        </Modal>
      )}
    </main>
  );
}
