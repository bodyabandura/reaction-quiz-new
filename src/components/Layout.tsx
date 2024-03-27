"use client"

import Provider from "@/utils/ContextProider";

function Layout({ children } : { children: React.ReactNode }) {

  return (
    <Provider>
      {children}
    </Provider>
  );
}

export default Layout;
