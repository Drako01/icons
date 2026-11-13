# Release governance — no publication from this PR

This repository currently defines **PR-only CI** and does **not** define `publish.yml`. Marketplace and Open VSX publication require a separate explicit decision.

## Recommended safe workflow after visual acceptance

1. The PR passes all three OS tests, package inspection and SHA-256. Only merge after verifying the results.
2. On a future **version-changing** merge, release workflow validates exact successful PR head SHA and unchanged Git tree.
3. Publish the **same VSIX file** produced by PR CI to Marketplace and Open VSX, using separate protected GitHub environments and OIDC Trusted Publishers.
4. Do not rebuild/retest on merge. An unchanged version must produce no publication.
5. Create a GitHub Release with the original `.vsix`, checksum and notes, and handle duplicate versions idempotently.
6. Recover failures per registry using immutable release assets rather than rebuilding them.

Even if the Marketplace has a Trusted Publisher record for `Drako01/icons`, **this is not authorization to publish**.
