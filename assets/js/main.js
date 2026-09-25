const WHATSAPP_NUMBER = "5521983868547";
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;
const DEFAULT_MESSAGE = "Oi, Hunters! Estou procurando uma elétrica para a minha rotina e ainda não sei qual modelo escolher. Pode me ajudar?";
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Hunters+Motos+%7C+Scooters+El%C3%A9tricas/@-23.0007255,-43.352311,17z/data=!4m8!3m7!1s0x9bdb300a2e25f7:0x329c6f6d2099edd9!8m2!3d-23.0007255!4d-43.352311!9m1!1b1!16s%2Fg%2F11p9ycds_r?hl=pt-BR";

const iconWhats = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L.2 24l6.3-1.6a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.5ZM12.2 21.8h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.4c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2l-.9 1.1c-.2.3-.4.3-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2.1-.4 0-.6L8.1 4.8c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 3s1.3 3.5 1.5 3.7c.2.3 2.6 4 6.3 5.6 2.3 1 3.2 1.1 4.4.9.7-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>`;

/* Ícones em linha (traço), no mesmo padrão das LPs de referência */
const icons = {
  route: `<svg viewBox="0 0 24 24"><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 0-6h2a3 3 0 0 0 3-3V8"/></svg>`,
  speed: `<svg viewBox="0 0 24 24"><path d="M4 17a8 8 0 1 1 16 0"/><path d="m12 13 4-4M7 17h10"/></svg>`,
  battery: `<svg viewBox="0 0 24 24"><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4M7 10v4m4-4v4"/></svg>`,
  batteryPlus: `<svg viewBox="0 0 24 24"><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4M11 9v6m-3-3h6"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24"><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/></svg>`,
  weight: `<svg viewBox="0 0 24 24"><path d="M6 8h12l2 13H4L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>`,
  nfc: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></svg>`,
  bell: `<svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>`,
  lock: `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`,
  suspension: `<svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M8 6h8M8 18h8"/><path d="m8 9 8 2-8 2 8 2-8 2"/></svg>`,
  idcard: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16.5c.6-1.6 1.7-2.5 3-2.5s2.4.9 3 2.5M14 10h4M14 14h4"/></svg>`,
  bluetooth: `<svg viewBox="0 0 24 24"><path d="m7 7 10 10-5 5V2l5 5L7 17"/></svg>`,
  reverse: `<svg viewBox="0 0 24 24"><path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-4"/></svg>`,
  droplet: `<svg viewBox="0 0 24 24"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/></svg>`,
  basket: `<svg viewBox="0 0 24 24"><path d="M3 10h18l-2 10H5L3 10Z"/><path d="m8 10 3-6m5 6-3-6M3 10l2-2m16 2-2-2"/></svg>`,
  phone: `<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>`,
  plug: `<svg viewBox="0 0 24 24"><path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0V8Z"/><path d="M12 16v5"/></svg>`,
  box: `<svg viewBox="0 0 24 24"><path d="m3 8 9-4 9 4-9 4-9-4Z"/><path d="M3 8v8l9 4 9-4V8M12 12v8"/></svg>`,
  levels: `<svg viewBox="0 0 24 24"><path d="M4 18h4V10H4zM10 18h4V6h-4zM16 18h4v-6h-4z"/></svg>`,
  brake: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2"/></svg>`,
  users: `<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.5-3.5 2.7-5.5 6-5.5s5.5 2 6 5.5M15 15c2.5 0 4.2 1.4 4.8 4"/></svg>`,
  check: `<svg viewBox="0 0 24 24"><path d="m5 12.5 4 4 10-10"/></svg>`,
  store: `<svg viewBox="0 0 24 24"><path d="M4 9 5.5 4h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6"/></svg>`,
  key: `<svg viewBox="0 0 24 24"><circle cx="8" cy="14" r="4"/><path d="m11 11 9-9M15 7l2 2M18 4l2 2"/></svg>`,
  pin: `<svg viewBox="0 0 24 24"><path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  grid: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg>`,
  card: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>`,
  headset: `<svg viewBox="0 0 24 24"><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M6 18H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1v6Zm12 0h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1v6ZM18 18c0 2-2 3-4 3h-2"/></svg>`,
  clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1a5 5 0 0 1-2.9-2.9l1-1-1-2-1.6 1Z"/></svg>`
};
const icon = name => icons[name] || icons.check;

