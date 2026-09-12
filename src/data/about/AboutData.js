import img1 from '../../assets/home/hero/1.jpg'
import img2 from '../../assets/home/hero/2.jpg'
import img3 from '../../assets/home/hero/3.jpg'
import img4 from '../../assets/home/hero/4.jpg'
import ceo from '../../assets/about/ceo.png'
export default {
  // Content collection for storytelling and company profile sections.
  stories: [
    {
      title: 'Tentang Kami',
      image: img1,
      description:
        'Makna Consulting merupakan bagian dari CV. Mapah Karya Natar yang bergerak di bidang pengembangan SDM, konsultasi organisasi, peningkatan tata kelola pemerintahan, serta penyelenggaraan berbagai program pelatihan profesional berkualitas.',
    },

    {
      title: 'Latar Belakang',
      image: img2,
      reverse: true,
      description:
        'Lahir dari kebutuhan akan tata kelola organisasi yang adaptif, kami hadir untuk menjembatani tantangan sektor publik dan swasta. Kami berkomitmen menyediakan pendekatan berbasis data dan solusi nyata demi terciptanya efisiensi kinerja yang berkelanjutan.',
    },

    {
      title: 'Motivasi Kami',
      image: img3,
      description:
        'Kami didorong oleh visi untuk menjadi mitra terpercaya yang mampu menginspirasi perubahan positif. Setiap program yang kami rancang bertujuan memberikan dampak nyata, memperkuat kapasitas individu, dan mendorong transformasi organisasi ke tingkat tertinggi.',
    },

    {
      title: 'Nilai & Filosofi',
      image: img4,
      reverse: true,
      values: [
        'Profesionalisme',
        'Integritas',
        'Kolaborasi',
        'Inovasi Berkelanjutan',
        'Komitmen Pelayanan',
      ],
    },
  ],

  services: {
    title: 'Layanan Utama',

    // Service item definitions used to render feature or offering cards dynamically.
    items: [
      {
        icon: 'bi-people-fill',
        title: 'Peningkatan SDM',
        description: 'Pelatihan, workshop, peningkatan kompetensi, dan pengembangan tim.',
      },

      {
        icon: 'bi-building',
        title: 'Manajemen Pemerintahan',
        description: 'Pendampingan SOP, reformasi birokrasi, ISO, dan tata kelola.',
      },

      {
        icon: 'bi-balloon',
        title: 'Outbound & Event',
        description: 'Penyelenggaraan gathering, training, event dan team building.',
      },
    ],
  },

  team: {
    title: 'Tim & Kepemimpinan',

    // Team member data used for leadership and staff presentation.
    members: [
      {
        image: 'https://placehold.co/300',
        name: 'Umar Ragil Hidayat, S.Si, M.Psi',
        position: 'CEO & Founder / Direktur',
        division: 'Direksi',
      },

      {
        image: 'https://placehold.co/300',
        name: 'Rin Harianing, S.Sos',
        position: 'Konsultan / Manager Operasional',
        division: 'Konsultan',
      },

      {
        image: 'https://placehold.co/300',
        name: 'Wawan Widiatmoko, S.T., M.Psi',
        position: 'Senior Konsultan',
        division: 'Konsultan',
      },

      {
        image: 'https://placehold.co/300',
        name: 'Nuril Hidayati, S.Si',
        position: 'Konsultan',
        division: 'Konsultan',
      },

      {
        image: 'https://placehold.co/300',
        name: 'Zainab Tianotak, S.ST',
        position: 'Konsultan',
        division: 'Konsultan',
      },

      {
        image: 'https://placehold.co/300',
        name: 'Faryd Mahardy, S.Kom',
        position: 'Staff',
        division: '-',
      },

      // Website Development Team
      {
        image: 'https://placehold.co/300',
        name: 'Bima Ghani Firmansyah',
        position: 'Lead Web Developer',
        division: 'Website Development Team',
      },

      {
        image: 'https://placehold.co/300',
        name: 'M. Abid Hafiz Alaudin',
        position: 'Web Developer',
        division: 'Website Development Team',
      },

      {
        image: 'https://placehold.co/300',
        name: "Syifa' Nur Anisyah",
        position: 'UI/UX Designer',
        division: 'Website Development Team',
      },
    ],
  },

  cta: {
    badge: 'Our Story',

    title: 'Bersama kami, organisasi berkembang dengan strategi yang lebih bermakna',

    description:
      'Menyediakan solusi konsultasi strategis, pelatihan profesional, dan pembenahan sistem kerja yang dirancang khusus untuk menjawab tantangan unik organisasi Anda.',

    // CTA visual asset displayed alongside promotional messaging.
    image: ceo,

    name: 'Umar Ragil Hidayat, S.Si, M.Psi',

    position: 'CEO & FOUNDER/ Direktur',
  },
}
