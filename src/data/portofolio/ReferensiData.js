export const referenceTabs = [
  { id: 'soft-skills', label: 'Soft Skills' },
  { id: 'outdoor', label: 'Outdoor' },
  { id: 'governance', label: 'Governance' },
  { id: 'iso', label: 'ISO & Audit' },
  { id: 'webinar', label: 'Webinar' },
]

export const referenceContent = {
  'soft-skills': [
    {
      type: 'text',
      content: 'Pelatihan komunikasi, leadership, dan teamwork.',
    },
    {
      type: 'image',
      src: 'https://placehold.co/600x400',
      caption: 'Sesi pelatihan komunikasi publik',
    },
    {
      type: 'pdf',
      title: 'Modul Soft Skills',
      file: '/files/soft-skills.pdf',
      description: 'Materi pelatihan dasar soft skills (PDF)',
    },
  ],

  outdoor: [
    {
      type: 'image',
      src: 'https://placehold.co/600x400',
      caption: 'Kegiatan team building di alam terbuka',
    },
    {
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      caption: 'Dokumentasi outbound training',
    },
  ],

  governance: [
    {
      type: 'text',
      content: 'Reformasi birokrasi dan tata kelola instansi publik.',
    },
    {
      type: 'docx',
      title: 'Laporan Governance Review',
      file: '/files/governance.docx',
      description: 'Dokumen evaluasi tata kelola organisasi',
    },
  ],

  iso: [
    {
      type: 'image',
      src: 'https://placehold.co/600x400',
      caption: 'Audit ISO 9001 di lapangan',
    },
  ],

  webinar: [
    {
      type: 'text',
      content: 'Forum webinar nasional & internasional.',
    },
    {
      type: 'pdf',
      title: 'Slide Webinar SDM',
      file: '/files/webinar.pdf',
      description: 'Materi presentasi webinar',
    },
  ],
}
