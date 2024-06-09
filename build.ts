import UnpluginTypia from '@ryoppippi/unplugin-typia/bun';

await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./out",
  minify: true,
  format: "esm",
  plugins: [
    UnpluginTypia({
      /* your options */
      cache: true,
    })
  ]
});
