import React from "react";

import FooterItem from "./FooterItem";
import { FAKELINKS } from "../../assets/data/FooterFakeLinks";

function FooterContainer() {
  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-16 text-base md:flex md:justify-between">
      <FooterItem Links={FAKELINKS} title="fakeLinks" />
      <FooterItem Links={FAKELINKS} title="fakeLinks" />
      <FooterItem Links={FAKELINKS} title="fakeLinks" />
      <FooterItem Links={FAKELINKS} title="fakeLinks" />
    </div>
  );
}

export default FooterContainer;
