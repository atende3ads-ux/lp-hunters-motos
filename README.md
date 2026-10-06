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

Ao editar os blocos inline JSON-LD, Microsoft Clarity ou Google Tracking de
`index.html`, atualize os hashes CSP antes do commit:

```bash
./scripts/update-csp-hash.sh
```

Ao alterar CSS ou JavaScript, gere novamente os arquivos servidos em produção:

```bash
npx --yes clean-css-cli -o assets/css/styles.min.css assets/css/styles.css
npx --yes terser assets/js/main.js --compress --mangle --comments false --output assets/js/main.min.js
```

Rastreamento ativo: GTM `GTM-PKMM67CF`, GA4 `G-K88YCW36CL`, Google Ads
`AW-16513189480` e Microsoft Clarity `ytlwefl3i7`. O webhook só deve ser ativado
depois de confirmar a origem HTTPS exata e o contrato CORS.

O script de CSP também preserva os hashes dos scripts inline emitidos pela versão
publicada do GTM. Ao publicar uma nova versão do container, valide novamente no
Tag Assistant e atualize os hashes listados em `scripts/update-csp-hash.sh` se
necessário.
