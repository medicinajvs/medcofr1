export const courseData = [
  // --- MÓDULO 1: ONBOARDING ---
  {
    id: 1,
    title: "Módulo 01 - Onboarding",
    label: "Módulo 01",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 01",
        title: "Introdução e Metodologia",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Introdução ao Extensivo.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1az0yrYOQFf884VfvlXKdD6rKKLSeHtLP/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Onboardings - Mateus Cavarzan.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GDJboto8gKLZLFQiZ9DNIYQH3J_5h_6I/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Introdução ao Extensivo.pdf", pdfLink: "https://drive.google.com/file/d/1LGt02mztDF6zKoWo5PyjNtBQt7jtQiGn/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 02",
        title: "Ferramentas (Plataforma e Questões)",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Onboardings - Matheus Meireles.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sci4P4PojQZVLqCnHSbcikTPPj8VVuXm/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Onboarding - Ettore.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mqqpKTqDqeaKJeFAw62Aooz7Z6FIYsbC/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 3,
        label: "Sub-Módulo 03",
        title: "Revisões do 1º Trimestre (Blocos 1-6)",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Week Review 01 - Mateus Cavarzan.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1plSzYIdJMbPBz9XqvVX3Ts1qjgT3WnDm/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Week in Review - Jackie - R1 e R+ - Semana 06.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1u3gKNLnztz6TiCrKADUPEpxauyCHdlhj/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 4,
        label: "Sub-Módulo 04",
        title: "Revisões do 2º Trimestre (Blocos 7-12)",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 5,
        label: "Sub-Módulo 05",
        title: "Revisões do 3º Trimestre (Blocos 13-18)",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Week Review - R1 - Bloco 13.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-lzSvgQja8725_QsSbqyGIB0ZuFPrDpB/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Week in Review - R1 Bloco 15 - Jaqueline.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18unnfKDrargyrznHNx3_xFAU0_yDLF1w/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 6,
        label: "Sub-Módulo 06",
        title: "Revisões Finais (Blocos 19-24)",
        imageUrl: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Week in Review 2025 - R1 Bloco 19.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1g-_LJa8ZpKPrijZgC0r9jdJGnp4lz8YN/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Week in Review - R1 - Bloco 22.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/169Ah_mDJTdjGSj0B6pgh1pod9wtx4zYj/view?usp=sharing" }
        ],
        materials: []
      }
    ]
  },

  // --- MÓDULO 2: CIRURGIA GERAL ---
  {
    id: 2,
    title: "Módulo 02 - Cirurgia Geral",
    label: "Módulo 02",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 01",
        title: "Trauma: Introdução e Atendimento Inicial",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Introdução ao trauma e atendimento inicial.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1f5Ix1w3eEFq_tWOyvFIu8HgTdq_47beI/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Revisão ABCDE.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hUQ3DKLGrPCpBI-pBGCXbB66tgm3UW9p/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Introdução ao trauma e atendimento inicial.pdf", pdfLink: "https://drive.google.com/file/d/1S9tp0IXoBin9xLeA6EDE-kwk4iU85Dpd/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Trauma - Introdução ao trauma e atendimento inicial.pdf", pdfLink: "https://drive.google.com/file/d/10sn4-LGcV2LXk0HXB7tQskxCO1bgk5Yr/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 02",
        title: "Trauma: Vias Aéreas",
        imageUrl: "https://images.unsplash.com/photo-1628354225027-2c13636f2e8c?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Vias aéreas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EO5zUWKoPgdlbUQjZXWHx8ebM69l3F0j/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Vias aéreas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sxQ30Ilaeo8qv4tqXlLFoYIrLLz-U1y3/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Vias aéreas.pdf", pdfLink: "https://drive.google.com/file/d/11kLL7YJ1Wa14Vv-uDQdNd0zzwCArmzTO/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Trauma - Vias aéreas.pdf", pdfLink: "https://drive.google.com/file/d/1L4mThmDK6TmV1_PuP8M0qTitICcyFH8w/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 03",
        title: "Trauma: Choque",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Choque - Abordagem Inicial_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fKafl74xi3_d-MWglEPFZzx6eySP3u5e/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Choque - Abordagem Inicial.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hrWV9aoD4yMKSqg2li1LKm5u620Tnrab/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Choque.pdf", pdfLink: "https://drive.google.com/file/d/1IF1HZeGgQSyox7h03M-0EM4Q31zivtyZ/view?usp=sharing" },
          { title: "E-Book - ERRATA - TRAUMA: CHOQUE.pdf", pdfLink: "https://drive.google.com/file/d/1n_1ljtPKZ_xLYIQCsTRfU6WeMdOrNcZw/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 04",
        title: "Trauma: Ressuscitação Hemostática",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hemoterapia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17S8r9ELFFgbwkW42zfr2l59uYUG2idRH/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Medidas Auxiliares e FAST_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1F15bJQhfiMS_foWS-hMcg6M4qrLWNKFw/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Ressuscitação hemostática.pdf", pdfLink: "https://drive.google.com/file/d/1DKchgiTppMgzDeQtbmfb6Z9MivmrDpdS/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Trauma - Ressuscitação hemostática.pdf", pdfLink: "https://drive.google.com/file/d/1vrpuHKd0NmUp7XtJtixDsLF5c5MXD26J/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 05",
        title: "Diagnósticos diferenciais das massas cervicais",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Diagnósticos diferenciais das massas cervicais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zvlvIcs8dl_pEbrJAI3v38hCMmreGG8m/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cabeça e Pescoço Anomalias Congênitas em cabeça e pescoço_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1g5Y-cSqtjHyIG2MW3wKUhdGluUMr2o1e/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Ficha Resumo: Esvaziamentos Cervicais.pdf", pdfLink: "https://drive.google.com/file/d/13U8-frlucM7O9aUwY_hcwQMaaC6TiXrq/view?usp=sharing" },
          { title: "E-Book - Cabeça e Pescoço: Esvaziamentos cervicais + Anatomia.pdf", pdfLink: "https://drive.google.com/file/d/1s3WH8tgPbKv9VoWuRd5XojES1Qtp5gRS/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 06",
        title: "Introdução ao Extensivo",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Introdução ao Extensivo.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1az0yrYOQFf884VfvlXKdD6rKKLSeHtLP/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Introdução ao Extensivo.pdf", pdfLink: "https://drive.google.com/file/d/1LGt02mztDF6zKoWo5PyjNtBQt7jtQiGn/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 07",
        title: "Esvaziamentos cervicais + Anatomia",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Cervical_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11Gb8yVjA6LVlah2G9j-TFdljO6L6_mTi/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Cervical especifico_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rjpWcuZTIvwGbqGOCTweVBMq8OcFUawG/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cabeça e Pescoço: Esvaziamentos cervicais + Anatomia.pdf", pdfLink: "https://drive.google.com/file/d/1s3WH8tgPbKv9VoWuRd5XojES1Qtp5gRS/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Esvaziamentos Cervicais.pdf", pdfLink: "https://drive.google.com/file/d/13U8-frlucM7O9aUwY_hcwQMaaC6TiXrq/view?usp=sharing" }
        ]
      }
    ]
  },
  // --- MÓDULO 03: CLÍNICA MÉDICA ---
  {
    id: 3,
    title: "Módulo 03 - Clínica Médica",
    label: "Módulo 03",
    subModules: [
      // --- 1. CARDIOLOGIA ---
      {
        id: 1,
        label: "Sub-Módulo 01",
        title: "Síndrome Coronariana Aguda sem Supra de ST (SCASSST)",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Síndrome Coronariana Aguda sem Supra de ST (SCASSST).pdf", pdfLink: "https://drive.google.com/file/d/1soOSSJIsm_XpMr7LUVCcWqq9NHqkUvbq/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Síndrome Coronariana Aguda sem Supra de ST (SCASSST).pdf", pdfLink: "https://drive.google.com/file/d/1gJsYq03dmRiMKSmoh9VKf6ohbHZUk9F9/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 02",
        title: "Síndrome Coronariana Aguda com Supra de ST (SCACSST)",
        imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Síndrome Coronariana Aguda com Supra de ST (SCACSST)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1l2qzpeZkA08JBMLqpPDIdJxksdgJ8Oui/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Síndrome Coronariana Aguda com Supra de ST (SCACSST).pdf", pdfLink: "https://drive.google.com/file/d/1skcNBiiG7ZUKjQ_aCYyu18w4CmMotTDR/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Síndrome Coronariana Aguda com Supra de ST.pdf", pdfLink: "https://drive.google.com/file/d/1iyo4njf8t5aVw1Lw4e33MZOi9lj1WVrS/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 03",
        title: "Síndromes Aórticas Agudas",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Síndromes Aórticas Agudas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12U-IER02MqXsB-In3Sa50qN87xe2rWCK/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síndromes Aórticas Agudas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1igx-W_33lUmQuyohleHw-QqflyEWKi31/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Síndromes Aórticas Agudas.pdf", pdfLink: "https://drive.google.com/file/d/1YU0V0ryyNHQtzstKEOCFwSN_ELWBLHZx/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Síndromes Aórticas Agudas.pdf", pdfLink: "https://drive.google.com/file/d/1JCsXjg_-WKz6SKiLeaMDN8h972dppN8U/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 04",
        title: "Pericardite e Miocardite",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cardio 3 Miocardite, Síncope, Insuficiência Cardíaca.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FS_QEHjz_ezoy5cL10bFPbYKwl0z6tgp/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cardio 3 Miocardite, Síncope, Insuficiência Cardíaca_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mtAluYR0s1ke_f4y_2lXIbpf9cOWsrSH/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Pericardite e Miocardite.pdf", pdfLink: "https://drive.google.com/file/d/1aKFIFwrwZSUNuZWx77zzyIpfh8AfY2sM/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Pericardite e Miocardite.pdf", pdfLink: "https://drive.google.com/file/d/1esHB6ey8lCz5UyHE1r94S3fjzYj31EX-/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 05",
        title: "Hipertensão Arterial Sistêmica (HAS)",
        imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hipertensão Arterial Sistêmica (HAS)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12_CMrUQkd_WFUTzvaNehFgGQE01iKaFP/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hipertensão Arterial Sistêmica (HAS)_COFEXPRESS [Parte II].ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16LAIYmHL_mzGFPrZOwrGZzBizTMF3cdT/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Hipertensão Arterial Sistêmica (HAS).pdf", pdfLink: "https://drive.google.com/file/d/1SyUDZHMCRQJ7e-WFhAEQNm4co4VqtHl5/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Hipertensão Arterial Sistêmica (HAS).pdf", pdfLink: "https://drive.google.com/file/d/1nimI8b4OJp4JDWSFShtsxGbp1j1TPH5T/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 06",
        title: "Emergências Hipertensivas",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - COFEXPRESS Emergências Hipertensivas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14FCclIk0pdmQVRFiBM6pI1kDEI7Nv2im/view?usp=sharing" },
          { id: 2, title: "Aula 02 - VISÃO DO ESPECIALISTA Emergências Hipertensivas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14KaSBrEdAoHvMyJ6IOHUZQBVZicehJpQ/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Emergências Hipertensivas.pdf", pdfLink: "https://drive.google.com/file/d/1v8Gx6WaqEQN5Fj2Hfc0YHFeDEDg2sU2z/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Emergências Hipertensivas.pdf", pdfLink: "https://drive.google.com/file/d/1u4ChmjRdps7AmATSPamSJbnT3PA-v3rl/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 07",
        title: "Insuficiência Cardíaca - Manejo Ambulatorial",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Insuficiência Cardíaca - Manejo Ambulatorial_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hLrhmlW9kzZzSPkOZTpUjSP1NewIPr9v/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insuficiência Cardíaca - Manejo Ambulatorial.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BEjaK5N7IpgOaLZlDA1NArbTBVSbUSFK/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Insuficiência Cardíaca - Manejo Ambulatorial.pdf", pdfLink: "https://drive.google.com/file/d/1rmKbefQxLiykV3PemXPMONWoTs3p5N5k/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Insuficiência Cardíaca - Manejo Ambulatorial.pdf", pdfLink: "https://drive.google.com/file/d/1_bIJaa0oCqlwqNibW99ArUwB7R28r4Ay/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 08",
        title: "Insuficiência Cardíaca - Descompensações Agudas",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Insuficiência Cardíaca - Descompensações Agudas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Hk36GomLzaRUVp8Kj1pX0tW3nM8U-zs7/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Insuficiência Cardíaca - Descompensações Agudas.pdf", pdfLink: "https://drive.google.com/file/d/18mR4UdOuLe6n0yc4wefYU-W23mjXKrfl/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Insuficiência Cardíaca - Descompensações Agudas.pdf", pdfLink: "https://drive.google.com/file/d/1iRjVg8z_Vot6GMr4o4o0qfFKSclvDGte/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 09",
        title: "Taquiarritmias",
        imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Taquiarritmias.pdf", pdfLink: "https://drive.google.com/file/d/1taFTQISbg5mzOAXJ3it4gr0aW4bC3t7k/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Taquiarritmias.pdf", pdfLink: "https://drive.google.com/file/d/11tfjYb95lDHuF8DTia0VOBcoW1s782-N/view?usp=sharing" }
        ]
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Bradiarritmias",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Bradiarritmias.pdf", pdfLink: "https://drive.google.com/file/d/1odATHL8ZW4hVxvR4-xFjwTjWR9Uyb3gC/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Bradiarritmias.pdf", pdfLink: "https://drive.google.com/file/d/1lmxk94T68-Rmd4kPUPKFEaqkqIrIC7yO/view?usp=sharing" }
        ]
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Síncope",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Síncope_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1h3Htbg8_MQg7rhNaIUFZ8hmEyv8wtdCY/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síncope.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jF-9DE3HUxhZ3QKgLvf0N2O3u7khWlNj/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Síncope.pdf", pdfLink: "https://drive.google.com/file/d/1F-q3uN3lnInXO-cZn8QoAYkf6qZvgdzP/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Síncope.pdf", pdfLink: "https://drive.google.com/file/d/1aZa1vvaf6UufSQuRO1ep8V2JVDVxg9NS/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Febre Reumática e Endocardite",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Reumato Kawasaki, Vasculite por Iga e Febre Reumática_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1G-58UGE9O0tEa4MRPlrG-9cFO0HNE_NC/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Reumato Kawasaki, Vasculite por Iga e Febre Reumática.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dJ0SnxdeJgf-XbYkXuRuFpqzBku463Hk/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Febre Reumática e Endocardite.pdf", pdfLink: "https://drive.google.com/file/d/1UJcE1w79fQ6Z04dmj_ZTHwLLeneMktOi/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Febre Reumática e Endocardite.pdf", pdfLink: "https://drive.google.com/file/d/1iu1rismlN814uMbxWTCkxGVdew5sriFm/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Valvopatias",
        imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Valvopatias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FX_72LASXAQlGFtSXhKHwqpn2xBpNvb0/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Cardíaca Doenças Valvares_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GNuAcxAk--Db_F9R7cRK0w6KCy9PXiWX/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Valvopatias.pdf", pdfLink: "https://drive.google.com/file/d/1xiFjTD7dJHWwXj61I9-_txA6Av6MSIYA/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Valvopatias.pdf", pdfLink: "https://drive.google.com/file/d/1EsRZv_0yBpLDHWgnt1a9erMNKynpKUb9/view?usp=sharing" }
        ]
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "BLS e ACLS",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - BLS e ACLS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rhZ27jZOtJFYh7jGkhPvT2vaYsqQ8D57/view?usp=sharing" },
          { id: 2, title: "Aula 02 - BLS e ACLS_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mTucaaY7UNM2CDYYI6EpGFIszbAMwZI8/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - BLS e ACLS.pdf", pdfLink: "https://drive.google.com/file/d/1AosoCr7yQ8tktOo0179nsIZVRFJ8ud5K/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: BLS e ACLS.pdf", pdfLink: "https://drive.google.com/file/d/1lJvCDnaPSVfmoEvp-Vc3cF2NdVpJmWg0/view?usp=sharing" }
        ]
      },
      // --- 2. PNEUMOLOGIA ---
      {
        id: 15,
        label: "Sub-Módulo 15",
        title: "Pneumonia Adquirida na Comunidade",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Pneumonia Adquirida na Comunidade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zb4mB7opL5QUPMzWW31pzEqWbOBCkJ3U/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pneumonias.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fDMZlP2SsnDFLQb0QbJvm-FzQ4akup1I/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Pneumonia: Adquirida na Comunidade.pdf", pdfLink: "https://drive.google.com/file/d/1wx6K53OTo9IbDSXwSHfXbBEPYK8x3Kln/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Pneumonia Adquirida na Comunidade.pdf", pdfLink: "https://drive.google.com/file/d/1s9pYXIWwAwomD-s8C2oy87kUlcjW5Oyd/view?usp=sharing" }
        ]
      },
      {
        id: 16,
        label: "Sub-Módulo 16",
        title: "Derrame Pleural",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Derrame Pleural_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EwoBT-jK3Q1IZuFM0B2gUxmKkviQzXsy/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Torácica Derrame Pleural_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1305SnXBcom1pL2nXAgJ36aoIflwINkiB/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Derrame Pleural.pdf", pdfLink: "https://drive.google.com/file/d/1C2Fo9hG00vYl9EAIKNSt5ks4DHse96Yp/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Derrame Pleural.pdf", pdfLink: "https://drive.google.com/file/d/1NlimEoY0LIIVD_ARZe35HESE_UQX8WLW/view?usp=sharing" }
        ]
      },
      {
        id: 17,
        label: "Sub-Módulo 17",
        title: "Asma",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Asma_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kHTXA6kKedUqzYbC0WbdVJ-UOzvUNyMk/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Asma e Fibrose Cística_HIIT EXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-ogcz93mfg1ZOymFBTKEB4PbjkBkiYoY/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Asma.pdf", pdfLink: "https://drive.google.com/file/d/1mdVrZstggJsbv84GNkd0tGBQb4X5EqxU/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Asma.pdf", pdfLink: "https://drive.google.com/file/d/1Vy-eAeDXqNLa-cCo6GKArgVu7Xhnki0Q/view?usp=sharing" }
        ]
      },
      {
        id: 18,
        label: "Sub-Módulo 18",
        title: "Doença Pulmonar Obstrutiva Crônica (DPOC)",
        imageUrl: "https://images.unsplash.com/photo-1631558556708-3482a1762c23?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doença Pulmonar Obstrutiva Crônica (DPOC).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1c9yHjhj0vwuouZdxtfoJKUcmqI_JwyvP/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Doença Pulmonar Obstrutiva Crônica (DPOC).pdf", pdfLink: "https://drive.google.com/file/d/1dKpvkfWWES-zDaU3HdKvzszLi9HFya8A/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Doença Pulmonar Obstrutiva Crônica (DPOC).pdf", pdfLink: "https://drive.google.com/file/d/16zBqW3tF71gKY3PemszfPoW97rL2Ru0T/view?usp=sharing" }
        ]
      },
      {
        id: 19,
        label: "Sub-Módulo 19",
        title: "Tabagismo",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Tabagismo_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_uNLkVn7sz8XtLpSV5I1z1wiu5JERK08/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tabagismo.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18hxCd_Wu6zGQxX7nvIp4adRf4ebUGUlp/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Tabagismo.pdf", pdfLink: "https://drive.google.com/file/d/1XEpGhrLHQrgkfNalJgL7OgnAjcft2UHP/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Tabagismo.pdf", pdfLink: "https://drive.google.com/file/d/13pE2mqBl4vABu09WU0QybPtrYfOcQpHT/view?usp=sharing" }
        ]
      },
      {
        id: 20,
        label: "Sub-Módulo 20",
        title: "Espirometria",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Espirometria_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vWsJXGVmhtquW7fUjtaRKneLsQ906uN0/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Espirometria.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/128Dc5FB-m9GKUVjMuyNkqR07iUKpdWIz/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Espirometria.pdf", pdfLink: "https://drive.google.com/file/d/1Iqu9TuBC42Qkbv2w3BAOMJSeM0G2dvnP/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Espirometria.pdf", pdfLink: "https://drive.google.com/file/d/1b5sfG_NNHUBnH1CDiaG6fV0qnqgtZvi4/view?usp=sharing" }
        ]
      },
      {
        id: 21,
        label: "Sub-Módulo 21",
        title: "Tromboembolismo Pulmonar (TEP)",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - TEP_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bHr1CLb6P4uYsbbydDg7ritW3TNKkfKb/view?usp=sharing" },
          { id: 2, title: "Aula 02 - TEP.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wUWUfXNgnH95nrGQbFVV0NX22e1CVdLp/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - TEP.pdf", pdfLink: "https://drive.google.com/file/d/1sVoVM48HLFJcF35rSZpxdQ4oyDgJ699T/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: TEP.pdf", pdfLink: "https://drive.google.com/file/d/1wrMZYZ2VtGlzt_JaeBjEZU5jsWHuOV_0/view?usp=sharing" }
        ]
      },
      {
        id: 22,
        label: "Sub-Módulo 22",
        title: "Hipertensão Pulmonar",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hipertensão pulmonar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jkpgWOq15zIU8sQ_uNa2nrJYtOwDs53M/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Hipertensão Pulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1H7q0XrwpeGd1puxVQAyFgp3tnIdNCyBh/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Hipertensão Pulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1Vh05DxFAUQ6ITHDJvzUQXFG_whHDWpW0/view?usp=sharing" }
        ]
      },
      {
        id: 23,
        label: "Sub-Módulo 23",
        title: "Distúrbios do Sono",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Distúrbios do Sono.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bfY_-TuFG2PDZJlicY-xsyUcThOxmQzB/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Sono e seus distúrbios.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1l9hvHwj2vLbake0-o2D6_Km_cbN8xhvl/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Distúrbios do Sono.pdf", pdfLink: "https://drive.google.com/file/d/1k7qlVj0JN3crq9km8GfF6J19Fot5U0SJ/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Distúrbios do Sono.pdf", pdfLink: "https://drive.google.com/file/d/1P4GzE0alMzHrhnJxsg313vpw0SZFU_e5/view?usp=sharing" }
        ]
      },
      {
        id: 24,
        label: "Sub-Módulo 24",
        title: "Doença Pulmonar Intersticial (DPI)",
        imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb07365f557?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doença Pulmonar Intersticial (DPI).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ui3kDDuMzyoemahbVvpiRQ4dyfORo6eS/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Doença Pulmonar Intersticial (DPI).pdf", pdfLink: "https://drive.google.com/file/d/1Cq1EmHUVq6GPfbGP9SiXO_O8fqw16YLs/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Doença Pulmonar Intersticial (DPI).pdf", pdfLink: "https://drive.google.com/file/d/1a6Y4E61pxy-9WIb22Ji2pcZw6QJujl_i/view?usp=sharing" }
        ]
      },
      {
        id: 25,
        label: "Sub-Módulo 25",
        title: "Nódulo Pulmonar",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Nódulo Pulmonar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Dhm0pwMuqbGl_wsF8Y7I3Lyt9m81XiPS/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Nódulo Pulmonar.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cLE3MoRj6Dm9x-CaIKHaswG73KTgjsqy/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Nódulo Pulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1dQpOcqhEVH6JtS6bUZfkQ4CClhd8_thP/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Nódulo Pulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1z4HCwcClpwyZJUOqh3C0X4REQutumxeV/view?usp=sharing" }
        ]
      },
      // --- 3. ENDOCRINOLOGIA E METABOLOGIA ---
      {
        id: 26,
        label: "Sub-Módulo 26",
        title: "Diabetes: Classificação, Fisiopatologia e Diagnóstico",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Diabetes Classificação, Fisiopatologia e Diagnóstico.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13XEAfJk9EagwPMCi01ocxjsL8qQyGCNi/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Diabetes: Classificação, Fisiopatologia e Diagnóstico.pdf", pdfLink: "https://drive.google.com/file/d/1PjqrYqRDaLdwzxiaaNGeawR475X00O8S/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Diabetes: Classificação, Fisiopatologia e Diagnóstico.pdf", pdfLink: "https://drive.google.com/file/d/16uTBVEFm7MCWQSkOG32hTZqyj6g0A3SU/view?usp=sharing" }
        ]
      },
      {
        id: 27,
        label: "Sub-Módulo 27",
        title: "Meta Terapêutica, Manejo do Pré-DM e Tratamento Não Farmacológico",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Meta Terapêutica, Manejo do pré-DM e Tratamento Não Farmacológico do DM_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13nnepLngEftLrgi8BwBshZgztZyOSnKI/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Meta Terapêutica, Manejo do pré-DM e Tratamento Não Farmacológico do DM.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17ffb-HPqmlj1aSZYb9Jdma5n5MutitM1/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Meta Terapêutica, Manejo do Pré-DM e Tratamento Não-Farmacológico do DM.pdf", pdfLink: "https://drive.google.com/file/d/118ReH1zWOiKyjMQPx_dn2TeW2yfcI-id/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Meta Terapêutica, Manejo do Pré-DM e Tratamento Não-Farmacológico do DM.pdf", pdfLink: "https://drive.google.com/file/d/1taqm1jNX-sFE_NFKt9lM53ipZ83blQfO/view?usp=sharing" }
        ]
      },
      {
        id: 28,
        label: "Sub-Módulo 28",
        title: "Antidiabéticos Orais e Subcutâneos - Parte I",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Antidiabéticos Orais e Subcutâneos - Parte I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1amq1LSveuqAQuzTVK8VZ3ItbW9t5fFhp/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Antidiabéticos Orais e Subcutâneos - Parte I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14hqA4YLrf7l9BC2aSwZ7RK4U-HC6glYr/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Antidiabéticos Orais e Subcutâneos I.pdf", pdfLink: "https://drive.google.com/file/d/1vbmJkxPTWj1U9tXFgVDrmIkDtMSafVkp/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Antidiabéticos Orais e Subcutâneos I.pdf", pdfLink: "https://drive.google.com/file/d/1mO23G_EklGKZRhAvKx-K1N-yoJjbAlaw/view?usp=sharing" }
        ]
      },
      {
        id: 29,
        label: "Sub-Módulo 29",
        title: "Antidiabéticos Orais e Subcutâneos - Parte II",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Antidiabéticos Orais e Subcutâneos - Parte II_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19HUkFXAi5RWLpvOzLUAkG_t5lRUz6q06/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Antidiabéticos Orais e Subcutâneos - Parte II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1k2hsxQyjoe-td6dyfy9_PiGDUwct_rmX/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Antidiabéticos Orais e Subcutâneos - Parte II.pdf", pdfLink: "https://drive.google.com/file/d/1sfvulbBnfDqsZCkn2AMURTmmbnKhIDou/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Antidiabéticos Orais e Subcutâneos - Parte II.pdf", pdfLink: "https://drive.google.com/file/d/1gHKNICFlUJ5xuZSUAHArrzlabUX9rGIF/view?usp=sharing" }
        ]
      },
      {
        id: 30,
        label: "Sub-Módulo 30",
        title: "Insulinoterapia",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Insulinoterapia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1iopFdn0yxsgELw222p038LJjgEmI6sDb/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insulinoterapia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-LLZrBOts8gEPeUzFie142YjEbVMaW-D/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Insulinoterapia.pdf", pdfLink: "https://drive.google.com/file/d/16maglEGYCuLgerJT4dXcwuuJIEIQM3HQ/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Insulinoterapia.pdf", pdfLink: "https://drive.google.com/file/d/1FmLxne5R8KLlrXfkruGJPz4vXVnPBTe5/view?usp=sharing" }
        ]
      },
      {
        id: 31,
        label: "Sub-Módulo 31",
        title: "Complicações Crônicas do Diabetes Mellitus (DM)",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Complicações Crônicas do Diabetes Mellitus (DM)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vblyO5MTvCjxcWGdDYIN2Aqq8Uknh-0O/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Complicações Crônicas do Diabetes Mellitus (DM).pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1YJmbhUgREMHSgfK3cacdfns6w4JUojX/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Complicações Crônicas do Diabetes Mellitus (DM).pdf", pdfLink: "https://drive.google.com/file/d/1S73VwlKXpcvn4D94UdakeDyeKpl18fLi/view?usp=sharing" }
        ]
      },
      {
        id: 32,
        label: "Sub-Módulo 32",
        title: "Hiperglicemia Hospitalar",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hiperglicemia Hospitalar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1u2wWuzSiX2WMTg23xOIvz-hgW6-wtVZ6/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hiperglicemia Hospitalar.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fzgYSQgmHYQ-GM34tJsSAhgXxTnmhZQS/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Hiperglicemia Hospitalar.pdf", pdfLink: "https://drive.google.com/file/d/1_MN_yZ0Ifya3ikj1aHQuuEeAfj0jA0LU/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Hiperglicemia Hospitalar.pdf", pdfLink: "https://drive.google.com/file/d/1sqg6K8nDyY7r5qGVxajaDrJeGpl-o6Dt/view?usp=sharing" }
        ]
      },
      {
        id: 33,
        label: "Sub-Módulo 33",
        title: "Emergências Hiperglicêmicas (CAD e EHH)",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Emergências Hiperglicêmicas (CAD e EHH).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14wEKRjDDQRKDCm9HfrSaGSao1Quj-G3i/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cetoacidose Diabética_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15xxoDkHVg80lsdSdGlIOfP0u-iElUiNl/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Emergências Hiperglicêmicas (CAD e EHH).pdf", pdfLink: "https://drive.google.com/file/d/1lSfJwNq3IVKgFKmQE1Qf3v30oUKzgX6w/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Emergências Hiperglicêmicas (CAD e EHH).pdf", pdfLink: "https://drive.google.com/file/d/1BjTPW9lntamHTDVBPojxB-bemKPVOY7W/view?usp=sharing" }
        ]
      },
      {
        id: 34,
        label: "Sub-Módulo 34",
        title: "Dislipidemia - Classificação e Diagnóstico",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Dislipidemia - Classificação e Diagnóstico_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Htg-PeQN_LydQwVrcAzrjaypP7SZ0Q6W/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Dislipidemia: Classificação e Diagnóstico.pdf", pdfLink: "https://drive.google.com/file/d/1R_Jgb5MVEzHk_Yy5DBsFOWtf55DOPPMA/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Dislipidemia: Classificação e Diagnóstico.pdf", pdfLink: "https://drive.google.com/file/d/1VFlyX_wL15dacNxpDVoxtvQIZCZmpI70/view?usp=sharing" }
        ]
      },
      {
        id: 35,
        label: "Sub-Módulo 35",
        title: "Tratamento das Dislipidemias",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Tratamento das Dislipidemias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mea-xEf_rGDv7smCz0M02u7qHBuR7Rmv/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tratamento das Dislipidemias.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15uEb68qS6GPFSmklCfpdyhZQcZX2KSOx/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Tratamento das Dislipidemias.pdf", pdfLink: "https://drive.google.com/file/d/1A4yi1ulwQGU-2Cyd3fsJOV9PaR8Vrp0H/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Tratamento das Dislipidemias.pdf", pdfLink: "https://drive.google.com/file/d/16emHh9M7N6lg4notVVqq3vsqj7INcOAj/view?usp=sharing" }
        ]
      },
      {
        id: 36,
        label: "Sub-Módulo 36",
        title: "Síndrome Metabólica",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Obesidade e Síndrome Metabólica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hNSnA-tzoklQ1dmkpqC37JDaq8_l8toX/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Síndrome Metabólica.pdf", pdfLink: "https://drive.google.com/file/d/1VOMBuiEXGI5WACFbkNe8bdLvO1EXLJ_g/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Síndrome Metabólica.pdf", pdfLink: "https://drive.google.com/file/d/1LO_98XHROEzoYVk37SiFqno3B1plodS5/view?usp=sharing" }
        ]
      },
      {
        id: 37,
        label: "Sub-Módulo 37",
        title: "Obesidade: Introdução e Tratamento Não Farmacológico",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Obesidade: Introdução e Tratamento Não-Farmacológico.pdf", pdfLink: "https://drive.google.com/file/d/1QwAwYIxeEestr7dr4IKb413AMeRoAqwv/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Obesidade: Introdução e Tratamento Não-Farmacológico.pdf", pdfLink: "https://drive.google.com/file/d/1RZVJ1uESXku_cexX2jcohud-ZpDcpFRd/view?usp=sharing" }
        ]
      },
      {
        id: 38,
        label: "Sub-Módulo 38",
        title: "Obesidade: Tratamento Farmacológico e Cirúrgico",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Obesidade Tratamento Farmacológico e Cirúrgico_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BB9zR-NnaPX6txMIIkzIcVveyq6UZzfT/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Obesidade Princípios Gerais e Cirurgia Bariátrica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19Kb7GEafGyyu2gtuJc8HJ7uCt9F-Jm_2/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Obesidade: Tratamento Farmacológico e Cirúrgico.pdf", pdfLink: "https://drive.google.com/file/d/1ujz4oCI6F47Oa86xIAPQvg29NcGFIYZ_/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Obesidade: Tratamento Farmacológico e Cirúrgico.pdf", pdfLink: "https://drive.google.com/file/d/1qeOY05Qf0GbAD6xJcHyA_WzoW9hPGHcb/view?usp=sharing" }
        ]
      },
      {
        id: 39,
        label: "Sub-Módulo 39",
        title: "Fisiologia da Tireoide",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Fisiologia da Tireoide_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jyd8aBOZJHHD4fzoOaxJDrDO4fyNVVB7/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Fisiologia da Tireoide.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lEPet77EolCJRzrxxcMWHRH6jiH2BZph/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Fisiologia da Tireoide.pdf", pdfLink: "https://drive.google.com/file/d/1RPvuT1SbhF_eHEbfvIclo5WxrzgXe84A/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Fisiologia da Tireoide.pdf", pdfLink: "https://drive.google.com/file/d/1L94q6Ri78Ea8tiMDLChrh6EWLwJLKA0v/view?usp=sharing" }
        ]
      },
      {
        id: 40,
        label: "Sub-Módulo 40",
        title: "Hipotireoidismo",
        imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hipotireoidismo_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gMn5Pn2_zYBbe1ffTFKAaf8SC1TEcFkc/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Hipotireoidismo.pdf", pdfLink: "https://drive.google.com/file/d/110VOWsuXWZgEwi1ytMWDA0nEiWn_GC9s/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Hipotireoidismo.pdf", pdfLink: "https://drive.google.com/file/d/1LBHeXzlR_qJaGCWpxHJzzsNSEh4MSJw2/view?usp=sharing" }
        ]
      },
      {
        id: 41,
        label: "Sub-Módulo 41",
        title: "Hipertireoidismo",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hipertireoidismo.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1iU50yfOHogKlq2lrGoO-V26-vFmc4cs7/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Hipertireoidismo.pdf", pdfLink: "https://drive.google.com/file/d/1ooUmcMEveftilWeMJA3r3txVvTWkEClQ/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Hipertireoidismo.pdf", pdfLink: "https://drive.google.com/file/d/1cqDnxaXMwalKH1vRKL-T2TTr-EK5xnGA/view?usp=sharing" }
        ]
      },
      {
        id: 42,
        label: "Sub-Módulo 42",
        title: "Tireoidites & Síndrome do Eutireoidiano Doente",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Tireoidites & Síndrome do Eutireoidiano Doente.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14HHDqCxrwMGLIlgoP3zif_rhi-FI1HaQ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - VISÃO DO ESPECIALISTA Cabeça e Pescoço Tireóide I - anatomia, fisiologia e tireoidites.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nMgO6tDtB6QhBsUhUrSa8_fWoz2vqpzI/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Tireoidites & Síndrome do Eutireoidiano Doente.pdf", pdfLink: "https://drive.google.com/file/d/1q5uVtAZRBqIYSd0cyelJyJzQ6238mmrC/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Tireoidites & Síndrome do Eutireoidiano Doente.pdf", pdfLink: "https://drive.google.com/file/d/1YtpY0d0HSF1Zt6P_yKb2EXzA-W14Lft3/view?usp=sharing" }
        ]
      },
      {
        id: 43,
        label: "Sub-Módulo 43",
        title: "Nódulos e Câncer de Tireoide",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Nódulos e Câncer de Tireoide_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EjdxVb9K1CJrbji0Hk5UYgTNPsOlzvYY/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Nódulo de tireoide parte 1 avaliação inicial, PAAF.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16UfVbpZVIEC6BmCWQQX-K1xLJxd1UP-u/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Nódulos e Câncer de Tireoide.pdf", pdfLink: "https://drive.google.com/file/d/1DrZcHhcxMfaeoJI5ZMn7nnijpPUt1znE/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Nódulos e Câncer de Tireoide.pdf", pdfLink: "https://drive.google.com/file/d/1E_6g9uHESFA3A9-4mq-Hytm8BynoZcRz/view?usp=sharing" }
        ]
      },
      {
        id: 44,
        label: "Sub-Módulo 44",
        title: "Fisiologia e Anatomia da Adrenal",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Fisiologia e Anatomia da Adrenal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EO-uqwwnWuiJvbrX114XSEOzvfLjnB0U/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Fisiologia e Anatomia da Adrenal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kHTXA6kKedUqzYbC0WbdVJ-UOzvUNyMk/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 45,
        label: "Sub-Módulo 45",
        title: "Incidentaloma Adrenal",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Incidentaloma Adrenal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18N582vyv2UWs3V0dO10Zmz11_UT2LOWZ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Incidentaloma Adrenal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1inolvNhK36QJ1xM5EnEJQMkgvJrNrdVT/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Incidentaloma Adrenal.pdf", pdfLink: "https://drive.google.com/file/d/1qKfxapoqel6OnAOvbF3582C6O9LuHQDF/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Incidentaloma Adrenal.pdf", pdfLink: "https://drive.google.com/file/d/10Q-j9S5AKEZQVOOWi2xN6ZFXV2O71dHO/view?usp=sharing" }
        ]
      },
      {
        id: 46,
        label: "Sub-Módulo 46",
        title: "Síndrome de Cushing",
        imageUrl: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Síndrome de Cushing ACTH independente e CA adrenal_COFEXPRESS_1.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ioXjV2uyoiu8bhtguEcbsw-bfnCOlaVA/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síndrome de Cushing.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1p0J8erNsSsoez2GvJi4Q1E1nS8dVF2GX/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Síndrome de Cushing.pdf", pdfLink: "https://drive.google.com/file/d/1wlYXhKtTWZ7SwhyfDXxgd8Y_EcKLdTxu/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Síndrome de Cushing.pdf", pdfLink: "https://drive.google.com/file/d/15poww6uHLf-6f6eCqAbynEaXOh0CL9yy/view?usp=sharing" }
        ]
      },
      {
        id: 47,
        label: "Sub-Módulo 47",
        title: "Insuficiência Adrenal",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Insuficiência Adrenal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tB4DazPl93xrui-gpvR5f7DnddPERep5/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Insuficiência Adrenal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FH9l96SKn53gyxdLmPuYfRIIjevTFA0Y/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Insuficiência Adrenal.pdf", pdfLink: "https://drive.google.com/file/d/1ENcsNlM-JpA_sOSAu0uj6sZRNlsr5Jmf/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Insuficiência Adrenal.pdf", pdfLink: "https://drive.google.com/file/d/1jegd8TBNDETPCMFerr5k5HSM-S0ch-09/view?usp=sharing" }
        ]
      },
      {
        id: 48,
        label: "Sub-Módulo 48",
        title: "Hiperaldosteronismo Primário",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hiperaldosteronismo Primário_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jDIEmUJn3OCKuL44ghXAOOX_nSBaOdxR/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hiperaldosteronismo Primário.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gLD7OD-bLDpGkZl0-YdfpwfAOURczHnv/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Hiperaldosteronismo Primário.pdf", pdfLink: "https://drive.google.com/file/d/1tGcMMn6pl4u5ViMCsfZXypVZTQzLpTtb/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Hiperaldosteronismo Primário.pdf", pdfLink: "https://drive.google.com/file/d/1A0M98trYGv9Z6Wla-JMRl_dIhzVEH0VH/view?usp=sharing" }
        ]
      },
      {
        id: 49,
        label: "Sub-Módulo 49",
        title: "Feocromocitoma",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 50,
        label: "Sub-Módulo 50",
        title: "Prolactinomas",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Prolactinomas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cZKpZAFI6dK8cRaE6sWrYj10FdesxgV2/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Prolactinomas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/107IjXP2mejzBhFVtSPsQckSZe9jH4Hlr/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Prolactinomas.pdf", pdfLink: "https://drive.google.com/file/d/1yTnO3F4QGlq0CtKHDZEFCQjtoGYdBqcR/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Prolactinomas.pdf", pdfLink: "https://drive.google.com/file/d/1nI8UVILDOZD9GC_uRQQeZJNC9_f7A9E6/view?usp=sharing" }
        ]
      },
      // --- 4. GASTROENTEROLOGIA E HEPATOLOGIA ---
      {
        id: 51,
        label: "Sub-Módulo 51",
        title: "Dispepsia",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - COFEXPRESS Dispepsia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tKHVLCP51pu0Nbm3z60M-s9Si619yVTZ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - VISÃO DO ESPECIALISTA Dispepsia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ddgziC1rwgn_t79T_H8LMgkNr0_R5L4w/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Dispepsia.pdf", pdfLink: "https://drive.google.com/file/d/1DMJD4pYW0IdurD9qsMJnxG_4V4ZfLKmj/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Dispepsia.pdf", pdfLink: "https://drive.google.com/file/d/1jH7I_HQB0XbN4nvLjqRiOagMIv5SNmRH/view?usp=sharing" }
        ]
      },
      {
        id: 52,
        label: "Sub-Módulo 52",
        title: "DRGE",
        imageUrl: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - COFEXPRESS DRGE.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fIUM7PguVckk3Oh67n6ZIaN4c4o2TUWF/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Esôfago Hernias de Hiato_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15uGzA82yomg3finTqZft6EyF8k-8gl3y/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - DRGE.pdf", pdfLink: "https://drive.google.com/file/d/1S0CeeUimruDy-P8hfXp7nWTibHAggwtx/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: DRGE.pdf", pdfLink: "https://drive.google.com/file/d/1Ef8zQwBQTR5nMjp4LsFGk4jDkjyAcY-4/view?usp=sharing" }
        ]
      },
      {
        id: 53,
        label: "Sub-Módulo 53",
        title: "Úlcera péptica, H. pylori, Gastrite Atrófica e Dispepsia Funcional",
        imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Úlcera péptica, H. pylori, Gastrite Atrófica e Dispepsia Funcional_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1s1wjGlsyL__Tt9dQFcPenSwnQRpi_GBv/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Úlcera péptica, H. pylori, Gastrite Atrófica e Dispepsia Funcional.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vSa3oFWO7lRfcw7TsqpdoXLbt1W7UGhV/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Úlcera Péptica, H. Pylori, Gastrite Atrófica e Dispepsia Funcional.pdf", pdfLink: "https://drive.google.com/file/d/1hMH1n9JUMV88pwAvzLes1ouH7vsBTJTo/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Úlcera Péptica, H. Pylori, Gastrite Atrófica e Dispepsia Funcional.pdf", pdfLink: "https://drive.google.com/file/d/1VZKAIXFgHx0boa01SqE8uXG6hFd-s-L7/view?usp=sharing" }
        ]
      },
      {
        id: 54,
        label: "Sub-Módulo 54",
        title: "Disfagia, Esofagite Eosinofílica e Acalasias",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Disfagia, Esofagite Eosinofílica e Acalasias.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fuKaqkUStau-gfchamgKSnot4CyBFU6r/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Esôfago Diagnósticos e diferenciais de disfagia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fH45OyT_XBHCCAk4S0OvKPqSwIRxei7L/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Esôfago: Diagnósticos e Diferenciais de Disfagia.pdf", pdfLink: "https://drive.google.com/file/d/11aphBw1EWyBehWXJoGVY6xAJysgeBZXk/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Esôfago: Diagnósticos e Diferenciais de Disfagia.pdf", pdfLink: "https://drive.google.com/file/d/1Pu2WJB0U5N7UzP8ssc5fc3n6JE9C--D1/view?usp=sharing" }
        ]
      },
      {
        id: 55,
        label: "Sub-Módulo 55",
        title: "Diarreia Agudas e Colite Pseudomembranosa",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Diarreia Agudas e Colite Pseudomembranosa.pdf", pdfLink: "https://drive.google.com/file/d/1YzKCdN31O3f47yxlfnOaZg4nCid2Ef-d/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Diarreia Agudas e Colite Pseudomembranosa.pdf", pdfLink: "https://drive.google.com/file/d/1CHRf5mjcV1xWt3l-REfhrz0rOKGCAnNb/view?usp=sharing" }
        ]
      },
      {
        id: 56,
        label: "Sub-Módulo 56",
        title: "Diarreias Crônicas",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Diarreias Crônicas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1q46CdCgxLhuDSC3gtEX8v1SKHGZYQmgF/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Gastro 2 Diarreia Crônica e Doenças Funcionais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1iopFdn0yxsgELw222p038LJjgEmI6sDb/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Ficha Resumo: Diarreias Crônicas.pdf", pdfLink: "https://drive.google.com/file/d/19DK5atTMYTfrZjj5A_0qXUi6t_1_vIP5/view?usp=sharing" }
        ]
      },
      {
        id: 57,
        label: "Sub-Módulo 57",
        title: "Doença Inflamatória Intestinal (DII)",
        imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doença Inflamatória Intestinal (DII)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DOsoNlS8kKZlX_eC0FsxeQzr8WF0w6et/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença Inflamatória intestinal - Parte I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Gai0QWOzsON22LY5cR4wcRfB-PLP9mQc/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Doença Inflamatória Intestinal (DII).pdf", pdfLink: "https://drive.google.com/file/d/124xXwG1SHsH52QG1MZ6Ikk2oMrXsNwQq/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Doença Inflamatória Intestinal (DII).pdf", pdfLink: "https://drive.google.com/file/d/1WTjNBpfH51u_GSUvQ6M-rPsMLbnuxL3e/view?usp=sharing" }
        ]
      },
      {
        id: 58,
        label: "Sub-Módulo 58",
        title: "Avaliação de Enzimas Hepáticas",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Avaliação de Enzimas Hepáticas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11pxbwP5x0c3wexgJS4MiW3qV7Cbkm1R-/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Avaliação de Enzimas Hepáticas.pdf", pdfLink: "https://drive.google.com/file/d/14pwRASAWgx2p7Sqg7Nfik7fHCSzPVu7k/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Avaliação de Enzimas Hepáticas.pdf", pdfLink: "https://drive.google.com/file/d/11K91g-xDY4WgTTKP_BYx4m0TaUzbz6-H/view?usp=sharing" }
        ]
      },
      {
        id: 59,
        label: "Sub-Módulo 59",
        title: "Doenças Hepáticas: CBP, CEP, HAI e Doença de Wilson",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doenças hepáticas CBP, CEP, HAI e Doença de Wilson_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sl5-TdMK6mI4NBJe5DbaY4YefX5VTLhh/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doenças hepáticas CBP, CEP, HAI e Doença de Wilson.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18xa3Q0nopPX7kGdIBs2t7uUCz33Y-P1b/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Doenças Hepáticas: CBP, CEP, HAI e Doença de Wilson.pdf", pdfLink: "https://drive.google.com/file/d/1ZIjcZsdK-Lkua1Lw-Wnr-mDQgYPaxlMK/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Doenças Hepáticas: CBP, CEP, HAI e Doença de Wilson.pdf", pdfLink: "https://drive.google.com/file/d/1tO7G3uAxFp7QuICd2FFyjJE5IIOtraRI/view?usp=sharing" }
        ]
      },
      {
        id: 60,
        label: "Sub-Módulo 60",
        title: "Doença Hepática Esteatótica Metabólica (DHEM)",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doença hepática esteatótica Metabólica (DHEM).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1okKuKjYaPuvnUDkuwzlp_UtwYzkw9_Gl/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Doença Hepática Esteatótica Metabólica (DHEM).pdf", pdfLink: "https://drive.google.com/file/d/1r8OAGHKaNdL4kPOLAVyiiBv2alxZYiGj/view?usp=sharing" }
        ]
      },
      {
        id: 61,
        label: "Sub-Módulo 61",
        title: "Cirrose Hepática: Conceitos Gerais",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirrose hepática Conceitos Gerais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zR3zXbF20evOtLdpk0b74jDIdrSf0yAr/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirrose Hepática: Conceitos Gerais.pdf", pdfLink: "https://drive.google.com/file/d/1V1S4rLkcc4BZ3tE0cSra-doQvF2obSFj/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Cirrose Hepática: Conceitos Gerais.pdf", pdfLink: "https://drive.google.com/file/d/1ItEW4zmIK8kJd-1RUg146Ym5Q0XE5hv_/view?usp=sharing" }
        ]
      },
      {
        id: 62,
        label: "Sub-Módulo 62",
        title: "Cirrose Hepática: Ascite + PBE",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirrose hepática Ascite + PBE_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18vr7EbI49zWVmdb9i8fdiwyVAqGof238/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirrose hepática Ascite + PBE.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1i9FdEI1BEarfsfypfnF4fGS0sO1LVmNJ/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirrose Hepática: Ascite + PBE.pdf", pdfLink: "https://drive.google.com/file/d/1z2pMC4zRjcGonJX0ZN-0SfAN5L5yZICC/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Cirrose Hepática: Ascite + PBE.pdf", pdfLink: "https://drive.google.com/file/d/1-3P6sBzVtpe4VtebBMje64_Y8KcfUO20/view?usp=sharing" }
        ]
      },
      {
        id: 63,
        label: "Sub-Módulo 63",
        title: "Cirrose Hepática: Encefalopatia Hepática e Síndrome Hepatorrenal",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirrose hepática Encefalopatia Hepática e Síndrome Hepatorrenal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/173TrJU409pcj3aOQoCuZJH5uJrQGW0-G/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirrose Hepática: Encefalopatia Hepática e Síndrome Hepatorrenal.pdf", pdfLink: "https://drive.google.com/file/d/1q_b3wnTy--3ylyp9bBIkCaEcd__hZPjg/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Cirrose Hepática: Encefalopatia Hepática e Síndrome Hepatorrenal.pdf", pdfLink: "https://drive.google.com/file/d/1Vi8jgwQBNoa1QSMpHPsZdgRF-vwVPQ80/view?usp=sharing" }
        ]
      },
      {
        id: 64,
        label: "Sub-Módulo 64",
        title: "Cirrose Hepática: Varizes esofágicas e Síndrome Hepatopulmonar",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirrose hepática Varizes esofágicas e Síndrome Hepatopulmonar.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cWworyk_Jy3AZG5F-fQfaFwsGKRefMfI/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirrose Hepática: Varizes Esofágicas e Síndrome Hepatopulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1o0rlq35hU-s2jP6Gt0CrinA14TvWLbv6/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Cirrose Hepática: Varizes Esofágicas e Síndrome Hepatopulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1MOsvqUbgS1OYD_CYShHsFQyEHouRQweF/view?usp=sharing" }
        ]
      },
      {
      id: 65,
      label: "Sub-Módulo 65",
      title: "Doenças oportunistas HIV",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Doenças oportunistas HIV_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1foVyiuN8-KIKSvHyOsAaIOlb0FmvsxGK/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Doenças oportunistas HIV.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dtL9jk-KTnaWQ1NB_JB5qsS36S_yWAMX/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Doenças oportunistas HIV.pdf", pdfLink: "https://drive.google.com/file/d/1lfnW81wFjvaWC6ecVRcnsq-2_jN4fL5O/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Doenças Oportunistas: HIV.pdf", pdfLink: "https://drive.google.com/file/d/1WPCK24_ZHHFa30Oa6slyVIeAN5nOmvw-/view?usp=sharing" }
      ]
    },
    {
      id: 66,
      label: "Sub-Módulo 66",
      title: "HIV",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - HIV - Pediatria_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qv9V7YbN-hxgueZWe5LGZ9y_S957W_0q/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - HIV.pdf", pdfLink: "https://drive.google.com/file/d/1S4AnHkaYiQ1-ZjTGVM21A2KIR4DkW88X/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: HIV.pdf", pdfLink: "https://drive.google.com/file/d/1K5h3DIUcSRxBNUnCqtEz2lG4h45g6lRD/view?usp=sharing" }
      ]
    },
    {
      id: 67,
      label: "Sub-Módulo 67",
      title: "Antibióticos I",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Antibióticos I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bAORXQIbZL_rH4GYbnLe87lGYqAWlTuB/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Antibióticos I.pdf", pdfLink: "https://drive.google.com/file/d/1ytr0i9sh80ZsbeTCJH5hvdONrHszCNUM/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Antibióticos I.pdf", pdfLink: "https://drive.google.com/file/d/14Ds2Q7dKJaiD9dUfTUf_5lh6ib3lRskN/view?usp=sharing" }
      ]
    },
    {
      id: 68,
      label: "Sub-Módulo 68",
      title: "Antibióticos II",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Antibióticos II_cofexpress.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1d9MZNwpjWKG7UyiHQF9OJq8ISmvI4738/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Antibióticos II.pdf", pdfLink: "https://drive.google.com/file/d/19hk6vtL-lRDK6tNuxzJhRqyhYtqlIcXI/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Antibióticos II.pdf", pdfLink: "https://drive.google.com/file/d/1-oO5_k7wd-5F2lH_QqpN7liwG6gb_owr/view?usp=sharing" }
      ]
    },
    {
      id: 69,
      label: "Sub-Módulo 69",
      title: "Sífilis e Uretrites Infecciosas",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Sífilis e Uretrites Infecciosas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oTJQS9l7ehfeAHimf-N1mUyU1p27sogW/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Urologia DSTs_COFEXPRES.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gkx8aMjZ1MvUFi06TWAkW4Py5TfEHqtH/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Sífilis e Uretrites Infecciosas.pdf", pdfLink: "https://drive.google.com/file/d/1MEVy5PYVNyGoJSwBotmeMGNFDaM0Dfha/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Sífilis e Uretrites Infecciosas.pdf", pdfLink: "https://drive.google.com/file/d/1qjGxfy-67JIal8QOojPyIF8hJluubnW8/view?usp=sharing" }
      ]
    },
    {
      id: 70,
      label: "Sub-Módulo 70",
      title: "Neurossífilis",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Neurossífilis.pdf", pdfLink: "https://drive.google.com/file/d/1dlKJg8b0jfFYxsgZyTRyDvlYYOs3qoQb/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Neurossífilis.pdf", pdfLink: "https://drive.google.com/file/d/1gba2RM3kXiagwJAtknOA7iw1BYl26ldD/view?usp=sharing" }
      ]
    },
    {
      id: 71,
      label: "Sub-Módulo 71",
      title: "Tuberculose Pulmonar",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Tuberculose Pulmonar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1i9FdEI1BEarfsfypfnF4fGS0sO1LVmNJ/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Tuberculose.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/135qA10Y0Vgo0EUyc4b0dgNY7t3TmkECK/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Tuberculose Pulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1UW5aMMV4fbEoeUvc015msX8DVPU65SJL/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Tuberculose Pulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1dXzdBlQBZTYDLNmNDwE6CC6ABVWeg1FF/view?usp=sharing" }
      ]
    },
    {
      id: 72,
      label: "Sub-Módulo 72",
      title: "Tratamento de Tuberculose e efeitos colaterais do RIPE",
      imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Tratamento de Tuberculose e efeitos colaterais do RIPE.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1H1tBUdPjmVTjVqwAfwVfXhhN4dM8fcxE/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Tratamento de Tuberculose e Efeitos Colaterais do RIPE.pdf", pdfLink: "https://drive.google.com/file/d/1qjloFERWmac545XDuFtS9995FvLdUu6l/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Tratamento de Tuberculose e Efeitos Colaterais do RIPE.pdf", pdfLink: "https://drive.google.com/file/d/1afruLai8CgaBDHlXGaJloVC8mePp3jj7/view?usp=sharing" }
      ]
    },
    {
      id: 73,
      label: "Sub-Módulo 73",
      title: "Tuberculose Extra Pulmonar",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Tuberculose Extra Pulmonar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cfkwkEmYGkWOUaiWTTt_2N6RpQd-pLcB/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Tuberculose Extra Pulmonar.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ye-v_R-TrWFv_K39TMwcfKMekEceKQw2/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Tuberculose Extra Pulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1ZXTu-DS072g6FkW5SwsSvYApuR9ruODp/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Tuberculose Extra Pulmonar.pdf", pdfLink: "https://drive.google.com/file/d/1JYixfQI_HRsdHha7wM8meREOzGeAMlCC/view?usp=sharing" }
      ]
    },
    {
      id: 74,
      label: "Sub-Módulo 74",
      title: "Doenças Negligenciadas",
      imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Doenças Negligenciadas.pdf", pdfLink: "https://drive.google.com/file/d/1ZYHWGJGgM5rRiWvyTEmE0wCnQ8CO6M-8/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Doenças Negligenciadas.pdf", pdfLink: "https://drive.google.com/file/d/1KGCFUlqx31xMFp73or3BYspGSg8rmFGh/view?usp=sharing" }
      ]
    },
    {
      id: 75,
      label: "Sub-Módulo 75",
      title: "Acidentes com Animais Peçonhentos",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Acidentes com Animais Peçonhentos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zoKYF1AMkM20PBSUo6Yp7C2dbB5HEaxa/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Acidentes com Animais Peçonhentos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vU3VgKehudy-b_Q9Sr_MBWiK-dGj0tKV/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Acidentes com Animais Peçonhentos.pdf", pdfLink: "https://drive.google.com/file/d/1LJcCUwMaNAmBPJhypvkkSH2CwGIYIGRZ/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Acidentes com Animais Peçonhentos.pdf", pdfLink: "https://drive.google.com/file/d/1naWZde85mRz_ji4xIEQMhbgpZwBFsel0/view?usp=sharing" }
      ]
    },
    {
      id: 76,
      label: "Sub-Módulo 76",
      title: "Vacinação - Situações Especiais",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Vacinação - Situações Especiais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vaIVvgE1QefO5LtGi9W1c4zGg8SnQ5gT/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Vacinação - Situações Especiais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1p_bSvlmI183pB0c7tTLR1gK5pG1zey-4/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Vacinação: Situações Especiais.pdf", pdfLink: "https://drive.google.com/file/d/1-DiWh4-OJku87EBlNB5dua-3FYRC5MsS/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Vacinação: Situações Especiais.pdf", pdfLink: "https://drive.google.com/file/d/14UKz4XOfG0Aax2L3IXL4Q1rihGibUzMS/view?usp=sharing" }
      ]
    },
    {
      id: 77,
      label: "Sub-Módulo 77",
      title: "Doenças Virais e Pandêmicas",
      imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a945cd3ae?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Doenças Virais e Pandêmicas.pdf", pdfLink: "https://drive.google.com/file/d/1YWPHvAkZlIBCD9QDK1aSW1Rjy4db9DhV/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Doenças Virais.pdf", pdfLink: "https://drive.google.com/file/d/1O96bUVhul1YPNRqz_Jon1q_Cw9fRF-6u/view?usp=sharing" }
      ]
    },
    {
      id: 78,
      label: "Sub-Módulo 78",
      title: "Arboviroses",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Arboviroses - Clínica Médica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1o26omSsCte2qlM9OumhMJypjvPaKDXXr/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Arboviroses.pdf", pdfLink: "https://drive.google.com/file/d/19TaORZTiGJBVn3xwdEjGItdgdpt8xj_j/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Arboviroses.pdf", pdfLink: "https://drive.google.com/file/d/1ILnhy3KU6rxVTtDqmwUzrKuvjAvMhbFV/view?usp=sharing" }
      ]
    },
    {
      id: 79,
      label: "Sub-Módulo 79",
      title: "Icterícias febris e Febre Maculosa",
      imageUrl: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Icterícias febris e Febre Maculosa.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_rZQ5ehPRYp8i-d5XcgimdQIsvJUuX6p/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Icterícias Febris e Febre Maculosa.pdf", pdfLink: "https://drive.google.com/file/d/1JtdwNkVfZnxjCZpgti66tANcSaj34bfJ/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Icterícias Febris e Febre Maculosa.pdf", pdfLink: "https://drive.google.com/file/d/1SLgUPkuw9jBkd6gXlJuqz-WjLz2VudhS/view?usp=sharing" }
      ]
    },
    {
      id: 80,
      label: "Sub-Módulo 80",
      title: "Hepatites Virais",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Hepatites Virais - Clínica Médica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Gfvbfyxg5U0X1JLuRBrrKOLBym4OeGbf/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Hepatites Virais - Pediatria_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mgBAregIPCtKobWAVFSjgkrSUC2jLm3I/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Hepatites Virais.pdf", pdfLink: "https://drive.google.com/file/d/1e6jUF2apjGf45Cj7eEpdqY_jx4hHH8k0/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Hepatites Virais.pdf", pdfLink: "https://drive.google.com/file/d/1KxVDLZNfWBRNkVhDBHhzWkAXyUbcrA9K/view?usp=sharing" }
      ]
    },
    {
      id: 81,
      label: "Sub-Módulo 81",
      title: "Parasitoses Intestinais",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Parasitoses Intestinais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17r-Eg5J1GPGikRZPIOR6Xc5qFaDfQvn2/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Parasitoses Intestinais - Pediatria.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jNsy5gF_hZHLm0IK782vrCH9yfkIsysM/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Parasitoses Intestinais - Clínica Médica.pdf", pdfLink: "https://drive.google.com/file/d/11vir3SiW62SK1jP1GuUKNPVAdUp18UGI/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Parasitoses Intestinais - Clínica Médica.pdf", pdfLink: "https://drive.google.com/file/d/10H3poLmgx8mZR-N9SZbWEBvW1cgdG_DD/view?usp=sharing" }
      ]
    },
    // --- 6. NEUROLOGIA ---
    {
      id: 82,
      label: "Sub-Módulo 82",
      title: "Acidente Vascular Cerebral Isquêmico (AVCi)",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Acidente Vascular Cerebral Isquêmico (AVCi).pdf", pdfLink: "https://drive.google.com/file/d/1OsHlUtRRwXeOqIVlfLmTtZtR30md8va6/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Acidente Vascular Cerebral Isquêmico (AVCi).pdf", pdfLink: "https://drive.google.com/file/d/1pa7yH7D_9169I-pFU1jw22OHnXJaBg92/view?usp=sharing" }
      ]
    },
    {
      id: 83,
      label: "Sub-Módulo 83",
      title: "AVCi - Tratamento e Complicações",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Acidente Vascular Cerebral Isquêmico (AVCi) - Tratamento.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cZEsyDSbcDbB6z_oSeimrZp6_krDXkl8/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Acidente Vascular Cerebral Isquêmico (AVCi): Tratamento e Complicações.pdf", pdfLink: "https://drive.google.com/file/d/1CGCVi1IU--axsI216yc0PHtXsd0PHU2-/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Acidente Vascular Cerebral Isquêmico (AVCi): Tratamento e Complicações.pdf", pdfLink: "https://drive.google.com/file/d/1JIttGg8wITboGPOpUdgoEuNjYUtvyJ9q/view?usp=sharing" }
      ]
    },
    {
      id: 84,
      label: "Sub-Módulo 84",
      title: "Acidente Vascular Cerebral Hemorrágico (AVCh) Intraparenquimatoso",
      imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Acidente Vascular Cerebral Hemorrágico (AVCh) Intraparenquimatoso.pdf", pdfLink: "https://drive.google.com/file/d/1S3FgiPVknpnfIOx59eWBzpxbAzhjn2qM/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Acidente Vascular Cerebral Hemorrágico (AVCh) Intraparenquimatoso.pdf", pdfLink: "https://drive.google.com/file/d/1xMhTsCI3XQ7ZMVsf0uEKDtEiiXO-Dbgj/view?usp=sharing" }
      ]
    },
    {
      id: 85,
      label: "Sub-Módulo 85",
      title: "Hemorragia subaracnóidea (HSA)",
      imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Hemorragia subaracnóidea (HSA)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1igz_SA7e-lbNlLsvVigu2NXzbdgb6QJQ/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Hemorragia Subaracnóidea (HSA).pdf", pdfLink: "https://drive.google.com/file/d/10mUmf5JDbfRO8RtBkBR6FA7szAJjOmyC/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Hemorragia Subaracnóidea (HSA).pdf", pdfLink: "https://drive.google.com/file/d/1BiQ74eJb4E0-sjFu49C6qnyn37jwdHao/view?usp=sharing" }
      ]
    },
    {
      id: 86,
      label: "Sub-Módulo 86",
      title: "Introdução às Cefaleias Primárias",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Introdução às Cefaleias Primárias.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Ckth1P_YcQ0zhl85MK1OSDY7h6P70tRD/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Introdução às Cefaleias Primárias.pdf", pdfLink: "https://drive.google.com/file/d/1k09OB4PFDMAmnCR5C3nHMmgOqutGH2mm/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Introdução às Cefaleias Primárias.pdf", pdfLink: "https://drive.google.com/file/d/18iDFjMUf_Z5ec8UHyCRaHS66OyXNNYmz/view?usp=sharing" }
      ]
    },
    {
      id: 87,
      label: "Sub-Módulo 87",
      title: "Enxaqueca (Migrânea)",
      imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Enxaqueca (Migrânea).pdf", pdfLink: "https://drive.google.com/file/d/1QN-CaqV1OYkGj_7D5edX742cT9O6_h12/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Enxaqueca (Migrânea).pdf", pdfLink: "https://drive.google.com/file/d/1utDj-zhANmGWfg1sCDx_OqXbuUsg6zxl/view?usp=sharing" }
      ]
    },
    {
      id: 88,
      label: "Sub-Módulo 88",
      title: "Cefaleias Trigêmino-Autonômicas",
      imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Cefaleias Trigêmino-Autonômicas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GkgRAhluQ3fBKKXr0NLZ7dy8r1wukeZS/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Cefaleias Trigêmino-Autonômicas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1C71q3WrV9Fz73LSSLxJI_IzipnHLaY8Z/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Cefaleias Trigêmino-Autonômicas.pdf", pdfLink: "https://drive.google.com/file/d/18tlhL3igxOOF9z-eiN1MD-JgP_US6uUl/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Cefaleias Trigêmino-Autonômicas.pdf", pdfLink: "https://drive.google.com/file/d/1yBNi1OlHTYpNY1HyiW4G-xatVeqRLyT9/view?usp=sharing" }
      ]
    },
    {
      id: 89,
      label: "Sub-Módulo 89",
      title: "Meningites e Encefalites",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Meningite e Encefalite_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1B9NQRNS5T6q5aqJfxIe0tQHosvWPHhBx/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Meningites e Encefalites_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1--4UYx3BTXDFeJNpbEFp3jwzImb3b8GD/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Meningites & Encefalites.pdf", pdfLink: "https://drive.google.com/file/d/11XR8tl2pa6WjFP0WVJns5d_eVS3-aBfH/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Meningites & Encefalites.pdf", pdfLink: "https://drive.google.com/file/d/1IBaSuMd-qRyggS75GZ2UVBmKJWb9yq6k/view?usp=sharing" }
      ]
    },
    {
      id: 90,
      label: "Sub-Módulo 90",
      title: "Síndrome de Guillain-Barré (SGB)",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Síndrome de Guillain-Barré (SGB).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1F4MIs8tURPOQSEc0_JaXO4hd7Ewk4VmX/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Síndrome de Guillain-Barré (SGB).pdf", pdfLink: "https://drive.google.com/file/d/12bQRGHa4EKwAXR1hs1p_sXC1HuEAUfrp/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Síndrome de Guillain-Barré (SGB).pdf", pdfLink: "https://drive.google.com/file/d/1unXJTBv9CO6NBXQ0tf7t0MjDOxkyamhT/view?usp=sharing" }
      ]
    },
    {
      id: 91,
      label: "Sub-Módulo 91",
      title: "Miastenia Gravis",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Miastenia Gravis_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14EO1Z_727dbe5zuGR4LaGj4z84c5sjOA/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Miastenia Gravis.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16PKtzV-9PG0btObeqtINCwTLkuNSj4Gm/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Miastenia Gravis.pdf", pdfLink: "https://drive.google.com/file/d/1rNUNbotDyut9G4OVRtSSAsN31MnQcpWL/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Miastenia Gravis.pdf", pdfLink: "https://drive.google.com/file/d/1ecOkfC9pOMY8lMhQCYTSA82TBdYoJVHa/view?usp=sharing" }
      ]
    },
    {
      id: 92,
      label: "Sub-Módulo 92",
      title: "Epilepsia",
      imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Epilepsia 1.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1D2ahe0EC7Ns_8PVfWvHnipYYk95TJSjH/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Epilepsia 2.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jYKj9p9QKOuRhvsLpvOYJF5VVUU06veM/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Epilepsia.pdf", pdfLink: "https://drive.google.com/file/d/1pRyo6nsOM2-mnt1-ebYFgEdV0ZNrB5yi/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Epilepsia.pdf", pdfLink: "https://drive.google.com/file/d/1t2k4SQ8Go2qu-Um3O9pyz0QA1zV-9svd/view?usp=sharing" }
      ]
    },
    {
      id: 93,
      label: "Sub-Módulo 93",
      title: "Doença de Parkinson",
      imageUrl: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Doença de Parkinson.pdf", pdfLink: "https://drive.google.com/file/d/1BzqUSqgwncaGkZcK_2ZGgp8pGuj5yiWv/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Doença de Parkinson.pdf", pdfLink: "https://drive.google.com/file/d/1dAEvQaHSqPYQ54YrcM2GRUIDakqxQmJQ/view?usp=sharing" }
      ]
    },
    {
      id: 94,
      label: "Sub-Módulo 94",
      title: "Esclerose Múltipla (EM)",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Esclerose Múltipla (EM).pdf", pdfLink: "https://drive.google.com/file/d/1AhBsTufeArh5PJNnhNeLpKtbl7-XW5L5/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Esclerose Múltipla (EM).pdf", pdfLink: "https://drive.google.com/file/d/1mfl19cL4gzplo2GCRndHocZ4rKWCf41q/view?usp=sharing" }
      ]
    },
    {
      id: 95,
      label: "Sub-Módulo 95",
      title: "Neuromielite Óptica (NMO)",
      imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Neuromielite Óptica (NMO)_COFEXPRESS..ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FTeG-Apl1FmJg1l3n9SDjKG_XNAGjQrM/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Neuromielite Optica (NMO).pdf", pdfLink: "https://drive.google.com/file/d/1EvlWv0b4kY4gr3yy5eoEAOoVjtydRnc9/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Neuromielite Optica (NMO).pdf", pdfLink: "https://drive.google.com/file/d/1DEx79gQ7uJQpIFK1rlBH-AaIjktnkjPv/view?usp=sharing" }
      ]
    },
    // --- 7. NEFROLOGIA E DISTÚRBIOS HIDROELETROLÍTICOS ---
    {
      id: 96,
      label: "Sub-Módulo 96",
      title: "Gasometria Arterial I",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Gasometria Arterial I (PDF com link de aula interna).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1G07ke43twvIbrPLd7-26cTDb_Gpp6DLD/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Gasometria Arterial I.pdf", pdfLink: "https://drive.google.com/file/d/1pY090lojECS0YYOq7K1h2HMp_lTDdVNv/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Gasometria Arterial I.pdf", pdfLink: "https://drive.google.com/file/d/1mIUpmP2mZWzjTsB8iX2_3yKUoD8uaKM2/view?usp=sharing" }
      ]
    },
    {
      id: 97,
      label: "Sub-Módulo 97",
      title: "Gasometria Arterial II",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Gasometria Arterial II_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10qGBNz2HUPqU3UwWczIsULkmp_UrcxhQ/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Gasometria Arterial II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uUNsm9DW7LHBI5_l2vX4B-i4HVkzus5p/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Gasometria Arterial II.pdf", pdfLink: "https://drive.google.com/file/d/1MptRHq86RN4zBhc_PVHu4SeF8rmEysXg/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Gasometria Arterial II.pdf", pdfLink: "https://drive.google.com/file/d/16vWvv40yDLGgUS8l-AsChhhrLMBWla0F/view?usp=sharing" }
      ]
    },
    {
      id: 98,
      label: "Sub-Módulo 98",
      title: "Distúrbios do Sódio",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Distúrbios do Sódio.pdf", pdfLink: "https://drive.google.com/file/d/1G8i0cNwO13piBnWM4f1WIU4WQmVCsQtq/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Distúrbios do Sódio.pdf", pdfLink: "https://drive.google.com/file/d/1BHhUP2fH-2SFRannV00Wh8oxOXfviWGy/view?usp=sharing" }
      ]
    },
    {
      id: 99,
      label: "Sub-Módulo 99",
      title: "Distúrbios do Potássio",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Distúrbios do Potássio.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1C4U1bXTOzq7U3fW4JSLOyTp3j6JO6RDD/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Distúrbios do Potássio_COFEXPRESS-.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1l0a18X1fcuvc8e_NLIVjyToGVy9raxuP/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Distúrbios do Potássio.pdf", pdfLink: "https://drive.google.com/file/d/1q9r5R8ZbdFFqyA-M4xCeD7RPE0Y2XAZa/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Distúrbios do Potássio.pdf", pdfLink: "https://drive.google.com/file/d/1zMyACK2YAGi9vZpEv8aeHSH4xet6MhWS/view?usp=sharing" }
      ]
    },
    {
      id: 100,
      label: "Sub-Módulo 100",
      title: "Distúrbios do Cálcio",
      imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Distúrbios do Cálcio_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16FkHHifF-3VKoV9lSlkDUrFhgh6S0mm0/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Distúrbios do Cálcio.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19sjL9AYx6FuVlmdwTvsLqeFt8vST1fLD/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Distúrbios do Cálcio.pdf", pdfLink: "https://drive.google.com/file/d/1Nl_J3yfebV8SKgTs7l8_YIq5k3J4PGDH/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Distúrbios do Cálcio.pdf", pdfLink: "https://drive.google.com/file/d/1xhSVSuI61CdhjtT4l1FGdqozKFZIUpg6/view?usp=sharing" }
      ]
    },
    {
      id: 101,
      label: "Sub-Módulo 101",
      title: "Distúrbios Hidroeletrolíticos - Outros (Magnésio e Fósforo)",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Distúrbios Hidroeletrolíticos - Outros (Magnésio e Fósforo)COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15Zh3QSADArGZjEDYTMHsYmY-jZ56PvLw/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Distúrbios Hidroeletrolíticos - Outros (Magnésio e Fósforo).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cPgf8vzZeRwEqFz8RAhO6wRRZPh8qdCb/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Distúrbios Hidroeletrolíticos: Outros (Magnésio e Fósforo).pdf", pdfLink: "https://drive.google.com/file/d/1cMeVoKVXcA2QeLmvTZ8Z8YEH5zs9m3hs/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Distúrbios Hidroeletrolíticos: Outros (Magnésio e Fósforo).pdf", pdfLink: "https://drive.google.com/file/d/1aNNDwKmCJVBxqNHlkQBCX8WEnnxuvg9y/view?usp=sharing" }
      ]
    },
    {
      id: 102,
      label: "Sub-Módulo 102",
      title: "Hipercalcemias",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Hipercalcemias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1n6BT80oerBtIlmHZKOWPFlgA6S5DsOPA/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Hipercalcemias.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GS3vlLugr_JbwHOaT9upYmY-6cZjU3z-/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Hipercalcemias.pdf", pdfLink: "https://drive.google.com/file/d/1wLLLa59v7tVsQjskGGQCTdwZME2wyqbK/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Hipercalcemias.pdf", pdfLink: "https://drive.google.com/file/d/1bufG-gOfRyDnDknMVYOO920Qxp-arF6W/view?usp=sharing" }
      ]
    },
    {
      id: 103,
      label: "Sub-Módulo 103",
      title: "Hipocalcemias",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Hipocalcemias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1igz_SA7e-lbNlLsvVigu2NXzbdgb6QJQ/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Hipocalcemias.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1o4j2mAKMJsrX2V1JwJz_8usl2zR_3zTS/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Hipocalcemias.pdf", pdfLink: "https://drive.google.com/file/d/1ouFfB_5w7FFv0e2mAJW5yKuOOUOQNcH0/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Hipocalcemias.pdf", pdfLink: "https://drive.google.com/file/d/1L2Ikm_0cRRbMcnETBCbg4KwoTm-iS8u4/view?usp=sharing" }
      ]
    },
    {
      id: 104,
      label: "Sub-Módulo 104",
      title: "Injúria Renal Aguda (IRA) - Parte I",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Injúria Renal Aguda (IRA) Parte 1_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1j5AYcc-bwbYnTINxzqObPjVcojQRCfG4/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Injúria Renal Aguda (IRA) Parte 1.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bCCS1yD7KXSyyyvfw9cRAmTlAH4_Vh1e/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Injúria Renal Aguda (IRA): Parte I.pdf", pdfLink: "https://drive.google.com/file/d/19yiaNdER8lnPj-p3oNwoU71oWzsTfy6y/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Injúria Renal Aguda (IRA): Parte I.pdf", pdfLink: "https://drive.google.com/file/d/1t0-C0B35Exp66bQiuNRlF94Ej4Q3fxFX/view?usp=sharing" }
      ]
    },
    {
      id: 105,
      label: "Sub-Módulo 105",
      title: "Injúria Renal Aguda (IRA) - Parte II",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Injúria Renal Aguda (IRA) Parte 2_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1e-cRkYNTfXIGb67tBRIAAtU7tr8ytM4J/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Injúria Renal Aguda (IRA) Parte 2.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18gv_lUmicHxao4wBa_gO7-Zm8YTU1Zmn/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Injúria Renal Aguda (IRA): Parte II.pdf", pdfLink: "https://drive.google.com/file/d/1cZolUpdMlgMfSK59PqfCrBBkspzoec1T/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Injúria Renal Aguda (IRA): Parte II.pdf", pdfLink: "https://drive.google.com/file/d/1sWNyGvIstITbQR_8xTlaf2P96ZEpyMAG/view?usp=sharing" }
      ]
    },
    {
      id: 106,
      label: "Sub-Módulo 106",
      title: "Doença Renal Crônica I",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Doença Renal Crônica I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gP5RTcucR78sO3q-wri-jdNXjwCGYuvJ/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Doença Renal Crônica I.pdf", pdfLink: "https://drive.google.com/file/d/1syhh3svcRB8pV01-UZryJVIB6ppBRpI_/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Doença Renal Crônica I.pdf", pdfLink: "https://drive.google.com/file/d/1LSrydfFkGfDbDW4VGsriL7nvZLs3ILBr/view?usp=sharing" }
      ]
    },
    {
      id: 107,
      label: "Sub-Módulo 107",
      title: "Doença Renal Crônica II",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Doença Renal Crônica II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dLB0bCsX666jGMq_ltrP-L-bh92u7WfT/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Doença Renal Crônica II.pdf", pdfLink: "https://drive.google.com/file/d/1CGOcslT9YKDDAekemTBMEjreq5HfSoxS/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Doença Renal Crônica II.pdf", pdfLink: "https://drive.google.com/file/d/1Xxf0-JXHjjcAxP4o4oHu0ZPPY-lpln9H/view?usp=sharing" }
      ]
    },
    {
      id: 108,
      label: "Sub-Módulo 108",
      title: "Glomerulopatias I",
      imageUrl: "https://images.unsplash.com/photo-1631558556708-3482a1762c23?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - COFEXPRESS Glomerulopatias I-.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qrayQ8ZbcWjq5dJTjxvuSbVnGHQmTFiZ/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Glomerulopatias I.pdf", pdfLink: "https://drive.google.com/file/d/1lCC5cOG6_d7VMJtl9R5-pEJHzCPJSlSG/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Glomerulopatias I.pdf", pdfLink: "https://drive.google.com/file/d/1KOy_L-jO1McBqkgK7oUqUybQ4gvSFtY3/view?usp=sharing" }
      ]
    },
    {
      id: 109,
      label: "Sub-Módulo 109",
      title: "Glomerulopatias II",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - COFEXPRESS Glomerulopatias II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12ogTCEUSdkuLknByogqdYoVmfezEVr7a/view?usp=sharing" },
        { id: 2, title: "Aula 02 - VISÃO DO ESPECIALISTA Glomerulopatias II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wQtTcNIafvxaJtDhDO7Zkyc9JF-NkYS/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Glomerulopatias II.pdf", pdfLink: "https://drive.google.com/file/d/1Qq-dmPZjfgxaTBaoJY9WJ9v_bb_N_idi/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Glomerulopatias II.pdf", pdfLink: "https://drive.google.com/file/d/1MoMlrIZZB6gzPqnI9JYMgiGrpPBlFfp8/view?usp=sharing" }
      ]
    },
    {
      id: 110,
      label: "Sub-Módulo 110",
      title: "Infecção do Trato Urinário (ITU)",
      imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Infecção do Trato Urinário (ITU)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ejlbxYFr2YJa1iIsmpyQDSkycGUKZXE7/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Infecção de Trato Urinário (ITU).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DdhAG-Gcpvsav2_kVJPl3aIq2adH8QVz/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Infecção do Trato Urinário (ITU).pdf", pdfLink: "https://drive.google.com/file/d/1qnEOPovCmy12hJ1fd-kmS03A8Aw_jsAX/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Infecção do Trato Urinário (ITU).pdf", pdfLink: "https://drive.google.com/file/d/1wpcypGv2DxtxUnmz2f9IBILLEsmpp4qP/view?usp=sharing" }
      ]
    },
    // --- 8. REUMATOLOGIA ---
    {
      id: 111,
      label: "Sub-Módulo 111",
      title: "Introdução às Artrites e Artrite Reumatoide (AR)",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Artrites e Artrite Reumatoide (AR)_COFEXPRESS parte 1.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15GlKcYNtnHpCpca9wrMSwe5SDfU6Rn3Y/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Introdução às Artrites e Artrite Reumatoide (AR).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vwKzWfHQ02qqcOQDlQg8Ath5Awj_wmtt/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Introdução às Artrites e Artrite Reumatoide (AR).pdf", pdfLink: "https://drive.google.com/file/d/1MpMvsQ-B6i7UsHbVIEfLZOrnoTOb2CKj/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Introdução às Artrites.pdf", pdfLink: "https://drive.google.com/file/d/1N4HznwRTJEmFXi5VmF1tPST7peaonph8/view?usp=sharing" }
      ]
    },
    {
      id: 112,
      label: "Sub-Módulo 112",
      title: "Espondiloartrites",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Espondiloartrites_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cR1Tn_7bxfhJxrc_ncxQrKEobfAyhFFG/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Espondiloartrites.pdf", pdfLink: "https://drive.google.com/file/d/1fwVnE9ZSdA9bWG7E_By4M4l4zoCGZiwB/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Espondiloartrites.pdf", pdfLink: "https://drive.google.com/file/d/1Qpze6hro0uYF6KsU6E9ree7KEid_P9wz/view?usp=sharing" }
      ]
    },
    {
      id: 113,
      label: "Sub-Módulo 113",
      title: "Artrites Microcristalinas (Gota e CPPD)",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Artrites Microcristalinas (Gota e CPPD) parte 1.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1o57W4ghhkrXR2O_Qr8PJOp8zhgz58342/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Artrites Microcristalinas (Gota e CPPD)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wKx_JZ0vX9fDNpmuD5Vqdm8lDdAmixdt/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Artrites Microcristalinas (Gota e CPPD).pdf", pdfLink: "https://drive.google.com/file/d/1-rpmWPz_UNP_qWsSFSB51AiiSpGiKLj9/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Artrites Microcristalinas (Gota e CPPD).pdf", pdfLink: "https://drive.google.com/file/d/1dRIPYfk8_wMzxcJ4NTyTpJuzjeyX1-wS/view?usp=sharing" }
      ]
    },
    {
      id: 114,
      label: "Sub-Módulo 114",
      title: "Osteoartrite",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb07365f557?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Osteoartrite.pdf", pdfLink: "https://drive.google.com/file/d/19rYz6u-q70sRhGxq8S_cDVf-TJ4hHkl9/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Osteoartrite.pdf", pdfLink: "https://drive.google.com/file/d/1yABQK3XRt6fLHpkbVSLO1ZAL82GVNFwi/view?usp=sharing" }
      ]
    },
    {
      id: 115,
      label: "Sub-Módulo 115",
      title: "Fibromialgia",
      imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Fibromialgia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1p0BI5Qd8KTNF85JE96ArScCniz-il4-S/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Fibromialgia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1d-AF5InUIJF7avtqj4s-RdweqY09Djth/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Fibromialgia.pdf", pdfLink: "https://drive.google.com/file/d/1PlWqVNvm0JEvhoiQM53jghOpkkeSOVeF/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Fibromialgia.pdf", pdfLink: "https://drive.google.com/file/d/1Hw5i8eOP3YGox8hEAAaqhifyvvv_Iy-a/view?usp=sharing" }
      ]
    },
    {
      id: 116,
      label: "Sub-Módulo 116",
      title: "Vasculites de Grandes e Médios Vasos",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Vasculites de Grandes e Médios Vasos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1r76HNT4Fo5-1xMLatVs_sjRDD-CisIEz/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Vasculites de Grandes e Médios Vasos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rYgrfEafOYoVD9iNwCp_6AzhGeJ__8GT/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Vasculites de Grandes e Médios Vasos.pdf", pdfLink: "https://drive.google.com/file/d/1DTfQt8Iu_mNjIWVDIqq4NwCQtHcp_lAa/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Vasculites de Grandes e Médios Vasos.pdf", pdfLink: "https://drive.google.com/file/d/1hswaI8oKipmRVc3pmYn6e2Ht0OF9iEyc/view?usp=sharing" }
      ]
    },
    {
      id: 117,
      label: "Sub-Módulo 117",
      title: "Vasculites de Pequenos Vasos",
      imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Vasculites de Pequenos Vasos.pdf", pdfLink: "https://drive.google.com/file/d/1N8SViwAJZMfwPGsNlFgZSwJDPJYDs4-U/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Vasculites de Pequenos Vasos.pdf", pdfLink: "https://drive.google.com/file/d/1X0ELVzWgDJ0wTbabEHx34pKYXw6Qmf4I/view?usp=sharing" }
      ]
    },
    {
      id: 118,
      label: "Sub-Módulo 118",
      title: "Doença de Behçet",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Doença de Behçet.pdf", pdfLink: "https://drive.google.com/file/d/1J5A3Fw46lPwoMMifDhT_dBnyeOYCSvX9/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Doença de Behçet.pdf", pdfLink: "https://drive.google.com/file/d/1h4PAiXG4evgRSTZ4y-InMnMDDPcqd2A4/view?usp=sharing" }
      ]
    },
    {
      id: 119,
      label: "Sub-Módulo 119",
      title: "Lúpus Eritematoso Sistêmico (LES)",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Lúpus Eritematoso Sistêmico - Clínica Médica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ee_GEB3ePOJ6ngWZWvO6Dv2kvFrLfRzF/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Lúpus Eritematoso Sistêmico.pdf", pdfLink: "https://drive.google.com/file/d/1NELpO6ZBxR8IJXqxEfMDHdzH27UYODhS/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Lúpus Eritematoso Sistêmico.pdf", pdfLink: "https://drive.google.com/file/d/1byxyBopIOXuQ0zlwmALjQvSrAWr40IRb/view?usp=sharing" }
      ]
    },
    {
      id: 120,
      label: "Sub-Módulo 120",
      title: "Osteoporose",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Osteoporose_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BWZwKNG-pMGNCmTO1SzI3JHpLvyA74Ar/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Osteoporose.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HR2k8_iIc7KDttYSi0ftd6qRsG5auSu-/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Osteoporose.pdf", pdfLink: "https://drive.google.com/file/d/1WcwaqER9Il1kPyU69ttDtUB47zMiUdSk/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Osteoporose.pdf", pdfLink: "https://drive.google.com/file/d/1mNFQQ1s9t1Y0zZv0R09NMoKFRHgXkCFM/view?usp=sharing" }
      ]
    },
    {
      id: 121,
      label: "Sub-Módulo 121",
      title: "Esclerose Sistêmica",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Esclerose Sistêmica.pdf", pdfLink: "https://drive.google.com/file/d/1s8CLYgIN_b4iEDe7jcZcGECJVNwQtW_6/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Esclerose Sistêmica.pdf", pdfLink: "https://drive.google.com/file/d/11znY0YM7iqeUuCXdnvAbEdqULb6I1lLQ/view?usp=sharing" }
      ]
    },
    {
      id: 122,
      label: "Sub-Módulo 122",
      title: "Doença de Sjögren",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Doença de Sjögren_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jDIEmUJn3OCKuL44ghXAOOX_nSBaOdxR/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Doença de Sjögren.pdf", pdfLink: "https://drive.google.com/file/d/1uWvhFpBhM-jUdjotaSc4GB2Hfr0PImcL/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Doença de Sjögren.pdf", pdfLink: "https://drive.google.com/file/d/137ODLa4tN5MBUZPnAQX-_wsGshDmxCCt/view?usp=sharing" }
      ]
    },
    {
      id: 123,
      label: "Sub-Módulo 123",
      title: "Miopatias Autoimunes Sistêmicas",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Miopatias Autoimunes Sistêmicas - Clínica Médica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jkpgWOq15zIU8sQ_uNa2nrJYtOwDs53M/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Miopatias Autoimunes Sistêmicas - Clínica Médica.pdf", pdfLink: "https://drive.google.com/file/d/18mduokRCi3bEVP9Zyklhctmpf-TUtfWy/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Miopatias Autoimunes Sistêmicas - Clínica Médica.pdf", pdfLink: "https://drive.google.com/file/d/1WlMtzotjh_qA54jKAAFomLY97TE-2kfT/view?usp=sharing" }
      ]
    },
    // --- 9. HEMATOLOGIA ---
    {
      id: 124,
      label: "Sub-Módulo 124",
      title: "Avaliação Global do Hemograma",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Hemato 1 Introdução às Anemias e Hemocomponentes.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18cqIMQm-ARGCKZSebzDqeJmhIdr7rYkP/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Introdução às Anemias e Hemocomponentes_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tSkihEokit03iSsQ1DY7jAJzhyGYNnX5/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Avaliação Global do Hemograma.pdf", pdfLink: "https://drive.google.com/file/d/1UVintVyVFQzE9xZqAIh1a4hQXz3Km0mc/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Avaliação Global do Hemograma.pdf", pdfLink: "https://drive.google.com/file/d/1eylmstGfoicPd9tfvtb93ZrGwRXqjQOs/view?usp=sharing" }
      ]
    },
    {
      id: 125,
      label: "Sub-Módulo 125",
      title: "Anemias Hipoproliferativas I",
      imageUrl: "https://images.unsplash.com/photo-1615461168405-28925c70c0f8?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Anemias Hipoproliferativas I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-fX48BVCbjG-pHKXHZxZWcSkHopHsvMz/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Hemato 3 Anemia Ferropriva e Talassemia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-T5rxnGYWyf9dUqaVmwYbSbTPFccd3aw/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Anemias Hipoproliferativas I.pdf", pdfLink: "https://drive.google.com/file/d/1paERnQQ1_ZfY4hdKXTH096F4fEx1S9mX/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Anemias Hipoproliferativas I.pdf", pdfLink: "https://drive.google.com/file/d/1Gee6QCCCayK8Q-om0C77eweE66bo0Ut-/view?usp=sharing" }
      ]
    },
    {
      id: 126,
      label: "Sub-Módulo 126",
      title: "Anemias Hipoproliferativas II",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Anemias Hipoproliferativas II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vwH0JCJtAhHFhid7nT5sC9BBq9luh5bS/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Anemias Hipoproliferativas II.pdf", pdfLink: "https://drive.google.com/file/d/1JCjiRjg99UwLMxIR-wgnucUTz-pCDs54/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Anemias Hipoproliferativas II.pdf", pdfLink: "https://drive.google.com/file/d/1hfj6R0nRXVA_zjZMRKxIwRXzL4_u8OoG/view?usp=sharing" }
      ]
    },
    {
      id: 127,
      label: "Sub-Módulo 127",
      title: "Anemias Hemolíticas Adquiridas",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Anemias Hemolíticas Adquiridas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rONillVxVcE_HzYpFesIts7lk2qie9X6/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Anemias Hemolíticas Adquiridas.pdf", pdfLink: "https://drive.google.com/file/d/1zE3GlS0L6K7D5qbeC0Gy31jOqsvHCm66/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Anemias Hemolíticas Adquiridas.pdf", pdfLink: "https://drive.google.com/file/d/1wNvGP_xxsDGK4adiNjeJkNHGFWTqaOyT/view?usp=sharing" }
      ]
    },
    {
      id: 128,
      label: "Sub-Módulo 128",
      title: "Anemias Hemolíticas Hereditárias",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Anemias Hemolíticas Hereditárias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qveH0eyP1JKOptnsuPA35HnBWkXuAWYw/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Hemato 2 Anemia Falciforme_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AXpW8jooY0zcutkWou1jK2TO7Bk8PipU/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Anemias Hemolíticas Hereditárias.pdf", pdfLink: "https://drive.google.com/file/d/1C6ShvayIm8p780qSmCO7s4cKl8L66fQP/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Anemias Hemolíticas Hereditárias.pdf", pdfLink: "https://drive.google.com/file/d/12CZVn7aRxS1rwGOhmvpWb5_DPvJ0ZSEu/view?usp=sharing" }
      ]
    },
    {
      id: 129,
      label: "Sub-Módulo 129",
      title: "Púrpura Trombocitopênica Trombótica (PTT)",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Púrpura Trombocitopênica Trombótica (PTT)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nC4CD_HrwgJeb1sODY3VAIZ70QFJDJo-/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Púrpura Trombocitopênica Trombótica (PTT).pdf", pdfLink: "https://drive.google.com/file/d/1Dxrc45YlWg9uY_HZBV4C_l9K_FO065Sv/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Púrpura Trombocitopênica Trombótica (PTT).pdf", pdfLink: "https://drive.google.com/file/d/1PFBpyR3p1lV27LyidKiMWn-aBPlPK8ib/view?usp=sharing" }
      ]
    },
    {
      id: 130,
      label: "Sub-Módulo 130",
      title: "Fisiologia da Coagulação",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Fisiologia da Coagulação.pdf", pdfLink: "https://drive.google.com/file/d/1vTVksWIcRbDNkhcPFJI3MSpy_dvJ1Bev/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Fisiologia da Coagulação.pdf", pdfLink: "https://drive.google.com/file/d/1uG5vY5ST_Q9X20tVNc-4EA8T1odmJxyY/view?usp=sharing" }
      ]
    },
    {
      id: 131,
      label: "Sub-Módulo 131",
      title: "Distúrbios da Hemostasia",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Hemato 4 Hemostasia e Distúrbios Hemorrágicos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vVduborvlRrC1uCyjKLbSyqdbI8CwHhL/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Hemato 4 Hemostasia e Distúrbios Hemorrágicos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1D20QTxENHtoiXti6PVE9XttB33Je6HXe/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Distúrbios da Hemostasia.pdf", pdfLink: "https://drive.google.com/file/d/1-t8W0FbpYwa7dUlonLg023hP3E0ARG0J/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Distúrbios da Hemostasia.pdf", pdfLink: "https://drive.google.com/file/d/1IvquhKsLrw5wvkEzMFTtlhZ-ivoht_TS/view?usp=sharing" }
      ]
    },
    {
      id: 132,
      label: "Sub-Módulo 132",
      title: "Hemoterapia",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Hemoterapia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17S8r9ELFFgbwkW42zfr2l59uYUG2idRH/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Hemoterapia.pdf", pdfLink: "https://drive.google.com/file/d/1k5ZUiQdFVIB0URXJwWRaHJjNYoiBFu_I/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Hemoterapia.pdf", pdfLink: "https://drive.google.com/file/d/131FFF1ITC78_4ND0kdvl8BeRA9VSxZRp/view?usp=sharing" }
      ]
    },
    {
      id: 133,
      label: "Sub-Módulo 133",
      title: "Leucemias",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Onco 1 Tumores e Leucemias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vtVOLuWBqZU1tF13B5oHtD6g3BubNSnd/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Leucemias.pdf", pdfLink: "https://drive.google.com/file/d/1-lOnRGq1gXVhfvbNeWFmj3eCbpoDgXMV/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Leucemias - Básico.pdf", pdfLink: "https://drive.google.com/file/d/1-3hm_0LXsZyTx1XCgIonZLQJG6hSK_-n/view?usp=sharing" }
      ]
    },
    {
      id: 134,
      label: "Sub-Módulo 134",
      title: "Linfomas",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Estômago Câncer, introdução e linfomas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vfG4fNfRyNlKih2ucR0AOgnaNQuxwq2G/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Linfomas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dehP3W_MAU-oIhHKCaAG4RueAwmUvta5/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Linfomas.pdf", pdfLink: "https://drive.google.com/file/d/1uEuLnmt22gKxBGJ6NRKjpv-Mmtp3Pf8r/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Linfomas - Básico.pdf", pdfLink: "https://drive.google.com/file/d/1bLyhpy115lGWzA8pESUv90vvb7TaR5tH/view?usp=sharing" }
      ]
    },
    {
      id: 135,
      label: "Sub-Módulo 135",
      title: "Discrasias Plasmocitárias",
      imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Discrasias Plasmocitárias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1D0OU2jTeeXLR3Ydk30-6Wc8vHlFHR1hM/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Discrasias Plasmocitárias.pdf", pdfLink: "https://drive.google.com/file/d/1uMaMKAdt1HJz8m8tHLNhvzfVy4nV8Q6H/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Discrasias Plasmocitárias.pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1R-DM024Z1h_xstkPMYNAdecyxfAhzv/view?usp=sharing" }
      ]
    },
    {
      id: 136,
      label: "Sub-Módulo 136",
      title: "Síndromes Medulares",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Síndromes Medulares COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1swIYXSf-zqSf-fD24ynZRIcjENY4K3AS/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Síndromes Medulares (2).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bGhCRTTvPEArl4ltC6MJU1WwI6928Jm8/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Síndromes Medulares.pdf", pdfLink: "https://drive.google.com/file/d/1Ll7fmMSYDaQcLRh8rC4JXwfeeaRngEdR/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Síndromes Medulares.pdf", pdfLink: "https://drive.google.com/file/d/12KxqASBnPaDrkcKqR3MZ9vqI5mWKLfx0/view?usp=sharing" }
      ]
    },
    // --- 10. MEDICINA DE EMERGÊNCIA E TERAPIA INTENSIVA ---
    {
      id: 137,
      label: "Sub-Módulo 137",
      title: "Via Aérea, Intubação e Ventilação Não Invasiva (VNI)",
      imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Via Aérea, Intubação e Ventilação Não-Invasiva (VNI).pdf", pdfLink: "https://drive.google.com/file/d/1CCx5jFUZ2TaLpz_mi98ZPbQLtlwWuePb/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Via Aérea, Intubação e Ventilação Não-Invasiva (VNI).pdf", pdfLink: "https://drive.google.com/file/d/1UufMw_1hxNWWYtQ3DJCbBSy0qEOiDT-6/view?usp=sharing" }
      ]
    },
    {
      id: 138,
      label: "Sub-Módulo 138",
      title: "Síndrome do Desconforto Respiratório Agudo (SDRA)",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Insuficiência Respiratória e Síndrome do Desconforto Respiratório Agudo Pediátrico (PARDS).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yFBVmiFZzVMpfSOuh85qVmYZNb8g__z4/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Síndrome do Desconforto Respiratório Agudo (SDRA).pdf", pdfLink: "https://drive.google.com/file/d/11rZMPePJIlcCBdiCR1gZXFyGJ2ckRmo6/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Síndrome do Desconforto Respiratório Agudo (SDRA).pdf", pdfLink: "https://drive.google.com/file/d/1v3zVGb6391QrRDNNoGxA8IyyaAWntQvQ/view?usp=sharing" }
      ]
    },
    {
      id: 139,
      label: "Sub-Módulo 139",
      title: "Princípios de Ventilação Mecânica (VM)",
      imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Ventilação Mecânica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11027NIEsPf754pA7G4NPz1vk_EByH4vz/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Princípios de ventilação mecânica (VM)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-0DnaFq6CC8biVY7hYjqLKaON_D2sKaa/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Princípios de Ventilação Mecânica (VM).pdf", pdfLink: "https://drive.google.com/file/d/1QdXHGLLbTyJeM1WSfLCU_OE1TDoR3oYH/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Princípios de Ventilação Mecânica (VM).pdf", pdfLink: "https://drive.google.com/file/d/1OUSV3KSyFdWoLDwh6_2h9g5Uzp0AiJ5_/view?usp=sharing" }
      ]
    },
    {
      id: 140,
      label: "Sub-Módulo 140",
      title: "Ventilação Mecânica (VM): Exercícios",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Ventilação Mecânica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kO-_4DtZYfqtLAWcLPOIkv5dWKZfzl0-/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Ventilação Mecânica (VM): Exercícios.pdf", pdfLink: "https://drive.google.com/file/d/18FA8y6y28QnnHz3SDrNzHgXRy08YLiqy/view?usp=sharing" }
      ]
    },
    {
      id: 141,
      label: "Sub-Módulo 141",
      title: "Pneumonia Associada à Ventilação Mecânica",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Pneumonia Associada à Ventilação Mecânica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11oxaflutkEDK-dNfWRVYEP8Z0pEYHx9k/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Pneumonia Associada à Ventilação Mecânica.pdf", pdfLink: "https://drive.google.com/file/d/1HeDDEzNEcXp12qfMS0etSe10mLRhgDgH/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Pneumonia Associada à Ventilação Mecânica.pdf", pdfLink: "https://drive.google.com/file/d/1kw6Vrgx--jHVqsLIKRVoWHmay0JEzM7A/view?usp=sharing" }
      ]
    },
    {
      id: 142,
      label: "Sub-Módulo 142",
      title: "Intoxicações Exógenas",
      imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Intoxicações Exógenas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1no2eKOjyFErx2xy6U0Hwqm_mxppAgzvA/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Intoxicações Exógenas.pdf", pdfLink: "https://drive.google.com/file/d/1HlRpXreIKYRjiOOkZ9lK2E4Jv1CDRar2/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Intoxicações Exógenas.pdf", pdfLink: "https://drive.google.com/file/d/1vm-X8thIRwXCiJrdz0yjZMNb0CBsYbcT/view?usp=sharing" }
      ]
    },
    {
      id: 143,
      label: "Sub-Módulo 143",
      title: "Choque - Abordagem Inicial",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Choque - Abordagem Inicial_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fKafl74xi3_d-MWglEPFZzx6eySP3u5e/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Choque - Abordagem Inicial.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hrWV9aoD4yMKSqg2li1LKm5u620Tnrab/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Choque: Abordagem Inicial.pdf", pdfLink: "https://drive.google.com/file/d/1EWYRWn7_6vaDjM4_QZErSpagS5LOes8M/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Choque: Abordagem Inicial.pdf", pdfLink: "https://drive.google.com/file/d/1XLUpDHqC-FFrtxF91qpaPgZbbPk5fVka/view?usp=sharing" }
      ]
    },
    {
      id: 144,
      label: "Sub-Módulo 144",
      title: "Choque - Tipos de Choque",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - COFEXPRESS Choque e Drogas Vasoativas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FV5srgR6yLePJV89XNmZqRNLzt1Nkejk/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Choque: Tipos de Choque.pdf", pdfLink: "https://drive.google.com/file/d/1M3LppYMS4PtKuaHud70hj6niKZDVWxLk/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Choque: Tipos de Choque.pdf", pdfLink: "https://drive.google.com/file/d/1Pcc_jZUOob3dwIrFN0toQtOOBk0QbcHh/view?usp=sharing" }
      ]
    },
    {
      id: 145,
      label: "Sub-Módulo 145",
      title: "Infecção de Corrente Sanguínea (ICS)",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Infecção de Corrente Sanguínea (ICS)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1z7hpG6IrurxiVBnVEWzYqa4wPIur27T4/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Infecção de Corrente Sanguínea (ICS).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GaotAM7se1HQLMTrQ_OIALihzbyN3lAj/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Infecção de Corrente Sanguínea (ICS).pdf", pdfLink: "https://drive.google.com/file/d/1gJhomDEw0xKGiOMijIELVl7gIFO8evh_/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Infecção de Corrente Sanguínea (ICS).pdf", pdfLink: "https://drive.google.com/file/d/1fa89bslzRox373ETCWyS5z6gnHaKu8Xx/view?usp=sharing" }
      ]
    },
    {
      id: 146,
      label: "Sub-Módulo 146",
      title: "Analgesia e Sedação",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Analgesia e Sedação_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dK-ZHr8xfEiYg4wtBHl-ZUc8bMx3BZsn/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Sedoanalgesia e Sequência Rápida de Intubação.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-h94Yc9gEVB92N3pwxZmP7oKJIY_Fxlg/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Analgesia e Sedação.pdf", pdfLink: "https://drive.google.com/file/d/19QJ6fwBqLeGFpuLBVKI_En4_UFvIR7hk/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Analgesia e Sedação.pdf", pdfLink: "https://drive.google.com/file/d/1k74n0EQKB7ZzNkJOJwlvSRRAbLiQ6YhG/view?usp=sharing" }
      ]
    },
    {
      id: 147,
      label: "Sub-Módulo 147",
      title: "Drogas Vasoativas (DVA)",
      imageUrl: "https://images.unsplash.com/photo-1631558556708-3482a1762c23?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Drogas vasoativas (DVA).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ujmGIcBNbvDjNqHMXBuvWUW3xHcV3WDS/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Drogas Vasoativas (DVA).pdf", pdfLink: "https://drive.google.com/file/d/10DRW3JXYGTeIRVCmPyho6X4E8V7375fn/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Drogas Vasoativas (DVA).pdf", pdfLink: "https://drive.google.com/file/d/1YK1TIMCIfhWjoHqPFOu2brGOBinW-i3b/view?usp=sharing" }
      ]
    },
    // --- 11. PSIQUIATRIA ---
    {
      id: 148,
      label: "Sub-Módulo 148",
      title: "Emergências Psiquiátricas",
      imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Emergências psiquiátricas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HDmIfwe3qyK0byckjhSBt0eaPY2JRFCR/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Emergências psiquiátricas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jGLBaUcbGRTpa1sWAF7Gb50Dcl_uRKAd/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Emergências Psiquiátricas.pdf", pdfLink: "https://drive.google.com/file/d/1aVuZi9-x25ewXC7WGoNIM2a5AHDQVuen/view?usp=sharing" }
      ]
    },
    {
      id: 149,
      label: "Sub-Módulo 149",
      title: "Transtorno de Humor - Parte I",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Transtorno de Humor I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GcKBJkF4iCczCWRBI8GQgDYE6KD-NdbI/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Transtorno de Humor I.pdf", pdfLink: "https://drive.google.com/file/d/1Ts8cczgG2oQCBuH0Kql_I1n8dbAvKBAf/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Transtorno de Humor I.pdf", pdfLink: "https://drive.google.com/file/d/1fremGCDNGhAfSUjPoHK7X3PX3YPxdpOy/view?usp=sharing" }
      ]
    },
    {
      id: 150,
      label: "Sub-Módulo 150",
      title: "Transtorno de Humor - Parte II: Antidepressivos",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Transtorno de Humor II Antidepressivos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14oy42xGH_PL4DqTyVW5X3aBqnnUCon70/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Transtorno de Humor II: Antidepressivos.pdf", pdfLink: "https://drive.google.com/file/d/1QslR_r4-mdNVzJS4PD4lWLK0pVN0eIgs/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Transtorno de Humor II: Antidepressivos.pdf", pdfLink: "https://drive.google.com/file/d/13_OXYhQnVQPRHp9ptHkL_LYUKlUCrkyh/view?usp=sharing" }
      ]
    },
    {
      id: 151,
      label: "Sub-Módulo 151",
      title: "Transtorno de Humor - Parte III: Mania e Transtorno Bipolar",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Transtorno de Humor III: Mania e Transtorno Bipolar.pdf", pdfLink: "https://drive.google.com/file/d/1jaQUWsFmwRNudVuHV_MTXo1anAK-qIEB/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Transtorno de Humor III: Mania e Transtorno Bipolar.pdf", pdfLink: "https://drive.google.com/file/d/1kx-nMesyBzVo5SbGdq0QWfHrqW2cMc8N/view?usp=sharing" }
      ]
    },
    {
      id: 152,
      label: "Sub-Módulo 152",
      title: "Transtorno de Ansiedade",
      imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Transtorno de Ansiedade.pdf", pdfLink: "https://drive.google.com/file/d/10zMs3WU6oZqS1O833_jrGhy2jsmo8h_N/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Transtorno de Ansiedade.pdf", pdfLink: "https://drive.google.com/file/d/1gA6ijEsWp5vosI9SDVuF7TTaGRXachfp/view?usp=sharing" }
      ]
    },
    {
      id: 153,
      label: "Sub-Módulo 153",
      title: "Transtornos Relacionados a Substâncias - Álcool",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Transtornos Relacionados a Substâncias - Álcool_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/141PZN4MIhQyi9sfLivWZBiuurxtaYozv/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Transtornos Relacionados a Substâncias: Álcool.pdf", pdfLink: "https://drive.google.com/file/d/1hbX2UdgIaB7NLleDfIO_JApK41Lyh2_k/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Transtornos Relacionados a Substâncias: Álcool.pdf", pdfLink: "https://drive.google.com/file/d/1Ov3X-rDyTNyNzrHu0uo_5fzvFlorQ0R9/view?usp=sharing" }
      ]
    },
    {
      id: 154,
      label: "Sub-Módulo 154",
      title: "Transtorno Psicótico",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Transtorno Psicótico.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/112PzkivdmCqpUPXeylAVnPGXqLZkuyXD/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Transtorno Psicótico.pdf", pdfLink: "https://drive.google.com/file/d/1C_Uf77MjrJDJ0sJ0XJ7bEr5D_i5T1OkP/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Transtorno Psicótico.pdf", pdfLink: "https://drive.google.com/file/d/12ntqH-kD9RoyTbLOmthG4wBLpPRxnG6e/view?usp=sharing" }
      ]
    },
    {
      id: 155,
      label: "Sub-Módulo 155",
      title: "Transtornos Alimentares e Somatoformes",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Transtorno alimentares e somatoformes.pdf", pdfLink: "https://drive.google.com/file/d/1k5CBlM9G3GXrdP3dNULhl7DnLj5hn0qF/view?usp=sharing" }
      ]
    },
    {
      id: 156,
      label: "Sub-Módulo 156",
      title: "Transtorno de Personalidade",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Transtorno de personalidade.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1is5276-Qund026TvCbu6Ne6bKUE0walG/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Transtorno de personalidade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1D0jFEepf3jjWelhW-e6y6ksyAmSncmhv/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Transtorno de personalidade.pdf", pdfLink: "https://drive.google.com/file/d/15zqo0RpUdiiIo0-cTFv-gb5keFQhbY60/view?usp=sharing" }
      ]
    },
    // --- 12. GERIATRIA ---
    {
      id: 157,
      label: "Sub-Módulo 157",
      title: "Introdução à Geriatria",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Introdução à Geriatria.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1w-TckTaobRXrNEMmY6yenWqopGJ2Io_t/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Introdução à Geriatria.pdf", pdfLink: "https://drive.google.com/file/d/17wo_RbT0hDqzIDKIEagmcB_GWetFSrt8/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Introdução à Geriatria.pdf", pdfLink: "https://drive.google.com/file/d/1NCTgJeMkvpak7cW_rRk8jJS49qnO_0BK/view?usp=sharing" }
      ]
    },
    {
      id: 158,
      label: "Sub-Módulo 158",
      title: "Avaliação Geriátrica Ampla",
      imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a945cd3ae?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Avaliação Geriátrica Ampla_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18PCxSOMQ8HYHXOIPcJSBgXyFS2oZa8Bm/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Avaliação Geriátrica Ampla.pdf", pdfLink: "https://drive.google.com/file/d/1juTmt0DnlxDTNEoPdBOxWNsMHwN9unMI/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Avaliação Geriátrica Ampla.pdf", pdfLink: "https://drive.google.com/file/d/1SXFJOPingaDxQZWi26pm9dTRIYhSh0-l/view?usp=sharing" }
      ]
    },
    {
      id: 159,
      label: "Sub-Módulo 159",
      title: "Iatrogenia no Idoso",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Iatrogenia no Idoso.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lRnIzffCUH0XwVEhw7IL6mLmKChKlrNM/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Iatrogenia no Idoso_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AvqxR0AI1MSQcz1UIViBcUlHFzn_S1XN/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Iatrogenia no Idoso.pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1R-p7u6_yFWE00byPMkggDHcbNemmo148/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Iatrogenia no Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1pJJ3JCm9CD9fOS5lG9n05KPReLFcJBK5/view?usp=sharing" }
      ]
    },
    {
      id: 160,
      label: "Sub-Módulo 160",
      title: "Instabilidade Postural, Quedas e Imobilidade",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Instabilidade Postural, Quedas e Imobilidade_COEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rl6s4kqkAIHAwXvrHxqNKRCH-ER5wZX4/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Instabilidade Postural, Quedas e Imobilidade.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1k2hsxQyjoe-td6dyfy9_PiGDUwct_rmX/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Instabilidade Postural, Quedas e Imobilidade.pdf", pdfLink: "https://drive.google.com/file/d/1kMNdEnhzu67O3r5JRAn7tu8v4AtEyBbF/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Instabilidade Postural, Quedas e Imobilidade.pdf", pdfLink: "https://drive.google.com/file/d/1YgqUpcidicTofn0bKcUPxIrFBLV3-LDV/view?usp=sharing" }
      ]
    },
    {
      id: 161,
      label: "Sub-Módulo 161",
      title: "Vacinação do Idoso",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Vacinação do Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1JNcJcIUY9quAYeM126ux_T-hnfnysddy/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Vacinação do Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1baeutTr7S8MdBY3Of8cCMrVyvU8j3l5S/view?usp=sharing" }
      ]
    },
    {
      id: 162,
      label: "Sub-Módulo 162",
      title: "Depressão no Idoso",
      imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Depressão no Idoso.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/117I_1_nFFlJ1S2y5Hk1hyfkh8nH05HVw/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Depressão no Idoso_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1koh7CMwiS0D3LR2j13k7vM4psUyekpqB/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Depressão no Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1GxvfqG_dLlbzbzPtkNPeD1nXf7XD0gzb/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Depressão no Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1dNNhMKDZefNCqGh8pOzXbrBRwkzs7Skg/view?usp=sharing" }
      ]
    },
    {
      id: 163,
      label: "Sub-Módulo 163",
      title: "Insuficiência Cognitiva - Demências",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Insuficiência Cognitiva Demências_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mTE9luI4brCDhYvqA_CiloPTcoSHUg6f/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Insuficiência Cognitiva: Demências.pdf", pdfLink: "https://drive.google.com/file/d/1vd5pLUpcfrClsrV-MOHG-LrYmy4mrl6V/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Insuficiência Cognitiva: Demências.pdf", pdfLink: "https://drive.google.com/file/d/1cJKr6A-sUrPxc3YQITM89BghQNpHvL-v/view?usp=sharing" }
      ]
    },
    {
      id: 164,
      label: "Sub-Módulo 164",
      title: "Insuficiência Cognitiva - Delirium no Idoso",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Insuficiência Cognitiva Delirium no Idoso.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bPUhwpDgRJ5w-pJ38cgC0i2OTUflozEH/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Insuficiência Cognitiva Delirium no Idoso_COFEXPRES.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1w8c3jGlzA70HQ4Z_gmcRIiPUs_uHrqao/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Insuficiência Cognitiva: Delirium no Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1b9pWI_2sGq_9m3PjiYKnHBorrT-jIAEK/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Insuficiência Cognitiva: Delirium no Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1Dw28xGE8ZbQin5mg2Tugi7uXu39H-2Xt/view?usp=sharing" }
      ]
    },
    {
      id: 165,
      label: "Sub-Módulo 165",
      title: "Fragilidade",
      imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Fragilidade.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16-1xy9jCu8JYa4xQm4HSPMpV4nUiAfCL/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Fragilidade.pdf", pdfLink: "https://drive.google.com/file/d/1y7I3UZDl1kOYLUEIVlj2JV_zq20keSLH/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Fragilidade.pdf", pdfLink: "https://drive.google.com/file/d/1knXVoMMqE-aLAttZjKTuuj3nL_rwUOVr/view?usp=sharing" }
      ]
    },
    {
      id: 166,
      label: "Sub-Módulo 166",
      title: "Incontinência Urinária no Idoso",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Incontinência Urinária no Idoso_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12u-bxlHBIwu_F1HlvSG1ZmPKVjhgtTqC/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Incontinência Urinária no Idoso.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pXz9l2h7HmMjD5k-eXk8zKV2URr8qhR1/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Incontinência Urinária no Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1qt24H29hoZM4-M3WvpTZq5s2XpDfWqJO/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Incontinência Urinária no Idoso.pdf", pdfLink: "https://drive.google.com/file/d/1Ap1NALjwWqBMg-FWFhk6ljkWknNn_7fB/view?usp=sharing" }
      ]
    },
    // --- 13. DERMATOLOGIA ---
    {
      id: 167,
      label: "Sub-Módulo 167",
      title: "Hanseníase",
      imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Hanseníase.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tss35iGQItXfEG1zeXch6XcoGFbglseC/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Hanseníase.pdf", pdfLink: "https://drive.google.com/file/d/1CCNajJH9biCKItcQdysjG2jTE_WPSp-P/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Hanseníase.pdf", pdfLink: "https://drive.google.com/file/d/1iKVZfIwemv-ike1kDLyR_NLlAX-qwNnl/view?usp=sharing" }
      ]
    },
    {
      id: 168,
      label: "Sub-Módulo 168",
      title: "Lesões Elementares",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Lesões Elementares_COFEXPRESS-.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qGfGfxfXs_EQz1CtnY_5-iXa6-o_20rW/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Lesões Elementares.pdf", pdfLink: "https://drive.google.com/file/d/1i5ku3Vg4dUUlwzATfCDUy0BCHdmVGNY7/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Lesões Elementares.pdf", pdfLink: "https://drive.google.com/file/d/1k67l2wvEG4dHKMM52lS6W9JdGFwq23Pj/view?usp=sharing" }
      ]
    },
    {
      id: 169,
      label: "Sub-Módulo 169",
      title: "Dermatoses Bolhosas",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Dermatoses Bolhosas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11Uz_ZoEfuX1r8z-p159q8icS4xolS9Bz/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Dermatoses Bolhosas.pdf", pdfLink: "https://drive.google.com/file/d/1NzN52ty0tjZKF2-fWZG15T4FORHbK307/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Dermatoses Bolhosas.pdf", pdfLink: "https://drive.google.com/file/d/1iVGW7xmpD4yxiBmQKTAlIj83QVnhgdE3/view?usp=sharing" }
      ]
    },
    {
      id: 170,
      label: "Sub-Módulo 170",
      title: "Psoríase",
      imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Psoríase.pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1u-XIW41tZe3HYHbt_hw5dnM73SHMmhui/view?usp=sharing" }
      ]
    },
    // --- 14. OTORRINOLARINGOLOGIA E OFTALMOLOGIA ---
    {
      id: 171,
      label: "Sub-Módulo 171",
      title: "Otologia - Parte I",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Otologia I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pXWiT8Se_3uvT7ZDeqluXpb_l_LKQpyQ/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Otologia I.pdf", pdfLink: "https://drive.google.com/file/d/12rAWqqcPvJIzXFDBFlcVT3MvNYDD087C/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Otologia I.pdf", pdfLink: "https://drive.google.com/file/d/1izx5wdZdMvj4FhF9__QpD_77wqd5AMh7/view?usp=sharing" }
      ]
    },
    {
      id: 172,
      label: "Sub-Módulo 172",
      title: "Otologia - Parte II",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Otologia II.pdf", pdfLink: "https://drive.google.com/file/d/1r4uV7rLqYi8J80ijfXDtBNW2YmvcjnmF/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Otologia II.pdf", pdfLink: "https://drive.google.com/file/d/1fNIkWVtvBMjW1qqfyE5zy-tWXCLdtBWg/view?usp=sharing" }
      ]
    },
    {
      id: 173,
      label: "Sub-Módulo 173",
      title: "Rinologia",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Rinologia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Hvj0t7C5yIZ45bzJIkB3Rbvgi5zcOpGj/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Rinologia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/127N6AQcHGlX0_kSbMN_0jfN-FcsTJ_3N/view?usp=sharing" }
      ],
      materials: []
    },
    {
      id: 174,
      label: "Sub-Módulo 174",
      title: "Bucofaringolaringologia - Parte I",
      imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Bucofaringolaringologia I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mDX37N7UTzqW_UfWG8CDu7Zmy43Gk4-e/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Bucofaringolaringologia I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oEoqtuL0FDC4YUmAo7tONwL2q7mVuuK4/view?usp=sharing" }
      ],
      materials: []
    },
    {
      id: 175,
      label: "Sub-Módulo 175",
      title: "Bucofaringolaringologia - Parte II",
      imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Bucofaringolaringologia II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1knh_T_yR4NKSE3MBJSggGkcR3EP0JYPp/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Bucofaringolaringologia II_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qi2qCwDpbGxISgfK_vSfW4CYGvN9Trqo/view?usp=sharing" }
      ],
      materials: []
    },
    {
      id: 176,
      label: "Sub-Módulo 176",
      title: "Oftalmologia para o Generalista - Parte I",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Oftalmologia para o Generalista: Parte I.pdf", pdfLink: "https://drive.google.com/file/d/1UqKz2faphrb17LZO3CwcdvtMasRSkuiz/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Oftalmologia para o Generalista: Parte I.pdf", pdfLink: "https://drive.google.com/file/d/1OKFM9ILMmjhmG6TNeZT9t9v2fMtCBXX9/view?usp=sharing" }
      ]
    },
    {
      id: 177,
      label: "Sub-Módulo 177",
      title: "Oftalmologia para o Generalista - Parte II",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
      lessons: [],
      materials: [
        { title: "E-Book - Oftalmologia para o Generalista: Parte II.pdf", pdfLink: "https://drive.google.com/file/d/1VJZAvAofSqFh0zclMJPcwFAJjjWzlCfj/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Oftalmologia para o Generalista: Parte II.pdf", pdfLink: "https://drive.google.com/file/d/1FabizvzebdZzPTcbUbDBiZ6J1ykFTQwT/view?usp=sharing" }
      ]
    },
    // --- 15. MISCELÂNEA EM CLÍNICA MÉDICA ---
    {
      id: 178,
      label: "Sub-Módulo 178",
      title: "Rastreamentos - Clínica Médica",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Rastreamento.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bq9rD132yP5C4Efv8RcOKDcUDdVZp5-5/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Novas Diretrizes de Rastreamento extensivo 2025.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qYeQAJ9RYQi4gMW1NtGFD7AfSQ9pluSx/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Rastreamentos.pdf", pdfLink: "https://drive.google.com/file/d/1qGF8vC7HfN3RlM0xs6k97Shk6aCKeJlo/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Rastreamentos.pdf", pdfLink: "https://drive.google.com/file/d/1MoWmpUoLD_s-wBOx7IcYeN6bH_NNLbRV/view?usp=sharing" }
      ]
    },
    {
      id: 179,
      label: "Sub-Módulo 179",
      title: "Oncologia - Cuidados Paliativos",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Oncologia Cuidados paliativos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FoALNfV0D12Xn0ibA7ZWQFgcmWsce06N/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Oncologia Cuidados paliativos_COFEXPRESS-.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lc59961PJR2rsrNylCymX3ZzrQLOBYjx/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Oncologia: Cuidados Paliativos.pdf", pdfLink: "https://drive.google.com/file/d/1O5XtBOAwN8QroAWcy0ZrYDk436ADonHJ/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Oncologia: Cuidados Paliativos.pdf", pdfLink: "https://drive.google.com/file/d/1i7OOoQB2FjiQTBefypVPFkuSuHJff5hG/view?usp=sharing" }
      ]
    },
    {
      id: 180,
      label: "Sub-Módulo 180",
      title: "Emergências Oncológicas",
      imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Emergências Oncológicas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hITt3MN8B_C2dfnqmQbbsCKv7azu2JGa/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Emergências Oncológicas.pdf", pdfLink: "https://drive.google.com/file/d/1sQeTzAEelumIdnOtOBsZWd6v2QVrsIeq/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Emergências Oncológicas.pdf", pdfLink: "https://drive.google.com/file/d/1traxvMnafhc1SunMoth3Lo3-g4mUNttX/view?usp=sharing" }
      ]
    },
    {
      id: 181,
      label: "Sub-Módulo 181",
      title: "Alergia I - Rinite e Angioedema",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Alergia I Rinite e Angioedema.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bRrfuzaAafllSmlG258dBaXr_pHFYqhO/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Alergia I: Rinite e Angioedema.pdf", pdfLink: "https://drive.google.com/file/d/1oKGoPswLXJcGMGT2eSG_OdxvlxMErWRO/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Alergia I: Rinite e Angioedema.pdf", pdfLink: "https://drive.google.com/file/d/1eRzDAk-5bczO3NWI8ztNxhVIq8aExhcR/view?usp=sharing" }
      ]
    },
    {
      id: 182,
      label: "Sub-Módulo 182",
      title: "Alergia II - Reações de Hipersensibilidade",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { id: 1, title: "Aula 01 - Alergia II Reações de hipersensibilidade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aodsApKaCHpMLofgGEHqq3GyfBJ5E2AG/view?usp=sharing" },
        { id: 2, title: "Aula 02 - Alergia II Reações de hipersensibilidade.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EQugTf2dNhv-w4gtLLNbBPFMUH1EqoXf/view?usp=sharing" }
      ],
      materials: [
        { title: "E-Book - Alergia II: Reações de Hipersensibilidade.pdf", pdfLink: "https://drive.google.com/file/d/1ht34gXL02Hz_WZrtFD68o2ZnvwSMFh8f/view?usp=sharing" },
        { title: "E-Book - Ficha Resumo: Alergia II: Reações de Hipersensibilidade.pdf", pdfLink: "https://drive.google.com/file/d/1_dWH7nlEjEHYAfzob0RnrNxaPU0HScLe/view?usp=sharing" }
      ]
    }
    ]
  },
  // --- 5. INFECTOLOGIA ---
    
    // --- MÓDULO 04: GINECOLOGIA E OBSTETRÍCIA ---
    {
      id: 4,
      title: "Módulo 04 - Ginecologia e Obstetrícia",
      label: "Módulo 04",
      subModules: [
        {
          id: 1,
          label: "Sub-Módulo 01",
          title: "Assistência ao Pré-Natal",
          imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Assistência ao pré-natal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1j7nfaE-h-X05kJTgZR8pzJbD1msZG1Gk/view?usp=sharing" },
            { id: 2, title: "Aula 02 - VISÃO DO ESPECIALISTA Estática Fetal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12JSz208I08xOTqYf-LCjviHgBIuHQYLl/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Assistência ao Pré-Natal.pdf", pdfLink: "https://drive.google.com/file/d/1gp9npRTathf86exHMaYQmmqHu3Uew-y6/view?usp=sharing" },
            { title: "E-Book - Ficha Resumo: Assistência ao Pré-Natal.pdf", pdfLink: "https://drive.google.com/file/d/1Ls3Krov3S4ICDtGCjHXwt4vE2QpoqaUh/view?usp=sharing" }
          ]
        },
        {
          id: 2,
          label: "Sub-Módulo 02",
          title: "Síndromes Hipertensivas na Gestação",
          imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Síndromes Hipertensivas na Gestação - Parte I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aH_Rer38mDbOn5Eh8dqm97a4wGziddfA/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 3,
          label: "Sub-Módulo 03",
          title: "Sangramentos da 1ª Metade (Abortamento e Ectópica)",
          imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - COFEXPRESS Gestação Ectópica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13GNhDde150aDrNI1-NohrqCDUfSqwZBl/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Aborto Legal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zid1Ru_CYrZfXO3l4VN-IMOpd5s5AJRp/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - VISÃO DO ESPECIALISTA Abortamento.pdf", pdfLink: "https://drive.google.com/file/d/1CYF_f9t0FidQx5ktGAj8oW1eArVcPM-Z/view?usp=sharing" }
          ]
        },
        {
          id: 4,
          label: "Sub-Módulo 04",
          title: "Sangramentos da 2ª Metade (Placenta Prévia e DPP)",
          imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Descolamento Prematuro de Placenta.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12vf1ntS4moEK8EajnY0K0lc2L-NrxUU5/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Placenta Prévia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1i3LkObtqBpmO2fSfBdY7TcWCcWmrmXyb/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 5,
          label: "Sub-Módulo 05",
          title: "Mecanismo e Assistência ao Parto",
          imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Assistência ao Parto_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1add3qCEYiCGAs6NIi4Yb8skoIW1SisMp/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 6,
          label: "Sub-Módulo 06",
          title: "Hemorragia Pós-Parto",
          imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Hemorragia pós parto_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12voh5edi7GRA3KoagCLw_DjOux3EzZP5/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Hemorragia pós parto.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oSf61y_uVhu4zqiR6cAk8b7rOs7dr4SE/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 7,
          label: "Sub-Módulo 07",
          title: "Infecções Genitais (Corrimentos, Úlceras e DIP)",
          imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Corrimentos Vaginais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jV5veHcq7RJxB4sNufljKp1i0csrqeRk/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Doenças da Vulva e da Vagina_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ow-5ubLWE37VoezCab9ZmPl9AKc_dBMk/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 8,
          label: "Sub-Módulo 08",
          title: "Anticoncepção (Métodos e Critérios de Elegibilidade)",
          imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Anticoncepção - Fundamentos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1B7WAlidKoCNB0fQb0X8FkUYRgwHwlCXG/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Anticoncepção em Situações Especiais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Hwvtg6yPaS-wj6yzcx4GD7tPqnryRdiM/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Foca na APS GO: Anticoncepção e sigilo médico.pdf", pdfLink: "https://drive.google.com/file/d/1ym-nPdwN7cbh_z6iIu0hMlwAs4XmhfKq/view?usp=sharing" }
          ]
        },
        {
          id: 9,
          label: "Sub-Módulo 09",
          title: "Rastreamento de Câncer de Colo (Pap e Condutas)",
          imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Câncer de Colo de Útero_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1b95hH9XsLJgkzXP-cHBNRI2UtS09nFE4/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Alterações Colpocitológicas e Condutas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Dvm2Xx033sLkUTOuRK070_PswGgUE7jO/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 10,
          label: "Sub-Módulo 10",
          title: "Câncer de Mama (Rastreamento e BI-RADS)",
          imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Câncer de Mama - Rastreamento.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1g4uzU0MKj1ZIRombx5MfAo4b4pF1cJH8/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Principais Sintomas em Mastologia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_3BLdqUoksIvI6VPMwDDpD2tL5eBJdus/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 11,
          label: "Sub-Módulo 11",
          title: "Diabetes na Gestação",
          imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
          lessons: [],
          materials: []
        },
        {
          id: 12,
          label: "Sub-Módulo 12",
          title: "Rotura Prematura de Membranas (RPMO)",
          imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Rotura Prematura de Membranas Ovulares COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aekfK78_5nPpIr-FX6nJ8JTmyxHJDNpv/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 13,
          label: "Sub-Módulo 13",
          title: "Trabalho de Parto Prematuro (TPP)",
          imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Trabalho de Parto Prematuro.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1B_5L-8PD0yax_YqTUdRrLJuribds3kSK/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Colo Curto e Incompetência Istmocervical.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1j324u6RI14IIgJPODFAnBBMWAk6-K8D4/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 14,
          label: "Sub-Módulo 14",
          title: "Fisiologia Menstrual e Amenorreias",
          imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Fisiologia Menstrual.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vHrF9Q3oDv5no7saT80ZUKbbkQX4Pa8w/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Amenorreia Secundária_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ySltVJelegQG_d0ORsptiDE1Tpm7-NG3/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Fisiologia Menstrual_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1CMzE8Z9i6CacnQFr1jz-QsYQUsJ3CqP4/view?usp=sharing" }
          ]
        },
        {
          id: 15,
          label: "Sub-Módulo 15",
          title: "Síndrome dos Ovários Policísticos (SOP)",
          imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Síndrome dos Ovários Policísticos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nhxLYynIlKZ2iash5gDl0aWq-o_Qs8_m/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Síndrome dos Ovários Policísticos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EsKssNFjD0HEWW72Ba_9r4kvVsE_ISl6/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 16,
          label: "Sub-Módulo 16",
          title: "Sangramento Uterino Anormal (SUA) e Miomatose",
          imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Sangramento Uterino Anormal - Leiomioma_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mtu6trmmsYWmM1ToIkdPEwRtjtn-Vnf8/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Sangramento Uterino Anormal - Adenomiose_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rYFOEY30e5PiXAJ-KGc2Eb6j1MwKeH1k/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Sangramento Uterino Anormal - Fundamentos.pdf", pdfLink: "https://drive.google.com/file/d/1zaKiUPvpLp_jkvsHd4IiSCAb8yNPc-za/view?usp=sharing" }
          ]
        },
        {
          id: 17,
          label: "Sub-Módulo 17",
          title: "Incontinência Urinária e Prolapsos",
          imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Incontinência Urinária de Esforço.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ruWDQ-QTnZBpVfi8O3Bla5o6rpXuixcD/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Prolapso Genital.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10DAOoLvNEUuhFN9QOPOuQvi7spYlb0Hh/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Propedêutica em Uroginecologia_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1Cy9YEMUJieBkhKTxnryaoWJic_acDgin/view?usp=sharing" }
          ]
        },
        {
          id: 18,
          label: "Sub-Módulo 18",
          title: "Nódulos Benignos da Mama",
          imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
          lessons: [],
          materials: []
        },
        {
          id: 19,
          label: "Sub-Módulo 19",
          title: "Doença Hemolítica Perinatal",
          imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
          lessons: [],
          materials: []
        },
        {
          id: 20,
          label: "Sub-Módulo 20",
          title: "Modificações do Organismo Materno",
          imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Modificações do Organismo Materno_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AYXWhs5GaG1td4CbbAxYfisdqKtHDZHd/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Modificações do Organismo Materno.pdf", pdfLink: "https://drive.google.com/file/d/1ksRSQqZMD5CXDFYrnfwC4Xq4q-J0F-8S/view?usp=sharing" },
            { title: "E-Book - Ficha Resumo: Modificações do Organismo Materno.pdf", pdfLink: "https://drive.google.com/file/d/12xMPTpRdNVQVyz-QMSOQfCico6yEKaBw/view?usp=sharing" }
          ]
        },
        {
          id: 21,
          label: "Sub-Módulo 21",
          title: "Avaliação da Vitalidade Fetal e Sofrimento",
          imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Sofrimento Fetal Crônico.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10CM4UuY8DSnnrB_wJRUVsBglD6n__Ko4/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Sofrimento Fetal Agudo_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ot6H4pL6Jz1OfuGJnaymeB65Gezz3m6Z/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Avaliação de Vitalidade Fetal_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1_gSXT9VV6CnM2taAx1phELexAPHosGp8/view?usp=sharing" }
          ]
        },
        {
          id: 22,
          label: "Sub-Módulo 22",
          title: "Restrição de Crescimento Intrauterino (RCIU)",
          imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Restrição de Crescimento Intrauterino_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GebnbL3SGJdWN4UEK6v1Vfq_Vg9lRm-r/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 23,
          label: "Sub-Módulo 23",
          title: "Climatério e Terapia Hormonal (TRH)",
          imageUrl: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Síndrome Climatérica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GyYSyiVs3ijNmahf8Z4T2BnTHOGmWZNy/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Foca na APS Rastreamento em ginecologia e climatério.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16HcsPlkVT4XRne6D6i4Hxc1T8MOFYEBf/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Terapia de Reposição Hormonal.pdf", pdfLink: "https://drive.google.com/file/d/1lUfOTJ7oWih2LYSbFLFpfFayI--sY9yT/view?usp=sharing" },
            { title: "E-Book - Ficha Resumo: Terapia de Reposição Hormonal.pdf", pdfLink: "https://drive.google.com/file/d/1FrlW-nbVxKcQXZtMr_NlttkLRyAM-fZ7/view?usp=sharing" }
          ]
        },
        {
          id: 24,
          label: "Sub-Módulo 24",
          title: "Endometriose",
          imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Endometriose_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jF-9DE3HUxhZ3QKgLvf0N2O3u7khWlNj/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Endometriose - Cirurgia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sQZlhR8HjUtBumECXbud9H7gzs8Ko3EE/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 25,
          label: "Sub-Módulo 25",
          title: "Infertilidade Conjugal",
          imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Infertilidade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1j7nfaE-h-X05kJTgZR8pzJbD1msZG1Gk/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Técnicas de Reprodução Assistida_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_7bqYi4lD8EWhXwZ83c9RgyNGGiCcu7B/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 26,
          label: "Sub-Módulo 26",
          title: "Infecções e Gravidez (Não Ginecológicas)",
          imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Foca na APS Sífilis na gestação.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pTIWtsOefPn5PMIuivnPlosJW7XwYcX4/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Infecções e Gravidez.pdf", pdfLink: "https://drive.google.com/file/d/1-vbl-uqrZaVCsXCFw25L05s7sjSAYI81/view?usp=sharing" },
            { title: "E-Book - Ficha Resumo: Infecções e Gravidez.pdf", pdfLink: "https://drive.google.com/file/d/1XNROJgFlAjIQr2aw8pqWprOAsxY6h0JE/view?usp=sharing" }
          ]
        },
        {
          id: 27,
          label: "Sub-Módulo 27",
          title: "Gemelaridade",
          imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Gemelaridade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1k9RzQALb-_5I64Bw1ICKBl2wMClkN1JT/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Gemelaridade.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AwT1KXY_DdsaQB9w5kRifPV_jRRmi-ns/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 28,
          label: "Sub-Módulo 28",
          title: "Câncer de Colo de Útero (Invasor)",
          imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Câncer de Colo de Útero.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cAu3NZ3Sw5bDdb2SDU4yHw_k8yydH5QV/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 29,
          label: "Sub-Módulo 29",
          title: "Câncer de Ovário e Tumores Anexiais",
          imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Tumores Anexiais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vdUQp137VrsVGsmwTKCQ1qVM7nT80aoI/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 30,
          label: "Sub-Módulo 30",
          title: "Câncer de Endométrio e Hiperplasia",
          imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Câncer de Endométrio_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18RTOrCZ9F0c7B1OwdzyEMsBMItD0LVtt/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Hiperplasia Endometrial_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qxDR2B5PJRRTREoQ5AWuS9iqc_OlKux3/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 31,
          label: "Sub-Módulo 31",
          title: "Anatomia e Embriologia",
          imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Anatomia Pélvica Feminina_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/118LUKSbQSqfv2XkAD0pNcaeFxfRcwD4D/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Embriologia do Sistema Genital Feminino_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tHour3Pr1giaYAX4VSW_j_enhK1R_NN4/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 32,
          label: "Sub-Módulo 32",
          title: "Malformações Mullerianas e Congênitas",
          imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Malformações Mullerianas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DcVP7h52HcygA8lcZINWBrqloaNDABRd/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 33,
          label: "Sub-Módulo 33",
          title: "Estática Fetal",
          imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
          lessons: [],
          materials: []
        },
        {
          id: 34,
          label: "Sub-Módulo 34",
          title: "Doença Trofoblástica Gestacional (DTG)",
          imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
          lessons: [],
          materials: []
        },
        {
          id: 35,
          label: "Sub-Módulo 35",
          title: "Puberdade e Distúrbios do Desenvolvimento Sexual",
          imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Puberdade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10S6GX70U4jKpVVBaVaAoGoBF3PdMc7pr/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Diferenças no Desenvolvimento Sexual_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11izAmezwPlpBhb63KaqXA11naWPBRO-w/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 36,
          label: "Sub-Módulo 36",
          title: "Medicina Fetal (Aneuploidias e Procedimentos)",
          imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Rastreamento de Aneuploidias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1676H9i_hOxaVXryyPc6zigQuvXF2wNLD/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 37,
          label: "Sub-Módulo 37",
          title: "Violência Sexual e Aborto Legal",
          imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Violência Sexual.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19kqrzzJnhzUaWHgK9u8H_eTIC-BsXWdb/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 38,
          label: "Sub-Módulo 38",
          title: "Trombofilias",
          imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb07365f557?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Trombofilias na Gestação e Puerpério.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EHDMrYW29v47yyINvOBUlP5u39YL0Pjd/view?usp=sharing" }
          ],
          materials: []
        },
        {
          id: 39,
          label: "Sub-Módulo 39",
          title: "Ultrassonografia em Obstetrícia",
          imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Ultrassonografia em Obstetrícia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1f5h7h4IQtX9spE811zPKOS9GK_y3R1u1/view?usp=sharing" }
          ],
          materials: [
            { title: "E-Book - Ultrassonografia em Obstetrícia.pdf", pdfLink: "https://drive.google.com/file/d/1uEKsL-e84kWRwAnje3THf3XsnSrK6oQC/view?usp=sharing" },
            { title: "E-Book - Ficha Resumo: Ultrassonografia em Obstetrícia.pdf", pdfLink: "https://drive.google.com/file/d/1tgIGRsC1_fQ9B1mdcYNcLPZ_oRGbmYpf/view?usp=sharing" }
          ]
        },
        {
          id: 40,
          label: "Sub-Módulo 40",
          title: "Cirurgia Ginecológica e Urgências",
          imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
          lessons: [
            { id: 1, title: "Aula 01 - Cirurgia ginecológica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_pzFL0YlWZWt1kEnz0iEBlfrQIH7BXlj/view?usp=sharing" },
            { id: 2, title: "Aula 02 - Outras Urgências Ginecológicas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jpLoskKMwoFUaPYx2L4J5QBj3WPpF1NR/view?usp=sharing" }
          ],
          materials: []
        }
      ]
    },
  // --- MÓDULO 05: PEDIATRIA ---
  {
    id: 5,
    title: "Módulo 05 - Pediatria",
    label: "Módulo 05",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 01",
        title: "Aleitamento Materno",
        imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Aleitamento Materno_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_O_Jx_V6HRdPMJoZZN-vqU1p5N1MMk2u/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Aleitamento Materno.pdf", pdfLink: "https://drive.google.com/file/d/11DQkUS54T02gUT4sNPlAeoqQKWQ5n5Yz/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Aleitamento Materno.pdf", pdfLink: "https://drive.google.com/file/d/1Utl8ZbjZdoyMTMgwNoD44mWWzgSxvPXL/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 02",
        title: "Alimentação Infantil",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Alimentação Infantil_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-b6LDPY53vjy7AyOmdEhD2XiO5usuO1D/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Alimentação Infantil.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1abQNPiYbrZiGgna2VcGyhkXql4P6VkLC/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Alimentação Infantil.pdf", pdfLink: "https://drive.google.com/file/d/1LEC4r24TvwwGCZH_SJJ03hhK89dPRvRs/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Alimentação Infantil.pdf", pdfLink: "https://drive.google.com/file/d/1UdYi2ekBhfrPIAoOZWplZ8fu3noj_KVI/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 03",
        title: "Crescimento e Baixa Estatura",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Crescimento e Baixa Estatura_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tSNkNIFy9HJTiguXSebC9gA-DB_DxDh3/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 4,
        label: "Sub-Módulo 04",
        title: "Desenvolvimento Infantil",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Alterações no Neurodesenvolvimento_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qdDv-15FJK5dgtvd_hjrXl9v9Sh55HLR/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Alterações no Neurodesenvolvimento.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1d3oU2rWowbBM3exee9mRWuRcxE4RPi8d/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Desenvolvimento Infantil.pdf", pdfLink: "https://drive.google.com/file/d/1i3CyB7z_jyAKl2aQcH8DoVm_Xl0uqB9u/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Desenvolvimento Infantil.pdf", pdfLink: "https://drive.google.com/file/d/1JQUR61G41Ro04gDejEUPh-d7D1fLRkFf/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 05",
        title: "Vacinação I e II",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Vacinação_HIITEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kKI_ebiIJ6Q5rwPtCD8_FC8mNfLz8mOD/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Vacinação 1 - Pediatria_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1iHPmNiNNtluBcYgPNfOraE-tiCxd7Yno/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 6,
        label: "Sub-Módulo 06",
        title: "Pneumonias",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 7,
        label: "Sub-Módulo 07",
        title: "Bronquiolite e Coqueluche",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 8,
        label: "Sub-Módulo 08",
        title: "Asma",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Asma e Fibrose Cística_HIIT EXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-ogcz93mfg1ZOymFBTKEB4PbjkBkiYoY/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Asma_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kHTXA6kKedUqzYbC0WbdVJ-UOzvUNyMk/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 9,
        label: "Sub-Módulo 09",
        title: "Infecções de Vias Aéreas Superiores (IVAS)",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Infecções de Vias Aéreas Superiores (IVAS).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1d83R-2P-Z82sdMxpPoNaDvXwqhOnaW/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Diarreia Aguda",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Reanimação Neonatal",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Icterícia e Colestase Neonatal",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Icterícia e Colestase Neonatal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kolGblRsPfNtpN4AecWTpHcvlXU37xSy/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Icterícia e Colestase Neonatal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fvbpXqvFmtNeGBR08AwctICB6kA626rO/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Febre sem Sinais Localizatórios (FSSL)",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Febre sem Sinais Localizatórios_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1CFqe2l0WPrff3Jz3tuJMTDw7ojdmW55t/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Febre sem Sinais Localizatórios.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jpLoskKMwoFUaPYx2L4J5QBj3WPpF1NR/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "Infecção de Trato Urinário (ITU)",
        imageUrl: "https://images.unsplash.com/photo-1631558556708-3482a1762c23?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 15,
        label: "Sub-Módulo 15",
        title: "Doenças Exantemáticas",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doença Exantemática_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jsuSlUYeJGD6btfxrMsKeEuBVfvErx-j/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 16,
        label: "Sub-Módulo 16",
        title: "Síndromes Nefrítica e Nefrótica",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 17,
        label: "Sub-Módulo 17",
        title: "Anemias Carenciais (Ferropriva)",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hemato 3 Anemia Ferropriva e Talassemia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-T5rxnGYWyf9dUqaVmwYbSbTPFccd3aw/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 18,
        label: "Sub-Módulo 18",
        title: "Desconforto Respiratório Neonatal",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Desconforto Respiratório Neonatal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-I7fqL-Xu3uHYqgwDibZ0HFo-s4T5H6a/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Desconforto Respiratório Neonatal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1EOl3QXyC9ipzStrXoicxZK7-1iqs8JtT/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 19,
        label: "Sub-Módulo 19",
        title: "Infecções Congênitas",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Infecções Congênitas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1CQUBPLWwE0_3TBy6NJgeRHmW9SMQdof-/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 20,
        label: "Sub-Módulo 20",
        title: "Choque e Sepse Pediátrica",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - VISÃO DO ESPECIALISTA Sepse Pediátrica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1m1jIgW5zZRjtiuq50ZaX9kh307IcLyC9/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Sepse Pediátrica.pdf", pdfLink: "https://drive.google.com/file/d/1bWeodqyKwZNCt_tI7D6o5Nb6G5ge6rwP/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Sepse Pediátrica.pdf", pdfLink: "https://drive.google.com/file/d/1dr8NJ9txvNHgLwCxrA9ehEGqiE0oEj6v/view?usp=sharing" }
        ]
      },
      {
        id: 21,
        label: "Sub-Módulo 21",
        title: "Distúrbio Hidroeletrolítico e Ácido-Básico",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Distúrbio Ácido Básico_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jKqkOBBx4d4A18eS98UtheE_LD5D_vMl/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Distúrbio Hidroeletrolítico_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tZJfHguOLB3BZ2R98M53DQjP45weS_HG/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 22,
        label: "Sub-Módulo 22",
        title: "Cetoacidose Diabética (CAD)",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 23,
        label: "Sub-Módulo 23",
        title: "Parasitoses Intestinais",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Parasitoses Intestinais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17r-Eg5J1GPGikRZPIOR6Xc5qFaDfQvn2/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Parasitoses Intestinais - Pediatria.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jNsy5gF_hZHLm0IK782vrCH9yfkIsysM/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 24,
        label: "Sub-Módulo 24",
        title: "Puberdade",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Puberdade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10S6GX70U4jKpVVBaVaAoGoBF3PdMc7pr/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Puberdade.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qNjbKfse_1qL-mPr8UQkQUg-zNNm3CIh/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 25,
        label: "Sub-Módulo 25",
        title: "Obesidade e Síndrome Metabólica",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Obesidade e eixos endócrinos I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ySO2VM6F-EP8bN8hEzd1Jj7DSyzD1y7V/view?usp=sharing" },
          { id: 2, title: "Aula 02 - VISÃO DO ESPECIALISTA Obesidade Infantil.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1j_q9ZMHz2f1xoTjJO2zQk-Hqmgc9UfuU/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Obesidade infantil e lípides.pdf", pdfLink: "https://drive.google.com/file/d/1sMzCn2FuxEGJIMuM5_stFeOWTjGE--ua/view?usp=sharing" },
          { title: "E-Book - Obesidade infantil e lípides_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1c65bX7VL11OcLENTt_22hm-ny_BX0hwQ/view?usp=sharing" }
        ]
      },
      {
        id: 26,
        label: "Sub-Módulo 26",
        title: "Alergia Alimentar, Refluxo e Constipação",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 27,
        label: "Sub-Módulo 27",
        title: "Anemia Falciforme",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hemato 2 Anemia Falciforme_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AXpW8jooY0zcutkWou1jK2TO7Bk8PipU/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 28,
        label: "Sub-Módulo 28",
        title: "Meningite e Encefalite",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Meningite e Encefalite_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1B9NQRNS5T6q5aqJfxIe0tQHosvWPHhBx/view?usp=sharing" }
        ]
      },
      {
        id: 29,
        label: "Sub-Módulo 29",
        title: "Convulsões e Epilepsia",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Epilepsia na Infância - Parte I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19bBnwwZi0XFnNJeHN0ecWyoiNBd8gW_q/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Epilepsia na Infância - Parte II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/120uEc8LvF4355uOtHX18qqgip68MJrri/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Epilepsia na Infância - Parte III.mp4", pdfLink: "https://drive.google.com/file/d/1kO-_4DtZYfqtLAWcLPOIkv5dWKZfzl0-/view?usp=sharing" },
          { title: "E-Book - Epilepsias na Infância - Parte II_COFEXPRESS.mp4", pdfLink: "https://drive.google.com/file/d/1tW6yU3D-tZm-Qs3AyH-cAzBXVw_Dg2ea/view?usp=sharing" }
        ]
      },
      {
        id: 30,
        label: "Sub-Módulo 30",
        title: "Cardiopatias Congênitas",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cardio 1 Cardiopatias Congênitas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1knh_T_yR4NKSE3MBJSggGkcR3EP0JYPp/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Cardíaca Doenças congênitas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12rn3gekP630XiabkSKG0uHWAD-6w2cmp/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 31,
        label: "Sub-Módulo 31",
        title: "Sepse Neonatal",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 32,
        label: "Sub-Módulo 32",
        title: "Dermatite Atópica e Lesões do RN",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 33,
        label: "Sub-Módulo 33",
        title: "Arboviroses",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 34,
        label: "Sub-Módulo 34",
        title: "Tuberculose",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 35,
        label: "Sub-Módulo 35",
        title: "Suporte Avançado (PALS)",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Suporte Avançado de Vida em Pediatrias (PALS).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yAMoOSmzNRbxxa-Co4MoI47HtImMTyBN/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 36,
        label: "Sub-Módulo 36",
        title: "Reumatologia Pediátrica",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Artrite Idiopática Juvenil_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vUvGnVBm4gZXWuKSeHxJHSAeMKt-nnp1/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 37,
        label: "Sub-Módulo 37",
        title: "Oncologia Pediátrica",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia infantil Tumores da infância_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1srBau6rcJVHdZsdrmxSFGCnOPy_p5lH3/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 38,
        label: "Sub-Módulo 38",
        title: "Imunodeficiências",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Imunodeficiências para o Pediatra.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17iE5jDpYUXv5znkZxEKWF0LzLSKclmaK/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Imunodeficiências.pdf", pdfLink: "https://drive.google.com/file/d/13mNr2DO0PRAwWYKIxvCebqmf2upkoq6W/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Imunodeficiências.pdf", pdfLink: "https://drive.google.com/file/d/113LdBtJfZ_SfNxtOH89R0BOxKlRFeIOW/view?usp=sharing" }
        ]
      },
      {
        id: 39,
        label: "Sub-Módulo 39",
        title: "Fibrose Cística",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Pneumo 2 Fibrose Cística e Diferenciais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13aZvzq0MWmSeVJUvuV_7lLa-DABetBIs/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pneumo 2 Fibrose Cística e Diferenciais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12g1CCH34WS8MrR5K9sLrNz9ufj_l3ouB/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 40,
        label: "Sub-Módulo 40",
        title: "Intoxicações e Acidentes",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a945cd3ae?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 41,
        label: "Sub-Módulo 41",
        title: "Ingestão de Corpo Estranho",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 42,
        label: "Sub-Módulo 42",
        title: "Nutrologia e Vitaminas",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - COFEXPRESS Puericultura - Desnutrição e Vitaminas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1A_AWqyX5MwKsb63jH40WMpclU5641bt9/view?usp=sharing" },
          { id: 2, title: "Aula 02 - VISÃO DO ESPECIALISTA Puericultura - Desnutrição e Vitaminas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FoEVx7mTWmO5eB3-Sbh-k1mtxn6UzRWV/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Nutrição Neonatal_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1bK3X5gsX09GgXBac_HiuT2DA7GgmZOMx/view?usp=sharing" },
          { title: "E-Book - Nutrição Neonatal.pdf", pdfLink: "https://drive.google.com/file/d/1hB7oOVOggJ7rrv9Dx2WrARHyLSH9kQS3/view?usp=sharing" }
        ]
      },
      {
        id: 43,
        label: "Sub-Módulo 43",
        title: "Triagens e Metabólicos Neonatais",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Triagens Neonatais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cJw2id3LdbN8LmMSwILmUHi2QfU9Sdjz/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Distúrbios Metabólicos Neonatais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zoPnfKI-KO1-zJ-ebffmqME4fdNEGxAA/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 44,
        label: "Sub-Módulo 44",
        title: "Ortopedia Pediátrica",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Ortopedia Pediátrica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13k6jFwV0tkUC3IOfciiv_lVu3N3rCepx/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Ortopedia Pediátrica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1w-o6lSV9jF9T0GcBG7V5_Hqd_p91B4Qs/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Osteogênese imperfeita_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1zlVzUhdHJnF0-LYpYJXhV4NjGccL0ZWp/view?usp=sharing" },
          { title: "E-Book - Osteogênese imperfeita.pdf", pdfLink: "https://drive.google.com/file/d/1-_T7IxbjbVfefWT7LZXT6R5318GXz1rH/view?usp=sharing" }
        ]
      },
      {
        id: 45,
        label: "Sub-Módulo 45",
        title: "Oftalmo e Otorrino Pediátricos",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Oftalmo Pediatria 1_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1h_lDtMKMzVKt6CPHLiLtQFzBrgkq3DBH/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Oftalmo Pediatria 2 Doenças Pediátricas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bkfMTxsK4m5vdZznTQo6BcmrQEJtUhXa/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Otorrino Pediatria 2 _COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/16KwnJtOAfptsp7z88wHBja9JR34Let0V/view?usp=sharing" },
          { title: "E-Book - Otorrino Pediatria 2.pdf", pdfLink: "https://drive.google.com/file/d/1Ew3yQ2ppqyo_GZ6AA4jbVW30weFgu1tT/view?usp=sharing" }
        ]
      },
      {
        id: 46,
        label: "Sub-Módulo 46",
        title: "Genética e Malformações",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Genética_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10Xw5wJcgHBOeFOgKiJ74hHATaEHMWVf4/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Genética.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uYIhWVzhK5cbNCkB7njJbxbvix480dws/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Malformações Congênitas_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1hfnJ6WKGveVwYhqDRN1QpmYtkw0c79h_/view?usp=sharing" },
          { title: "E-Book - Malformações Congênitas.pdf", pdfLink: "https://drive.google.com/file/d/1j_q9ZMHz2f1xoTjJO2zQk-Hqmgc9UfuU/view?usp=sharing" }
        ]
      },
      {
        id: 47,
        label: "Sub-Módulo 47",
        title: "Psiquiatria e Sono",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Psiquiatria da Infância e Adolescência.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gss4UhF-crpLMdaT4nImRnT8QqM7lVh_/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 48,
        label: "Sub-Módulo 48",
        title: "Ética e Cuidados Paliativos",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cuidados Paliativos na Pediatria_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10qngyU6LuPZ-qBjUMZ_GyjbM-qN5wAt0/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Ética em Pediatria - Parte I _COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mBZIluoZerTSG_86FJvlvncV-bNiqUbu/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cuidados Paliativos na Pediatria.pdf", pdfLink: "https://drive.google.com/file/d/14c76AGtRqJaqsEDLW3mfO1HR1q9YRzEN/view?usp=sharing" },
          { title: "E-Book - Ética em Pediatria - Parte II_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1CesOQG8Hf7ZNElXQ2sOMctavMdG23NpF/view?usp=sharing" }
        ]
      },
      {
        id: 49,
        label: "Sub-Módulo 49",
        title: "Ventilação Mecânica e Sedação",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      }
    ]
  },
  // --- MÓDULO 06: PREVENTIVA ---
  {
    id: 6,
    title: "Módulo 06 - Preventiva",
    label: "Módulo 06",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 01",
        title: "Lei Orgânica de Saúde: 8080/90",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Ficha Resumo: Lei Orgânica de Saúde: 8080/90.pdf", pdfLink: "https://drive.google.com/file/d/1b5d5RXsJwTizu5ypKyEWM68KF--iPWDa/view?usp=sharing" },
          { title: "E-Book - Lei Orgânica de Saúde: 8080/90.pdf", pdfLink: "https://drive.google.com/file/d/1wrPhWB7lCyQCidk3n8Dvd0t1xqZR4aL4/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 02",
        title: "Lei Orgânica de Saúde: 8142/90",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Ficha Resumo: Lei Orgânica de Saúde: 8142/90.pdf", pdfLink: "https://drive.google.com/file/d/1pa0vDrktiySxqsklni033Ilyw1__-uHX/view?usp=sharing" },
          { title: "E-Book - Lei Orgânica de Saúde: 8142/90.pdf", pdfLink: "https://www.google.com/search?q=https://drive.google.com/file/d/1WNjA5ClbNo-uhXvRfecSEC4WbLstfqV/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 03",
        title: "Princípios do SUS",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Ficha Resumo: Princípios do SUS.pdf", pdfLink: "https://drive.google.com/file/d/1dswmubntdH0B3hl3iwSulwYJOd-icqWp/view?usp=sharing" },
          { title: "E-Book - Princípios do SUS.pdf", pdfLink: "https://drive.google.com/file/d/1JXju73chHyYaBSnbXkOzEKXAAL9jhb_i/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 04",
        title: "Testes Diagnósticos (Características e Cálculos)",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a945cd3ae?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Testes Diagnósticos aplicabilidade clínica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aZCR6Oa_eCCToL3zSTkbDlY2ewKeOKaW/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Testes Diagnósticos características básicas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1byzy9rBduBW8xsxujuuymi8NE4JIUUOb/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Testes Diagnósticos características básicas.pdf", pdfLink: "https://drive.google.com/file/d/1GDW91mKcpZ_VXoSx0Ic6j_YT_p9P3X1J/view?usp=sharing" },
          { title: "E-Book - Teste diagnosticos exercicios.pdf", pdfLink: "https://drive.google.com/file/d/1M4tOjXXP5o-1uaR9ET_eaB37t6d_gpmt/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 05",
        title: "Classificação dos Estudos Epidemiológicos",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Classificação dos Estudos Epidemiológicos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1t5Pb8CiEPOAItSxLcR4QtXzW6XAJbgv0/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Classificaçãodos Estudos Epidemiológicos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oDqLK8HvYGHp_pU56R2D7InX1OCwXhTi/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Classificacao dos estudos epidemiologicos.pdf", pdfLink: "https://drive.google.com/file/d/1FX7S6-Q2cLMK0QfzPSRYvDmoLnG5LIAx/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Classificacao dos estudos epidemiologicos.pdf", pdfLink: "https://drive.google.com/file/d/1n8HkIgVtFlzaBJqinRW9q_IUn6iQoc0c/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 06",
        title: "Estudos Longitudinais e Transversais",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Estudos Longitudinais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18PBDrrviEpNuN3k_v7JijUL12shN-wjc/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Estudos Longitudinais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DYQ2GJRltwtoXrnxN-J8aYwwBicddTc5/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Estudos Transversais.pdf", pdfLink: "https://drive.google.com/file/d/1cKTKq1pu9J0A7mTVcuL4DpdIUFdtG4Xn/view?usp=sharing" },
          { title: "E-Book - Estudos longitudinais_ coorte e caso control.pdf", pdfLink: "https://drive.google.com/file/d/1l8Tn7rRK3DvWzvXJR8X0f-bQQLQVHG0L/view?usp=sharing" }
        ]
      },
      {
        id: 7,
        label: "Sub-Módulo 07",
        title: "Atenção Primária à Saúde (APS)",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Atenção Primária à Saúde - Parte I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qJrz35KTtvphvhG64CZ8Fh0qaEE7b2wh/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Atenção Primária à Saúde - Parte I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17ReEIRx-atIlrXQbPJL0en7rYNwTIMYc/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Atenção Primária à Saúde - Parte II.pdf", pdfLink: "https://drive.google.com/file/d/1C9bAqWJigIaTSNqXZalz418MUKcYDvbw/view?usp=sharing" },
          { title: "E-Book - Atenção Primária à Saúde - Parte II_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1F68rL3apHAW_yIoz5Kp3e9aJSqguJGtn/view?usp=sharing" }
        ]
      },
      {
        id: 8,
        label: "Sub-Módulo 08",
        title: "Estratégia Saúde da Família (ESF)",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Estratégia Saúde da Família I organização e funcionamento - Parte I_COFEXPRESS_1.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gYc0gWAx2HpdJYD8aMgzKYTuaGM1cCwL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Estratégia Saúde da Família I organização e funcionamento - Parte II_1.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mSuZeIL8mRP4xeHtDPTGuBg2pbAVkNwS/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Estratégia Saúde da Família II Financiamento e Programas Especiais _COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1ptXKSxQIFsZQwuNBy_QNP_9vBhpejIOT/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 09",
        title: "Princípios da Medicina de Família e Comunidade",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Princípios da Medicina de Família e comunidade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zxg-wkiXMzJIrC3NhEnBxa7JkRn_9COt/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Princípios da Medicina de Família e comunidade.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rHXBakTMhY9iUh_Z0TjvimsCLX7hAAYc/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Ferramentas da APS/ESF (Genograma, Ecomapa)",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Ferramentas da APSESF I - Parte I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wH_rBn-yLJ5pPih5-VmIUqw-0uLmoKR/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Ferramentas da APSESF I - Parte II Equipes e-MULTI.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jKqkOBBx4d4A18eS98UtheE_LD5D_vMl/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Método Clínico Centrado na Pessoa (MCCP)",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Método Clínico Centrado na Pessoa_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fbYzgxDV70dSKVoG0nYVbv9ZuL3C7Szr/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Medicina Legal (Declaração de Óbito e Atestados)",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Medicina legal Declaração de óbito, atestados e laudos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11JX26bd8fIFghzYQrdcwEiyCWKxxf6QL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Medicina legal Declaração de óbito, atestados e laudos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1iyPrPwgG-vlYCf1yTj3szgyI_VbSB9PW/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Medicina Legal: Declaração de Óbito, Atestados e Laudos.pdf", pdfLink: "https://drive.google.com/file/d/1bSn-54eJx-s9PJ1tjHkvxzb30rpzKPZk/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Medicina Legal: Declaração de Óbito, Atestados e Laudos.pdf", pdfLink: "https://drive.google.com/file/d/1QTVPnuFKsNU3UUu7rrRi4ITxGhBen3Mq/view?usp=sharing" }
        ]
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Ética Médica",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Etica Medica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1_XU5YdCH0BmUOM4qHIr6nzXr40ndhrha/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Ética Médica.pdf", pdfLink: "https://drive.google.com/file/d/1D1Rp3dZpoHFmqmsCmaKq3ZhXLii1h_ek/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Ética Médica.pdf", pdfLink: "https://drive.google.com/file/d/17IKsDNBxcl9ndqUQLV--F-247QxKQd-q/view?usp=sharing" }
        ]
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "Níveis de Prevenção (Primária a Quaternária)",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Níveis de Prevenção.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AzTF3xr5eGtL5W7-TGP2Ju7Z8Y3aSp2X/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Níveis de Prevenção.pdf", pdfLink: "https://drive.google.com/file/d/1u-PmVnZhsLupgb1HJslHS371pun_3aN8/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Níveis de Prevenção.pdf", pdfLink: "https://drive.google.com/file/d/1lrfUBAs_8qBrZgXMsX3c4sl3onXJhtDZ/view?usp=sharing" }
        ]
      },
      {
        id: 15,
        label: "Sub-Módulo 15",
        title: "Indicadores de Saúde",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Indicadores de saúde - Parte I - COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lh9kKlmaectFkD56WrzxD58hsPjw-e7E/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Indicadores de saúde - Parte I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GQRRSQ-1Fhqe-TGz15BLRhjGgFj5bPYV/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Indicadores de saúde_ Parte I.pdf", pdfLink: "https://drive.google.com/file/d/1oIMfa7ZqDzuiQkTNCoLTmjFavxv0Ui5b/view?usp=sharing" },
          { title: "E-Book - Indicadores de saúde - Parte II - COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1cgRVQg-LrN7fz0vn8dZ89JZm1C2yE03P/view?usp=sharing" }
        ]
      },
      {
        id: 16,
        label: "Sub-Módulo 16",
        title: "Vigilância em Saúde",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 17,
        label: "Sub-Módulo 17",
        title: "Medidas de Associação",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Associação VS Causalidade.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1395l9-wfOfgu5LeOVUHnVuj9H3IeYnD2/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Associação VS Causalidade_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1CU2B8konmcP9x2TGMEIImVDiZ_PQF4eA/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Associação x Causalidade.pdf", pdfLink: "https://drive.google.com/file/d/1rzI-h2Jjd0R04_eO3p0pkWuZ7ayOs6JI/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Associação x Causalidade.pdf", pdfLink: "https://drive.google.com/file/d/1zp-OyfjOmn_jGh1uoeXc3x6642Do5Xz5/view?usp=sharing" }
        ]
      },
      {
        id: 18,
        label: "Sub-Módulo 18",
        title: "Financiamento do SUS",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Financiamento do SUS_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zVkS4R7RW4uJ7YdkaHrv6y_IINCPpy04/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Financiamento do SUS.pdf", pdfLink: "https://drive.google.com/file/d/1GntgQdBGZLjiEr-VGLw37eaoVxnLXZOy/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Financiamento do SUS.pdf", pdfLink: "https://drive.google.com/file/d/19SrXz9UyyP8dbj4H0KC2UBYwOavifrjW/view?usp=sharing" }
        ]
      },
      {
        id: 19,
        label: "Sub-Módulo 19",
        title: "Ensaio Clínico",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Ensaio clínico 1 _COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lsuR2ClFt1xQcQ0HuDCqPejkVL5U9FeD/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Ensaio clínico 2_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1m378YtxOGdllGhzDKz-O3gAkDZUVfizY/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Ensaio clinico 1.pdf", pdfLink: "https://drive.google.com/file/d/1PsyuJOaO0ETyXWpP6jx0Kzjp_rGglZh8/view?usp=sharing" },
          { title: "E-Book - Ensaio clinico 2.pdf", pdfLink: "https://drive.google.com/file/d/1iC1Lz-wHyYSkG2Eni5Ae6Dgmmdmp6a09/view?usp=sharing" }
        ]
      },
      {
        id: 20,
        label: "Sub-Módulo 20",
        title: "Acidente de Trabalho",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Medicina do trabalho - acidente de trabalho.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13inC1isXlCFSxGKRWdTO7dk85jXLF8yc/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Medicina do trabalho - acidente de trabalho_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/175cXW8O0WcMLYQZEXKC9oBbU946JkfEg/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 21,
        label: "Sub-Módulo 21",
        title: "Doenças Ocupacionais (Pneumoconioses e LER/DORT)",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Saúde do trabalhador Pneumoconioses.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hwK-bsRWSo9OEcA_GJvjxNF7psLuy9qL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Saúde do trabalhador lesões musculoesqueléticas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14hhkuA0fvlraFh7EJE_CW-yLZ0_ddy-S/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Saúde do Trabalhador: Pneumoconioses.pdf", pdfLink: "https://drive.google.com/file/d/19Or_1zzJJY5fCQxFABbpzEvBEGzn-cfI/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Saúde do Trabalhador: Pneumoconioses.pdf", pdfLink: "https://drive.google.com/file/d/1o0yIQeDNgVnxbaiOBUlhikiP04DyfgvM/view?usp=sharing" }
        ]
      },
      {
        id: 22,
        label: "Sub-Módulo 22",
        title: "Intoxicações Ocupacionais e Burnout",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Saúde do Trabalhador: Intoxicações, Pairo e Burnout.pdf", pdfLink: "https://drive.google.com/file/d/1yp4NITSoyQiYSE2XpORykJxK7O4THCkh/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Saúde do Trabalhador: Intoxicações, Pairo e Burnout.pdf", pdfLink: "https://drive.google.com/file/d/1JbWa5qHLC5kUOIZAHgFXeCeseQiBGi_A/view?usp=sharing" }
        ]
      },
      {
        id: 23,
        label: "Sub-Módulo 23",
        title: "História da Saúde no Brasil",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Pré-SUS Modelos de Proteção Social e História da Saúde no Brasil.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1FIut8ZFU6Z9NiMbH4RMRZJA9iUGjr0Xk/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 24,
        label: "Sub-Módulo 24",
        title: "Decreto 7508/11",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Decreto 750811_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GjR_WODmRajuxtcA4EZWc4CzkHJYRvcj/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Decreto 7508/11.pdf", pdfLink: "https://drive.google.com/file/d/1bsEfZFucXDBUfT9Eoi_OiPh8kUmWv6CV/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Decreto 7508/11.pdf", pdfLink: "https://drive.google.com/file/d/1-Cxq-MbnikoJOu6ySYnAvA3l0urKPLYp/view?usp=sharing" }
        ]
      },
      {
        id: 25,
        label: "Sub-Módulo 25",
        title: "Saúde Suplementar",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Saúde Suplementar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zTb-OgH0jpy0u9LHAGEuJrdGAZNO0fTt/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Saúde Suplementar.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lIKqrRHtyzrjnxLdYV7qL1utub41EueZ/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Saúde Suplementar.pdf", pdfLink: "https://drive.google.com/file/d/1vjlg0FslTN8BBw6nLk8RejOtRLd2jFDq/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Saúde Suplementar.pdf", pdfLink: "https://drive.google.com/file/d/1UvYJa21WSrTrUGgPIof_MvxToYE2KsJN/view?usp=sharing" }
        ]
      },
      {
        id: 26,
        label: "Sub-Módulo 26",
        title: "Medicina Baseada em Evidências (MBE)",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Conceitos de MBE.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wOVdjktdA_uOumTenQS4GZAsI2jTs2G1/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Revisão Sistemática.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1shnXAXeKQFeMHieuTMzynnC6C5F1fFLY/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Conceitos de MBE.pdf", pdfLink: "https://drive.google.com/file/d/10rjgZIx_BlRSOVQaCpx6UsMZmXmuhcrw/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Conceitos de MBE.pdf", pdfLink: "https://drive.google.com/file/d/1Z_AAGrX6XMo5ZADYOt1EqvROrVxbQhX-/view?usp=sharing" }
        ]
      },
      {
        id: 27,
        label: "Sub-Módulo 27",
        title: "Habilidades de Comunicação",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Habilidades de Comunicação - Parte I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1D34GCYdAAQv5ugKSLtkQqgpRnEJgjZN3/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Habilidades de Comunicação - Parte II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19pVQMbMKWlK9qIY1DDdzMC5dw3icbFEm/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 28,
        label: "Sub-Módulo 28",
        title: "Políticas Públicas de Saúde (Populações Especiais)",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Políticas Públicas de Saúde II Políticas Setoriais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17pGITzHVtxx_wOeBTCmoPzDclfTKDaHI/view?usp=sharing" },
          { id: 2, title: "Aula 02 - CUIDADO À COMUNIDADE LGBTQIAPN+.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17GYOyRsbtQJ6uL9qCGwqtS4lG1nOfqbb/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 29,
        label: "Sub-Módulo 29",
        title: "Saúde Mental e RAPS",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Políticas Especificas Reforma Psiquiátrica e RAPS - Rede de Atenção Psicossocial_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14VI29LW0pvuwrQFPKB_3FEfPfRUK5XuK/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 30,
        label: "Sub-Módulo 30",
        title: "Determinação Social do Processo Saúde-Doença",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 31,
        label: "Sub-Módulo 31",
        title: "Rastreamentos",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 32,
        label: "Sub-Módulo 32",
        title: "Abordagem Familiar e Comunitária",
        imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abordagem Comunitária_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kVw_0O_2FHBFK6hxt2ZEY1wzSuXv4WTv/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Abordagem Familiar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bmjbq_gj8D_rDIsCZ8jIIdyO4P776XsC/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 33,
        label: "Sub-Módulo 33",
        title: "ReSOAP e Registro Clínico",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - ReSOAP.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10aAmUrYwnyrZsTLncHmJWx_xcB9xok9e/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 34,
        label: "Sub-Módulo 34",
        title: "\"Foca na APS\" (Revisão Clínica em Preventiva)",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Foca na APS Clínica Médica Geral.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10PcVT8BjpyCSN2OnuNSSHODuxNNBLEH8/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Foca na APS Endocrino - Diabetes, sind metabolica e dislipdemia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DOOhpxhl0hQfcBQaJyKMoGPEnKWBIfHK/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Foca na APS Psiquiatria.pdf", pdfLink: "https://drive.google.com/file/d/1C-BZqeph0XTdeMbm_AXKB28TWrXyJTTD/view?usp=sharing" },
          { title: "E-Book - Foca na APS_ cardiologia  - Risco CV e HAS.pdf", pdfLink: "https://drive.google.com/file/d/1AEEEJsrX58r0QRzKW3-CbjLpeNbFV1aO/view?usp=sharing" }
        ]
      },
      {
        id: 35,
        label: "Sub-Módulo 35",
        title: "NOBs e NOAS",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - NOBS E NOAS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1v42MYxmAkyx83gpEbCu_9chsT1cjN6vL/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 36,
        label: "Sub-Módulo 36",
        title: "Pacto pela Saúde",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Pacto pela Saúde_COFEXPRESS-.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1n8Rh2dvDpzYw4A04aBykm_J5O40JUXMv/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 37,
        label: "Sub-Módulo 37",
        title: "Concepções sobre Saúde e Doença",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Concepções sobre Saúde e Doença .pdf", pdfLink: "https://drive.google.com/file/d/1RIU69x9dTsxCt2ksk7HjJ8xuGSZpw8uM/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Concepções sobre Saúde e Doença.pdf", pdfLink: "https://drive.google.com/file/d/1gh7JjMUfhiTrACJ9s8Na_xf7W0WKvpcf/view?usp=sharing" }
        ]
      },
      {
        id: 38,
        label: "Sub-Módulo 38",
        title: "Planejamento em Saúde",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Planejamento em Saúde_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ErfFbVGed6JCmonUjU0Uv3TPO4RbWT5J/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 39,
        label: "Sub-Módulo 39",
        title: "Ética em Pesquisa Clínica",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Ética em pesquisa clínica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10XrB1TPWuupF8Fh0Q9ivVqnXGfWVGKA2/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Ética em pesquisa clínica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13ioKm6Ks1fyD8xEqg9iFl3S44gbpY-c-/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 40,
        label: "Sub-Módulo 40",
        title: "Saúde Planetária",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Saúde Planetária_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1eXN0uto5FMAJBXgW4nXDk4Rk7Twi7ZsQ/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 41,
        label: "Sub-Módulo 41",
        title: "Redes de Atenção à Saúde (RAS)",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Redes de Atenção à Saúde e Níveis de Atenção.pdf", pdfLink: "https://drive.google.com/file/d/1pXkzg5I3KO6flILyIEkBJyNdrm7bmCya/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Redes de Atenção à Saúde e Níveis de Atenção.pdf", pdfLink: "https://drive.google.com/file/d/1ftsVdCgcRB9NdyUxvFOF6prhip48z-Eq/view?usp=sharing" }
        ]
      },
      {
        id: 42,
        label: "Sub-Módulo 42",
        title: "Avaliação e Tecnologia em Saúde",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a945cd3ae?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Outros Tópicos de Saúde Coletiva- Avaliação em Saúde, Tecnologia em Saúde e Segurança do Paciente.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aSE1Ql9uv9LxxbG4tQnnRHggj9py-TCY/view?usp=sharing" }
        ],
        materials: []
      }
    ]
  },
  // --- MÓDULO 07: CIRURGIA COMPLETA / NEURO & PSIQUIATRIA ---
  {
    id: 7,
    title: "Módulo 07 - Cirurgia Completa / Neuro & Psiquiatria",
    label: "Módulo 07",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 01",
        title: "Trauma: Revisão ABCDE",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Revisão ABCDE.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hUQ3DKLGrPCpBI-pBGCXbB66tgm3UW9p/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Introdução ao trauma e atendimento inicial.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1f5Ix1w3eEFq_tWOyvFIu8HgTdq_47beI/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Revisão ABCDE.pdf", pdfLink: "https://drive.google.com/file/d/1Uu2E_ShLaBNHlr--co3jxExebrKHLels/view?usp=sharing" },
          { title: "E-Book - Trauma: Introdução ao trauma e atendimento inicial.pdf", pdfLink: "https://drive.google.com/file/d/1S9tp0IXoBin9xLeA6EDE-kwk4iU85Dpd/view?usp=sharing" }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 02",
        title: "Trauma de Tórax: Parte I",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Trauma de Tórax.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oJjsAT26aXPPNired_PeVaCa6Qf0PtVr/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Trauma de Tórax.pdf", pdfLink: "https://drive.google.com/file/d/1WrmtNUzHePftkwL_9RTFmQsDiimEweFl/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Trauma de Tórax.pdf", pdfLink: "https://drive.google.com/file/d/1cfpZ4-FcebagulOovs_7u9xvCYO2_Ti0/view?usp=sharing" }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 03",
        title: "Trauma de Tórax: Parte II",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Trauma de Tórax II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yeYRMyGTcu7VO497FbZGZwda78ZPdPhl/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Trauma de Tórax II_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Gfk0JJg_2dNo2A2RskeJdrpjL9soHw-o/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Trauma de Tórax II.pdf", pdfLink: "https://drive.google.com/file/d/1Y9wBVagZz1YM5baYw-cqZk8khyFhIxld/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Trauma de Tórax II.pdf", pdfLink: "https://drive.google.com/file/d/1rGE1GgHz3bomEMsfZY-adlH14TgyAx9M/view?usp=sharing" }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 04",
        title: "Medidas Auxiliares e FAST",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Medidas Auxiliares e FAST.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14SjieT7PoX12j9SqAqk0jZHjEteHtvmU/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Medidas Auxiliares e FAST_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1F15bJQhfiMS_foWS-hMcg6M4qrLWNKFw/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Medidas Auxiliares e FAST.pdf", pdfLink: "https://drive.google.com/file/d/1c69Y1V94OhXn6Qs4_iaA1UsSYtr60pXV/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Trauma - Medidas Auxiliares e FAST.pdf", pdfLink: "https://drive.google.com/file/d/1RjgQ1upnW64LDqx_2QBiMVKw3LjJuXXt/view?usp=sharing" }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 05",
        title: "Trauma em Populações Especiais",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Populações especiais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1yxwFuYI_oARqNtdfPAd3XxZ89GuqFIzy/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Populações especiais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pmOI8LzYtDmK0RoTbPSYf3AvgAx3GG3X/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma: Populações especiais.pdf", pdfLink: "https://drive.google.com/file/d/1GbHlYuvmSUZTknD0YOigq9gTOqyE3diy/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Trauma - Populações especiais.pdf", pdfLink: "https://drive.google.com/file/d/1tBEILtr5nAZz50sy6w_uVgfLkGhhHQOM/view?usp=sharing" }
        ]
      },
      {
        id: 6,
        label: "Sub-Módulo 06",
        title: "Trauma Abdominal Penetrante",
        imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Abdominal penetrante_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17-zCkUXfg60Pf3wbLWN5Twn8YiXgqz-G/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 7,
        label: "Sub-Módulo 07",
        title: "Trauma Abdominal Contuso",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Abdominal contuso_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gGX7lJenwfs_Cmv_Dt0NBO_AkQFgTE33/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Abdominal contuso.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pztZMORu4vQZ87bJ1Ap_hxWBvb6APAjd/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 8,
        label: "Sub-Módulo 08",
        title: "Trauma Abdominal Específico: Parte I",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Abdominal específico - PARTE I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17bO_MGGVRYiQ843RjXOI8Pm6cD_SoW3H/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Trauma Abdominal específico - PARTE I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DVKem_o1c8pVG2lwx8iC6GxxCfXi5bcy/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Trauma Trauma Abdominal específico - PARTE I.pdf", pdfLink: "https://drive.google.com/file/d/1HWHKio0-PLbyjsu2aQXOBm0nvWTTj6NB/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 09",
        title: "Trauma Abdominal Específico: Parte II",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Abdominal específico - PARTE II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1l9VFjUP26WyiSxYaCekgCb9bPaaoSiPM/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Abdominal específico - PARTE II_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nDiJ6DNdRpLf0iGMVc9Bh-e11lZdQuNS/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 10,
        label: "Sub-Módulo 10",
        title: "Trauma Cervical",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Cervical_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11Gb8yVjA6LVlah2G9j-TFdljO6L6_mTi/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Cervical especifico_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rjpWcuZTIvwGbqGOCTweVBMq8OcFUawG/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 11,
        label: "Sub-Módulo 11",
        title: "Trauma Cranioencefálico (TCE)",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Trauma Cranioencefálico.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zzjox7qmpNZftcMk-GLjWvLJ-TTCuw81/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Trauma Cranioencefálico_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1omlnUAlTmTjbiMad0sl2u5T3JzHylQy/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - TCE Grave e Morte encefálica.pdf", pdfLink: "https://drive.google.com/file/d/19aSMMYUthuK0GTV8eDo43ciZsVgbJH4R/view?usp=sharing" }
        ]
      },
      {
        id: 12,
        label: "Sub-Módulo 12",
        title: "Trauma Raquimedular (TRM)",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Trauma Raquimedular_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fvET8UoPN-lqPC7jE6A5L5EcktiOt6A7/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 13,
        label: "Sub-Módulo 13",
        title: "Trauma Musculoesquelético",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Trauma Trauma Musculoesquelético_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fyw-rrXu9JAued8VPPRiBaWhgNUQ0Et0/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Trauma Trauma Musculoesquelético.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zohBB1RNrz3vpYSmb8Q9oPw0Vhzc4oBy/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 14,
        label: "Sub-Módulo 14",
        title: "Anatomia da Parede Abdominal",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hérnias Anatomia da parede abdominal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-7rTPGg1GbdleoozlAPiwJLwp8VczxwG/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 15,
        label: "Sub-Módulo 15",
        title: "Hérnia Inguinal",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hérnias Hérnia Inguinal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vlThWh-r7eM9fMuECPjrkoPUyYzU4dYd/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hérnias Hérnia Inguinal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nVO_24UGTRrALZlnCMMHS7tzQ_rehQQO/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 16,
        label: "Sub-Módulo 16",
        title: "Hérnia Femoral e Umbilical",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hérnias Outras hérnias.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-gs3qYhfyVhn6n9LOBVlxmIs-YKZWNUY/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hérnias Outras hérnias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10YaXc3Mb5unyOAwAb2pMSx-5vLhh3juO/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 17,
        label: "Sub-Módulo 17",
        title: "Hérnias Incisionais e Outras",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Hérnia Incisional_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15Kj4uRWb1MkJaaV_oeJzgMXa912Jjb11/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Hérnia Incisional.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1j324u6RI14IIgJPODFAnBBMWAk6-K8D4/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Hérnias Fechamento de parede abdominal.pdf", pdfLink: "https://drive.google.com/file/d/135bo4TzjFXuJ0q3pB2xzQYWL8h3QzgtF/view?usp=sharing" }
        ]
      },
      {
        id: 18,
        label: "Sub-Módulo 18",
        title: "Abdome Agudo: Introdução",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Introdução.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1h9rOX6YcX6-y2kWA2ZiwXmVAeKNDdAuo/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Abdome Agudo Introdução_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1z440PRT_avePCoStKxEqVz6HBls7DQHM/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Ficha Resumo: Abdome Agudo - Introdução.pdf", pdfLink: "https://drive.google.com/file/d/1lRINdMYOBQCd4x8sRHndktnHCAmg54aw/view?usp=sharing" },
          { title: "E-Book - Abdome Agudo: Introdução.pdf", pdfLink: "https://drive.google.com/file/d/1V9ujunY60yIvDZFK2ss411185hokckeW/view?usp=sharing" }
        ]
      },
      {
        id: 19,
        label: "Sub-Módulo 19",
        title: "Apendicite Aguda",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Inflamatório Apendicite Aguda_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DWtM3mU6X2y6GLoSp-8Q8Lj6tLLAeFAW/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Abdome Agudo Inflamatório: Apendicite Aguda.pdf", pdfLink: "https://drive.google.com/file/d/16Tfv_3R8cQOoOiSq9zrOiSdAcFkPyeW5/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Abdome Agudo Inflamatório - Apendicite Aguda.pdf", pdfLink: "https://drive.google.com/file/d/1icJ-THK1XvUg-4zVyEFYBQ2C1SUBApEi/view?usp=sharing" }
        ]
      },
      {
        id: 20,
        label: "Sub-Módulo 20",
        title: "Colelitíase e Colecistite",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Inflamatório Colecistite_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/11S6au3v2CLfSEJh5J53LjPnbCDKl6G1h/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Abdome Agudo Inflamatório Colelitíase.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/105QpQnTaW0mnJejhFgJX2hQbquwMkBBE/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Abdome Agudo Inflamatório: Colecistite.pdf", pdfLink: "https://drive.google.com/file/d/1If2rMgZQPtQFNmrMMl6zGxxn5gxX66Xd/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Abdome Agudo Inflamatório - Colecistite.pdf", pdfLink: "https://drive.google.com/file/d/1Z9MgVDunwKe0MgzVwn6cqfaLc-IKqAM8/view?usp=sharing" }
        ]
      },
      {
        id: 21,
        label: "Sub-Módulo 21",
        title: "Coledocolitíase e Colangite",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Inflamatório Colangite.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1DYUyJrDHiQbmxfJtJd38EtFxIkVU-P14/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Abdome Agudo Inflamatório Colangite_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1l1RxQivsr8Om0O_9Uxxdz70cfR7kaOCM/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Abdome Agudo Inflamatório: Colangite.pdf", pdfLink: "https://drive.google.com/file/d/1dMeIelLyvkVK7eCTtVGdzTCSaIc9JieX/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Abdome Agudo Inflamatório - Colangite.pdf", pdfLink: "https://drive.google.com/file/d/1B2M8ZpD16aXZXD07PMkfeQejRWzmJ8OA/view?usp=sharing" }
        ]
      },
      {
        id: 22,
        label: "Sub-Módulo 22",
        title: "Pancreatite Aguda",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Pancreatite Aguda_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wDNp7EMlM-S0yvjYUX2x6znrAZTuGjcn/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Abdome Agudo Inflamatório: Pancreatite Aguda.pdf", pdfLink: "https://drive.google.com/file/d/1kJMBC__j5jhjPP6Yq797AF8G1b02haoO/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Abdome Agudo Inflamatório - Pancreatite Aguda.pdf", pdfLink: "https://drive.google.com/file/d/1a13Zz9b78I73mqcW8nq3e0zLfgiagf0W/view?usp=sharing" }
        ]
      },
      {
        id: 23,
        label: "Sub-Módulo 23",
        title: "Diverticulite Aguda",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Diverticulite Aguda_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1odgFIQQlHoREdjOlEBQV6CgHICYcyAM6/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Abdome Agudo Inflamatório: Diverticulite Aguda.pdf", pdfLink: "https://drive.google.com/file/d/1mLVY4KJw3eHBMXIhWPvSxi8chvXSTM-b/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Abdome Agudo Inflamatório - Diverticulite Aguda.pdf", pdfLink: "https://drive.google.com/file/d/1G518Ztf5Vjw3OHcAaSm1kz22rZoJhIov/view?usp=sharing" }
        ]
      },
      {
        id: 24,
        label: "Sub-Módulo 24",
        title: "Abdome Agudo Obstrutivo",
        imageUrl: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Obstrutivo.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1s_y8D_B-G-0s0ate99EoX5nAyxvV4B6l/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Abdome Agudo Obstrutivo.pdf", pdfLink: "https://drive.google.com/file/d/1o8E1zMw5HnDOoyXu46FPJjppP9WvOgeX/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Abdome Agudo Obstrutivo.pdf", pdfLink: "https://drive.google.com/file/d/1YQdtQjXC9WAiAmgLpb8ka3N6L2BFHF4y/view?usp=sharing" }
        ]
      },
      {
        id: 25,
        label: "Sub-Módulo 25",
        title: "Abdome Agudo Perfurativo",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Perfurativo_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/180CxbuylIo0Vuwd-8gEb5bKUiG4yQCR6/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 26,
        label: "Sub-Módulo 26",
        title: "Abdome Agudo Vascular",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Vascular_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1beXHcduJRULzqeHSE77hISyQQc_pTeL5/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 27,
        label: "Sub-Módulo 27",
        title: "Abdome Agudo Hemorrágico",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Hemorrágico.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fSOCHvLLvFr-emzBH4odIYhZI8u8U6Kk/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Abdome Agudo Hemorrágico_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aJ4CZzruF3v2Q7JY1cFvBzCTZpQezPef/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 28,
        label: "Sub-Módulo 28",
        title: "Esôfago: Introdução e Disfagia",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Esôfago Introdução_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uCxDXsJeOGYDsyP4LOn9dtMgs2iOHb5y/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Esôfago Diagnósticos e diferenciais de disfagia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oKmKjugr8CMJhEUdI8OBMEk9i2ddtOYZ/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 29,
        label: "Sub-Módulo 29",
        title: "Câncer de Esôfago",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Esôfago Câncer de esôfago.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-VUzHuiAEwvAnBzF2lEhh9ZMo4iKqJJa/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 30,
        label: "Sub-Módulo 30",
        title: "Acalasia",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Esôfago Acalasia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/137UHMSTD_T8OI3WySNWEp_Q0Wk9EPBDz/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Esôfago Acalasia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jNsy5gF_hZHLm0IK782vrCH9yfkIsysM/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 31,
        label: "Sub-Módulo 31",
        title: "DRGE, Barrett e Hérnias de Hiato",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Esôfago Hernias de Hiato.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dCJ6PETEvOMyZz9fZG5De5pVB6qRVXvy/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 32,
        label: "Sub-Módulo 32",
        title: "Estômago: Anatomia e Fisiologia",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Estômago Anatomia e fisiologia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13M7RNdB9fx4sjZfEWaUIM15CiODD7zXp/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 33,
        label: "Sub-Módulo 33",
        title: "Adenocarcinoma Gástrico e Linfomas",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Estômago Câncer, introdução e linfomas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vfG4fNfRyNlKih2ucR0AOgnaNQuxwq2G/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 34,
        label: "Sub-Módulo 34",
        title: "GIST e Tumores Neuroendócrinos Gástricos",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Estômago GIST.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ahEDSyf5A3WBnCutB1GdvJj1U6-2HRaG/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Estômago Tumores neuroendócrinos.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AINKclORxfYiLWnBhW5w8Sc8JGNGqEVm/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 35,
        label: "Sub-Módulo 35",
        title: "Complicações Pós-Gastrectomias",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Estômago Complicações agudas pós gastrectomias_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aTRcS2bRUb9st39gsjjSAGbVg_dMRIG0/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Estômago Complicações agudas pós gastrectomias.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ioXjV2uyoiu8bhtguEcbsw-bfnCOlaVA/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 36,
        label: "Sub-Módulo 36",
        title: "Obesidade e Cirurgia Bariátrica",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Obesidade Princípios Gerais e Cirurgia Bariátrica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AKJqMgA9Ft7OooLWinz3mlRE8CKA8U_z/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Obesidade Procedimentos Cirúrgicos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1G8JsqPh2QrB2yi-vwxQ4HYVgm77Y1mzv/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Obesidade: Tratamento Farmacológico e Cirúrgico.pdf", pdfLink: "https://drive.google.com/file/d/1ujz4oCI6F47Oa86xIAPQvg29NcGFIYZ_/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Obesidade - Tratamento Farmacológico e Cirúrgico.pdf", pdfLink: "https://drive.google.com/file/d/1qeOY05Qf0GbAD6xJcHyA_WzoW9hPGHcb/view?usp=sharing" }
        ]
      },
      {
        id: 37,
        label: "Sub-Módulo 37",
        title: "Complicações Pós-Bariátrica e Reganho",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Obesidade Complicações pós bariátrica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1k9RzQALb-_5I64Bw1ICKBl2wMClkN1JT/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Obesidade Complicações pós bariátrica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1pY675msP3GNesDKgro-GZqgvcURJYStZ/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 38,
        label: "Sub-Módulo 38",
        title: "Fígado: Anatomia e Lesões Benignas",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Fígado Hemangioma hepático_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-6uJ7cNCuatFGdYJqbH9QZaXx4f6mKFG/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Fígado Hiperplasia Nodular Focal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tvGq-y2dtmEnhVFO8warq2YKm6zMK1WG/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Fígado Hemangioma hepático.pdf", pdfLink: "https://drive.google.com/file/d/1vdmfHz1IIMZ_kTygBnyazC6gZSA5seqK/view?usp=sharing" },
          { title: "E-Book - Fígado Cisto Hepático_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1HrIzTq0i-79bCs4HJDtEXTnhet0iGYrp/view?usp=sharing" }
        ]
      },
      {
        id: 39,
        label: "Sub-Módulo 39",
        title: "Carcinoma Hepatocelular",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Fígado Carcinoma hepatocelular_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1oeKjotwZZPjE1KWGQealmRoNRzVqrhmt/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Fígado: Carcinoma Hepatocelular.pdf", pdfLink: "https://drive.google.com/file/d/1O3htKOMXxrD79ZBfP88m0Jz2SHIh8frX/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Fígado - Carcinoma Hepatocelular.pdf", pdfLink: "https://drive.google.com/file/d/1dgLe0suXhhJcTLwdldOxjMne6epGP3K9/view?usp=sharing" }
        ]
      },
      {
        id: 40,
        label: "Sub-Módulo 40",
        title: "Metástases Hepáticas",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Fígado Metástases Hepáticas de CA colorretal - Parte II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13vM627djC6nIwsupacdvj0FgFeWPOrz-/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Fígado Metástases Hepáticas de CA colorretal - Parte II_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1p3w70Xo8zcIn2pGnvZtXIpVG1XBwqaD1/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 41,
        label: "Sub-Módulo 41",
        title: "Abscesso e Cistos Hepáticos",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Abdome Agudo Inflamatório Abscesso Hepático_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1CjHiDD_DNxEkwHXJoR0oNO7Z3Sd2VdhZ/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Abdome Agudo Inflamatório: Abscesso Hepático.pdf", pdfLink: "https://drive.google.com/file/d/1xyPQXFoxXGqp38TkiniITvD7nghOeiht/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Abdome Agudo Inflamatório - Abscesso Hepático.pdf", pdfLink: "https://drive.google.com/file/d/1fNhoDEHgbIWYXQ2fhRg3dgLK96dHUCKr/view?usp=sharing" }
        ]
      },
      {
        id: 42,
        label: "Sub-Módulo 42",
        title: "Patologias da Vesícula",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Pâncreas e vias biliares Pólipo de vesícula biliar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lmfIf9Kg1mwhCsPsMjFKgCw99mR9Kcp2/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pâncreas e vias biliares Câncer de Vesícula_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1HyVAxSTqq2lMRWNSfp-l75EM2ucPPlU6/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 43,
        label: "Sub-Módulo 43",
        title: "Lesão Iatrogênica da Via Biliar",
        imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: [
          { title: "E-Book - Fígado e VB Quiz.pdf", pdfLink: "https://drive.google.com/file/d/1ofRSTFq9xORy90J3xPX5pi16F7lI3_AD/view?usp=sharing" }
        ]
      },
      {
        id: 44,
        label: "Sub-Módulo 44",
        title: "Adenocarcinoma de Pâncreas",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Pâncreas e vias biliares Adenocarcinoma de pâncreas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17NxhqZCGaAC17XogDBnKUYOZFLzY6r0s/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 45,
        label: "Sub-Módulo 45",
        title: "Pancreatite Crônica",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Pâncreas e vias biliares Pancreatite Crônica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1kCyGEDHaUmw0nbBTwVzijpg-1Q_Orht5/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Pancreatite Crônica (R+).pdf", pdfLink: "https://drive.google.com/file/d/186Nc2LSL262cakEukOveDwEg-v6FF6xg/view?usp=sharing" },
          { title: "E-Book - Ficha Resumo: Pancreatite Crônica (R+).pdf", pdfLink: "https://drive.google.com/file/d/1_3Hy2qITSZU570YjEA-cPcDVIqDe9DEY/view?usp=sharing" }
        ]
      },
      {
        id: 46,
        label: "Sub-Módulo 46",
        title: "Tumores Periampulares e Císticos do Pâncreas",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - COFEXPRESS Pâncreas e vias biliares Neoplasias Císticas Pancreáticas (1).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sE8DkYfWdLOZN2WREZuC7p0gXqbAnXqA/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Pâncreas e vias biliares Tumores Neuroendócrinos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ovOI2BDuIc-TLBxkl3zDudGp7LoV2Y-S/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 47,
        label: "Sub-Módulo 47",
        title: "Câncer Colorretal e Síndromes Associadas",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Coloproctologia Síndromes Associadas ao CCR_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AzNg0bOHxtVkrJSjllMAHzVELm3aDjZL/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Coloproctologia Síndromes Associadas ao CCR.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zgyNm5EmY7cxxMnqBMzvsTDgSKppVy70/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Coloproctologia CA colorretal_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1iyPrPwgG-vlYCf1yTj3szgyI_VbSB9PW/view?usp=sharing" }
        ]
      },
      {
        id: 48,
        label: "Sub-Módulo 48",
        title: "Doenças Orificiais",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Coloproctologia Doenças Orificiais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lvok5QDqihWOEMxedTpnV-v4R2PIzAts/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 49,
        label: "Sub-Módulo 49",
        title: "CEC Canal Anal e Pilonidal",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Coloproctologia CEC Canal Anal_COFERXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dkH3jPN5c0f6HSK0-_KuZOBisL_J0z2k/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cisto Pilonidal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1n12ycoEUd6EDQHYtjJfqLXq7qemXz2NV/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cisto Pilonidal.pdf", pdfLink: "https://drive.google.com/file/d/1C4MP-TAp5I7h32FbyH9CYpE4aBi5I88u/view?usp=sharing" }
        ]
      },
      {
        id: 50,
        label: "Sub-Módulo 50",
        title: "Doença Inflamatória Intestinal (DII)",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doença Inflamatória intestinal - Parte II.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-2eXnmnZ0ABr6tV0EWPFLxUF2_8227Ak/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doença Inflamatória intestinal - Parte II_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qH39ksoLCvXGhciu8_1zKKZ6sy22Zz7v/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 51,
        label: "Sub-Módulo 51",
        title: "Tumores do Intestino Delgado e SII",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - SII.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rG1LGKeyG-likQLulHXIOC7pTEhoD64g/view?usp=sharing" },
          { id: 2, title: "Aula 02 - SII _COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bXzj4fex5PeZJJaU-xebDIVmZKz9oFLM/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 52,
        label: "Sub-Módulo 52",
        title: "Distúrbios do Assoalho Pélvico",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Estudo Urodinâmico.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/14WFOAqSfuy88DNSzgL4miKH0iHswMuPM/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 53,
        label: "Sub-Módulo 53",
        title: "Hemorragia Digestiva Alta (Varicosa e Não Varicosa)",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Urgências endoscópicas HDA varicosa_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ekwVzm7oGepob_NUTj-1C_UdO5VOa784/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Urgências Endoscópicas HDA Não Varicosa_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15XyOJgt7Qrj0SgXLAgAkLAaPt-euAEls/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 54,
        label: "Sub-Módulo 54",
        title: "Hemorragia Digestiva Baixa e Média",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Urgências endoscópicas Hemorragia digestiva média.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13K8QmAbgWS1GYmtDvP4ef_BM5qX8hHCB/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Urgências endoscópicas HDB_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zgWkWwDTCExYIJL0981_mHTiR9NkOcd5/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Urgências endoscópicas HDB.pdf", pdfLink: "https://drive.google.com/file/d/1HJ45rWaz-hM33HRYRoAKTdnfnGWVxd27/view?usp=sharing" }
        ]
      },
      {
        id: 55,
        label: "Sub-Módulo 55",
        title: "Corpo Estranho e Preparo de Cólon",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Endoscopia Preparo de Cólon.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18GqG9oODWHAKXeoWYFjghtC7BZdjgG2c/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 56,
        label: "Sub-Módulo 56",
        title: "Pólipos Colorretais e CA Precoce",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Endoscopia CA colorretal precoce_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hPd0hxcGrgc-eBbmfB4dXBZ9POfO4fTX/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 57,
        label: "Sub-Módulo 57",
        title: "Litíase Urinária: Diagnóstico e Tratamento",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Litíase no pronto socorro.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-MdTs65rTSH8lX3vPOA9xJzUBq-cbzYo/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Litíase Introdução.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/15qmuHoY_ErF6hYFkKjCpWMce4840zNtz/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Ficha Resumo: Urologia - Litíase no Pronto-Socorro.pdf", pdfLink: "https://drive.google.com/file/d/1Og6GRc7WJnmAAQAGMJzNYStXsg-xPHqr/view?usp=sharing" },
          { title: "E-Book - Litíase no pronto-socorro_COFEXPRESS.mp4", pdfLink: "https://drive.google.com/file/d/1hxE_IN37owZbt1hdUvbVVN7OHf3rduv5/view?usp=sharing" }
        ]
      },
      {
        id: 58,
        label: "Sub-Módulo 58",
        title: "Câncer de Próstata, Rim e Bexiga",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Uro-oncologia Bexiga_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1flsqADw8hPANlV4SmmSIgpKmhKIZ_Qq2/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Uro-oncologia Rim_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qW3wOa0zMsE6SviLtHeHr-NBF-Ei8Siy/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 59,
        label: "Sub-Módulo 59",
        title: "Câncer de Testículo, Pênis e Adrenal",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Uro-oncologia Pênis _COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gaTjScF0vI-XlFiDktCI3GcJFMkuC962/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Uro-oncologia Pênis.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1j5AYcc-bwbYnTINxzqObPjVcojQRCfG4/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Uro-oncologia Testículo_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1wbMY2vX3J__mJopmMqNc1zmmo-tmV3Iz/view?usp=sharing" }
        ]
      },
      {
        id: 60,
        label: "Sub-Módulo 60",
        title: "Hiperplasia Prostática Benigna (HPB)",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 61,
        label: "Sub-Módulo 61",
        title: "Urgências Urológicas (Escroto Agudo, Priapismo, Fratura)",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Urologia PS - Escroto Agudo_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1tMV6b2L4TRl0PQWWgcWHpIkOuKDNFpZ2/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Urologia PS - Fratura Peniana.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1u5i2kgv2EO8tPvHKunYuzBHDFf2Z19h7/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Urologia PS - Priapismo_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1zqMV2AydyOgM0SUWbJtKvdWVIQ290Ki_/view?usp=sharing" },
          { title: "E-Book - Urologia PS - Fratura Peniana_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/18kBRdz_3MQ17vik3HMDr1pLMI5zeBc7N/view?usp=sharing" }
        ]
      },
      {
        id: 62,
        label: "Sub-Módulo 62",
        title: "Trauma Urológico (Rim, Ureter, Bexiga, Uretra)",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 63,
        label: "Sub-Módulo 63",
        title: "Incontinência, Bexiga Neurogênica e Disfunções",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Urologia Síndrome da bexiga hiperativa e bexiga dolorosa.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hzA213yCEINQI2Skg5HG55NPTMdgczuZ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Urologia Incontinência urinária de esforço.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1phsk4N0vjZlYpfjIpoRn8FxywvhLtwRA/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Urologia Bexiga neurogênica.pdf", pdfLink: "https://drive.google.com/file/d/1Gbm46jmY1sv4qyDiTb775LxWX2j0l_an/view?usp=sharing" },
          { title: "E-Book - Urologia Incontinência urinária de esforço _COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/18h8v5gg0UKme6rq2iFuFf6_r4DFNaVcM/view?usp=sharing" }
        ]
      },
      {
        id: 64,
        label: "Sub-Módulo 64",
        title: "Andrologia (Medicina Sexual, DSTs, Infertilidade)",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a945cd3ae?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Urologia_ Medicina Sexual.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1l2hAiGtAU8hrgKp7jzYGknRnIpEKcKqS/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Urologia Desafios finais.pdf", pdfLink: "https://drive.google.com/file/d/1gx2xNZ5y-ju3yivAbs2JsriV6tMRNwXU/view?usp=sharing" },
          { title: "E-Book - Urologia Desafios finais_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1bzep37J7HslemqyeHCTsb8CS1mGqM_ux/view?usp=sharing" }
        ]
      },
      {
        id: 65,
        label: "Sub-Módulo 65",
        title: "Aneurisma de Aorta",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Vascular Aneurisma de aorta I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1eLrZC3fCzLu_6Vvv4mBQahciAeE6zzNp/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Vascular Aneurisma de aorta II_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1rpPmIL5B9Q_EnZVo4m22Wxvau3IAlTTy/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 66,
        label: "Sub-Módulo 66",
        title: "Síndromes Aórticas Agudas",
        imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb07365f557?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Vascular Síndromes aórticas agudas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aetxsGNM-b2x1a3WfiwKJxg9goAL3m2f/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Vascular Síndromes aórticas agudas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1BnmKnfKgC_Vo9I1e0kCKGGJqmjVg2UGQ/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 67,
        label: "Sub-Módulo 67",
        title: "Doença Arterial Obstrutiva (OAA e OAC)",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Vascular Isquemia de membros inferiores - OAA COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/138huvjRgCfknmgw07RfPFYg1abdnvBzU/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Isquemia de membros inferiores-oaa.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1srSrEZTQUnG_rC9C5DWvDuig-0TyKXEL/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Isquemia de membros inferiores-oac.pdf", pdfLink: "https://drive.google.com/file/d/1ug4Aaq9VnYmxj4aePuD0HbArH_GnBvKV/view?usp=sharing" },
          { title: "E-Book - Cirurgia Vascular Isquemia de membros inferiores - OAC _COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1div0DIqHK-FTfLxu9d1bqZkXz4wkno-M/view?usp=sharing" }
        ]
      },
      {
        id: 68,
        label: "Sub-Módulo 68",
        title: "Trombose Venosa Profunda (TVP) e Insuficiência Venosa",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Vascular Insuficiência venosa crônica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jCJy8GOiFv75bPtjRs49H1x0DkDlBdvk/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Vascular Insuficiência venosa crônica_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jCJy8GOiFv75bPtjRs49H1x0DkDlBdvk/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Vascular Trombose venosa profunda_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1jyd8aBOZJHHD4fzoOaxJDrDO4fyNVVB7/view?usp=sharing" },
          { title: "E-Book - Cirurgia Vascular Trombose venosa profunda.pdf", pdfLink: "https://drive.google.com/file/d/1kVw_0O_2FHBFK6hxt2ZEY1wzSuXv4WTv/view?usp=sharing" }
        ]
      },
      {
        id: 69,
        label: "Sub-Módulo 69",
        title: "Estenose Carotídea",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Vascular Estenose Carotídea Sintomática_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ejdwvUIqp2ZiaHhIW5ef0D4dRu9I0PIx/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Estenose Carotidea Assintomatica.pdf", pdfLink: "https://drive.google.com/file/d/1ujQ_bJgAnbaZ-IBm-o7RARV2WsQHdWuT/view?usp=sharing" },
          { title: "E-Book - Estenose Carotidea Sintomatica.pdf", pdfLink: "https://drive.google.com/file/d/1lr_1sKaqH6ctgdFtkqd0l-2lby_iI4Wm/view?usp=sharing" }
        ]
      },
      {
        id: 70,
        label: "Sub-Módulo 70",
        title: "Trauma Vascular",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Vascular Trauma Vascular de Aorta_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ogzITFanXAqgGXeVotSULeasYH2Wh60w/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Vascular Trauma Vascular de Aorta.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nEuS3sjaWxYJE4-6p5jWbtYTMOc9DlPJ/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Vascular Trauma Vascular de extremidades_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1Fmb7xA9aLE1GaH9kuOpu-6krJydXIapD/view?usp=sharing" },
          { title: "E-Book - Cirurgia Vascular Trauma Vascular de extremidades.pdf", pdfLink: "https://drive.google.com/file/d/1q-_hWrcbkUYGqzFfis1eOP-HeUk0joAp/view?usp=sharing" }
        ]
      },
      {
        id: 71,
        label: "Sub-Módulo 71",
        title: "Pé Diabético e Vasculites",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Vascular Pé diabético_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hds9v5jfHxwmrRh1yrRYE89FRIjfP8Gq/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Vascular Vasculites_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19FGNn59uRk7HXNCja6RAobJhewzVT_KW/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Vascular Síndrome do desfiladeiro torácico.pdf", pdfLink: "https://drive.google.com/file/d/1GpMm3q7rparBDuZDRGZrzMkJpxruuAzW/view?usp=sharing" },
          { title: "E-Book - Cirurgia Vascular Síndromes compressivas _COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1zL9d0dI05G-k1Y9l-GTiFl6yxHlO-8na/view?usp=sharing" }
        ]
      },
      {
        id: 72,
        label: "Sub-Módulo 72",
        title: "Tireoide: Anatomia, Fisiologia e Tireoidites",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - VISÃO DO ESPECIALISTA Cabeça e Pescoço Tireóide I - anatomia, fisiologia e tireoidites.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nMgO6tDtB6QhBsUhUrSa8_fWoz2vqpzI/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Tireoide e Endocrinopediatria_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ouZ2kI8uKzGYpbN08oRn4RJp0hHzBsaF/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 73,
        label: "Sub-Módulo 73",
        title: "Nódulos e Câncer de Tireoide",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - VISÃO DO ESPECIALISTA Cabeça e Pescoço Tireóide II - nódulo e bócio.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/17YQb_JVPiUSNGyyogfTm3h1JOiW3RmW4/view?usp=sharing" },
          { id: 2, title: "Aula 02 - VISÃO DO ESPECIALISTA Cabeça e Pescoço Tireóide III - carcinoma bem diferenciado.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-3kCkiJdKMzCgzt7YFThZqJwxAT7k1bb/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cabeça e Pescoço Tireóide IV - carcinoma medular e anaplásico_Cofexpress.pdf", pdfLink: "https://drive.google.com/file/d/1rJzJyCzIC7JOBm0bx4vM_BR3-QcB383I/view?usp=sharing" },
          { title: "E-Book - Cabeça e Pescoço Tireóide IV - carcinoma medular e anaplásico.pdf", pdfLink: "https://drive.google.com/file/d/1lPRuv31CpTpj7K1ubjwsWnX4X7M9e9XW/view?usp=sharing" }
        ]
      },
      {
        id: 74,
        label: "Sub-Módulo 74",
        title: "Tireoidectomia e Esvaziamento",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [],
        materials: []
      },
      {
        id: 75,
        label: "Sub-Módulo 75",
        title: "Paratireoide e Hiperparatireoidismo",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cabeça e Pescoço Paratireoide II - hiperparatireoidismo primário.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1-4xAQaN9iW3293G1sr67Xj3Swe23C2Zk/view?usp=sharing" },
          { id: 2, title: "Aula 02 - COFEXPRESS Cabeça e Pescoço Paratireoide II - hiperparatireoidismo primário.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19-VxPJ3Ueg9Sr4cFLMbV2Pt3wxVuRSSh/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cabeça e Pescoço Paratireoide III - hiperparatireoidismo secundário e terciário.pdf", pdfLink: "https://drive.google.com/file/d/14V3toEEQsLSkxrnrDTsNUXDxzY-1-WNS/view?usp=sharing" },
          { title: "E-Book - COFEXPRESS Cabeça e Pescoço Paratireoide III - hiperparatireoidismo secundário e terciário.pdf", pdfLink: "https://drive.google.com/file/d/1mlSq9oo7mP--NiyzYG9kjUf1AIUzh-uI/view?usp=sharing" }
        ]
      },
      {
        id: 76,
        label: "Sub-Módulo 76",
        title: "Anomalias Congênitas e Câncer de Pele (Cabeça e Pescoço)",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cabeça e Pescoço Anomalias Congênitas em cabeça e pescoço.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vwFOr0SjCfNOhDOFUKfL0EXkmsy0NzB/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cabeça e Pescoço Câncer de pele não melanoma.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1e6pmIXybuwvXzjwbuLY_SrWkTnK5iF63/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 77,
        label: "Sub-Módulo 77",
        title: "Derrame Pleural e Pneumotórax",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Torácica Pneumotórax_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cPjGbqnyABtP5H2hMzgLW23SQm_bBt-2/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Torácica Exsudato Neutrofílico.pdf", pdfLink: "https://drive.google.com/file/d/1-Iv5sw4YJWghe2qUiVKIAV1hsDRpx_CN/view?usp=sharing" }
        ]
      },
      {
        id: 78,
        label: "Sub-Módulo 78",
        title: "Câncer de Pulmão",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Torácica Câncer de Pulmão (Parte I)_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1nzDXByHjZG17t-QqXTxN1HiwSQrTjxj3/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Torácica Câncer de Pulmão (Parte II).ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1t6To6q1X9xGJpy32XwmJVoWV0WlN6Lur/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Torácica Câncer de Pulmão (Parte II)_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/173XPSTGhFESN0DGbSMKXLxuEPMsWf9NP/view?usp=sharing" },
          { title: "E-Book - Cirurgia Torácica Câncer de Pulmão - Quiz.pdf", pdfLink: "https://drive.google.com/file/d/1B9-RpNkSxUVKXNG7_n8zvm2qyrAcm2N4/view?usp=sharing" }
        ]
      },
      {
        id: 79,
        label: "Sub-Módulo 79",
        title: "Mediastino e Doenças Traqueais",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Torácica Doenças Traqueais_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fbOqPlaTfdp9MKtLwNwzuOnynzmdvSRq/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Torácica Quiz Doenças Traqueais.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1qLDvwWAVe_Ggt4ND-XzyHFY3yt-uuZ0u/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Torácica Mediastino _COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1is5276-Qund026TvCbu6Ne6bKUE0walG/view?usp=sharing" },
          { title: "E-Book - Cirurgia Torácica Complicações Mediastinais_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1igx-W_33lUmQuyohleHw-QqflyEWKi31/view?usp=sharing" }
        ]
      },
      {
        id: 80,
        label: "Sub-Módulo 80",
        title: "Cirurgia Cardíaca: Coronária, Valvas e Aorta",
        imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Cardíaca Doença da Aorta_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1z5dlClosJApsGXfRwize4WvJgIoNMWje/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 81,
        label: "Sub-Módulo 81",
        title: "Pós-Operatório e Transplante Cardíaco",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Cardíaca Pós-Operatório.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1F2VqvR02vUIXtnegednIvBXQMDDeczd_/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 82,
        label: "Sub-Módulo 82",
        title: "Queimados: Atendimento Inicial e Tratamento",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Plástica Queimados - Atendimento Inicial_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1gwfXTfeAk1i124yyaCxEl8PGObyiJTIy/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Plástica Queimados - Atendimento Inicial.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ziDihuB1VesSpa64vVUnBqoUmigxHzu-/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Queimados Sequelas de Queimadura.pdf", pdfLink: "https://drive.google.com/file/d/1v1BsdJTkRbqyRzjZe0EV6IercWEB4hDF/view?usp=sharing" },
          { title: "E-Book - Queimados Sequelas de Queimadura_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1lTfkO8fLAWtkPHhzkkYCRUQBy5_TKMD4/view?usp=sharing" }
        ]
      },
      {
        id: 83,
        label: "Sub-Módulo 83",
        title: "Cicatrização, Enxertos e Retalhos",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cicatrização Fisiológica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1s7K5M6FxNEcU14k9MlRa7zKY0zWPZFEu/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cicatrização Patológica.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uxkdxpLzAHkMQD5GlCWOokwIgyQh68RV/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cicatrização Patológica_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1pUHL4ZnlgeXq54Ch0UEJQFobfyaNXtSq/view?usp=sharing" },
          { title: "E-Book - Enxertos_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1_VZkXJCIDtQFE-UPd7uUVcOGR3UOXUnj/view?usp=sharing" }
        ]
      },
      {
        id: 84,
        label: "Sub-Módulo 84",
        title: "Cirurgia da Mama e Contorno Corporal",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Plástica Mama - Reconstrução de mama_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12_dHZVRT6uNpssMp9-hxTTqyE94hS4G5/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Plástica Mama - Reconstrução de mama.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1bSUwM_R__gU1WJ7FZpzPp00gWeKwvM5A/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Plástica Mama - Hipertrofia mamária.pdf", pdfLink: "https://drive.google.com/file/d/1rFNEh7mR7lWKxQxn9UiyiQDl_sAbBkSf/view?usp=sharing" },
          { title: "E-Book - Cirurgia Plástica Mama - BIA, ALCL e síndrome Asia.pdf", pdfLink: "https://drive.google.com/file/d/1-uhrYhwkokISmi-7pwEbXla6HCkkxixR/view?usp=sharing" }
        ]
      },
      {
        id: 85,
        label: "Sub-Módulo 85",
        title: "Trauma de Face e Paralisia Facial",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Plástica Fraturas de face.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1ALvKRFrAdGvLrbAfZy63_rWHMeboCtuM/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Plástica Paralisia facial_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vgoqFRU8wlvvOmBzRipMhZOxKkynpDj3/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Plástica Paralisia facial.pdf", pdfLink: "https://drive.google.com/file/d/1CUevIAEoPASbSdx40kOT1x4x2cRpfwUU/view?usp=sharing" }
        ]
      },
      {
        id: 86,
        label: "Sub-Módulo 86",
        title: "Defeitos da Parede e Região Inguinal",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Infantil Defeitos da parede abdominal.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1h73UW4_UoRS4rZCbu6UVbbfUJ3T0ljcs/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Infantil Região inguinal e distopias testiculares_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uUE2l2DFd4OdnSTVw9Xh4dulDaSblozs/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Infantil Região inguinal e distopias testiculares.pdf", pdfLink: "https://drive.google.com/file/d/1APVi0nvCo0X_zClnAbNtWFOQqWz6meRs/view?usp=sharing" }
        ]
      },
      {
        id: 87,
        label: "Sub-Módulo 87",
        title: "Vômitos no Lactente e CIPE",
        imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Infantil Vômitos no RN lactente_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uRtEPkXyFjxILbKMlA_AaNGciQdOCeeI/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Infantil Vômitos no RN lactente.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1meQeagZPWcQgp6riUGqptkpoDt4CeUHA/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Infantil CIPE no PS.pdf", pdfLink: "https://drive.google.com/file/d/1b9YTiLSns5AwcdS08Z6CtALQs3U9Ka-j/view?usp=sharing" }
        ]
      },
      {
        id: 88,
        label: "Sub-Módulo 88",
        title: "Tumores e Malformações (Esôfago, Via Biliar, Cólon)",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Infantil Atresia de esôfago e doença da via biliar_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/19fsFByzwgTq2nnqrFwgpHYfY7AJshq5G/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Infantil Anomalias de Cólon e Reto.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1fMERsE2i4-vdKje7tCW2HWOhZW-pijmq/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Infantil Doenças cervicais na infância _COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/11eE7Ka7xdP0-d5dJf9LqsdcyWmDjYXDB/view?usp=sharing" },
          { title: "E-Book - Cirurgia Infantil Doenças cervicais na infância.pdf", pdfLink: "https://drive.google.com/file/d/1bL9zshzTSBibdA6oANYW59QcyV74IucR/view?usp=sharing" }
        ]
      },
      {
        id: 89,
        label: "Sub-Módulo 89",
        title: "Avaliação Pré-Operatória e Risco",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Perioperatório Pré-operatório I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/124P2i9z-cNT9t4MJZjlZZ8DB79VgVxuM/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Avaliação Pré-Operatória_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1F8Dk6qRHSPzp6iHAfzqe_7mbyQpFTfe0/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Avaliação Pré-Operatória.pdf", pdfLink: "https://drive.google.com/file/d/1H91RDzM_K-t0EYiEXtS92y9EJ300dJAM/view?usp=sharing" }
        ]
      },
      {
        id: 90,
        label: "Sub-Módulo 90",
        title: "REMIT e Complicações Pós-Operatórias",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Perioperatório REMIT e pós-operatório _COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/10sQRrsxjbZ1EGrledfABBIdW_bVfPbhJ/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Perioperatório REMIT e pós-operatório.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1uQNaDb92e0cgQrX4xuLmIl_ADC-wtGFd/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Perioperatório Complicações gerais.pdf", pdfLink: "https://drive.google.com/file/d/1dSB3JHCAi0JZIXS1B9WbBVsWlW7f6WLm/view?usp=sharing" },
          { title: "E-Book - Perioperatório Complicações gerais_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1mYC2ezlvAzpR3xDP4owb6WAtm4uE5ldT/view?usp=sharing" }
        ]
      },
      {
        id: 91,
        label: "Sub-Módulo 91",
        title: "Técnicas Anestésicas e Monitorização",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Técnicas Anestésicas: Parte I_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1sDM5B4XLOAnD4Q5U4NW-e9adUoIPJOC-/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Técnicas Anestésicas: Parte I.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aamd03SmXWN6mNmVT0BEaLdrlz8Wy8Au/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Técnicas Anestésicas: Parte II_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1HWdbGQHlvZ-4adm1pdFbmc1nQnN0YtgK/view?usp=sharing" },
          { title: "E-Book - Técnicas Anestésicas: Parte II.pdf", pdfLink: "https://drive.google.com/file/d/1tD8zeby43dBQtMn9GqVbfB9Fc1AC6r0N/view?usp=sharing" }
        ]
      },
      {
        id: 92,
        label: "Sub-Módulo 92",
        title: "Nutrição Perioperatória",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Nutrição perioperatória_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/18fq3XBoyJ6TgRG-xwhZJECJNBu3aiTSj/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Nutrição perioperatória.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1jV5veHcq7RJxB4sNufljKp1i0csrqeRk/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 93,
        label: "Sub-Módulo 93",
        title: "Videolaparoscopia e Eletrocirurgia",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Cirurgia Geral Videolaparoscopia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1715ufyP_L8Ax78ceTVWWJhmXPmxt9nGN/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Cirurgia Geral Eletrocirurgia_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/12Unp4IVJJA6s8JhDBl1Y6c4fRX9ifp7z/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Cirurgia Geral Eletrocirurgia.pdf", pdfLink: "https://drive.google.com/file/d/1diivn-GIfLogfb31eK-5M8XAhIiBGATl/view?usp=sharing" }
        ]
      },
      {
        id: 94,
        label: "Sub-Módulo 94",
        title: "Ortopedia Geral e Traumatologia",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Ortopedia Geral.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1dhx8s-CvMT77ZrkdXQxlTyblT3uLKV9w/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Ortopedia Traumatologia.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zKNuOR-75_5lFdtO_bX7UZJAlfTuOYrO/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Ortopedia Traumatologia_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1m7zwzIY1_v-YoJrRQcpLVxu2q_vgjeum/view?usp=sharing" }
        ]
      },
      {
        id: 95,
        label: "Sub-Módulo 95",
        title: "Neurocirurgia: Emergências e Geral",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Neurocirurgia Demais assuntos_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1g6pqkfCkHzUSqvih0fb17QHUSmKuIgt-/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Neurocirurgia Emergências neurocirúrgicas.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13AznDfS8fsb1fUMJ7t9znAUXziHVqIZ-/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 96,
        label: "Sub-Módulo 96",
        title: "Oncocirurgia Geral (Melanoma e Sarcoma)",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Oncocirurgia Melanoma_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1if7oLQrTi37RvmXiNF0aSE4a7of281O6/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Oncocirurgia Melanoma.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1t90VC7FeTmhlPATsT-1GI_157Xh7Ltht/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Oncocirurgia Sarcoma_COFEXPRESS.pdf", pdfLink: "https://drive.google.com/file/d/1g1Bn_CmEfBMXX-kyeeWcs7NKUgQ-C2B5/view?usp=sharing" },
          { title: "E-Book - Oncocirurgia Sarcoma.pdf", pdfLink: "https://drive.google.com/file/d/1GhIMka6nMgu3I8VhO_ZCR4xU0G7ddNnV/view?usp=sharing" }
        ]
      },
      {
        id: 97,
        label: "Sub-Módulo 97",
        title: "Doenças Cirúrgicas do Baço",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doenças cirúrgicas do Baço.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aRqZa008ThvHVycVIU0t3-ryU-tVXiSB/view?usp=sharing" }
        ],
        materials: []
      }
    ]
  },
  // --- MÓDULO 08: NEUROPEDIATRIA ---
  {
    id: 8,
    title: "Módulo 08 - Neuropediatria",
    label: "Módulo 08",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Síndromes Neurocutâneas na Infância",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Síndromes Neurocutâneas na Infância.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1Ey0t3Gdy-BUZdilIls9jxmqenV4S46oy/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Síndromes Neurocutâneas na Infância_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1mWSZXGQl59sO4zXR-yxjgSUXHrkbNAee/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Neoplasias de Sistema Nervoso Central",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Neoplasias de Sistema Nervoso Central.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1wSOOXygqbzg6upwuyLQQvMfbYArHAeJ5/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Neoplasias de Sistema Nervoso Central_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1zW6GycKyaHeI-wZyuKqvDUxkzpSB0ges/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Alterações na Forma e Volume do Crânio",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Malformações do Sistema Nervoso_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1cP6cRE9RelBkuxO0DKEM--pEXY9qOQtQ/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Ataxias na Infância",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Ataxias na Infância.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1vceJe54WgDnqcvYM_qH9BvlEUwqkVcXc/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Ataxias na Infância_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1aWCJeTksSGe20_09HM7cwVXTLKG4tZE4/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Doenças Desmielinizantes e Encefalite Autoimune",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doenças Desmielinizantes e Encefalite Autoimune_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AdU8z-lKSB6kTNdJKPctDPdqwE4m27hH/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doenças Desmielinizantes e Encefalite Autoimune.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1GI9THXsRhO_ilh7JKzXlhFbIpJZ2NmBh/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 6,
        label: "Sub-Módulo 6",
        title: "Neurologia Fetal e Neonatal",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Neurologia Fetal e Neonatal_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/16OkWUUQgQm8qA9ZA3ZMTJs1f9F7tGW6c/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 7,
        label: "Sub-Módulo 7",
        title: "Bases da Neurociência",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Bases da Neurociência_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1hu9wHaJZiHuUoGQcWFc501i-vWhwmyz1/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Bases da Neurociência.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1of0YifmEc5ncl6hE3ppU0ScMKUwRrSvf/view?usp=sharing" }
        ],
        materials: []
      },
      {
        id: 8,
        label: "Sub-Módulo 8",
        title: "Erros Inatos do Metabolismo e Doenças Neurodegenerativas",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Erros Inatos do Metabolismo e Doenças Neurodegenerativas_COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/13iCDpaQ5ULKKX3kBEvcf41yaDoASZNDJ/view?usp=sharing" }
        ],
        materials: [
          { title: "E-Book - Doenças Neuromusculares na Infância.pdf", pdfLink: "https://drive.google.com/file/d/1ybU1_qvp-ny8nKrq2FERCBQVwVa9Gu_K/view?usp=sharing" }
        ]
      },
      {
        id: 9,
        label: "Sub-Módulo 9",
        title: "Doenças Sistêmicas com Acometimento do SNC",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { id: 1, title: "Aula 01 - Doenças Sistêmicas com Acometimento do Sistema Nervoso Central.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1AXDp4vwbl28Ew_KRRehPF3erqHvpjfau/view?usp=sharing" },
          { id: 2, title: "Aula 02 - Doenças Doenças Sistêmicas com Acometimento do Sistema Nervoso Central _COFEXPRESS.ts", duration: "00:00", type: "aula", videoLink: "https://drive.google.com/file/d/1lZT6ZrCF08hF93kLHzj3wze-ppEE1YUg/view?usp=sharing" }
        ],
        materials: []
      }
    ]
  },
  // --- Módulo 09 - Atualizações: Pediatria ---
  {
    id: 9,
    title: "Módulo 09 - Atualizações: Pediatria",
    label: "Módulo 09",
    subModules: [
      {
        id: 1,
        label: "Sub-Módulo 1",
        title: "Vacinação",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { 
            id: 1,
            title: "Aula 01 - HIITExpress: Vacinação",
            duration: "08:21",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1KnsLhVK7maaxppPv_H3MH7zc1Q9Q_WCg/view?usp=sharing"
          },
          { 
            id: 2,
            title: "Aula 02 - Vacinação",
            duration: "01:10:02",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1IDmpVFWh08oJTTYKbEp1oJyRBefpvsdy/view?usp=sharing"
          }
        ],
        materials: [
          { 
            title: "PDF de Slides - Vacinação",
            pdfLink: "https://drive.google.com/file/d/1rhZht7FgMpFjApSeo-uzb4h3_o93u3Rh/view?usp=drive_link"
          }
        ]
      },
      {
        id: 2,
        label: "Sub-Módulo 2",
        title: "Febre Sem Sinais Localizatórios",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { 
            id: 1,
            title: "Aula 01 - HIITExpress: Febre Sem Sinais Localizatórios",
            duration: "14:33",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1nPgTIQ2j7mrcygB8DUNXCZqmw7lc8Vgm/view?usp=sharing"
          },
          { 
            id: 2,
            title: "Aula 02 - Febre Sem Sinais Localizatórios",
            duration: "41:20",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1sCemqzxh0qqdGArHUDt2G9G9h7_zMbh9/view?usp=sharing"
          }
        ],
        materials: [
          { 
            title: "PDF de Slides - Febre Sem Sinais Localizatórios",
            pdfLink: "https://drive.google.com/file/d/1C3lp6lEtfy4nA9GIr32DSxSV2B1Jeb57/view?usp=drive_link"
          }
        ]
      },
      {
        id: 3,
        label: "Sub-Módulo 3",
        title: "Asma e Fibrose Cística",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { 
            id: 1,
            title: "Aula 01 - HIITExpress: Asma e Fibrose Cística",
            duration: "14:38",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1-ogcz93mfg1ZOymFBTKEB4PbjkBkiYoY/view?usp=sharing"
          },
          { 
            id: 2,
            title: "Aula 02 - Asma e Fibrose Cística",
            duration: "47:28",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1-NvvWw_afL7wM2Y-S_NvvyfnUijtAd-O/view?usp=sharing"
          }
        ],
        materials: [
          { 
            title: "PDF de Slides - Asma e Fibrose Cística",
            pdfLink: "https://drive.google.com/file/d/1Jt8WpU8mCWI_tnDk8DrJvcuizKLnMvjN/view?usp=drive_link"
          }
        ]
      },
      {
        id: 4,
        label: "Sub-Módulo 4",
        title: "Epilepsia I",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { 
            id: 1,
            title: "Aula 01 - HIITExpress: Epilepsia I",
            duration: "15:19",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1p3w70Xo8zcIn2pGnvZtXIpVG1XBwqaD1/view?usp=sharing"
          },
          { 
            id: 2,
            title: "Aula 02 - Epilepsia I",
            duration: "01:17:16",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1D2ahe0EC7Ns_8PVfWvHnipYYk95TJSjH/view?usp=sharing"
          }
        ],
        materials: [
          { 
            title: "PDF de Slides - Epilepsia I",
            pdfLink: "https://drive.google.com/file/d/1-dP1wakuAiyp6uB2l4fyp7Q1zdeV3FhE/view?usp=drive_link"
          }
        ]
      },
      {
        id: 5,
        label: "Sub-Módulo 5",
        title: "Epilepsia II",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-52e812f8dc08?auto=format&fit=crop&q=80&w=400",
        lessons: [
          { 
            id: 1,
            title: "Aula 01 - HIITExpress: Epilepsia II",
            duration: "09:16",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1zgWkWwDTCExYIJL0981_mHTiR9NkOcd5/view?usp=sharing"
          },
          { 
            id: 2,
            title: "Aula 02 - Epilepsia II",
            duration: "44:35",
            type: "aula",
            videoLink: "https://drive.google.com/file/d/1mWSZXGQl59sO4zXR-yxjgSUXHrkbNAee/view?usp=sharing"
          }
        ],
        materials: [
          { 
            title: "PDF de Slides - Epilepsia II",
            pdfLink: "https://drive.google.com/file/d/1FRGWyZuRVrP56HBzbSLOrwuq3_ymEFWb/view?usp=drive_link"
          }
        ]
      }
    ]
  }
];
