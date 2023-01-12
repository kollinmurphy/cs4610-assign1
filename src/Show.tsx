export const Show = (props: {
  when: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}) => {
  if (props.when) return <>{props.children}</>;
  return <>{props.fallback}</>;
};
