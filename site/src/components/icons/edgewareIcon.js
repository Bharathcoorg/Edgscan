import { ReactComponent as Edgeware } from "./edgeware.svg";
import { ReactComponent as EdgewareDark } from "./edgeware-dark.svg";
import { useIsDark } from "../../utils/hooks";
import { useMemo } from "react";

export default function EdgewareIcon(props) {
  const isDark = useIsDark();
  const Icon = useMemo(() => (isDark ? EdgewareDark : Edgeware), [isDark]);
  return <Icon {...props} />;
}
