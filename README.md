# Landing page - Hunters Motos (protótipo)

Landing page de scooters, bikes e triciclo elétricos da Hunters Motos (Barra da Tijuca, RJ).
HTML, CSS e JavaScript puros, sem build no servidor. Diagramação baseada nas LPs da Scooter Goiânia; identidade visual da Hunters Motos.

## Desenvolvimento local

```bash
python3 -m http.server 4180
```

## Publicação

O cPanel usa `.cpanel.yml` para publicar os arquivos públicos em
`/home2/hg3ads37/produto.huntersmotos.com.br/`. O `.htaccess` concentra HTTPS,
CSP, cabeçalhos de segurança, compressão e cache.

Ao editar o bloco JSON-LD inline de `index.html`, atualize o hash CSP antes do
commit:

```bash
./scripts/update-csp-hash.sh
```

Ao alterar CSS ou JavaScript, gere novamente os arquivos servidos em produção:

```bash
npx --yes clean-css-cli -o assets/css/styles.min.css assets/css/styles.css
npx --yes terser assets/js/main.js --compress --mangle --comments false --output assets/js/main.min.js
```

GTM, GA4, Google Ads e webhook só devem ser ativados depois de confirmar os IDs,
o consentimento e, no caso do webhook, a origem HTTPS exata e o contrato CORS.
