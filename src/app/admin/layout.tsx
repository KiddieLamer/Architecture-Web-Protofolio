import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
  title: "Admin Panel - Room Studio",
  description: "Content management system for Room Studio website",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}