/* Escolha do ícone de cada especificação pelo texto */
const specIconFor = text => {
  const t = text.toLowerCase();
  if (/segunda bateria/.test(t)) return 'batteryPlus';
  if (/autonomia/.test(t)) return 'route';
  if (/velocidade de|km\/h/.test(t)) return 'speed';
  if (/n[ií]veis/.test(t)) return 'levels';
  if (/bateria/.test(t)) return 'battery';
  if (/motor|\d+w\b/.test(t)) return 'bolt';
  if (/capacidade|kg/.test(t)) return 'weight';
  if (/nfc|painel/.test(t)) return 'nfc';
  if (/alarme/.test(t)) return 'bell';
  if (/trava/.test(t)) return 'lock';
  if (/amortecedor/.test(t)) return 'suspension';
  if (/cnh|emplacamento/.test(t)) return 'idcard';
  if (/bluetooth/.test(t)) return 'bluetooth';
  if (/\bré\b/.test(t)) return 'reverse';
  if (/ip65|prote[çc][ãa]o/.test(t)) return 'droplet';
  if (/cesta/.test(t)) return 'basket';
  if (/suporte para celular/.test(t)) return 'phone';
  if (/carregador/.test(t)) return 'plug';
  if (/porta-acess/.test(t)) return 'box';
  if (/freio/.test(t)) return 'brake';
  if (/pessoas/.test(t)) return 'users';
  return 'check';
};

document.querySelectorAll('.spec-list li').forEach(li => {
  const text = li.textContent.trim();
  li.innerHTML = `<i class="spec-icon" aria-hidden="true">${icon(specIconFor(text))}</i><span>${text}</span>`;
});

document.querySelectorAll('[data-icon]').forEach(element => {
  element.innerHTML = icon(element.dataset.icon);
});

const whatsUrl = message => `${WHATSAPP}?text=${encodeURIComponent(message)}`;

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = whatsUrl(link.dataset.message || DEFAULT_MESSAGE);
  link.target = '_blank';
  link.rel = 'noopener';
});

document.querySelectorAll('[data-google-reviews]').forEach(link => { link.href = GOOGLE_REVIEWS_URL; });

const floating = document.querySelector('.floating-whatsapp');
if (floating) floating.innerHTML = iconWhats;

const header = document.querySelector('.site-header');
if (header) window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 140), {passive: true});

/* Calculadora: Faça sua conta */
const brl = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
const parseMoney = value => {
  const clean = String(value).replace(/[^\d,.]/g, '');
  if (!clean) return NaN;
  const normalized = clean.includes(',') ? clean.replace(/\./g, '').replace(',', '.') : clean;
  return parseFloat(normalized);
};

document.querySelectorAll('[data-calc]').forEach(form => {
  const daily = form.querySelector('[name="daily"]');
  const days = form.querySelector('[name="days"]');
  const result = form.querySelector('[data-calc-result]');
  const cta = form.querySelector('[data-calc-cta]');
  const baseMessage = cta?.dataset.message || '';
  const empty = result.textContent;

  const update = () => {
    const d = parseMoney(daily.value);
    const n = parseInt(days.value, 10);
    if (Number.isFinite(d) && Number.isFinite(n) && d > 0 && n > 0) {
      const total = d * Math.min(n, 31);
      result.textContent = brl.format(total);
      if (cta) cta.href = whatsUrl(`${baseMessage} Hoje gasto cerca de ${brl.format(d)} por dia, ${n} dias por mês (${brl.format(total)} no mês).`);
    } else {
      result.textContent = empty;
      if (cta) cta.href = whatsUrl(baseMessage);
    }
  };
  daily.addEventListener('input', update);
  days.addEventListener('input', update);
});

/* Formulário: Prefere que a Hunters fale com você? (protótipo: envia os dados via WhatsApp) */
document.querySelectorAll('[data-lead-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = `Oi, Hunters! Quero receber as informações.\nNome: ${data.get('nome')}\nWhatsApp: ${data.get('whatsapp')}\nModelo de interesse: ${data.get('modelo')}`;
    window.open(whatsUrl(message), '_blank', 'noopener');
  });
});

/* Título do hero com revelação por caractere (mesmo padrão das LPs de referência) */
document.querySelectorAll('[data-animated-heading]').forEach(heading => {
  if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 620px)').matches) return;
  const lines = heading.innerText.split('\n');
  let characterIndex = 0;
  heading.textContent = '';
  lines.forEach((lineText, lineIndex) => {
    const line = document.createElement('span');
    line.className = 'animated-line';
    line.setAttribute('aria-hidden', 'true');
    [...lineText].forEach(character => {
      const span = document.createElement('span');
      span.className = 'animated-char';
      span.textContent = character === ' ' ? ' ' : character;
      span.style.setProperty('--char-delay', `${200 + characterIndex * 18}ms`);
      characterIndex += 1;
      line.appendChild(span);
    });
    heading.appendChild(line);
    if (lineIndex < lines.length - 1) heading.appendChild(document.createElement('br'));
  });
});
