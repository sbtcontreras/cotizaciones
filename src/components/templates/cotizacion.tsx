"use client";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontStyle: "italic",
  },
  content: {
    fontSize: 12,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    fontStyle: "italic",
    color: "#555",
  },
});

export interface CotizacionData {
  Nombre: string;
  Email: string;
  Edad: number;
  País: string;
  Mensaje: string;
}

export function CotizacionTemplate({ data }: { data: CotizacionData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Cotización</Text>
          <Text style={styles.subTitle}>Detalles del Cliente:</Text>
          <Text style={styles.content}>Nombre: {data.Nombre}</Text>
          <Text style={styles.content}>Email: {data.Email}</Text>
          <Text style={styles.content}>Edad: {data.Edad}</Text>
          <Text style={styles.content}>País: {data.País}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Mensaje:</Text>
          <Text style={styles.content}>{data.Mensaje}</Text>
        </View>
        <Text style={styles.footer}>© 2023 Tu Empresa. Todos los derechos reservados.</Text>
      </Page>
    </Document>
  );
}
