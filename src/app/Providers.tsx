"use client";

import { LiveblocksProvider } from "@liveblocks/react";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            preventDevTools={true}
        >
            {children}
        </LiveblocksProvider>
    );
}