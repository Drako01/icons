# ArmoTuSitio Icons — release automation

## Publishing policy

The **first public version, 0.1.0**, was manually published to Visual Studio Marketplace and Open VSX by the repository owner. Starting with **0.1.1**, releases are triggered by a version-bumping squash merge into protected `main`.

1. `ci.yml` runs tests on Ubuntu, Windows and macOS, then packages and checksums one VSIX in the `validated-vsix` artifact.
2. `publish.yml` runs on `push: main`. It does nothing if `package.json` version is unchanged.
3. The provenance gate finds the actual merged PR head SHA and the successful `pull_request` CI run for that exact SHA; it compares the Git tree of the verified PR against the merge tree on `main`.
4. It downloads the exact `validated-vsix` artifact, validates SHA-256 and embedded package identity/version, and uploads the same bytes to a publish-only artifact. It **does not rebuild** or repeat PR tests.
5. Marketplace uses `vsce publish --oidc --skip-duplicate` on environment `marketplace`.
6. Open VSX uses `ovsx@1.4.0 publish --trusted-publishing` on environment `open-vsx`. Both need registration of `Drako01/icons`, workflow `publish.yml`, and matching environments as Trusted Publishers.
7. A GitHub Release `v<version>` is created when Marketplace succeeds, attaching the original VSIX and its SHA-256. An Open VSX error does not block the GitHub Release; the job reports failure for targeted recovery.
8. For manual recovery, run `publish.yml` on `main` with the exact `ci_run_id`, `pr_head_sha`, and `registry`. The recovery gate checks the PR tree against the immutable release tag and retains all original artifact checks. Never rebuild or force a duplicate version.

## Required configuration

- Protect `main`: PR required, squash only, up-to-date CI checks including `package`, one repository owner without impossible human approval gates.
- Configure GitHub environments exactly `marketplace` and `open-vsx`, with their intended deployment permissions.
- Verify both registry Trusted Publishers point to repository **Drako01/icons**, workflow **publish.yml**, and matching environment, not `ci.yml`.
- Never store registry PATs when OIDC is available.

The README image is a PNG generated from the original SVG gallery. Marketplace explicitly forbids embedding untrusted SVG in the README. The real screenshot acceptance is separate from this catalog preview.

**Release authorization:** the repository owner authorizes publication of 0.1.1 by merging its passing version-bumping PR.
