import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact-schema";
import { translations } from "../../config/translations";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  locale?: string;
}

export default function ContactForm({ locale = "es" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const activeLocale = (locale === "en" ? "en" : "es") as "es" | "en";
  const t = translations[activeLocale].contactForm;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || t.errorToast);
      }

      toast.success(t.successToast);
      form.reset();
    } catch (error: any) {
      console.error(error);
      toast.error(t.errorToast);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "bg-transparent! border-t-0 border-r-0 border-l-0 border-b border-border focus:border-foreground focus-visible:border-foreground focus-visible:ring-0 rounded-none px-0 h-14 shadow-none text-base transition-colors duration-200";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {/* Honeypot anti-spam */}
        <div className="absolute opacity-0 pointer-events-none -z-10 h-0 w-0 overflow-hidden">
          <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No rellenar este campo si eres humano</FormLabel>
                <FormControl>
                  <Input {...field} tabIndex={-1} autoComplete="off" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {t.nameLabel}
                </FormLabel>
                <FormControl>
                  <Input placeholder={t.namePlaceholder} className={inputClass} disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {t.phoneLabel}
                </FormLabel>
                <FormControl>
                  <Input type="tel" placeholder={t.phonePlaceholder} className={inputClass} disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {t.emailLabel}
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t.emailPlaceholder} className={inputClass} disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {t.companyLabel}
                </FormLabel>
                <FormControl>
                  <Input placeholder={t.companyPlaceholder} className={inputClass} disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                {t.subjectLabel}
              </FormLabel>
              <FormControl>
                <Input placeholder={t.subjectPlaceholder} className={inputClass} disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                {t.messageLabel}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.messagePlaceholder}
                  className="min-h-[140px] bg-transparent! border-t-0 border-r-0 border-l-0 border-b border-border focus:border-foreground focus-visible:border-foreground focus-visible:ring-0 rounded-none px-0 py-3 shadow-none text-base transition-colors duration-200 resize-none"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-4 flex justify-start">
          <Button
            type="submit"
            className="inline-flex items-center justify-center gap-4 px-10 py-5 rounded bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-200 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>{t.sending}</span>
              </>
            ) : (
              <>
                <span>{t.send}</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
