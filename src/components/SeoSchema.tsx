import React from "react";
import { buildSchemaGraph } from "../seo/buildGraph";

const SeoSchema: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchemaGraph()) }}
    />
  );
};

export default SeoSchema;