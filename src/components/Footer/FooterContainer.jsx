import React from "react";

import FooterItem from "./FooterItem";
import { FAKELINKS } from "../../assets/data/footerData";

function FooterContainer() {
  return (
    <div className="grid grid-cols-1 gap-6 py-16 text-base md:flex md:justify-between">
      <FooterItem Links={FAKELINKS} />
      <FooterItem Links={FAKELINKS} />
      <FooterItem Links={FAKELINKS} />
      <FooterItem Links={FAKELINKS} />
    </div>
  );
}

export default FooterContainer;
