import React from "react";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug;

  return <h1>{slug}</h1>;
}
