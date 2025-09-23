import { ViewTransitions } from "next-view-transitions";

function NextTransitions({ children }: { children: React.ReactNode }) {
  return <ViewTransitions>{children}</ViewTransitions>;
}

export default NextTransitions;
