/* =========================
   CLOCK
========================= */

function updateClock() {

    const now = new Date();

    const date = now.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });

    const time = now.toLocaleTimeString('pt-BR');

    const dateElement = document.getElementById('card-date');
    const clockElement = document.getElementById('card-clock');

    if (dateElement) {
        dateElement.textContent =
            date.charAt(0).toUpperCase() + date.slice(1);
    }

    if (clockElement) {
        clockElement.textContent = time;
    }

}

updateClock();

setInterval(updateClock, 1000);

/* =========================
   QUOTES
========================= */

const insights = [

    {
        text: 'Dados não servem apenas para medir. Servem para antecipar decisões.'
    },

    {
        text: 'Monitoramento eficiente não evita apenas falhas. Evita impacto no negócio.'
    },

    {
        text: 'Dashboards bonitos chamam atenção. Dashboards inteligentes geram ação.'
    },

    {
        text: 'Infraestrutura sem observabilidade é operar no escuro.'
    }

];

let currentInsight = 0;

const insightText = document.getElementById('insight-text');
const insightIndex = document.getElementById('insight-index');

const nextInsightBtn = document.getElementById('next-insight');
const prevInsightBtn = document.getElementById('prev-insight');

function renderInsight(index) {

    insightText.textContent = insights[index].text;

    insightIndex.textContent =
        String(index + 1).padStart(2, '0');

}

function nextInsight() {

    currentInsight++;

    if (currentInsight >= insights.length) {
        currentInsight = 0;
    }

    renderInsight(currentInsight);

}

function prevInsight() {

    currentInsight--;

    if (currentInsight < 0) {
        currentInsight = insights.length - 1;
    }

    renderInsight(currentInsight);

}

nextInsightBtn.addEventListener('click', nextInsight);

prevInsightBtn.addEventListener('click', prevInsight);

/* =========================
   MARQUEE
========================= */

const tools = [

    {
        name: 'Zabbix',
        icon: './assets/icons/zabbix.png'
    },

    {
        name: 'Grafana',
        icon: './assets/icons/grafana.png'
    },

    {
        name: 'Power BI',
        icon: './assets/icons/powerbi.svg'
    },

    {
        name: 'Excel',
        icon: './assets/icons/excel.svg'
    },

    {
        name: 'Ansible AWX',
        icon: './assets/icons/ansible.png'
    },

    {
        name: 'SQL'
    },

    {
        name: 'JavaScript'
    },

    {
        name: 'HTML/CSS'
    },

    {
        name: 'Power Platform'
    }

];

const marqueeTrack = document.getElementById('marqueeTrack');

function createMarqueeItem(tool) {

    const item = document.createElement('div');

    item.className = 'marquee-item';

    if (tool.icon) {

        item.innerHTML = `
      <img src="${tool.icon}" alt="${tool.name}">
      <span>${tool.name}</span>
    `;

    } else {

        item.innerHTML = `
      <span>●</span>
      <span>${tool.name}</span>
    `;

    }

    return item;

}

if (marqueeTrack) {

    [...tools, ...tools].forEach(tool => {

        const item = createMarqueeItem(tool);

        marqueeTrack.appendChild(item);

    });

}

/* =========================
   FAQ
========================= */

const faqs = [

    {
        question: 'Em que áreas você atua?',
        answer: 'Atuo em análise de dados, monitoramento de infraestrutura de data center, criação de dashboards em Power BI e automação com ferramentas como Ansible AWX.'
    },

    {
        question: 'Quais ferramentas você domina?',
        answer: 'Zabbix, Grafana, Power BI, Excel avançado, SQL, Ansible AWX, Commvault, HP Service Manager e JavaScript.'
    },

    {
        question: 'Qual é a sua formação?',
        answer: 'Sou formado em Análise e Desenvolvimento de Sistemas (ADS) e certificado pela Universidade dos Dados.'
    },

    {
        question: 'Você está disponível para novos projetos?',
        answer: 'Sim. Estou aberto a novas oportunidades e colaborações em projetos relacionados a BI, monitoramento e análise de dados.'
    },

    {
        question: 'Como iniciar uma colaboração?',
        answer: 'Entre em contato por e-mail ou LinkedIn com detalhes do projeto, escopo e objetivos para alinharmos os próximos passos.'
    }

];

const faqList = document.getElementById('faq-list');

function createFAQItem(faq, index) {

    const item = document.createElement('div');

    item.className = 'faq-item';

    item.innerHTML = `
    <div class="faq-header">
      <span class="faq-num">
        0${index + 1}
      </span>

      <span class="faq-q">
        ${faq.question}
      </span>
    </div>

    <div class="faq-body">
      <p>${faq.answer}</p>
    </div>
  `;

    const header = item.querySelector('.faq-header');

    header.addEventListener('click', () => {

        const isOpen = item.classList.contains('open');

        document
            .querySelectorAll('.faq-item')
            .forEach(element => {
                element.classList.remove('open');
            });

        if (!isOpen) {
            item.classList.add('open');
        }

    });

    return item;

}

if (faqList) {

    faqs.forEach((faq, index) => {

        const item = createFAQItem(faq, index);

        faqList.appendChild(item);

    });

}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }

        });

    },

    {
        threshold: 0.08
    }

);

revealElements.forEach(element => {
    revealObserver.observe(element);
});

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        const href = link.getAttribute('href');

        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }

    });

});

/* =========================
   SMOOTH INITIAL LOAD
========================= */

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(`
========================================
 Lucas Faria Portfolio
 Analista de Dados & Infraestrutura
========================================
`);