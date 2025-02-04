import { ReactFC } from "@/types";
import { ReactNode } from "react";
import { twc } from "react-twc";

export type AuthFormProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  classNames?: AuthFormClassNames;
};

export type AuthFormClassNames = {
  container?: string;
  card?: string;
  header?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  divider?: string;
  dividerLine?: string;
  dividerBorder?: string;
  dividerText?: string;
  dividerLabel?: string;
};

const Container = twc.div`
  v min-h-[calc(100vh-4rem)] w-full items-center justify-center
`;

const Card = twc.div`
  v w-full max-w-[400px] items-center space-y-10 rounded-xl border border-border/40 bg-card p-8 shadow-sm
`;

const Header = twc.div`
  v space-y-2 text-center
`;

const Title = twc.h2`
  text-2xl font-semibold tracking-tight text-foreground
`;

const Subtitle = twc.p`
  text-sm text-muted-foreground
`;

const Content = twc.div`
  v w-full space-y-6
`;

const Divider = twc.div`
  relative my-4
`;

const DividerLine = twc.div`
  absolute inset-0 flex items-center
`;

const DividerBorder = twc.div`
  w-full border-t border-border
`;

const DividerText = twc.div`
  relative flex justify-center text-xs uppercase
`;

const DividerLabel = twc.span`
  bg-card px-2 text-muted-foreground
`;

export const AuthForm: ReactFC<AuthFormProps> = ({
  children,
  title,
  subtitle,
  footer,
  classNames = {},
}) => {
  return (
    <Container className={classNames.container}>
      <Card className={classNames.card}>
        {(title || subtitle) && (
          <Header className={classNames.header}>
            {title && <Title className={classNames.title}>{title}</Title>}
            {subtitle && (
              <Subtitle className={classNames.subtitle}>{subtitle}</Subtitle>
            )}
          </Header>
        )}

        <Content className={classNames.content}>{children}</Content>

        {footer && footer}
      </Card>
    </Container>
  );
};

export type AuthFormDividerProps = {
  label: string;
  classNames?: {
    divider?: string;
    line?: string;
    border?: string;
    text?: string;
    label?: string;
  };
};

export const AuthFormDivider: ReactFC<AuthFormDividerProps> = ({
  label,
  classNames = {},
}) => (
  <Divider className={classNames.divider}>
    <DividerLine className={classNames.line}>
      <DividerBorder className={classNames.border} />
    </DividerLine>
    <DividerText className={classNames.text}>
      <DividerLabel className={classNames.label}>{label}</DividerLabel>
    </DividerText>
  </Divider>
);
