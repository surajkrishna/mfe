import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

export default ({ globalStore }) => {
  const ref = useRef(null);
  console.log("container globalStore:::", globalStore);
  useEffect(() => {
    mount(ref.current, {
      globalStore,
    });
  }, []);

  return <div ref={ref} />;
};
