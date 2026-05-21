// Static configuration object containing page content and section data.
export default {
  hero: {
    title: 'Makna Consulting',
    subtitle: 'Meningkatkan kapasitas SDM & tata kelola organisasi secara profesional',
    background: 'https://placehold.co/1600x700',
  },

  // Content collection for storytelling and company profile sections.
  stories: [
    {
      title: 'Tentang Kami',
      image: 'https://placehold.co/600x400',
      description:
        'Makna Consulting merupakan bagian dari CV. Mapah Karya Natar yang bergerak dalam pengembangan SDM, konsultasi organisasi, tata kelola pemerintahan, serta penyelenggaraan berbagai pelatihan profesional.',
    },

    {
      title: 'Latar Belakang',
      image: 'https://placehold.co/600x400',
      reverse: true,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi similique molestiae asperiores exercitationem unde dignissimos tenetur officiis. Illo quas architecto magni.',
    },

    {
      title: 'Motivasi Kami',
      image: 'https://placehold.co/600x400',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem deleniti perspiciatis fugiat dolorem temporibus. Consequatur officia aspernatur.',
    },

    {
      title: 'Nilai & Filosofi',
      image: 'https://placehold.co/600x400',
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
        name: 'Nama Pemimpin',
        position: 'CEO & Founder',
      },

      {
        image: 'https://placehold.co/300',
        name: 'Nama Tim',
        position: 'Trainer Senior',
      },

      {
        image: 'https://placehold.co/300',
        name: 'Nama Tim',
        position: 'Consultant',
      },
    ],
  },

  cta: {
    badge: 'Our Story',

    title: 'Bersama kami, organisasi berkembang dengan strategi yang lebih bermakna',

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita deleniti ducimus eaque rerum.',

    // CTA visual asset displayed alongside promotional messaging.
    image: 'https://placehold.co/500x700',

    name: 'Bapak Nama Tokoh',

    position: 'CEO & Founder',
  },
}
