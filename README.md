# Landing page - Hunters Motos (protótipo)

Landing page de scooters, bikes e triciclo elétricos da Hunters Motos (Barra da Tijuca, RJ).
HTML, CSS e JavaScript puros, sem build no servidor. Diagramação baseada nas LPs da Scooter Goiânia; identidade visual da Hunters Motos.

## Desenvolvimento local

```bash
python3 -m http.server 4180
```

## Publicação

O cPanel usa `.cpanel.yml` para publicar a página Black Friday e seus ativos em
`/home2/hg3ads37/produto.huntersmotos.com.br/`, além de atualizar o sitemap e a
CSP. A receita preserva o `index.html` e os ativos compartilhados da LP principal.
O `.htaccess` concentra HTTPS, CSP, cabeçalhos de segurança, compressão e cache.

## Página Black Friday 2026

`black-friday/index.html` é a cópia da LP principal para
`https://produto.huntersmotos.com.br/black-friday/`. Ela usa os ativos comuns em
`assets/`, CSS próprio para a faixa e os cards, e uma cópia do JavaScript minificado
com o caminho relativo do ícone ajustado para a subpasta.
O `index.html` da raiz permanece independente. A receita `.cpanel.yml` publica
somente a página da campanha e seus ativos próprios; a nova URL só fica disponível
após o deploy no cPanel.

O selo veio do arquivo fornecido por Thiago. As fotos da Tank e do Vezz vieram
dos links de Google Drive fornecidos para esta campanha e foram convertidas
para WebP. Os preços e condições da Black Friday foram informados por Thiago
em 2026-11-04 e valem somente em novembro de 2026.

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

Todos os CTAs de contato usam o redirecionador rastreável
`https://spar.3ads.com.br/l/atendimento-hunters-43r8`. O formulário registra
`lead_form_field_completed` para cada campo preenchido e, ao abrir o canal de
atendimento, dispara `lead_whatsapp_click` e `generate_lead`. Os eventos
incluem somente o identificador do formulário, o campo, o canal e, quando
aplicável, o modelo de interesse; nome e telefone não são enviados ao tracking.

O script de CSP também preserva os hashes dos scripts inline emitidos pela versão
publicada do GTM. Ao publicar uma nova versão do container, valide novamente no
Tag Assistant e atualize os hashes listados em `scripts/update-csp-hash.sh` se
necessário.
