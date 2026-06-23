import React from "react";
import { encodeEmailEntities } from "../seo/emailLink";

type EmailLinkProps = {
  email: string;
  className?: string;
};

const EmailLink: React.FC<EmailLinkProps> = ({ email, className }) => {
  return (
    <a href={`mailto:${email}`} className={className}>
      <span dangerouslySetInnerHTML={{ __html: encodeEmailEntities(email) }} />
    </a>
  );
};

export default EmailLink;