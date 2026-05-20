# Deploying the frontend to Vercel

Steps to deploy the Vite frontend located in `artifacts/ecell-recruitment`:

1. In Vercel, create a new Project and import this repository.
2. Set the Project Root to `artifacts/ecell-recruitment` (monorepo).
3. Vercel should detect Vite. Ensure the following settings:
   - Install Command: `pnpm install`
   - Build Command: `pnpm build` (will run the `build` script in the package.json)
   - Output Directory: `dist`
      - Output Directory: `dist/public` (Vite is configured to write to `dist/public`)
4. Add any environment variables under Project Settings if needed.
5. Deploy.

Local verification:

Run:

```bash
pnpm --filter ./artifacts/ecell-recruitment run build
```

This will produce `artifacts/ecell-recruitment/dist`, which Vercel will serve.
