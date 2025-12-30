import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { BudgetFormValues } from "./form-schema";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#1a1a1a",
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2563eb",
    borderBottomStyle: "solid",
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headerLeft: {
    flexGrow: 1,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2563eb",
  },
  subtitle: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  date: {
    fontSize: 9,
    color: "#9ca3af",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderStyle: "solid",
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    borderBottomStyle: "solid",
    paddingBottom: 4,
    textTransform: "uppercase",
  },
  fieldRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "flex-start",
  },
  label: {
    fontWeight: "bold",
    color: "#4b5563",
    width: 100, // Fixed width for alignment
    fontSize: 9,
  },
  value: {
    flex: 1,
    color: "#111827",
  },
  valueBox: {
    backgroundColor: "#eff6ff",
    padding: 8,
    borderRadius: 4,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#bfdbfe",
    borderStyle: "solid",
  },
  valueText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e40af",
    textAlign: "center",
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 8,
    color: "#374151",
    marginRight: 8,
    marginBottom: 4,
  },
  mainText: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#374151",
    textAlign: "justify",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    borderTopStyle: "solid",
    paddingTop: 8,
    fontSize: 8,
    color: "#9ca3af",
    textAlign: "center",
  },
});

interface PDFDocumentProps {
  data: BudgetFormValues;
  services: { id: string; label: string }[];
}

export const BudgetPDFDocument: React.FC<PDFDocumentProps> = ({
  data,
  services,
}: PDFDocumentProps) => {
  // Get selected service labels
  const selectedServices = services.filter((service) =>
    data.services.includes(service.id)
  );

  // Get project type label
  const projectTypeLabel = {
    wordpress: "Site WordPress",
    "landing-page": "Landing Page",
    ecommerce: "E-commerce",
    institutional: "Site Institucional",
    "custom-system": "Sistema Web Personalizado",
  }[data.projectType as string] || data.projectType;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Orçamento de Desenvolvimento</Text>
            <Text style={styles.subtitle}>{data.projectTitle}</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.date}>
              Data: {new Date().toLocaleDateString("pt-BR")}
            </Text>
            <Text style={{ ...styles.date, marginTop: 2 }}>
              Validade: 7 dias
            </Text>
          </View>
        </View>

        {/* Two Column Layout: Client & Delivery Info */}
        <View style={styles.row}>
          {/* Col 1: Client Info */}
          <View style={{ ...styles.column, marginRight: 15 }}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Cliente</Text>

              <View style={styles.fieldRow}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>{data.clientName}</Text>
              </View>

              <View style={styles.fieldRow}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{data.clientEmail}</Text>
              </View>

              <View style={styles.fieldRow}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.value}>{data.clientPhone}</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projeto</Text>
              <View style={styles.fieldRow}>
                <Text style={styles.label}>Tipo:</Text>
                <Text style={styles.value}>{projectTypeLabel}</Text>
              </View>

              <View style={styles.fieldRow}>
                <Text style={styles.label}>Prazo:</Text>
                <Text style={styles.value}>{data.deliveryDeadline} (estimado)</Text>
              </View>
            </View>
          </View>

          {/* Col 2: Investment */}
          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Investimento</Text>
              <Text style={{ fontSize: 9, color: "#6b7280", marginBottom: 5 }}>
                Valor total estimado para o desenvolvimento do projeto conforme escopo descrito.
              </Text>
              <View style={styles.valueBox}>
                <Text style={styles.valueText}>{data.projectValue}</Text>
              </View>
              <Text style={{ fontSize: 8, color: "#6b7280", marginTop: 8, fontStyle: 'italic' }}>
                * Condições de pagamento a combinar.
              </Text>
            </View>
          </View>
        </View>

        {/* Scope and Services - Full Width */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Escopo e Serviços</Text>

          {data.mainFocus && (
            <View style={{ marginBottom: 12 }}>
              <Text style={{ ...styles.label, marginBottom: 2 }}>Objetivo Principal:</Text>
              <Text style={styles.mainText}>{data.mainFocus}</Text>
            </View>
          )}

          <Text style={{ ...styles.label, marginBottom: 6 }}>Serviços Inclusos:</Text>
          <View style={styles.listContainer}>
            {selectedServices.map((service, index) => (
              <Text key={index} style={styles.chip}>{service.label}</Text>
            ))}
          </View>
        </View>

        {/* Additional Details */}
        {data.additionalDetails && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Observações Adicionais</Text>
            <Text style={styles.mainText}>{data.additionalDetails}</Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Este documento é uma estimativa inicial e não substitui um contrato formal.</Text>
          <Text style={{ marginTop: 2 }}>{data.clientEmail} • {data.clientName}</Text>
          <Text style={{ marginTop: 2 }}>Data: {new Date().toLocaleDateString("pt-BR")}</Text>
          <Text style={{ marginTop: 2 }}>Validade: 7 dias</Text>
        </View>
      </Page>
    </Document>
  );
};
