const WHATSAPP_NUMBER = "5521983868547";
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;
const DEFAULT_MESSAGE = "Oi, Hunters! Estou procurando uma elétrica para a minha rotina e ainda não sei qual modelo escolher. Pode me ajudar?";
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Hunters+Motos+%7C+Scooters+El%C3%A9tricas/@-23.0007255,-43.352311,17z/data=!4m8!3m7!1s0x9bdb300a2e25f7:0x329c6f6d2099edd9!8m2!3d-23.0007255!4d-43.352311!9m1!1b1!16s%2Fg%2F11p9ycds_r?hl=pt-BR";

document.documentElement.classList.add('has-js');

const whatsappIcon = `<img class="whatsapp-icon" src="assets/images/icon-whatsapp.svg" alt="" width="24" height="24" aria-hidden="true">`;

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
  whatsapp: whatsappIcon
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
if (floating) floating.innerHTML = whatsappIcon;

const header = document.querySelector('.site-header');
if (header) {
  const directionThreshold = 12;
  let lastScrollY = Math.max(window.scrollY, 0);
  let directionDistance = 0;
  let scrollTicking = false;

  const updateHeader = () => {
    const currentScrollY = Math.max(window.scrollY, 0);
    const delta = currentScrollY - lastScrollY;

    if (currentScrollY <= 1) {
      header.classList.remove('is-scrolled', 'is-hidden');
      directionDistance = 0;
    } else {
      header.classList.add('is-scrolled');

      if ((delta > 0 && directionDistance < 0) || (delta < 0 && directionDistance > 0)) {
        directionDistance = 0;
      }

      directionDistance += delta;

      if (directionDistance >= directionThreshold) {
        header.classList.add('is-hidden');
        directionDistance = 0;
      } else if (directionDistance <= -directionThreshold) {
        header.classList.remove('is-hidden');
        directionDistance = 0;
      }
    }

    lastScrollY = currentScrollY;
    scrollTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateHeader);
  }, {passive: true});

  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
  updateHeader();
}

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

  form.addEventListener('submit', event => event.preventDefault());

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

/* Formulário: abre uma conversa personalizada e registra a intenção sem enviar PII ao tracking. */
document.querySelectorAll('[data-lead-form]').forEach(form => {
  const formId = 'lead_whatsapp';
  const sendGoogleEvent = (eventName, eventData) => {
    window.dataLayer = window.dataLayer || [];
    const googleTag = window.gtag || function () { window.dataLayer.push(arguments); };
    googleTag('event', eventName, eventData);
  };

  form.querySelectorAll('[name]').forEach(field => {
    field.addEventListener('change', () => {
      if (!String(field.value).trim()) return;
      const eventData = {
        form_id: formId,
        field_name: field.name,
        field_type: field.tagName.toLowerCase()
      };
      if (field.name === 'modelo') eventData.model_interest = field.value;
      sendGoogleEvent('lead_form_field_completed', eventData);
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('nome')).trim();
    const model = String(data.get('modelo')).trim();
    const trackingData = {
      form_id: formId,
      contact_method: 'whatsapp',
      model_interest: model
    };

    sendGoogleEvent('lead_whatsapp_click', trackingData);
    sendGoogleEvent('generate_lead', trackingData);

    const message = `Oi, Hunters! Meu nome é ${name} e tenho interesse no modelo ${model}. Quero receber mais informações.`;
    window.open(whatsUrl(message), '_blank', 'noopener');
  });
});

/* FAQ exclusiva: abrir uma resposta fecha as demais. */
const faqItems = [...document.querySelectorAll('.faq-item')];
faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

/* Fade-in progressivo durante a rolagem, sem esconder conteúdo sem JavaScript. */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll([
  '.turn > *',
  '.section-intro',
  '.product-card',
  '.compare-banner',
  '.service-card',
  '.split > *',
  '.rating-card',
  '.review-card',
  '.map-card',
  '.faq-item',
  '.support-banner',
  '.final > *',
  '.contact-top',
  '.store'
].join(','));

if (!reduceMotion && 'IntersectionObserver' in window) {
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal-ready', `reveal-delay-${index % 4}`);
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, {rootMargin: '0px 0px -8% 0px', threshold: 0.08});

  revealTargets.forEach(element => revealObserver.observe(element));
}
