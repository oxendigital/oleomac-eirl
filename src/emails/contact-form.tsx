import * as React from "react";
import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  logoUrl?: string;
}

export const ContactFormEmail = ({
  name = "Juan Pérez",
  email = "juan.perez@ejemplo.com",
  subject = "Solicitud de Cotización",
  message = "Necesito cotizar la reparación de un cilindro hidráulico de doble efecto.",
  phone = "+56 9 1234 5678",
  company = "Minera Andes S.A.",
  logoUrl = "/static/oleomac.png", // absolute production url: https://oleomac-anf.cl/oleomac.png
}: ContactFormEmailProps) => {
  return (
    <Html lang="es">
      <Head />
      <Preview>Nuevo Lead de Contacto Web de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src={logoUrl}
              width="180"
              alt="Oleomac Logo"
              style={logoStyle}
            />
            <Heading style={headerTitle}>Nuevo Lead de Contacto Web</Heading>
            <Text style={headerSubtitle}>
              Formulario enviado desde el sitio de Oleomac E.I.R.L.
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={content}>
            <Section style={field}>
              <Text style={label}>Nombre del Remitente</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Section style={field}>
              <Text style={label}>Correo Electrónico</Text>
              <Text style={value}>
                <Link href={`mailto:${email}`} style={link}>{email}</Link>
              </Text>
            </Section>

            {company && (
              <Section style={field}>
                <Text style={label}>Empresa / Razón Social</Text>
                <Text style={value}>{company}</Text>
              </Section>
            )}

            {phone && (
              <Section style={field}>
                <Text style={label}>Teléfono de Contacto</Text>
                <Text style={value}>
                  <Link href={`tel:${phone}`} style={link}>{phone}</Link>
                </Text>
              </Section>
            )}

            <Section style={field}>
              <Text style={label}>Asunto</Text>
              <Text style={value}>{subject}</Text>
            </Section>

            <Section style={field}>
              <Text style={label}>Mensaje</Text>
              <Text style={valuePre}>{message}</Text>
            </Section>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              Mensaje procesado automáticamente para Oleomac E.I.R.L. (RUT: 76.241.690-K).<br />
              <Link href="https://oxendigital.com">Oxen Digital SpA.</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

const main = {
  backgroundColor: "#f8fafc",
  fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  margin: "0 auto",
  maxWidth: "600px",
  overflow: "hidden",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
};

const header = {
  backgroundColor: "#f8fafc",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const logoStyle = {
  margin: "0 auto 16px auto",
  display: "block",
};

const headerTitle = {
  color: "#000000",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "0",
};

const headerSubtitle = {
  color: "#64748b",
  fontSize: "13px",
  margin: "6px 0 0 0",
};

const content = {
  padding: "32px",
};

const field = {
  marginBottom: "24px",
  borderBottom: "1px solid #f1f5f9",
  paddingBottom: "16px",
};

const label = {
  color: "#475569",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0",
};

const value = {
  color: "#0f172a",
  fontSize: "15px",
  margin: "6px 0 0 0",
};

const valuePre = {
  color: "#0f172a",
  fontSize: "15px",
  margin: "6px 0 0 0",
  whiteSpace: "pre-wrap" as const,
};

const link = {
  color: "#2563eb",
  textDecoration: "none",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "0",
};

const footer = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#64748b",
  fontSize: "11px",
  lineHeight: "1.5",
  margin: "0",
};
