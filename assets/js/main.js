const WHATSAPP_NUMBER = "5521983868547";
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;
const DEFAULT_MESSAGE = "Oi, Hunters! Estou procurando uma elétrica para a minha rotina e ainda não sei qual modelo escolher. Pode me ajudar?";

const iconWhats = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L.2 24l6.3-1.6a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.5ZM12.2 21.8h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.4c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2l-.9 1.1c-.2.3-.4.3-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2.1-.4 0-.6L8.1 4.8c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 3s1.3 3.5 1.5 3.7c.2.3 2.6 4 6.3 5.6 2.3 1 3.2 1.1 4.4.9.7-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>`;

const whatsUrl = message => `${WHATSAPP}?text=${encodeURIComponent(message)}`;

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = whatsUrl(link.dataset.message || DEFAULT_MESSAGE);
  link.target = '_blank';
  link.rel = 'noopener';
});

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
