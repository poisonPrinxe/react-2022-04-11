import { LinkContainer } from "../../../custom-routing/ui/link/container";

export const Tab = ({ href, label, onTabSelect, className }) => (
  <LinkContainer
    href={href}
    className={className}
    onClick={onTabSelect}
    label={label}
  />
);
