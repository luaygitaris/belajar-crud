export const HeroContent = [
	{
		id: 1,
		title: 'Manajemen Data Siswa dan Guru',
		isi: 'Kelola data pribadi, absensi, nilai, dan perkembangan siswa serta jadwal dan tugas guru dengan mudah.',
	},
	{
		id: 2,
		title: 'Pengelolaan Kelas dan Kurikulum',
		isi: 'Atur jadwal pelajaran, pembagian kelas, dan materi pembelajaran sesuai kebutuhan.',
	},
	{
		id: 3,
		title: 'Komunikasi Langsung',
		isi: 'Sistem pesan instan yang memungkinkan komunikasi langsung antara sekolah, siswa, dan orang tua.',
	},
	{
		id: 4,
		title: 'Pelaporan Keuangan',
		isi: ' Pantau dan kelola anggaran sekolah, pembayaran siswa, dan laporan keuangan lainnya dalam satu platform.',
	},
	{
		id: 5,
		title: 'Notifikasi dan Pengingat',
		isi: 'Dapatkan pemberitahuan penting mengenai ujian, kegiatan sekolah, dan pengumuman lainnya secara real-time.',
	},
];

export const HeroContentDua = [
    {
        id:1,
        title: "Akses Mudah dan Cepat",
        isi: "Platform ini dapat diakses kapan saja dan di mana saja, cukup dengan perangkat yang terhubung ke internet."
    },
    {
        id:2,
        title: "Akses Mudah dan Cepat",
        isi: "Platform ini dapat diakses kapan saja dan di mana saja, cukup dengan perangkat yang terhubung ke internet."
    },
    {
        id:3,
        title: "Akses Mudah dan Cepat",
        isi: "Platform ini dapat diakses kapan saja dan di mana saja, cukup dengan perangkat yang terhubung ke internet."
    },
];

export const DataAdminSidebar = [
	{
		id:1,
		menu: 'Dashboard',
		href: '/dashboard',
		visible: ['super admin']
	},
	{
		id:2,
		menu: 'Students',
		href: '/student',
		visible: ['super admin']
	},
	{
		id:3,
		menu: 'Teachers',
		href: '/teacher',
		visible: ['super admin']
	},
	{
		id:4,
		menu: 'Events',
		href: '/event',
		visible: ['super admin']
	},
	{
		id:5,
		menu: 'Finance',
		href: '/finance',
		visible: ['super admin']
	},
	{
		id:6,
		menu: 'User',
		href: '/user',
		visible: ['super admin']
	},
	{
		id:7,
		menu: 'Chat',
		href: '/chat',
		visible: 'super admin'
	},
]
