import { getRouteApi, useRouter } from "@tanstack/react-router";
import { useState } from "react";

export function StatefullButton({ onUpdate }: { onUpdate: () => void }) {
  const router = getRouteApi("/");
  const state = router.useLoaderData();

  return (
    <button type="button" onClick={onUpdate}>
      Add 1 to {state}?
    </button>
  );
}
