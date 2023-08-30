import { ReactComponent as EdgewareDark } from "./edgeware-dark.svg";
import { useIsDark } from "../../utils/hooks";
import { useMemo } from "react";

export default function EdgewareDarkIcon(props) {
  const isDark = useIsDark();
  const Icon = useMemo(() => (EdgewareDark), [isDark]);
  return <Icon {...props} />;
}
