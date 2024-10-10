import { ReactNode } from "react";

export default async function MarketPlaceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
