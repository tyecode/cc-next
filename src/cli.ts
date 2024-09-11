#!/usr/bin/env node

import main from "./main.js";

main().catch((error) => {
  console.error("❌ An error occurred during setup:", error);
  process.exit(1);
});
